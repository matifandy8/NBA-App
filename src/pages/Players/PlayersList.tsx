import { Center,Box, Stack, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Get } from "../../services/Api";
import PlayerCard from "./PlayerCard";
import { Player } from "./types";

const PlayersList: React.FC = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    Get("/players").then((res) => setPlayers(res.data.data));
  }, []);
  console.log(players);

  return (
    <Center py={6}>
    <Box
    maxW={'930px'}
    w={'full'}
    boxShadow={'2xl'}
    rounded={'md'}
    overflow={'hidden'}>
    <Stack alignItems="center" spacing={8} p={5} shadow="md">
    <Table  spacing={8}  size="sm">
      <Thead>
        <Tr>
          <Th fontSize="2xl">PLAYER</Th>
          <Th fontSize="2xl">TEAM</Th>
          <Th fontSize="2xl">POSITION</Th>
        </Tr>
      </Thead>
      <Tbody>
        {players.map((player: Player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </Tbody>
    </Table>
    </Stack>
    </Box>
    </Center>

  );
};

export default PlayersList;
