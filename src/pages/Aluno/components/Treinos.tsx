import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import IExercicio from "../../../interfaces/IExercicio";

interface Props {
  CPFTreino: string;
  descricao: string;
  exercicios: IExercicio[];
}

const Treinos: FC<Props> = ({ CPFTreino, descricao, exercicios }) => {
  return (
    <>
      <Grid
        container
        xs={12}
        alignItems="left"
        direction="column"
        sx={{ minHeight: "20vh", border: 2, borderColor: "#120458" }}
      >
        <Typography> {CPFTreino}</Typography>
        <Typography>{descricao} </Typography>
        {exercicios.map((item) => (
          <Grid item xs={12}>
            <Typography>{item._id}</Typography>
            <Typography>{item.repeticoes}</Typography>
            <Typography>{item.series}</Typography>
            <Typography>{item.tipoExercicio?.nome || ""} </Typography>
            <Typography>{item.tipoExercicio?.descricao || ""} </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Treinos;
