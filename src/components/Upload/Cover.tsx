// src/components/Upload/Cover

import {
  Card, CardContent, CardHeader, CardTitle,
} from '@/components/ui/card'
import { ImageCropper } from './ImageCropper'
import { coverAtom } from '@/atoms/frontMatterAtom'

export function Cover() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">
          Cover
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <ImageCropper atom={coverAtom}/>
      </CardContent>
    </Card>
  )
}