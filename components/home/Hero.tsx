import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div className=''>
        <h1 className='fond-bold max-w-2xl text-4xl tracking-tight sm:text-5xl'>
          Soft & Sweet Home
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          minus, minima aperiam officia sequi dolore delectus quibusdam
          perferendis laborum quasi vel repellat voluptatem architecto illum
          quidem ad natus deleniti quaerat consequatur asperiores ullam aliquid.
          Voluptatem recusandae dicta quaerat praesentium. Aliquam molestias
          omnis asperiores laudantium. Nam maiores expedita assumenda magni
          nihil.
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link href='/products'>Our Products</Link>
        </Button>
      </div>
      {/* hero carousel */}
      <HeroCarousel />
    </section>
  );
};
export default Hero;
