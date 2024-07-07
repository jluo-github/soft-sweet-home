import { Label } from "../ui/label";
import { Input } from "../ui/input";


const name = "price";
type FormInputNumberProps = {
  defaultValue?: number;
};

const PriceInput = ({ defaultValue }: FormInputNumberProps) => {
  return (
    <div className='mb-2'>
      <Label htmlFor='price'>Price ($)</Label>

      <Input
        id={name}
        name={name}
        type='number'
        defaultValue={defaultValue || 99}
        min={0}
        required
      />
    </div>
  );
};

export default PriceInput;
