import ProductBadge from './productBadge';
import ProductRating from './productRating'
import ProductGallery from './productGallery'
import ProductSizes from './productSizes'

interface Props {
  title: string;
  colors: string[];
  images: ({
    src: string;
    alt: string;
  })[];
  full_description: string;
  price: number;
  highlights: string[];
  details: string;
  rating: number;
  reviews: number;
  sizes: object
}

export default function ProductOverview({
  title,
  colors,
  images,
  full_description,
  price,
  highlights,
  details,
  rating,
  reviews,
  sizes
}: Props) {

  return (
    <div class="grid grid-flow-row shadow-md">
      {(images.length != 0) &&
        <div class="mx-auto">
          <ProductGallery images={images} />
        </div>

      }
      <div class="grid grid-flow-row sm:grid-flow-col gap-3 items-center justify-evenly mt-5 mx-auto">
        <div class="border-end">
          {(title.length != 0) &&
            <h2><b>{title}</b></h2>
          }
          {(full_description.length != 0) &&
            <p>{full_description}</p>
          }
          {(highlights.length != 0) &&
            <>
              <h6>Highlights</h6>
              <ul class="text-sm">
                {highlights.map(highlight =>
                  <li class="mb-2">{highlight}</li>
                )}
              </ul>
            </>
          }
          {(details.length != 0) &&
            <>
              <h6><b>Details</b></h6>
              <p>{details}</p>
            </>
          }

        </div>
        <div class="grid-cols-12 lg:grid-cols-4 p-4">
          <form action="" method="post">
            {(price != 0) &&
              <div class="flex">
                <h3 class="font-bold text-2xl">${price.toFixed(2)}</h3>
                <input class="opacity-0" value={price} />
              </div>
            }
            {(rating != 0) &&
              <>
                <h3 class="sr-only">Reviews</h3>
                <ProductRating rating={rating} reviews={reviews} />
              </>
            }
            {(colors.length != 0) &&
              <>
                <h6 class="mt-4">Colors:</h6>
                <div class="flex">
                  {(colors) &&
                    <ProductBadge colors={colors} />
                  }
                </div>
              </>
            }

            {(sizes) &&
              <ProductSizes sizes={sizes} />
            }
            <button class="w-max" type="submit">Add to cart</button>
          </form>
        </div>
      </div>
    </div>
  );
};
