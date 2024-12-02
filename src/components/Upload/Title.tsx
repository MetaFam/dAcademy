// src/components/Upload/Title
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { uploadTriggerAtom, bookTitleAtom } from "@/atoms"
import { useAtom } from "jotai"
import { useState } from "react"


export function UploadTitle() {
  const [uploadTrigger] = useAtom(uploadTriggerAtom)
  const [, setBookTitle] = useAtom(bookTitleAtom)
  const [title, setTitle] = useState<string>()

  if(uploadTrigger /*=== 'title'*/) {
    if(!title) throw new Error('Missing title')
    setBookTitle(title)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Book Title</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex w-full max-w-sm items-center space-x-2 mx-auto">
          <Input value={title ?? ''} onChange={(({target: {value}}) => setTitle(value))} placeholder="Book Title" />
        </div>
      </CardContent>
    </Card>
  );
}