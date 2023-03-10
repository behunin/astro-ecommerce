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
    <div class="flex gap-3 items-center justify-evenly w-4/5 mx-auto">
      <div>
        <img class="rounded-sm object-scale-down" src={images[0].src} alt={images[0].alt} />
      </div>
      <div>
        <img class="rounded-sm object-scale-down" src={images[1].src} alt={images[1].alt} />
        <img class="mt-4 rounded-sm object-scale-down" src={images[2].src} alt={images[2].alt} />
      </div>
      <div>
        <img class="rounded-sm object-scale-down" src={images[3].src} alt={images[3].alt} />
      </div>
    </div>
  );
}