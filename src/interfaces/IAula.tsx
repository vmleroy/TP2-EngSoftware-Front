export default interface IAula{
  _id: string,
  aulaNome: string,
  dia: [],
  aulaInicio: Date,
  aulaFim: Date,
  maxAlunos: number,
  alunosAtivos: number,
  taCheia: boolean
}