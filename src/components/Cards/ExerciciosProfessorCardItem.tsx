import React from 'react';
import { FC } from 'react';

import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material';

import ICardExercicioProfessor from '../../interfaces/Cards/ICardExercicioProfessor';


const ExercicioProfessorCardItem: FC<ICardExercicioProfessor> = ({
    _id, nome, descricao, handleClick
}) => {
    return (
        <Card sx={{ maxWidth: 200, border: 1.5, borderColor: "darkgrey", margin: "0.2rem" }}>
            <CardContent>
                <Typography gutterBottom component="div">
                    {nome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {descricao}
                </Typography>
                <Grid container direction='row'>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Series:
                    </Typography>
                    <TextField
                        variant='standard'
                        sx={{ display: 'flex', alignItems: 'flex-end', width: '1.5rem', mt: '0.6rem', ml: '0.2rem' }}
                        inputProps={{ min: 0, style: { textAlign: 'center' } }}
                    />
                </Grid>
                <Grid container direction='row'>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Repeticoes:
                    </Typography>
                    <TextField
                        variant='standard'
                        sx={{ display: 'flex', alignItems: 'flex-end', width: '1.5rem', mt: '0.6rem', ml: '0.2rem' }}
                        inputProps={{ min: 0, style: { textAlign: 'center' } }}
                    />
                </Grid>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    variant="outlined"
                    onClick={() => {handleClick(_id)}}
                >
                    Adicionar exercicio
                </Button>
            </CardActions>
        </Card>
    );
}

export default ExercicioProfessorCardItem;