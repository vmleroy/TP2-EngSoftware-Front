import ITipoExercicio from "../ITipoExercicio";

export default interface ICardExercicioProfessor {
    _id: string,
    nome: string,
    descricao: string,
    handleClick: (id: string, series:string|undefined, repeticoes:string|undefined) => void
}