import { FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }: { rating: number }) => {
  // create an array of length 5 and fill it with booleans
  const starStatuses = Array.from({ length: 5 }, (_, i) => i + 1 <= rating);

  return (
    <div className='flex items-center gap-x-1'>
      {starStatuses.map((isFilled, i) => {
        const className = `w-3 h-3 ${
          isFilled ? "text-primary" : "text-gray-300"
        }`;

        return isFilled ? (
          <FaStar className={className} key={i} />
        ) : (
          <FaRegStar className={className} key={i} />
        );
      })}
    </div>
  );
};
export default Rating;
