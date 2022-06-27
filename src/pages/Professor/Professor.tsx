import React from 'react';
import { useState } from 'react';

import axios from 'axios';

import { Button, Grid } from '@mui/material';

import Cabecalho from '../../components/Cabecalho/Cabecalho';
import FormularioProfessor from '../../components/Pages/Professor/FormularioProfessor';

import IExercicio from '../../interfaces/IExercicio';


const Professor = ({ }) => {

    const [cpf, setCpfAluno] = useState<string>();
    const [descricao, setDescricao] = useState<string>();
    const [exercicios, setExercicio] = useState<IExercicio[]>([]);

    const handleSetExercicio = (exercicio: IExercicio) => {
        setExercicio(exercicios => [...exercicios, exercicio] );
    }

    const handleCliqueBotaoCadastro = ( cpf:string|undefined, descricao:string|undefined, exercicios: IExercicio[]|undefined ) => {
        console.log(cpf, descricao, exercicios);
        // const newTreino = {tipoExercicio:id, series:series, repeticoes:repeticoes};
        // axios.post('https://tp2-engsoft.herokuapp.com/treinos', newTreino)
        //     .then(reposta => {

        //     })
        //     .catch(erro =>  {
        //         console.log(erro);
        //     })
    }

    return (
        <>
            <Grid
                container
                item
                direction='column'
                alignItems='center'
                sx={{
                    minWidth: '100vw',
                    minHeight: '100vh'
                }}
            >
                <Cabecalho nomeNoCabecalho='Academia - Professor' />
                <FormularioProfessor setCpf={setCpfAluno} setDescricao={setDescricao} handleSetExercicio={handleSetExercicio} />
                <Button variant='outlined' sx={{ margin: '0.5rem' }}
                    onClick={() => handleCliqueBotaoCadastro(cpf, descricao, exercicios)}
                >
                    {' '} Cadastrar treino {' '}
                </Button>
            </Grid>
        </>
    );

}

export default Professor;