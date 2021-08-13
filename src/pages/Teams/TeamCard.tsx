import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Team } from "./types";

interface Props {
    team: Team;
  }

const TeamCard: React.FC<Props> = ({team}) => {
  return (
    <>
    <Link  to="teams/:id">
    <Box _hover={{background: "gray.200"}} bg="gray.100" border="1px" w="100%" p={4} color="black">
  {team.full_name}
    </Box>
    </Link>
    </>
  );
};

export default TeamCard;




