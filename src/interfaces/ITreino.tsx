import IExercicio from "./IExercicios";

export default interface ITreino {
    _id: string,
    cpfAluno: string,
    descricao: string,
    exercicios: IExercicio[]
}