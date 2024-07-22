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
          Welcome to Soft & Sweet Home, where elegance meets comfort. Our
          curated selection of high-class furniture and luxurious bedding
          transforms your home into a haven of style and serenity. Explore our
          exquisite collections, each piece designed with meticulous attention
          to detail and crafted from the finest materials. Elevate your living
          spaces with our sophisticated and timeless designs that promise both
          beauty and functionality. Experience the ultimate in home decor and
          comfort with Soft & Sweet Home, your destination for creating a
          perfect sanctuary.
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
