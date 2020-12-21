/* Example json data for initialization:

  boondata = {
    id: "AphroditeWeaponTrait",                <== Via god.json
    name: "Heartbreak Strike", //              <== help.en.json?
    gods: ["Aphrodite"],                       <== Via god.json
    description: "Your attack inflicts weak.", <== help.en.json
    boonType: "slotted",                       <== in "WeaponUpgrades" vs ... ? 
    slot: "attack",                            <== regex match "Weapon|Rush|Ranged|Secondary|Shout" ?
    prereqs: [],                               <== god.json LinkedUpgrades ? 
  }
  
*/

export class BoonType {
    id: string;
    name: string;
    gods: string[];
    description: string;
    slotted: boolean;
    slot: "" | "attack" | "special" | "cast" | "dash" | "call" ;
    prereqs: {OneOf?: string[], OneFromEachSet?: string[][] };
    // Not included: required mirror traits, weird cast vs flare for Shield/Bow

    constructor(boonData: any){
      this.id = boonData.id;
      this.name = boonData.name; 
      this.gods = boonData.gods;
      this.description = boonData.description;
      this.slotted = boonData.slotted;
      this.slot = boonData.slot;
      this.prereqs = boonData.prereqs;
    }
}