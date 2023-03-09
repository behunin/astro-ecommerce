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
    <div class="flex flex-col md:flex-row">
      <img class="w-1/2 md:w-1/3 rounded-md shadow-sm border" src={thumb_src} alt={thumb_alt} />
      <div class="md:w-1/2 pt-2 md:px-4">
        <h6 class="text-lg mb-1">{title}</h6>
        <div class="flex items-center">
          <p class="p-3 mb-0">{color}</p>
          <p>|</p>
          <p class="p-3 mb-0">{size}</p>
        </div>
        <h6 class="mb-1"><b>${price.toFixed(2)}</b></h6>
        <div class="flex items-center mt-6">
          {(stock) ?
            <>
              <i class="fas fa-check text-lg text-green-500"></i>
              <p class="mb-0 mx-2 text-sm">In Stock</p>
            </>
            :
            <>
              <i class="fas fa-minus-circle text-lg text-slate-300"></i>
              <p class="mb-0 mx-2 text-sm">Out of Stock</p>
            </>
          }
        </div>
      </div>
      <div class="w-20 md:w-10 mt-4 md:mt-0">
        <input type="number" min={0} class="border max-w-[32px]" placeholder="1" aria-label="amount" />
      </div>
      <div class="w-10 text-end">
        <a href="#">
          <i class="fas fa-times mx-3"></i>
        </a>
      </div>
    </div>
  );
}
