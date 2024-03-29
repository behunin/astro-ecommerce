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
    <div class="shrink shadow-md border rounded mb-5">
      <a class='flex flex-row md:flex-col' href="#">
        <img class="max-h-80 rounded object-scale-down object-center" src={thumb_src} alt={thumb_alt} />
        <div class="grid grid-flow-row items-center justify-center text-center">
          {(color) &&
            <p class="text-sm mb-1 text-fade dark:text-faded">{color}</p>
          }
          {(title) &&
            <h5 class="font-bold">
              {title}
            </h5>
          }

          {(description) &&
            <p class="text-par dark:text-back text-sm w-4/5 mx-auto">{description}</p>
          }

          {(price) &&
            <p class="text-sm text-fade dark:text-faded mt-1 mb-3">
              ${price.toFixed(2)}
            </p>
          }

          {(colors) &&
            <ProductBadge colors={colors} />
          }

          {!(description || colors || color) &&
            <a href="#" class="font-normal text-par dark:text-faded text-sm">Shop Now</a>
          }
        </div>
      </a>
    </div>
  );
};
