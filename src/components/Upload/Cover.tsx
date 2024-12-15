// src/components/Upload/Cover

import {
  Card, CardContent, CardHeader, CardTitle,
} from '@/components/ui/card'
import { ImageCropper } from './ImageCropper'

export function Cover() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">
          Cover
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <ImageCropper/>
      </CardContent>
    </Card>
  )
}