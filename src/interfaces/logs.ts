import StatusModel from "./status_models_interface";

export default interface Logs extends StatusModel {
  method: string;
  agent: string;
  url: string;
  ip: string;
  client: string;
}
