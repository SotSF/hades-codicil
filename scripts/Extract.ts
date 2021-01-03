// Dumped data blobs
const _BoonInfoScreenData = require("../data/raw/BoonInfoScreenData.json")
// const _LootData = require("../data/raw/LootData.json");
const _TraitData = require("../data/raw/TraitData.json");

import { GodNames, GodName, Boon } from "../src/models/boon";

// Helper types for working with data dumps
type OneOf = {
    Type: "OneOf",
    OneOf: string[],
}
type OneFromEachSet = {
    Type: "OneFromEachSet",
    OneFromEachSet: string[][],
}
type BoonInfoScreenData = {
    SortedTraitIndex: {
        [key: string]: string[] // "<God>Upgrade"
    },
    TraitRequirementsDictionary: {
        [key: string]: OneOf | OneFromEachSet
    }
}

function Extract() {
    const data: BoonInfoScreenData = _BoonInfoScreenData.BoonInfoScreenData;

    // boons maps SGG trait ID to instances of our Boon class.
    let boons: { [key: string]: Boon } = {};

    for (const godName of GodNames) {
        const godLookupKey = godName + "Upgrade";
        for (const traitName of data.SortedTraitIndex[godLookupKey]) {
            if (traitName in boons) {
                boons[traitName].gods.add(godName);
                continue
            }
            boons[traitName] = new Boon({
                id: traitName,
                name: `${traitName} (TODO)`,
                gods: new Set<GodName>([godName]),
                description: `Description of ${traitName} (TODO)`,
                slot: "", // TODO
                prereqs: data.TraitRequirementsDictionary[traitName],
            });
        }
    }
}

Extract();
