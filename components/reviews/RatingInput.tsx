import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RatingInput = ({
  name,
  labelText,
}: {
  name: string;
  labelText?: string;
}) => {
  const options = Array.from({ length: 5 }, (_, i) => {
    const value = i + 1;
    return value.toString();
  }).reverse();

  return (
    <div className='mb-2 max-w-xs'>
      {/* label */}
      <Label htmlFor={name} className='capitalize'>
        {labelText || name}
      </Label>

      {/* select */}
      <Select defaultValue={options[0]} name={name} required>
        {/* trigger */}
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        {/* content */}
        <SelectContent>
          {options.map((option) => {
            return (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default RatingInput;
