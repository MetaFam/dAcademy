import { FormEvent, SelectHTMLAttributes, useState } from 'react'
import { useAtom } from 'jotai'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { toast } from 'react-hot-toast'
import clsx from 'clsx'
import {
  Card, CardContent, CardHeader, CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { User, usersAtom } from '@/atoms/usersAtom'
import { maybeENS } from '@/lib/utils'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import TextInput from './TextInput'

const RoleSelect = (
  { className, ...props }:
  { className?: string } & SelectHTMLAttributes<HTMLSelectElement>
) => (
  <select
    className={clsx(
      'px-4 py-2 rounded-md',
      className
    )}
    {...props}
  >
    <option value="owner">Owner</option>
    <option value="admin">Admin</option>
    <option value="editor">Editor</option>
    <option value="reviewer">Reviewer</option>
  </select>
)

export function UploadPermissions() {
  const [name, setName] = useState<string>()
  const [role, setRole] = useState<string>('reviewer')
  const [users, setUsers] = useAtom(usersAtom)

  const setUserRoleByIndex = (index: number, role: string) => {
    setUsers((prev) => {
      const next = [...prev]
      next[index].role = role
      return next
    })
  }

  const add = async (evt: FormEvent) => {
    evt.preventDefault()

    try {
      if(!name) return
      const client = createPublicClient({
        chain: mainnet,
        transport: http(),
      })
      const user: User = {role}
      if(/^0x(\d|[a-f]){40}$/i.test(name)) {
        user.address = name
        user.name = (await client.getEnsName({ address: name as `0x${string}` })) ?? undefined
      } else if(maybeENS(name)) {
        user.name = name
        user.address = (await client.getEnsAddress({ name })) ?? undefined
        if(!user.address) throw new Error(`${name} is not a valid ENS name.`)
      } else {
        throw new Error(`Invalid name: ${name}`)
      }
      setUsers((prev) => [...prev, user])
      setName('')
    } catch(error) {
      toast.error((error as Error).message)
    }
  }
  const remove = (index: number) => {
    setUsers((prev) => prev.toSpliced(index, 1))
  }
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-center text-xl">
          Permissions
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <form
          onSubmit={add}
          className="flex flex-wrap gap-4 items-center justify-center"
        >
          <TextInput
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            className="min-w-[45ch] text-center"
            placeholder="ETH Address or ENS Name"
          />
          <RoleSelect
            value={role}
            onChange={({ target: { value } }) => setRole(value)}
          />
          <Button>Add</Button>
        </form>
        {users.length > 0 && (
          <Table className="mt-4 w-auto mx-auto">
            <TableHeader>
              <TableRow className="bg-transparent hover:bg-transparent cursor-default">
                <TableHead className="w-[100px]">ENS Name</TableHead>
                <TableHead>ETH Address</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">
                    {user.name}
                  </TableCell>
                  <TableCell>
                    {`${user.address?.substring(0,7)}…${user.address?.slice(-6)}`}
                  </TableCell>
                  <TableCell>
                    <RoleSelect
                      value={user.role}
                      onChange={({ target: { value } }) => {
                        setUserRoleByIndex(idx, value)
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Button type="button" onClick={() => remove(idx)}>
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}