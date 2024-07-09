"use client";
import { useState } from "react";
import FormContainer from "../form/FormContainer";
import SubmitButton from "../form/Buttons";
import { addToCartAction } from "@/utils/actions";
import { useAuth } from "@clerk/nextjs";
import { ProductSignInButton } from "../form/Buttons";
import SelectPProductAmount, { Mode } from "./SelectProductAmount";

const AddToCart = ({ productId }: { productId: string }) => {
  const { userId } = useAuth();
  const [amount, setAmount] = useState(1);

  return (
    <div className='mt-4'>
      <SelectPProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      {userId ? (
        <FormContainer action={addToCartAction}>
          <input type='hidden' name='productId' value={productId} />
          <input type='hidden' name='amount' value={amount} />

          <SubmitButton text='add to cart' size='default' className='mt-8' />
        </FormContainer>
      ) : (
        <ProductSignInButton />
      )}
    </div>
  );
};
export default AddToCart;
