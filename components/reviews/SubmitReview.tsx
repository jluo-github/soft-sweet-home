"use client";
import { useState } from "react";
import SubmitButton from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { Card } from "@/components/ui/card";
import RatingInput from "@/components/reviews/RatingInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { Button } from "@/components/ui/button";
import { createReviewAction } from "@/utils/actions";
import { useUser } from "@clerk/nextjs";
import type { actionFunction } from "@/utils/types";

const SubmitReview = ({ productId }: { productId: string }) => {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  // clerk user hook
  const { user } = useUser();

  return (
    <>
      <Button size='lg' onClick={() => setIsReviewFormVisible((prev) => !prev)}>
        Leave Review
      </Button>

      {/* card */}

      {isReviewFormVisible && (
        <Card className='p-8 mt-8'>
          <FormContainer action={createReviewAction as actionFunction}>
            <input type='hidden' name='productId' value={productId} />
            <input
              type='hidden'
              name='authorName'
              value={user?.firstName || "user"}
            />

            <input
              type='hidden'
              name='authorImageUrl'
              value={user?.imageUrl || ""}
            />

            <RatingInput name='rating' />

            <TextAreaInput
              name='comment'
              labelText='feedback'
              defaultValue='Reviews help others learn about this product. Please share your experience. 
              '
            />

            <SubmitButton className='mt-4' />
          </FormContainer>
        </Card>
      )}
    </>
  );
};
export default SubmitReview;
