import { Container}  from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Get } from "../../services/Api";
import TeamCard from "./TeamCard";
import { Team } from "./types";


const TeamsList: React.FC = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    Get("/teams").then((res) => setTeams(res.data.data));
  }, []);
  console.log(teams);

  return (
    <Container maxW={"5xl"} p="12">
      {teams.map((team:Team) => (
        <TeamCard key={team.id} team={team} />
        ))}
    </Container>
  );
};

export default TeamsList;
