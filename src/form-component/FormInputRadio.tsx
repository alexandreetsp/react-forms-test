import { Controller } from "react-hook-form";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FormInputProps } from "./FormInputProps";

const FormInputRadioText = ({ name, control, label }: FormInputProps) => {
  const options = [
    {
      label: "Radio Option 1",
      value: "Teste",
    },
    {
      label: "Radio Option 2",
      value: "Teste 2",
    },
  ];

  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => (
          <RadioGroup value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default FormInputRadioText;
