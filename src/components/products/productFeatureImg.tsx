interface Props {
  images: ({
    src: string;
    alt: string;
  })[];
}

export default function ProductGallery({
  images,
}: Props) {

  return (
    <>
      <div class="block md:grid grid-flow-col items-center justify-center gap-3 md:max-h-72">
        <img class="w-full md:w-72 rounded-md" src={images[0].src} alt={images[0].alt} />
        <img class="w-full md:w-72 rounded-md" src={images[1].src} alt={images[1].alt} />
      </div>
      <div class="block md:grid grid-flow-col items-center justify-center gap-3 md:max-h-72 mt-4">
        <img class="w-full md:w-72 rounded-md object-cover aspect-square" src={images[2].src} alt={images[2].alt} />
        <img class="w-full md:w-72 rounded-md object-cover aspect-square" src={images[3].src} alt={images[3].alt} />
      </div>
    </>
  );
}