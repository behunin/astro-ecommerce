interface Props {
  images: ({
    src: string;
    alt: string;
  })[];
}

export default function ProductImages({
  images,
}: Props) {

  return (
    <div class="grid-col-12 lg:grid-col-6">
      <img class="w-11/12 rounded-sm mx-auto" src={images[0].src} alt={images[0].alt} />
      <div class="flex mt-4">
        <img class="w-1/5 rounded-sm" src={images[0].src} alt={images[0].alt} />
        <img class="w-1/5 rounded-sm" src={images[1].src} alt={images[1].alt} />
        <img class="w-1/5 rounded-sm" src={images[2].src} alt={images[2].alt} />
        <img class="w-1/5 rounded-sm" src={images[3].src} alt={images[3].alt} />
      </div>
    </div>
  );
}