import { uuid } from "../../helpers/uuid";

export type ClienteContuctor = {
  id?: string;
  name: string;
  email: string;
  pawssword: string;
};

export class Cliente {
  id: string; 
  name: string;
  email: string;
  pawssword: string;

  constructor(props: ClienteContuctor) {
    this.id = props.id || uuid();
    this.name = props.name;
    this.email = props.email;
    this.pawssword = props.pawssword;

    if (!props.name) throw new Error("Name is required");
    if (RegExp(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ-\s]/).test(props.name)) throw new Error("Name is invalid");
    if (!props.email) throw new Error("Email is required");
    if (!props.pawssword) throw new Error("Password is required");
  }

  get publicInfo() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    };
  }
}
