const AboutPage = async () => {
  return (
    <section>
      <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-3xl font-bold leading-none  sm:text-6xl'>
        Soft & Sweet
        <span className='bg-primary py-2 px-4 rounded-lg  text-white'>
          Home
        </span>
      </h1>
      <div className='mt-8 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground'>
        <div>
          <h3 className='text-2xl my-4'>About Soft & Sweet Home</h3>
          <p>
            we believe that your home is more than just a place to live;
            it&apos;s a sanctuary where elegance and comfort harmoniously blend
            to create an oasis of tranquility. Our mission is to transform your
            living spaces into a reflection of your personal style and taste
            with our exceptional range of high-class furniture and luxurious
            bedding.
          </p>
          <h3 className='text-2xl my-4'>Our Story</h3>
          <p>
            Founded with a passion for exquisite home decor and an eye for
            timeless design, Soft & Sweet Home has grown into a trusted name for
            those seeking to elevate their interiors. We source our collections
            from the finest artisans and manufacturers, ensuring that each piece
            embodies quality, sophistication, and durability.
          </p>
          <h3 className='text-2xl my-4'> Our Philosophy</h3>
          <p>
            We understand that a beautifully designed home enhances your
            everyday life. That&apos;s why we meticulously curate our
            collections to include only the most elegant and functional pieces.
            Whether you are furnishing a new home or simply looking to update
            your existing decor, we provide the perfect blend of aesthetics and
            comfort.
          </p>
          <h3 className='text-2xl my-4'> Quality and Craftsmanship </h3>
          <p>
            Every item at Soft & Sweet Home is crafted from the highest quality
            materials and designed to last. Our dedication to excellence means
            that you can enjoy the beauty and functionality of our furniture and
            bedding for years to come. From plush sofas and elegant dining sets
            to sumptuous bedding and stylish accessories, we offer products that
            cater to your unique sense of style.
          </p>
          <h3 className='text-2xl my-4'>Customer Commitment</h3>
          <p>
            Your satisfaction is our priority. We strive to provide an
            exceptional shopping experience with personalized customer service,
            ensuring that your needs and preferences are met. Our knowledgeable
            team is always here to assist you in finding the perfect pieces to
            complete your home.
          </p>

          <h3 className='text-2xl my-4'> Join Our Community </h3>

          <p>
            Be part of the Soft & Sweet Home family and discover the joy of
            living in a beautifully curated environment. Follow us on social
            media for the latest trends, design tips, and exclusive offers.
            Together, let&apos;s create spaces that inspire and comfort. Thank
            you for choosing Soft & Sweet Home.
          </p>
        </div>

        <div className='my-4'>
          {" "}
          <p>We look forward to helping you create your perfect sanctuary.</p>
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
