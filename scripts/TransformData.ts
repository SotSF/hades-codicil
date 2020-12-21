import { BoonType } from "../src/models/boon";
const fs = require('fs');

const AphroditeData: { Traits: string[], 
                       WeaponUpgrades: string[],
                       LinkedUpgrades: {
                           [key:string] : {OneOf?: string[], OneFromEachSet?: string[][] }
                       }
}= require('../data/app/gods/Aphrodite/god.json');
const HelpText = require('../data/app/text/help.en.json')

/*
  boondata = {
    id: "AphroditeWeaponTrait",                <== Via god.json
    name: "Heartbreak Strike", //              <== help.en.json?
    gods: ["Aphrodite"],                       <== Via god.json
    description: "Your attack inflicts weak.", <== help.en.json
    boonType: "slotted",                       <== in "WeaponUpgrades" vs ... ? 
    slot: "attack",                            <== regex match "Weapon|Rush|Ranged|Secondary|Shout" ?
    prereqs: [],                               <== god.json LinkedUpgrades ? 
  }

/* Output:
{
  "boons": {id: {boon}}
}
*/
function TraitIdToSlot(TraitId: string){
    if (TraitId.includes("Weapon")){
        return "attack";
    } else if (TraitId.includes("Rush")){
        return "dash";
    } else if (TraitId.includes("Ranged")){
        return "cast";
    } else if (TraitId.includes("Secondary")){
        return "special";
    } else if (TraitId.includes("Shout")){
        return "call";
    }
    return "";
}

function TransformData(){
    const results = {boons: {}};
    for (const traitType of ["Traits", "WeaponUpgrades"]) {
        for (const trait of AphroditeData[traitType]){
            const helpText = HelpText.Texts.filter((a:any) => a.Id === trait)[0];
            const boonData = new BoonType( {
                id: trait,
                name: helpText.DisplayName,
                gods: ['Aphrodite'],
                description: helpText.Description,
                slotted: traitType === "WeaponUpgrades",
                slot: TraitIdToSlot(trait),
                prereqs: {},
            });
            results.boons[trait] = boonData;
        }
    }
    for (const trait of Object.keys(AphroditeData.LinkedUpgrades)) {
        const helpText = HelpText.Texts.filter((a: any) => a.Id === trait)[0];
        const boonData = new BoonType ({
            id: trait,
            name: helpText.DisplayName,
            gods: ['Aphrodite'],
            description: helpText.Description,
            slotted: false,
            slot: TraitIdToSlot(trait),
            prereqs: AphroditeData.LinkedUpgrades[trait],
        });
        results.boons[trait] = boonData;
    }
    fs.writeFile('boondata.json', JSON.stringify(results), 'utf8', function (err: any) {
        if (err) {
          return console.log(err);
        }
      })
}
TransformData();