import Cards from "./cards_interfaces";
import StatusModel from "./status_models_interface";

export default interface Client extends StatusModel {
  name: string;
  email: string;
  password: string;
  photos: string[];
}
