import { FaStar } from "react-icons/fa";

const ProductRating = async ({ productId }: { productId: string }) => {
  const rating = 3.7;
  const count = 21;

  const className = `flex items-center gap-1 text-md mt-1 mb-4`;
  const countValue = `(${count}) reviews`;
  return (
    <span className={className}>
      <FaStar className='w-3 h-3' />
      {rating}
      {countValue}
    </span>
  );
};
export default ProductRating;
