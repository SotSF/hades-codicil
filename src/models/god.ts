import { Color } from "./Color";

export class GodType {
    name: 'Aphrodite' |
          'Ares'      |
          'Artemis'   |
          'Athena'    |
          'Demeter'   |
          'Dionysus'  |
          'Hermes'    |
          'Poseidon'  |
          'Zeus';

    color: Color;
    icon: string;
    
    constructor(godData: any){
        this.name = godData.name;
        this.icon = godData.icon;
        this.color = new Color(godData.LootColor);
    }
}