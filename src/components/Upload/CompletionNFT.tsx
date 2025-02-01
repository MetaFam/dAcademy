// src/components/Upload/CompletionNFT

import {
  Card, CardContent, CardHeader, CardTitle,
} from '@/components/ui/card'
import { NFTGenerator } from './NFTGenerator'

export function CompletionNFT() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">
          Completion NFT
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <NFTGenerator/>
      </CardContent>
    </Card>
  )
}