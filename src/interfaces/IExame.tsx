export default interface IExam {
    _id: string,
    cpfAluno: string,
    descricao: string,
    peso: number,
    altura: number,
    pressaoArterial: number,
    porcentagemGordura: number,
    porcentagemMassaMagra: number,
    IMC: number,
    habilitado: boolean
}