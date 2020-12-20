-- ExportData.lua
json = require "JSON"
argparse = require "argparse"
parser = argparse("Export game data from .lua files.")
parser:option("-a --all", "Read all game data.")
parser:option("-f --file", "Read specific file.")

args = parser:parse()
-- Note, currently doing nothing with the CLI args :D
desired = {"LootData", "TraitData"}


gamedatadir = 'data/game/'
luadir = gamedatadir .. 'lua/'

function LoadPrereqs()
    GameData = {}
    ConstantsData = {}
    GlobalVoiceLines = {}
    require(luadir .. 'Color')
    require(luadir .. 'WeaponSets')
    require(luadir .. 'HeroData')
end

function ReadGameData (file)
    require(luadir .. file)
end

function WriteDataJson (file)
    local serialized = json:encode_pretty(_G[file])
    local fd = io.open(gamedatadir .. 'json/' .. file .. ".json", "w")
    io.output(fd)
    io.write(serialized)
    io.close(fd)
end

LoadPrereqs()
for i,file in pairs(desired) do
    ReadGameData(file)
    WriteDataJson(file)
end
