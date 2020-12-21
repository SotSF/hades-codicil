""" Reduce data extracted from lua, convert sjson """
from pathlib import Path

import sys
import json
import sjson

GODS = ['Aphrodite',
        'Ares',
        'Artemis',
        'Athena',
        'Demeter',
        'Dionysus',
        'Hermes',
        'Poseidon',
        'Zeus']

GAMEJSONDIR = Path("data/game/json")
GAMETEXTDIR = Path("data/game/text")
SITEDATADIR = Path("data/app/")

def convert_sjson(file, out):
    """ Convert an input sjson file to plain json for the app. """
    with open(file) as infile:
        data = sjson.loads(infile.read())
    with open(out, "w") as outfile:
        outfile.write(json.dumps(data, indent=2))

def write_god(god, upgrade_data):
    """ Write out reduced data to a file in the site data dir. """
    goddir = SITEDATADIR / "gods" / god
    if not goddir.exists():
        goddir.mkdir()
    with open(goddir / "god.json", "w") as outfile:
        outfile.write(json.dumps(upgrade_data, indent=2))

def reduce_god(god, god_upgrade_data):
    """ Pick a few relevant keys out of the very large game data object. """
    keep_keys = [ 'Traits',
                  'WeaponUpgrades',
                  'LinkedUpgrades',
                  'Icon',
                  'LightingColor',
                  'LootColor',
                  'SubtitleColor' ]
    reduced = {}
    for key in keep_keys:
        if key in god_upgrade_data:
            reduced[key] = god_upgrade_data[key]
        else:
            print("'{}' not in upgrade data for god {}".format(key, god))
    return reduced

def main():
    """ Reduce data extracted from game files to form usable by app."""
    with open(GAMEJSONDIR / "LootData.json") as f:
        lootdata = json.load(f)
    with open(GAMEJSONDIR / "TraitData.json") as f:
        traitdata = json.load(f)
    for god in GODS:
        reduced_data = reduce_god(god, lootdata[god+'Upgrade'])
        write_god(god, reduced_data)
    languages = [ l for l in GAMETEXTDIR.iterdir() if l.is_dir() ]
    for lang in languages:
        helptext = lang / 'HelpText.{}.sjson'.format(lang.name)
        if helptext.exists():
            out = SITEDATADIR / "text" / "text.{}.json".format(lang.name)
            convert_sjson(helptext, out)
    return 0


if __name__=="__main__":
    sys.exit(main())
