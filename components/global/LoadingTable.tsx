import { Skeleton } from "../ui/skeleton";

const LoadingTable = ({ row = 5 }: { row?: number }) => {
  const tableRows = Array.from({ length: row }, (_, i) => {
    return (
      <div className='mb-4' key={i}>
        <Skeleton className='w-full h-8 rounded' />
      </div>
    );
  });
  return <>{tableRows}</>;
};
export default LoadingTable;
