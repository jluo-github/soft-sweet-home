import { fetchProductRating, fetchProductReviews } from "@/utils/actions";

import ReviewCard from "./ReviewCard";
import SectionTitle from "../global/SectionTitle";

const ProductReviews = async ({ productId }: { productId: string }) => {
  const reviews = await fetchProductReviews(productId);
  // console.log("Product Reviews:", reviews);
  return (
    <div className='mt-16'>
      {/* title */}
      <SectionTitle text='Product Reviews' />

      {/* reviews */}
      <div className='grid md:grid-cols-2 gap-8 my-8'>
        {reviews.map((review) => {
          const { comment, rating, authorImageUrl, authorName, productId } =
            review;
          const reviewInfo = {
            comment,
            rating,
            image: authorImageUrl,
            name: authorName,
            productId,
          };
          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
};
export default ProductReviews;
