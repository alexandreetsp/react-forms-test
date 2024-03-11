import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { Button, Paper } from "@mui/material";
import FormInputText from "./form-component/FormInputText";
import { useForm } from "react-hook-form";
import FormInputRadioText from "./form-component/FormInputRadio";
import { FormInputDropdown } from "./form-component/FormInputDropDown";

interface IFormInput {
  textValue: string;
  radioValue: string;
  checkboxValue: string[];
  dateValue: Date;
  dropdownValue: string;
  sliderValue: number;
}

const defaultValues = {
  textValue: "",
};

function FormDemo() {
  const { handleSubmit, reset, control, setValue } = useForm<IFormInput>({
    defaultValues: defaultValues,
  });

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <form className="mt-10">
      <Box>
        <FormInputText
          name={"textValue"}
          control={control}
          label={"Text Input"}
        />

        <FormInputRadioText
          name={"radioValue"}
          control={control}
          label={"Radio Controller"}
        ></FormInputRadioText>
      </Box>

      <Box>
        <FormInputDropdown
          name={"dropdownValue"}
          control={control}
          label={"DropDown controller"}
        ></FormInputDropdown>
      </Box>

      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
    </form>
  );
}

export default FormDemo;
