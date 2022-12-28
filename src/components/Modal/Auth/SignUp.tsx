import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";

const SignUp: React.FC = () => {
  const setAutModalState = useSetRecoilState(authModalState);
  const [signUpform, setsignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = () => {};

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // UPDATE FORM STATE
    setsignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="email"
        placeholder="email"
        type="email"
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "orange.500",
        }}
        focusBorderColor="orange.500"
        _focus={{
          //  outline: "none",
          bg: "white",
          //  border: "1px solid",
          //  borderColor: "orange.500"
        }}
        bg="gray.100"
      />
      <Input
        name="password"
        placeholder="Password"
        type="password"
        onChange={onChange}
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "orange.500",
        }}
        focusBorderColor="orange.500"
        _focus={{
          //  outline: "none",
          bg: "white",
          //  border: "1px solid",
          //  borderColor: "orange.500"
        }}
        bg="gray.100"
      />
      <Input
        name="cofirmPassword"
        placeholder="Confir Password"
        type="password"
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "orange.500",
        }}
        focusBorderColor="orange.500"
        _focus={{
          //  outline: "none",
          bg: "white",
          //  border: "1px solid",
          //  borderColor: "orange.500"
        }}
        bg="gray.100"
      />

      <Button width="100%" height="36px" mt={2} mb={2} type="submit">
        Sign UP
      </Button>

      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>New Here?</Text>
        <Text
          color="orange.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAutModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          {" "}
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
