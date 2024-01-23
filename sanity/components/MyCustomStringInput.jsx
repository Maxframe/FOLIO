import { useCallback } from "react";
import { Stack, Block, BlockInput } from "@sanity/ui";
import { set, unset } from "sanity";

export const MyCustomStringInput = (props) => {
  const { elementProps, onChange, value = "" } = props;

  const handleChange = useCallback(
    (event) => {
      const nextValue = event.currentTarget.value;
      onChange(nextValue ? set(nextValue) : unset());
    },
    [onChange]
  );

  return (
    <Stack space={2}>
      <BlockInput {...elementProps} onChange={handleChange} value={value} />
      <Block>Characters: {value.length}</Block>
    </Stack>
  );
};

// https://www.sanity.io/guides/your-first-input-component-for-sanity-studio-v3
