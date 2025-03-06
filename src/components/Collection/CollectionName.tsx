import { nameAtom } from "@/atoms/collectionFrontmatterAtom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useAtom } from "jotai"


export function CollectionName() {
  const [name, setName] = useAtom(nameAtom)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Name</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex w-full max-w-sm items-center space-x-2 mx-auto">
          <Input
            required
            value={name ?? ''}
            onChange={(({ target: { value } }) => setName(value))}
            placeholder="Shelf Name"
          />
        </div>
      </CardContent>
    </Card>
  );
}