// src/components/Upload/Title
import { titleAtom } from "@/atoms/frontMatterAtom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useAtom } from "jotai"


export function Title() {
  const [title, setTitle] = useAtom(titleAtom)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Title</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex w-full max-w-sm items-center space-x-2 mx-auto">
          <Input
            required
            value={title ?? ''}
            onChange={(({ target: { value } }) => setTitle(value))}
            placeholder="Book Title"
          />
        </div>
      </CardContent>
    </Card>
  );
}