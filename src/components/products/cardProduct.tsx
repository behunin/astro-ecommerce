import ProductBadge from './productBadge';

interface Props {
  thumb_src: string;
  thumb_alt: string;
  title: string;
  description?: string;
  price: number;
  color?: string;
  colors?: string[];
  position?: string;
}

export default function CardProduct({
  thumb_src,
  thumb_alt,
  title,
  description,
  price,
  color,
  colors,
  position
}: Props) {

  return (
    <div class="shadow-md border rounded mb-5 max-w-xs">
      <a href="#">
        <img class="aspect-square max-h-80 rounded object-cover" src={thumb_src} alt={thumb_alt} />
        <div class="grid grid-flow-row items-center justify-center text-center">
          {(color) &&
            <p class="text-sm mb-1 text-faded">{color}</p>
          }
          {(title) &&
            <h5 class="font-bold">
              {title}
            </h5>
          }

          {(description) &&
            <p class="text-par text-sm w-4/5 mx-auto">{description}</p>
          }

          {(price) &&
            <p class="text-sm text-faded mt-1 mb-3">
              ${price.toFixed(2)}
            </p>
          }

          {(colors) &&
            <ProductBadge colors={colors} />
          }

          {!(description || colors || color) &&
            <a href="#" class="font-normal text-par text-sm">Shop Now</a>
          }
        </div>
      </a>
    </div>
  );
};
