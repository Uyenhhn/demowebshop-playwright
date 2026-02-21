import { ComputerType } from "../../src/features/products/Types/ComputerType";
import { ComputerConfig } from "../../src/features/products/Types/ComputerConfig";

export const buildYourOwnComputerData: ComputerConfig = {
  productName: "Build your own computer",
  type: ComputerType.standard,                   // dropdown
  processor: "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
  ram: "2 GB",
  hdd: "320 GB",
  os: "Windows 7 [+$50.00]",
  software: ["Microsoft Office [+$50.00]"],
  qty: 1,
};