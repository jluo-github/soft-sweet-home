import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleBtn from "@/components/products/FavoriteToggleBtn";
import AddToCart from "@/components/single-product/AddToCart";
import ProductRating from "@/components/single-product/ProductRating";
import ShareButton from "@/components/single-product/ShareButton";
import SubmitReview from "@/components/reviews/SubmitReview";
import ProductReviews from "@/components/reviews/ProductReviews";
import { fetchSingleProduct, findExistingReview } from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";

const SingleProduct = async ({ params }: { params: { id: string } }) => {
  const { userId } = auth();
  const product = await fetchSingleProduct(params.id);
  const { name, image, company, description, price } = product;

  const reviewNotExists =
    userId && !(await findExistingReview(userId, product.id));
  const dollarsAmount = formatCurrency(price);

  return (
    <>
      <BreadCrumbs name={product.name} />
      {/*  grids */}
      <div className='grid gap-y-8 mt-6 lg:grid-cols-2 lg:gap-x-16'>
        {/* first col, image */}
        <div className='relative h-full'>
          <Image
            fill
            priority
            src={image}
            alt={name}
            sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
            className='w-full rounded-md object-cover'
          />
        </div>
        {/* second col, product */}

        <div>
          <div className='flex gap-x-8 items-center'>
            {/* name */}
            <h1 className='capitalize text-3xl font-bold'>{name} </h1>

            {/* share */}
            <div className='flex items-center gap-x-2'>
              <FavoriteToggleBtn productId={params.id} />
              <ShareButton name={product.name} productId={params.id} />
            </div>
          </div>
          {/* info */}
          <ProductRating productId={params.id} />
          <h4 className='text-xl mt-2'>{company}</h4>
          <p className='mt-3 text-md bg-muted inline-block p-2 rounded'>
            {dollarsAmount}
          </p>

          <p className='mt-6 leading-8 text-muted-foreground'>{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>

      {/*  reviews */}
      <ProductReviews productId={params.id} />
      {/* no review, show submit review button */}
      {reviewNotExists && <SubmitReview productId={params.id} />}
    </>
  );
};
export default SingleProduct;
