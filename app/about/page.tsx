import db from "@/utils/db";
import type { Product } from "@prisma/client";

const AboutPage = async () => {
  return (
    <section>
      <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl'>
        PurpleCat Next
        <span className='bg-primary py-2 px-4 rounded-lg tracking-widest text-white'>
          Store
        </span>
      </h1>
      <p className='mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta
        iure voluptate odit illo porro assumenda optio perferendis a! Sapiente
        nulla nostrum obcaecati atque porro itaque suscipit perferendis dolor
        similique.
      </p>
    </section>
  );
};
export default AboutPage;
