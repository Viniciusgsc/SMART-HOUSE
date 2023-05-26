import { uuid } from "../../helpers/uuid";

export type ImovelContuctor = {
    id?: string;
    rua: string;
    numero: string;
    cidade: string;
    estado: string;
    cep: string;
    complemento?: string;
    clienteId: string;
}

export class Imovel {
    id: string;
    rua: string;
    numero: string;
    cidade: string;
    estado: string;
    cep: string;
    complemento?: string;
    clienteId: string;

    constructor(props: ImovelContuctor) {
        this.id = props.id || uuid();
        this.rua = props.rua;
        this.numero = props.numero;
        this.cidade = props.cidade;
        this.estado = props.estado;
        this.cep = props.cep;
        this.complemento = props.complemento;
        this.clienteId = props.clienteId;

        if (!props.rua) throw new Error("Rua is required");
        if (!props.numero) throw new Error("Numero is required");
        if (!props.cidade) throw new Error("Cidade is required");
        if (!props.estado) throw new Error("Estado is required");
        if (!props.cep) throw new Error("Cep is required");
        if (!props.clienteId) throw new Error("ClienteId is required");
    }

    get publicInfo() {
        return {
            id: this.id,
            rua: this.rua,
            numero: this.numero,
            cidade: this.cidade,
            estado: this.estado,
            cep: this.cep,
            complemento: this.complemento,
            clienteId: this.clienteId,
        };
    }
}
