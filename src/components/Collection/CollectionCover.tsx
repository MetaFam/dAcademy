// src/components/Shelf/ShelfCover

import {
  Card, CardContent, CardHeader, CardTitle,
} from '@/components/ui/card'
import { ImageCropper } from '../Upload/ImageCropper'
import { collectionCoverAtom } from '@/atoms/collectionFrontmatterAtom'

export function CollectionCover() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">
          Cover
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <ImageCropper atom={collectionCoverAtom}/>
      </CardContent>
    </Card>
  )
}