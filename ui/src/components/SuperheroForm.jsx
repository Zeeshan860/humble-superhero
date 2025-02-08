import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";

export function SuperheroForm({ addSuperhero }) {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            addSuperhero(data); // Update the list
            reset(); // Clear form
        } catch (error) {
            console.error("Error adding superhero:", error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400 }}>
            <Typography variant="h5">Add a Superhero</Typography>
            <TextField {...register("name", { required: true })} label="Name" variant="outlined" fullWidth />
            <TextField {...register("superpower", { required: true })} label="Superpower" variant="outlined" fullWidth />
            <TextField type="number" {...register("humilityScore", { min: 1, max: 10 })} label="Humility Score (1-10)" variant="outlined" fullWidth />
            <Button type="submit" variant="contained" color="primary">Add Superhero</Button>
        </Box>
    );
}
