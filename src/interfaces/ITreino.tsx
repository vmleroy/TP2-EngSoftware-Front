import IExercicio from "./IExercicio";

export default interface ITreino {
    cpfAluno: string,
    descricao: string,
    exercicios: IExercicio[]
}