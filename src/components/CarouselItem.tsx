import { Link } from '@tanstack/react-router'
import { type Book } from '../routes/org/$id/index.lazy'

export const toSlug = (title: string) => (
  title.toLowerCase().replace(/\s+/g, '-').replace(/[\?,:]/g, '')
)

export const CarouselItem = ({
  image, title, alt, displayTitle = true,
}: Book) => (
  <Link to={`/book/${toSlug(title)}`}>
    <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center image-full z-0 card p-0 bg-base-100 mr-4 rounded-l-none rounded-rt-lg rounded-br-lg pb-4 hover:scale-95 transition duration-600">
      <figure className="border-white border">
        <img src={image} alt={alt ?? title} />
      </figure>
      {displayTitle && (
        <div className="card-body bg-black bg-opacity-20 p-0 mx-auto px-1">
          <h2 className="card-title text-white z-10 font-extrabold">{title}</h2>
        </div>
      )}
    </div>
  </Link>
)

export default CarouselItem