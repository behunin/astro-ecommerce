import ReviewComment from './reviewComment';
import ReviewRating from './reviewRating';
import ReviewProgress from './reviewProgress';

interface Props {
  reviews: {
    avatar: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
    productID: string;
  }[]
}

export default function ReviewSummaryChart({
  reviews
}: Props) {

  let CommentsList: any[] = [];
  let rating = 0;

  reviews.map(review => {
    rating += review.rating;
    CommentsList.push(
      <ReviewComment review={review} />
    )
  });

  rating = Math.trunc(rating / reviews.length);

  return (
    <div class="grid grid-flow-row sm:grid-flow-col gap-3 items-center justify-evenly">
      <div>
        <div class="grid grid-flow-row items-center justify-evenly mx-auto">
          <h4 class="mb-3">Customer Reviews</h4>
          <div class="flex">
            <ReviewRating rating={rating} />
            <p class="mb-0 mx-2">Based on <b>{reviews.length}</b> reviews</p>
          </div>
          <div class="md:m-4">
            <ReviewProgress reviews={reviews} />
          </div>
          <h6 class="py-3"><b>Share your thoughts</b></h6>
          <p>If you have used this product, share your thoughts with other customers.</p>
          <div class='flex'>
            <button class="relative rounded-md border w-11/12 h-24 hover:border-purple-800 shadow-inner mx-auto">Write a review</button>
          </div>
        </div>
      </div>
      <div class="max-h-[24rem] overflow-auto shadow-sm">
        <div class="card card-plain">
          <div class="card-body">
            {CommentsList}
          </div>
        </div>
      </div>
    </div>
  );
};