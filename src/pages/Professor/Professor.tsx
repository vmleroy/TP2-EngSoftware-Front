import React from 'react';
import { useState } from 'react';

import { Button, Grid } from '@mui/material';

import Cabecalho from '../../components/Cabecalho/Cabecalho';
import FormularioProfessor from '../../components/Pages/Professor/FormularioProfessor';
import IExercicio from '../../interfaces/IExercicio';

const Professor = ({ }) => {

    const [cpf, setCpfAluno] = useState<string>();
    const [descricao, setDescricao] = useState<string>();
    const [exercicio, setExercicio] = useState<IExercicio[]>();

    const handleCliqueBotaoCadastro = ( cpf:string|undefined, descricao:string|undefined, exercicio: IExercicio[]|undefined ) => {
        console.log(cpf, descricao)
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
                <FormularioProfessor setCpf={setCpfAluno} setDescricao={setDescricao} setExercicio={setExercicio} />
                <Button variant='outlined' sx={{ margin: '0.5rem' }}
                    onClick={() => handleCliqueBotaoCadastro(cpf, descricao, exercicio)}
                >
                    {' '} Cadastrar treino {' '}
                </Button>
            </Grid>
        </>
    );

}

export default Professor;