import { uuid } from "../../helpers/uuid";

export type SensorContuctor = {
  id?: string;
  name: string;
  comodoId: string;
  gas: number;
  solo: number;
  chuva: number;
};

export class Sensor {
  id: string;
  name: string;
  comodoId: string;
  gas: number;
  solo: number;
  chuva: number;

  constructor(props: SensorContuctor) {
    this.id = props.id || uuid();
    this.name = props.name;
    this.comodoId = props.comodoId;
    this.gas = props.gas;
    this.solo = props.solo;
    this.chuva = props.chuva;

    if (!props.name) throw new Error("Name is required");
    if (!props.comodoId) throw new Error("ComodoId is required");
    if (!props.gas) throw new Error("Gas is required");
    if (!props.solo) throw new Error("Solo is required");
    if (!props.chuva) throw new Error("Chuva is required");
  }

  get publicInfo() {
    return {
      id: this.id,
      name: this.name,
      comodoId: this.comodoId,
      gas: this.gas,
      solo: this.solo,
      chuva: this.chuva,
    };
  }
}
