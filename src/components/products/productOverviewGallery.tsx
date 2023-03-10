import ProductBadge from './productBadge';
import ProductRating from './productRating';
import ProductAccordion from './productAccordion';
import ProductImages from './productImages';

interface Props {
  title: string;
  price: number;
  images: ({
    src: string;
    alt: string;
  })[];
  colors: string[];
  rating: number;
  reviews: number;
  full_description: string;
  data: object
}

export default function productOverviewGallery({
  title,
  price,
  images,
  colors,
  rating,
  full_description,
  reviews,
  data
}: Props) {

  return (
    <div class="grid grid-flow-row md:grid-flow-col gap-3 items-center justify-evenly w-4/5 mx-auto shadow-lg border">
      {(images.length != 0) &&
        <ProductImages images={images} />
      }
      <div class="mt-5 lg:mt-0">
        {(title.length != 0) &&
          <h2>{title}</h2>
        }
        {(price != 0) &&
          <>
            <div class="flex mb-3">
              <h3 class="font-normal">${price.toFixed(2)}</h3>
              <input class="opacity-0" value={price} />
            </div>
          </>
        }
        {(rating != 0) &&
          <ProductRating rating={rating} reviews={reviews} />
        }
        <p class="mt-4">{full_description}</p>
        {(colors.length != 0) &&
          <>
            <h6 class="mt-4">Color:</h6>
            {(colors) &&
              <ProductBadge colors={colors} />
            }
          </>
        }

        <div class="flex items-center mt-4">
          <button class="btn btn-primary btn-lg m-4">Add to Bag</button>
          <a href="#favorite">
            <i id="heart1" class="far fa-heart text-2xl" ></i>
          </a>
        </div>
        <ProductAccordion data={data} />
      </div>
    </div>
  );
};
