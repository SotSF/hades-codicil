-- This lua code dumps a couple lua tables from within Hades. Follow these
-- steps to regenerate the files.
--
-- 1. Copy `json.lua` to the scripts directory
-- 2. Copy the lines below into the RoomManager.lua script where specified in
--    the comments.
-- 3. Run Hades and load a file. The code will run right as you enter the game.
--
-- NOTE: file io is stripped from the x64 version of the game, so for the file
-- export to work on windows, it must run as the x86 version (both are shipped 
-- with the steam distro.)

-- Put this line in the global scope, 
-- for example right below `RoomThreadName = "RoomThread"`

Import "json.lua"

-- Put these lines in RoomManager.lua, for example inside of function( triggerArgs ),
-- which is right under OnPreThingCreation.
		file = io.open("../BoonInfoScreenData.json", "w")
		file:write(json.encode({BoonInfoScreenData = BoonInfoScreenData}))
		file:close()

		f = io.open("../TraitData.json", "w")
		f:write(json.encode({TraitData = TraitData}))
		f:close()



-- Example result:

--[[
RoomThreadName = "RoomThread"

Import "json.lua"

OnPreThingCreation
{
	function( triggerArgs )
		file = io.open("../BoonInfoScreenData.json", "w")
		file:write(json.encode({BoonInfoScreenData = BoonInfoScreenData}))
		file:close()

		f = io.open("../TraitData.json", "w")
		f:write(json.encode({TraitData = TraitData}))
		f:close()
]]--
