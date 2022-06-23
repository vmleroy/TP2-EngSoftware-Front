import React from 'react';
import { FC, useState } from 'react';

import { Grid, Typography } from '@mui/material';

import CampoDeTexto from '../../CamposDeTexto/CampoDeTexto';
import ExercicioProfessorCardItem from '../../Cards/ExerciciosProfessorCardItem';
import IExercicio from '../../../interfaces/IExercicio';

interface Props {
    setCpf: React.Dispatch<React.SetStateAction<string | undefined>>,
    setDescricao: React.Dispatch<React.SetStateAction<string | undefined>>
    setExercicio: React.Dispatch<React.SetStateAction<IExercicio[] | undefined>>
}

const FormularioProfessor: FC<Props> = ({ setCpf, setDescricao, setExercicio }) => {

    const handleCardClique = (id:string) => {
        // Gera o exercicio e seta ele em "setExercicio" a partir do objeto gerado.
        console.log(id)
    }

    return (
        <>
            <Grid
                container
                width="95%"
                margin="0.5rem"
                alignItems="center"
                direction="row"
                sx={{ minHeight: "25vh" }}
            >
                <Grid item xs={12} sx={{ minHeight: "5vh", backgroundColor: '#120458' }}>
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontSize: "1.5rem",
                            color: 'white',
                            margin: "1rem"
                        }}
                    >
                        Treino:
                    </Typography>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    alignItems="left"
                    direction="column"
                    sx={{ minHeight: "20vh", border: 2, borderColor: "#120458" }}
                >
                    <CampoDeTexto label='CPF Aluno' setValue={setCpf} />
                    <CampoDeTexto label='Descricao' setValue={setDescricao} />
                    <Grid
                        container
                        item
                        xs={12}
                        alignItems="left"
                        direction="column"
                        margin={2}
                        sx={{ width: "93vw", minHeight: "20vh", border: 2, borderColor: "#120458" }}
                    >
                        <Typography sx={{
                            fontWeight: "600",
                            fontSize: "10",
                            color: 'black',
                            margin: "0.2rem"
                        }}> 
                            Exercicios disponiveis:
                        </Typography>
                        <Grid container item xs={12} margin={1} direction='row'>
                            <ExercicioProfessorCardItem _id='123' nome='supino' descricao='exercicio de peito' handleClick={handleCardClique}/>
                            <ExercicioProfessorCardItem _id='456' nome='rosca com halteres' descricao='biceps' handleClick={handleCardClique}/>
                            <ExercicioProfessorCardItem _id='789' nome='abdominal' descricao='exercicio de abdominal' handleClick={handleCardClique}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );

}

export default FormularioProfessor;