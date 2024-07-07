import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

const TextAreaInput = ({
  name,
  labelText,
  defaultValue,
}: TextAreaInputProps) => {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {labelText || name}
      </Label>

      <Textarea className="leading-loose" id={name} name={name} defaultValue={defaultValue} rows={5}  required/>
    </div>
  );
};
export default TextAreaInput;
