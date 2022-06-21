import React from 'react'
import { FC, useState } from 'react'

import { Grid, Button } from '@mui/material'

import Cabecalho from '../../components/Cabecalho/Cabecalho';
import FormularioMedico from '../../components/Pages/Medico/Formulario/FormularioMedico';

const Medico = ({}) => {

    const [cpfAluno, setCpf] = useState<string>();
    const [altura, setAltura] = useState<string>();
    const [peso, setPeso] = useState<string>();
    const [pressaoArterial, setPressaoArterial] = useState<string>();
    const [porcentagemGordura, setPorcentagemGordura] = useState<string>();
    const [porcentagemMassaMagra, setPorcentagemMassaMagra] = useState<string>();
    const [descricao, setDescricao] = useState<string>();
    const [apto, setApto] = useState<boolean>();
    
    const [IMC, setIMC] = useState<number>();

    const handleCliqueBotaoIMC = (altura: string|undefined, peso: string|undefined) => {
        if (peso != undefined && altura != undefined) {
            let imc = parseFloat(peso)/(parseFloat(altura)^2);
            setIMC(imc);
        }
    }

    const handleCliqueBotaoCadastro = (
        cpfAluno: string|undefined, 
        altura: string|undefined,
        peso: string|undefined,
        pressaoArterial: string|undefined,
        porcentagemGordura: string|undefined,
        porcentagemMassaMagra: string|undefined,
        IMC: number|undefined,
        descricao: string|undefined,
        apto: boolean|undefined
        ) => {
        console.log(cpfAluno);
        console.log(altura);
        console.log(peso);
        console.log(pressaoArterial);
        console.log(porcentagemGordura);
        console.log(porcentagemMassaMagra);
        console.log(IMC);
        console.log(descricao);
        console.log(apto);
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
          <Cabecalho nomeNoCabecalho='Academia' />
          <FormularioMedico 
            setCpf={setCpf} setAltura={setAltura} setPeso={setPeso} setPressaoArterial={setPressaoArterial}
            setPorcentagemGordura={setPorcentagemGordura} setPorcentagemMassaMagra={setPorcentagemMassaMagra}
            setDescricao={setDescricao} setApto={setApto} IMC={IMC}
          />
          <Button variant='outlined' sx={{ margin: '0.5rem' }}
            onClick={() => handleCliqueBotaoIMC(altura, peso)}
          >
            {' '} Calculo do IMC {' '}
          </Button>
          <Button variant='outlined' sx={{ margin: '0.5rem' }}
            onClick={() => handleCliqueBotaoCadastro(
                cpfAluno, altura, peso, pressaoArterial,
                porcentagemGordura, porcentagemMassaMagra,
                IMC, descricao, apto
            )}
          >
            {' '} Cadastrar exame {' '}
          </Button>
        </Grid>
      </>
    );
};

export default Medico;