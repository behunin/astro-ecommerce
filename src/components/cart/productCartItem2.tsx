interface Props {
  thumb_src: string;
  thumb_alt: string;
  title: string;
  color: string;
  size: string;
  price: number;
  stock: boolean;
}

export default function CartItem({
  thumb_src,
  thumb_alt,
  title,
  color,
  size,
  price,
  stock,

}: Props) {

  return (
    <div class="flex flex-col md:flex-row items-center mt-4">
      <img class="w-1/2 md:w-1/5 lg:w-1/6 rounded-md" src={thumb_src} alt={thumb_alt} />
      <div class="pt-4 md:px-4 w-1/4">
        <h6 class="text-lg mb-1">{title}</h6>
        <p class="mb-0">{color}</p>
        <p class="mb-0">{size}</p>

        <div class="flex items-center mt-6">
          {(stock) ?
            <>
              <i class="fas fa-check text-lg text-success"></i>
              <p class="mb-0 mx-2 text-sm">In Stock</p>
            </>
            :
            <>
              <i class="fas fa-minus-circle text-neutral text-lg"></i>
              <p class="mb-0 mx-2 text-neutral text-sm">Out of Stock</p>
            </>
          }
        </div>
      </div>
      <div class="grid grid-flow-row items-center justify-center text-center pt-4 mx-auto">
        <input type="number" min={0} class="border border-slate-300 rounded mb-3 max-w-[3rem] mx-auto" placeholder="1" aria-label="amount" />
        <a class="text-error" href="#">Remove</a>
      </div>
      <div class="w-1/4 pt-4 text-end">
        <h6 class="mb-1">${price.toFixed(2)}</h6>
      </div>
    </div>
  );
}
