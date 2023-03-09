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
    <div class="flex mb-4 items-center relative">
      <img class="h-40 rounded-xl shadow-sm" src={thumb_src} alt={thumb_alt} />
      <div class="w-60 md:w-72 pt-2 px-3 md:px-4 self-start">
        <h6 class="text-lg text-white mb-4 font-bold">{title}</h6>
        <p class="mb-0 text-white opacity-80">{color}</p>
        <p class="mb-0 text-sm text-white opacity-80">{size}</p>
      </div>

      <div class="absolute right-0">
        <p class="text-white mb-0 ">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
