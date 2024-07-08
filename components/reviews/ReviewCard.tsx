import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Rating from "./Rating";
import Comment from "./Comment";
import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";

type ReviewCardProps = {
  reviewInfo: {
    comment: string;
    rating: number;
    name: string;
    image: string;
    productId: string;
  };
  children?: ReactNode;
};

const ReviewCard = ({ reviewInfo, children }: ReviewCardProps) => {
  // console.log("reviewInfo:", reviewInfo);
  return (
    <Card className='relative'>
      {/* header */}
      <CardHeader>
        <Link href={`/products/${reviewInfo.productId}`}>
          <div className='flex items-center cursor-pointer'>
            {/* image */}
            <Image
              src={reviewInfo.image}
              alt={reviewInfo.name}
              width={48}
              height={48}
              className='w-12 h-12 rounded-full object-cover'
            />
            {/* info */}
            <div className='ml-4'>
              {/* link */}
              <h3 className='text-sm font-bold capitalize mb-1'>
                {reviewInfo.name}
              </h3>
              <Rating rating={reviewInfo.rating} />
            </div>
          </div>
        </Link>
      </CardHeader>
      {/* content */}
      <CardContent>
        <Comment comment={reviewInfo.comment} />
      </CardContent>

      <div className='absolute top-3 right-3'>{children}</div>
    </Card>
  );
};
export default ReviewCard;
