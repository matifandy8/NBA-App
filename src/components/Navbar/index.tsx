import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon} from "@chakra-ui/icons";
import navStyles from "./Navbar.module.css";
import { Link, useHistory } from "react-router-dom";
const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Teams",
    path: "/teams",
  },
  {
    name: "Stats",
    path: "/stats/",
  },
  {
    name: "Players",
    path: "/players",
  },
];



const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Box
    px={2}
    py={1}
    rounded={"md"}
   
  >
    <a href={path}>{children}</a>
  </Box>
);

const Navbar: React.FC = () => {
  let history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logout = (e: React.SyntheticEvent) => {
    e.preventDefault();
    localStorage.clear();
    history.push("/login");
  };

  return (
    <div className={navStyles.mobileNav}>
      <Box  bg={useColorModeValue('brand.300','brand.300')} zIndex={99}
 px={4}>
        <Flex colorScheme={"teal"} h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            bg={useColorModeValue('brand.300','brand.300')}
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            
            {localStorage.getItem("userInfo") === null ? (
      <Link to="/login">
          <Button
             variant={"solid"}
             colorScheme={"teal"}
             size={"sm"}
             mr={4}
            //  leftIcon={<AddIcon />}
           >
             Sign in
           </Button>
        </Link>

            ) : (

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
              >
                <Avatar
                  size={"sm"}
                  // src={
                  //   "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  // }
                />
              </MenuButton>
              <MenuList bg={'brand.300'} >
                <MenuItem _hover={{ bg: "teal.900" }}>Profile</MenuItem>
                <MenuItem _hover={{ bg: "teal.900" }}>Setings</MenuItem>
                <MenuDivider />
                <Button _hover={{ bg: "teal.900" }} onClick={(e) => logout(e)}>Logout</Button>
              </MenuList>
            </Menu>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}

export default Navbar;