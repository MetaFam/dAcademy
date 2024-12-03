// src/components/Upload/Intro

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { introAtom } from "@/atoms/frontMatterAtom"
import { Textarea } from "@/components/ui/textarea"
import { useAtom } from "jotai";



export function UploadIntro() {
  const [intro, setIntro] = useAtom(introAtom)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Book Introduction</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <Textarea value={intro ?? ''} onChange={({ target: { value } }) => setIntro(value)}></Textarea>
      </CardContent>
    </Card>
  );
}