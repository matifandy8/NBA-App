import {  Spinner,Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";


const Layout: React.FC = ({children}) =>  {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      <Navbar />
      {loading
      ?  <Box padding="250">
      <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    /> </Box>
      :<div>  {children}</div>
    }  
      <Footer />
    </div>
  );
};

export default Layout;