import React from 'react';
import {
  Image,
  Text,
  HStack,
} from '@chakra-ui/react';

interface BlogAuthorProps {
  date: Date;
  name: string;
}


const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
    return (
      <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
        <Image
          borderRadius="full"
          boxSize="40px"
          src="https://www.yardbarker.com/uploads/logo/image/7/NBAmedium.jpg"
          alt={`Avatar of ${props.name}`}
        />
        <Text fontWeight="medium">{props.name}</Text>
        <Text>—</Text>
        <Text>{props.date.toLocaleDateString()}</Text>
      </HStack>
    );
  };


  export default BlogAuthor;