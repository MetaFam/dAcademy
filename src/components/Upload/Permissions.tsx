// src/components/Upload/Permissions

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { useState } from "react";
import { useAtom } from "jotai";
import { User, usersAtom } from "@/atoms/usersAtom";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { maybeENS } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { toast } from "react-hot-toast"


export function UploadPermissions() {
  const [name, setName] = useState<string>()
  const [role, setRole] = useState<string>('reviewer')
  const [users, setUsers] = useAtom(usersAtom)

  const add = async () => {
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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Permissions</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex gap-4">
          <input required value={name} onChange={({target: {value} }) => setName(value)} className="grow" placeholder="ETH Address or ENS Name"/>
          <select value={role} onChange={({target: {value} }) => setRole(value)}>
            <option value="owner">Owner</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="reviewer">Reviewer</option>
          </select>
          <Button onClick={add}>Add</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ENS Name</TableHead>
              <TableHead>ETH Address</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{`${user.address?.substring(0,5)}…${user.address?.slice(-3)}`}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button onClick={() => remove(idx)}>Remove</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}