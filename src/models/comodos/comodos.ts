import { uuid } from "../../helpers/uuid";

export type ComodoContuctor = {
  id?: string;
  name: string;
  imovelId: string;
};

export class Comodo {
  id: string;
  name: string;
  imovelId: string;

  constructor(props: ComodoContuctor) {
    this.id = props.id || uuid();
    this.name = props.name;
    this.imovelId = props.imovelId;

    if (!props.name) throw new Error("Name is required");
    if (RegExp(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ-\s]/).test(props.name)) throw new Error("Name is invalid");
    if (!props.imovelId) throw new Error("ImovelId is required");
  }

  get publicInfo() {
    return {
      id: this.id,
      name: this.name,
      imovelId: this.imovelId,
    };
  }
}
