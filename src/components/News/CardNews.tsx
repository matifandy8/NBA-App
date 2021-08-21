import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import BlogAuthor from "./BlogAuthor";
import { LazyImage } from "../../utils/LazyImage";

const CardNews: React.FC = () => {
  return (
    <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
      <Box w="100%">
        <Box borderRadius="lg" overflow="hidden">
          <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
          <LazyImage src="http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_683,w_1711,x_58,y_105/c_fill,f_auto,h_320,q_auto,w_800/v1/m/4/f/4f57d19040449866d23d924f1145ac8bf6399121/kuzma-playing-lebron-reshaped-my-thinking.jpg" alt="title"/> 
          </Link>
        </Box>

        <Heading fontSize="xl" marginTop="2">
          <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
            George Karl received death threats after calling Carmelo Anthony a
            ‘ball hog and sh***y defender’
          </Link>
        </Heading>
        <Text as="p" fontSize="md" marginTop="2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <BlogAuthor name="NBA News" date={new Date("2021-04-06T19:01:27Z")} />
      </Box>
    </WrapItem>
  );
};

export default CardNews;
