import ReviewRating from './reviewRating';

interface Props {
  review: {
    avatar: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
  }
}

export default function ReviewComment({
  review
}: Props) {

  return (
    <div>
      <div class="flex flex-col md:flex-row gap-3 my-3">
        <a href="#" class="inline-flex overflow-hidden">
          <img class="object-contain object-center rounded-full" alt="Image placeholder" src={review.avatar} />
        </a>
        <div class="flex flex-col">
          <h6 class="mb-0 font-bold">{review.name}</h6>
          <p class="text-sm mb-2 text-slate-500">{review.date}</p>
          <ReviewRating rating={review.rating} />
          <p class="text-sm mt-4">{review.comment}</p>
        </div>
      </div>
      <hr class="text-gray-800" />
    </div>
  );
};