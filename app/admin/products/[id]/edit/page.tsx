import {
  fetchAdminProductById,
  updateProductAction,
  updateProductImageAction,
} from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import SubmitButton from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckboxInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";

const EditProduct = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = await fetchAdminProductById(id);
  const { name, company, price, description, featured } = product;

  return (
    <>
      <h1 className='text-2xl font-semibold mb-8'>Update Product</h1>
      <div className='border p-8 rounded-md'>
        {/* image input container */}
        <ImageInputContainer
          action={updateProductImageAction}
          name={name}
          text='update image'
          image={product.image}>
          <input type='hidden' name='id' value={id} />
          <input type='hidden' name='url' value={product.image} />
        </ImageInputContainer>

        {/*update product info */}
        <FormContainer action={updateProductAction}>
          <div className='grid gap-2 md:grid-cols-2 my-4'>
            <input type='hidden' name='id' value={id} />
            <FormInput
              type='text'
              name='name'
              label='product name'
              defaultValue={name}
            />
            <FormInput
              type='text'
              name='company'
              label='company'
              defaultValue={company}
            />
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name='description'
            labelText='product description'
            defaultValue={description}
          />
          <div className='mt-6'>
            <CheckboxInput
              name='featured'
              label='featured'
              defaultChecked={featured}
            />
          </div>

          <SubmitButton text='update product' className='mt-8' />
        </FormContainer>
      </div>
    </>
  );
};
export default EditProduct;
