// src/components/UserProfile/NftsEarned
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function NFTEarned() {
  // Sample data for NFTs
  const nfts = [
    { id: 1, name: "NFT 1", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, name: "NFT 2", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "NFT 3", imageUrl: "https://via.placeholder.com/150" },
    { id: 4, name: "NFT 4", imageUrl: "https://via.placeholder.com/150" },
    { id: 5, name: "NFT 5", imageUrl: "https://via.placeholder.com/150" },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">NFTs Earned</CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel opts={{ align: "start" }} className="w-5/6 mx-auto">
          <CarouselContent>
            {nfts.map((nft) => (
              <CarouselItem key={nft.id} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardTitle className="text-center text-base mt-2">WTF NFT</CardTitle>
                    <CardContent className="flex aspect-auto items-center justify-center p-6">
                      <img
                        src={nft.imageUrl}
                        alt={nft.name}
                        className="w-full h-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  );
}