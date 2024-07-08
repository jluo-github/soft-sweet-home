import { deleteReviewAction, fetchProductReviewsByUser } from "@/utils/actions";
import ReviewCard from "@/components/reviews/ReviewCard";
import SectionTitle from "@/components/global/SectionTitle";
import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";

// delete review
const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });

  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType='delete' />
    </FormContainer>
  );
};

// reviews page
const ReviewsPage = async () => {
  const reviews = await fetchProductReviewsByUser();
  // console.log("reviews page---Reviews:", reviews);

  if (reviews.length === 0) {
    return <SectionTitle text='There are no reviews yet.' />;
  }

  return (
    <>
      <SectionTitle text='Your Reviews' />

      <div className='grid md:grid-cols-2 gap-8 mt-4'>
        {reviews.map((review) => {
          const { comment, rating } = review;
          const { name, image, id: productId } = review.product;
          const reviewInfo = { comment, rating, name, image, productId };

          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          );
        })}
      </div>
    </>
  );
};
export default ReviewsPage;
