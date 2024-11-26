import { createLazyFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  // Define content for each carousel
  const carouselContent1 = Array.from({ length: 5 }).map((_, index) => ({
    id: index,
    content: `Content 1 - ${index + 1}`,
  }));

  const carouselContent2 = Array.from({ length: 5 }).map((_, index) => ({
    id: index,
    content: `Content 2 - ${index + 1}`,
  }));

  const carouselContent3 = Array.from({ length: 5 }).map((_, index) => ({
    id: index,
    content: `Content 3 - ${index + 1}`,
  }));

  const carouselContent4 = Array.from({ length: 5 }).map((_, index) => ({
    id: index,
    content: `Content 4 - ${index + 1}`,
  }));

  return (
    <div className="p-6 flex flex-col space-y-6 mx-20">
      {[
        { content: carouselContent1, title: "Carousel 1" },
        { content: carouselContent2, title: "Carousel 2" },
        { content: carouselContent3, title: "Carousel 3" },
        { content: carouselContent4, title: "Carousel 4" },
      ].map(({ content, title }, index) => (
        <div key={index} className="space-y-2">
          <h2 className="text-xl font-semibold dark:text-white">{title}</h2>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-sm:max-w-sm max-md:max-w-md max-lg:max-w-lg max-xl:max-w-xl dark:text-white"
          >
            <CarouselContent>
              {content.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-0">
                    <Card className="dark:bg-zinc-800 w-[249px] h-[378px]">
                      <CardContent className="flex aspect-square items-center justify-center p-4 dark:text-white">
                        <span className="text-3xl font-semibold">{item.content}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="dark:text-white" />
            <CarouselNext className="dark:text-white" />
          </Carousel>
        </div>
      ))}
    </div>
  )
}