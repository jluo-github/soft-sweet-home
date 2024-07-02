import { fetchFeaturedProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();
  if (!products) return <EmptyList />;

  return (
    <section className='pt-24'>
      <SectionTitle text='Featured Products' />
      <ProductsGrid products={products} />
    </section>
  );
};
export default FeaturedProducts;