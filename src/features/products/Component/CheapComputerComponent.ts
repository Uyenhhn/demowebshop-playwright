import { ComputerComponent } from "./ComputerComponent";

export class CheapComputerComponent implements ComputerComponent {
    doSthCommon(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    selectRAM(value: string) {
        console.log('Cheap  ComputerComponent | Select RAM');
    }
    
}