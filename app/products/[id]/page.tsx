import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { fetchSingleProduct } from "@/utils/actions";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleBtn from "@/components/products/FavoriteToggleBtn";
import AddToCart from "@/components/single-product/AddToCart";
import ProductRating from "@/components/single-product/ProductRating";

const SingleProduct = async ({ params }: { params: { id: string } }) => {
  const product = await fetchSingleProduct(params.id);
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);

  return (
    <>
      <BreadCrumbs name={product.name} />
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

        <>
          <div className='flex items-center gap-x-8'>
            <h1 className='text-3x font-bold capitalize'>{name}</h1>
            <FavoriteToggleBtn productId={params.id} />
          </div>

          <ProductRating productId={params.id} />
          <h4 className='text-xl mt-2'>{company}</h4>
          <p className='mt-3 text-md bg-muted-foreground'>{description}</p>
          <AddToCart productId={params.id} />
        </>
      </div>
    </>
  );
};
export default SingleProduct;
