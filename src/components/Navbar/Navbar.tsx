import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import RighContent from "./RightContent/RighContent";
import Searchinput from "./Searchinput";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image alt="image icon" src="/images/redditFace.svg" height="30px" />
        <Image alt="image font" src="/images/redditText.svg" height="46px"
        display={{base: "none", md:"unset"}}
        />
      </Flex>

      <Searchinput />
      <RighContent />
    </Flex>
  );
};
export default Navbar;
