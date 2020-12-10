GlobalVoiceLines = {}
GameData = {}
Color = {}
ConstantsData = {}
require 'data/LootData'
JSON = (loadfile "vendor/JSON.lua")()
file = io.open("LootData.json", "w")
io.output(file)
io.write(lootdata)
io.close(file)
