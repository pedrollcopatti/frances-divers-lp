import { Input, Stack, Text } from "@chakra-ui/react";
import { HTMLInputTypeAttribute } from "react";

type InputFormProps = {
  field: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  value: string;
  setValue: (value: string) => void;
};
export default function InputForm({
  value,
  field,
  placeholder,
  type,
  setValue,
}: InputFormProps) {
  return (
    <Stack>
      <Text fontFamily="heading">{field}</Text>
      <Input
        width="100%"
        borderRadius="full"
        _placeholder={{ color: "orange.500" }}
        borderColor="orange.500"
        variant="outline"
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </Stack>
  );
}
