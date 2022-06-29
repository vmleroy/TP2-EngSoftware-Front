export default interface IExam {
    _id: string,
    CPFAluno: string,
    descricao: string,
    peso: number,
    altura: number,
    pressaoArt: number,
    gorduraCorp: number,
    massMagra: number,
    IMC: number,
    estaApto: boolean
}