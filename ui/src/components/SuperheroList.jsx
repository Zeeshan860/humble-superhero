import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

export function SuperheroList({ superheroes }) {
  return (
    <div>
      <Typography variant="h4" sx={{ mb: 2 }}>Superheroes</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Superpower</strong></TableCell>
              <TableCell><strong>Humility Score</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {superheroes?.map((hero) => (
              <TableRow key={hero.id}>
                <TableCell>{hero.name}</TableCell>
                <TableCell>{hero.superpower}</TableCell>
                <TableCell>{hero.humilityScore}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
