
import { Td, Tr } from "@chakra-ui/react";
import { Player } from "./types";

interface Props {
    player: Player;
}

const PlayerCard: React.FC<Props> = ({ player }) => {
  return (
    <Tr>
      <Td fontSize="lg">{player.first_name}  {player.last_name}</Td>
      <Td fontSize="lg">Team</Td>
      <Td fontSize="lg">{player.position}</Td>
    </Tr>
  );
};

export default PlayerCard;