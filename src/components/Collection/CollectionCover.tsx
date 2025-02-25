// src/components/Shelf/ShelfCover

import {
  Card, CardContent, CardHeader, CardTitle,
} from '@/components/ui/card'
import { ImageCropper } from '../Upload/ImageCropper'
import { CollectionCoverAtom } from '@/atoms/collectionAtom'

export function CollectionCover() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">
          Cover
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <ImageCropper atom={CollectionCoverAtom}/>
      </CardContent>
    </Card>
  )
}