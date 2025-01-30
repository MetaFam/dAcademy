import { titleAtom } from "@/atoms/frontMatterAtom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useAtom } from "jotai"


export function ShelfName() {
  const [title, setTitle] = useAtom(titleAtom) //or make shelf name atom?

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Name</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex w-full max-w-sm items-center space-x-2 mx-auto">
          <Input
            required
            value={title ?? ''}
            onChange={(({ target: { value } }) => setTitle(value))}
            placeholder="Shelf Name"
          />
        </div>
      </CardContent>
    </Card>
  );
}