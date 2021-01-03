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

import { getCombinedNodeFlags } from "typescript";

export const GodNames = ["Aphrodite", "Ares", "Artemis", "Athena", "Demeter", "Dionysus", "Hermes", "Poseidon", "Zeus"] as const;
export type GodName = typeof GodNames[number];

export type Slot = "" | "attack" | "special" | "cast" | "dash" | "call";

// type Slot = "Assist" | "Keepsake" | "Melee" | "Ranged" | "Rush" | "Secondary" | "Shout";

interface BoonFields {
  id: string;
  name: string; // localized name
  gods: Set<GodName>; // god (and maybe duo)
  description: string; // localized description
  slot: Slot;
  prereqs: { OneOf?: string[], OneFromEachSet?: string[][] } // requirements (as SGG did it)
}

export interface Boon extends BoonFields {};
export class Boon {
  constructor(boonFields: BoonFields) {
    Object.assign(this, boonFields);
  }

  isDuoBoon(): boolean {
    return this.gods.size > 1;
  }
}
