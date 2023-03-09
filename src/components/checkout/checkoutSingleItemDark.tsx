interface Props {
  thumb_src: string;
  thumb_alt: string;
  title: string;
  color: string;
  size: string;
  price: number;
}

export default function CheckoutSingleItem({
  thumb_src,
  thumb_alt,
  title,
  color,
  size,
  price,

}: Props) {

  return (
    <div class="flex items-start w-full gap-3 relative">
      <div>
        <img class="h-40 rounded-xl shadow-sm aspect-[12/16]" src={thumb_src} alt={thumb_alt} />
      </div>
      <div>
        <h5 class="text-base mb-1 font-bold">{title}</h5>
        <h6 class="text-sm font-bold mb-0">${price.toFixed(2)}</h6>
        <p class="text-sm mb-0 opacity-80">{color}</p>
        <p class="text-sm mb-0 opacity-80">{size}</p>
      </div>
      <div class="absolute right-0">
        <div class="flex gap-3">
          <a class="text-start" href="#">
            <h6 class="text-blue-600 font-semibold text-sm border-r pr-3">Edit</h6>
          </a>
          <a class="text-end" href="#">
            <h6 class="text-blue-600 font-semibold text-sm text-end">Remove</h6>
          </a>
        </div>
      </div>
    </div>
  );
}
