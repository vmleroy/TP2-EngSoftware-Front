import ICartaoDeCredito from "./ICartaoDeCredito";

export default interface IAluno {
    _id: string,
    _idUsuario: string,
    nome: string,
    cpf: string,
    RG: string,
    dataNascimento: Date,
    cartaoDeCredito: ICartaoDeCredito,
}