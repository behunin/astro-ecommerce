import ReviewComment from './reviewComment';

interface Props {
  reviews: {
    avatar: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
  }[]
}

export default function ReviewSimple({
  reviews
}: Props) {

  let CommentsList: any[] = [];

  reviews.map(review => {

    CommentsList.push(
      <ReviewComment review={review} />
    )
  });
  return (
    <div>
      {CommentsList}
    </div>
  );
};