import "./reviewProgress.css"
interface Props {
  reviews: {
    avatar: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
  }[]
}

export default function ReviewProgress({
  reviews
}: Props) {

  let ratings = [0, 0, 0, 0, 0, 0];
  let ratingsPercentage = [0, 0, 0, 0, 0, 0];

  reviews.map(review => {

    ratings[review.rating]++;

  });

  for (let i = 1; i < 6; i++) {
    ratingsPercentage[i] = Math.trunc((ratings[i] * 100) / reviews.length);
  }

  return (
    <table class='w-4/5 mx-4'>
      <tbody>
        <tr>
          <td class="w-1" colspan={1}>
            <div class="flex">
              <p class="mb-0 font-bold">5</p>
              <svg class="text-yellow-300 w-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
            </div>
          </td>
          <td class="w-full" colspan={6}>
            <div class="meter">
              <span style={{ width: ratingsPercentage[5] + '%' }}></span>
            </div>
          </td>
          <td class="w-1" colspan={1}>
            <div class="text-sm font-bold text-right">
              {ratingsPercentage[5]}%
            </div>
          </td>
        </tr>
        <tr class="w-max">
          <td class="w-1" colspan={1}>
            <div class="flex">
              <p class="mb-0 font-bold">4</p>
              <svg class="text-yellow-300 w-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
            </div>
          </td>
          <td class="w-full" colspan={6}>
            <div class="meter">
              <span style={{ width: ratingsPercentage[4] + '%' }}></span>
            </div>
          </td>
          <td class="w-1" colspan={1}>
            <div class="text-sm font-bold text-right">
              {ratingsPercentage[4]}%
            </div>
          </td>
        </tr>
        <tr class="w-max">
          <td class="w-1" colspan={1}>
            <div class="flex">
              <p class="mb-0 font-bold">3</p>
              <svg class="text-yellow-300 w-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
            </div>
          </td>
          <td class="w-full" colspan={6}>
            <div class="meter">
              <span style={{ width: ratingsPercentage[3] + '%' }}></span>
            </div>
          </td>
          <td class="w-1" colspan={1}>
            <div class="text-sm font-bold text-right">
              {ratingsPercentage[3]}%
            </div>
          </td>
        </tr>
        <tr class="w-max">
          <td class="w-1" colspan={1}>
            <div class="flex">
              <p class="mb-0 font-bold">2</p>
              <svg class="text-yellow-300 w-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
            </div>
          </td>
          <td class="w-full" colspan={6}>
            <div class="meter">
              <span style={{ width: ratingsPercentage[2] + '%' }}></span>
            </div>
          </td>
          <td class="w-1" colspan={1}>
            <div class="text-sm font-bold text-right">
              {ratingsPercentage[2]}%
            </div>
          </td>
        </tr>
        <tr class="w-max">
          <td>
            <div class="flex">
              <p class="mb-0 font-bold">1</p>
              <svg class="text-yellow-300 w-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
            </div>
          </td>
          <td class="w-full" colspan={6}>
            <div class="meter">
              <span style={{ width: ratingsPercentage[1] + '%' }}></span>
            </div>
          </td>
          <td class="w-1" colspan={1}>
            <div class="text-sm font-bold text-right">
              {ratingsPercentage[1]}%
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};