import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  Wrap,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { LazyImage } from "../../utils/LazyImage";
import BlogAuthor from "./BlogAuthor";
import CardNews from "./CardNews";

const News: React.FC = () => {
  return (
    <Container maxW={"5xl"} p="12">
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "column" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
            <LazyImage src="http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_858,w_1526,x_360,y_74/c_fill,f_auto,h_495,q_auto,w_880/v1/m/0/5/05c96f11c74c5030f39fcb8565fd71f2d354862f/jr-smith-trying-join-golf-team-north-carolina-t.jpg" alt="title"/> 
            </Link>
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              JR Smith attempting to join college golf team at North Carolina
              A&T
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            J.R. Smith has his sights set on playing sports again, but not
            professionally, and not the sport you might think. Smith has
            enrolled at North Carolina A&T State University, a top HBCU, with a
            plan to pursue a degree in liberal studies. The 35-year-old also has
            another goal: He’s trying to join the school’s golf team. “They
            always told me I could go back (to school) whenever. So, this is
            whenever,” Smith told Helen Ross of the PGA Tour’s official website.
            Smith is waiting for the NCAA to sort out his eligibility. While he
            did play professionally in the NBA, Smith never attended college,
            and North Carolina A&T golf coach Richard Watkins sounded confident
            that Smith will ultimately be allowed to play.
          </Text>
          <BlogAuthor name="NBA News" date={new Date("2021-04-06T19:01:27Z")} />
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        Latest News
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="20px" marginTop="5">
        <CardNews />
        <CardNews />
        <CardNews />
      </Wrap>
    </Container>
  );
};

export default News;
