import React from 'react'
import { FC } from 'react'

import { Checkbox, Grid, Typography } from '@mui/material'

import CampoDeTexto from '../../CamposDeTexto/CampoDeTexto';
import CampoDeTextoLeitura from '../../CamposDeTexto/CampoDeTextoLeitura';

interface Props {
    setCpf: React.Dispatch<React.SetStateAction<string | undefined>>,
    setAltura: React.Dispatch<React.SetStateAction<string | undefined>>,
    setPeso: React.Dispatch<React.SetStateAction<string | undefined>>,
    setPressaoArterial: React.Dispatch<React.SetStateAction<string | undefined>>,
    setPorcentagemGordura: React.Dispatch<React.SetStateAction<string | undefined>>,
    setPorcentagemMassaMagra: React.Dispatch<React.SetStateAction<string | undefined>>,
    setDescricao: React.Dispatch<React.SetStateAction<string | undefined>>,
    setApto: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    IMC: number | undefined
    resultadoIMC: string | undefined
}

const FormularioMedico: FC<Props> = ({
    setCpf, setAltura, setPeso, setPressaoArterial,
    setPorcentagemGordura, setPorcentagemMassaMagra,
    setDescricao, setApto, IMC, resultadoIMC
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
                    alignItems="left"
                    direction="column"
                    sx={{ minHeight: "20vh", border: 2, borderColor: "#120458" }}
                >
                    <Grid 
                    container
                    xs={12}
                    alignContent="center"
                    direction="row"
                    >
                        <CampoDeTexto label='CPF Aluno:' setValue={setCpf} />
                        <CampoDeTexto label='Altura (em metros):' setValue={setAltura} />
                        <CampoDeTexto label='Peso (em KG):' setValue={setPeso} />
                        <CampoDeTexto label='Pressao Arterial:' setValue={setPressaoArterial} />
                        <CampoDeTexto label='% Gordura:' setValue={setPorcentagemGordura} />
                        <CampoDeTexto label='% Massa Magra:' setValue={setPorcentagemMassaMagra} />
                    </Grid>
                    <Grid
                        container
                        xs={12}
                        alignItems="center"
                        direction="row"
                    >
                        <CampoDeTextoLeitura label='IMC' value={IMC} />
                        <CampoDeTextoLeitura label='IMC -> Resultado ' value={resultadoIMC} />
                    </Grid>
                    <Grid
                        container
                        xs={12}
                        alignItems="center"
                        direction="row"
                    >
                        <Typography sx={{marginLeft:"2rem"}}> Aluno esta apto? </Typography>
                        <Checkbox aria-label='Apto' onChange={(e) => { setApto(e.target.checked) }} />
                    </Grid>
                    <CampoDeTexto label='Descricao:' setValue={setDescricao} />
                </Grid>
            </Grid>
        </>
    );
};

export default FormularioMedico;