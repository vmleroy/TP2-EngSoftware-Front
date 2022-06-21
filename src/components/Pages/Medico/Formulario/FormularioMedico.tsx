import React from 'react'
import { FC, useState } from 'react'

import { Checkbox, Grid, Typography } from '@mui/material'

import CampoDeTexto from '../../../CamposDeTexto/CampoDeTexto';
import CampoDeTextoLeitura from '../../../CamposDeTexto/CampoDeTextoLeitura';

interface Props {
    setCpf: React.Dispatch<React.SetStateAction<string | undefined>>,
    setAltura: React.Dispatch<React.SetStateAction<string | undefined>>,
    setPeso: React.Dispatch<React.SetStateAction<string | undefined>>,
    setPressaoArterial: React.Dispatch<React.SetStateAction<string | undefined>>,
    setPorcentagemGordura: React.Dispatch<React.SetStateAction<string | undefined>>,
    setPorcentagemMassaMagra: React.Dispatch<React.SetStateAction<string | undefined>>,
    setDescricao: React.Dispatch<React.SetStateAction<string | undefined>>,
    setApto: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    IMC: number|undefined
}

const FormularioMedico : FC<Props> = ({
    setCpf, setAltura, setPeso, setPressaoArterial,
    setPorcentagemGordura, setPorcentagemMassaMagra,
    setDescricao, setApto, IMC
}) => {

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
                        Exame:
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        alignItems="center"
                        direction="row"
                        sx={{ minHeight: "20vh", border: 2, borderColor: "#120458" }}
                    >
                        <CampoDeTexto label='CPF Aluno:' setValue={setCpf}/>
                        <CampoDeTexto label='Altura:' setValue={setAltura}/>
                        <CampoDeTexto label='Peso:' setValue={setPeso}/>
                        <CampoDeTexto label='Pressao Arterial:' setValue={setPressaoArterial}/>
                        <CampoDeTexto label='% Gordura:' setValue={setPorcentagemGordura}/>
                        <CampoDeTexto label='% Massa Magra:' setValue={setPorcentagemMassaMagra}/>
                        <CampoDeTexto label='Descricao:' setValue={setDescricao}/>
                        <CampoDeTextoLeitura label='IMC' value={IMC} />
                        <Typography> Aluno esta apto? </Typography>
                        <Checkbox aria-label='Apto' onChange={(e) => { setApto(e.target.checked) }}/>
                    </Grid>
            </Grid>
        </>
    );
};

export default FormularioMedico;