import FormInput from "@/components/form/FormInput";
import SubmitButton from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProductAction } from "@/utils/actions";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { faker } from "@faker-js/faker";
import CheckboxInput from "@/components/form/CheckboxInput";

const CreateProduct = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });

  return (
    <>
      <h1 className='text-2xl font-semibold mb-8'>Create Product</h1>
      <div className='border p-8 rounded-md'>
        {/* form action */}
        <FormContainer action={createProductAction}>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
            {/* name */}
            <FormInput
              name='name'
              type='text'
              label='Product Name'
              defaultValue={name}
              placeholder='Product name'
            />
            {/* company */}
            <FormInput
              type='text'
              name='company'
              label='company'
              defaultValue={company}
            />
            {/* price */}
            <PriceInput />
            {/* image */}
            <ImageInput />
          </div>
          {/* textarea */}
          <TextAreaInput
            name='description'
            labelText='product description'
            defaultValue={description}
          />

          {/* checkbox */}
          <div className='mt-6'>
            <CheckboxInput name='featured' label='Featured' />
          </div>
          {/* button */}
          <SubmitButton text='Create Product' className='mt-8' />
        </FormContainer>
      </div>
    </>
  );
};

export default CreateProduct;
