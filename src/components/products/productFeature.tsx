import ProductFeatureImg from './productFeatureImg';
import ProductFeatureDetails from './productFeatureDetails';

interface Props {
  title: string;
  images: ({
    src: string;
    alt: string;
  })[];
  full_description: string;
  featuresDetails: object;
}

export default function ProductOverview({
  title,
  images,
  full_description,
  featuresDetails,
}: Props) {

  return (
    <div class="w-4/5 mx-auto border rounded-lg shadow-lg p-1">
      <div class="grid grid-flow-row md:grid-flow-col gap-8 mt-5">
        <div>
          {(title.length != 0) &&
            <h2 class="mb-3 font-bold text-2xl">{title}</h2>
          }
          {(full_description.length != 0) &&
            <p class="mb-5 text-slate-500">{full_description}</p>
          }

          <div class="grid grid-cols-2 gap-6">
            <ProductFeatureDetails featuresDetails={featuresDetails} />
          </div>
        </div>
        <div class='grid grid-flow-row items-center justify-center'>
          <ProductFeatureImg images={images} />
        </div>
      </div>
    </div>
  );
};
