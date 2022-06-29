export default interface IAula{
  _id: string,
  aulaNome: string,
  aulaInicio: Date,
  aulaFim: Date,
  dia: [],
  maxAlunos: number,
  alunosAtivos: number,
  taCheia: boolean
}