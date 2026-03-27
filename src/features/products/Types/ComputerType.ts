import { ComputerEssentialComponent } from "../Component/ComputerEssentialComponent";
import { ComputerComponentConstructor } from "../Pages/ComputerDetailsPage";

export interface ComputerDataType {
  productName: string;
  computerCompClass: ComputerComponentConstructor<ComputerEssentialComponent>,
  processorType: string;
  ram: string;
  hdd: string;
  os?: string;
  software: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  country: string;
  state?: string;
  city: string;
  address1: string;
  address2: string;
  zipPostalCode: string;
  phoneNumber: string;
  faxNumber?: string;
};
