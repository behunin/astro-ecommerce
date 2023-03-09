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
      <div class="grid grid-flow-row md:grid-flow-col gap-3 items-center justify-evenly">
        <div class="grid-cols-3">
          <img class="w-max rounded-sm" src={images[0].src} alt={images[0].alt} />
        </div>
        <div class="grid-cols-4">
          <img class="w-max rounded-sm" src={images[1].src} alt={images[1].alt} />
          <img class="w-max mt-4 rounded-sm" src={images[2].src} alt={images[2].alt} />
        </div>
        <div class="grid-cols-4">
          <img class="w-max rounded-sm" src={images[3].src} alt={images[3].alt} />
        </div>
      </div>
    </>
  );
}