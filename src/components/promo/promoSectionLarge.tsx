import "./promoSectionLarge.css"

interface Props {
  title: string;
  full_description: string;
  pageHeaderBgImg: string;
  pageHeaderMinVh: string;
  pageHeaderRadius?: string;
}

export default function TestimonialsFade({
  title,
  full_description,
  pageHeaderBgImg,
  pageHeaderMinVh,
  pageHeaderRadius,
}: Props) {

  const styles = {
    pageHeader: {
      "background-color": "gray",
      "background-image": 'url(' + pageHeaderBgImg + ')',
      "min-height": pageHeaderMinVh,
      "border-radius": pageHeaderRadius,
      "background-size": "cover",
      "background-position": "center",
      "background-blend-mode": "multiply"
    },
  };

  return (
    <section>
      <div class="py-5 md:py-0 w-4/5 mx-auto" style={styles.pageHeader}>
        <div class="grid grid-flow-row justify-center items-center mx-auto">
          <h1 class="title text-white text-center mt-[10%] mb-4 font-bold">{title}</h1>
          <p class="text-white dark:text-faded text-center max-w-lg sm:mb-6 mb-4 mx-auto">{full_description}</p>
          <div class="w-full">
            <button class="block border rounded bg-white w-40 h-12 mx-auto">Show new arrivals</button>
          </div>
        </div>
      </div>
    </section>
  );
};

