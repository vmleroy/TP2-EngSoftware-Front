import ICartaoDeCredito from "./ICartaoDeCredito";
import IExame from "./IExame";
import IPlano from "./IPlano";

export default interface IAluno {
    _id: string,
    _idUsuario: string,
    nome: string,
    CPF: string,
    RG: string,
    dataNasc: Date,
    cartaoCred: ICartaoDeCredito,
    planos: IPlano[],
    exames: IExame[]
    
}