import { CheapComputerComponent } from "../../src/features/products/Component/CheapComputerComponent";
import { ComputerDataType } from "../../src/features/products/Types/ComputerType";

export const cheapComputerData: ComputerDataType[] = [
  {
    productName: "Build your own cheap computer",
    computerCompClass: CheapComputerComponent,
    processorType: "Fast",
    ram: "8 GB",
    hdd: "400 GB",
    software: "Image Viever",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    company: "Cheap Corp",
    country: "United States",
    state: "Texas",
    city: "Houston",
    address1: "456 Elm St",
    address2: "",
    zipPostalCode: "77001",
    phoneNumber: "987-654-3210"
  },
  {
    productName: "Build your own cheap computer",
    computerCompClass: CheapComputerComponent,
    processorType: "Fast",
    ram: "4 GB",
    hdd: "320 GB",
    software: "Office Suite",
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    company: "Budget Inc",
    country: "United States",
    state: "New York",
    city: "New York",
    address1: "789 Oak St",
    address2: "Suite 100",
    zipPostalCode: "10001",
    phoneNumber: "555-123-4567"
  }
]