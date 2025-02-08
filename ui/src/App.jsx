import { useState, useEffect } from "react";
import axios from "axios";
import { SuperheroForm, SuperheroList } from "./components";
import { Container, Typography, Divider, Box } from "@mui/material";

const API_URL = import.meta.env.VITE_API_URL;;

export default function App() {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  const fetchSuperheroes = async () => {
    try {
      const response = await axios.get(API_URL);
      setSuperheroes(response.data);
    } catch (error) {
      console.error("Error fetching superheroes:", error);
    }
  };

  const addSuperhero = async (newHero) => {
    try {
      const formattedHero = { ...newHero, humilityScore: Number(newHero.humilityScore) };

      await axios.post(API_URL, formattedHero);
      fetchSuperheroes();
    } catch (error) {
      console.error("Error adding superhero:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        minHeight: "100vh",
        bgcolor: "#f5f5f5"
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography variant="h3" sx={{ my: 4 }}>
          Humble Superhero App
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <SuperheroForm addSuperhero={addSuperhero} />
        <Divider sx={{ my: 2 }} />
        <SuperheroList superheroes={superheroes} />
      </Container>
    </Box>
  );
}
