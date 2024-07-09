"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ReviewLoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className='flex items-center'>
          <Skeleton className='w-12 h-12 rounded-full' />
          <div className='ml-4'>
            <Skeleton className='w-[100px] h-6 mb-2' />
            <Skeleton className='w-[100px] h-6 mb-2' />
            <Skeleton className='w-[300px] h-4 mb-2' />
            <Skeleton className='w-4/5 h-4 mb-2' />
            <Skeleton className='w-1/2 h-4 mb-2' />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

const Loading = () => {
  return (
    <section className='grid md:grid-cols-2 gap-8 mt-4 '>
      <ReviewLoadingCard />
      <ReviewLoadingCard />
    </section>
  );
};
export default Loading;
