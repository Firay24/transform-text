// library
import {
  Button,
  Heading,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

// util function
import horizontalFlip from "./util/horizontal";
import verticalFlip from "./util/vertical";
import shift from "./util/shift";

// icons
import { BsArrowRepeat } from "react-icons/bs";

function App() {
  // trabsform type
  const [value, setValue] = useState<string>("H");

  const [textInput, setTextInput] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  return (
    <Stack paddingX={12} paddingY={10} width="full" alignItems="center">
      {/* heading */}
      <Heading>Transform Text</Heading>

      {/* body */}
      <Stack width={{ base: "full", md: "50%" }} marginTop={5} gap={5}>
        {/* icon button to reply */}
        <Stack width="full" alignItems="end">
          <IconButton
            variant="ghost"
            aria-label="Repeat button"
            icon={<BsArrowRepeat />}
            width="fit-content"
            onClick={() => {
              setValue("H");
              setTextInput("");
              setResult("");
              setCount(0);
            }}
          />
        </Stack>

        {/* user fomr */}
        <Input
          placeholder="Your Tex"
          value={textInput}
          onChange={(e: any) => setTextInput(e.target.value)}
        />
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row" gap={4}>
            <Radio value="H">Horizontal</Radio>
            <Radio value="V">Vertical</Radio>
            <Radio value="S">Shift</Radio>
          </Stack>
        </RadioGroup>
        {value === "S" ? (
          <Input
            type="number"
            placeholder="5"
            value={count}
            onChange={(e: any) => setCount(e.target.value)}
          />
        ) : null}
        <Button
          width="auto"
          colorScheme="blue"
          onClick={() => {
            if (value === "H") {
              setResult(horizontalFlip(textInput));
            } else if (value === "V") {
              setResult(verticalFlip(textInput));
            } else if (value === "S") {
              setResult(shift({ input: textInput, n: count }));
            }
          }}
        >
          Apply
        </Button>
      </Stack>

      {/* result section */}
      <Stack width={{ base: "full", md: "50%" }} marginTop={5}>
        <Text fontWeight="semibold">Return</Text>
        <Text
          paddingY={2}
          bgColor="gray.100"
          rounded={"md"}
          paddingX={5}
          color={result === "" ? "gray.500" : "dark"}
        >
          {result === "" ? "none" : result}
        </Text>
      </Stack>
    </Stack>
  );
}

export default App;
