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
};
