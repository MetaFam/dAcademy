// src/components/Shelf/ShelfCover

import {
  Card, CardContent, CardHeader, CardTitle,
} from '@/components/ui/card'
import { ImageCropper } from '../Upload/ImageCropper'
import { shelfCoverAtom } from '@/atoms/shelfAtom'

export function ShelfCover() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">
          Cover
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <ImageCropper atom={shelfCoverAtom}/>
      </CardContent>
    </Card>
  )
}