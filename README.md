# Codicil
Codicil is a tool for tracking and sharing builds for the game Hades by Supergiant.

# Development

## Typescript & react
Codicil's web application is built using typecsript and react. You will need `npm` to build and run the project

run `npm install` from within the folder to install the js requirements, then `npm start` to start the development server.

## Lua
Codicil relies on Lua to extract data from the game files, then save them as JSON for consumption by the react app.

To install the Lua requirements, first get the [LuaRocks package manager](https://github.com/luarocks/luarocks/wiki/Download)

[This guide](https://leafo.net/guides/customizing-the-luarocks-tree.html) has information on how to configure luarocks such that your lua path will have the correct directories.

Then, you can install the requirements like so:

```
luarocks install --local json-lua
luarocks install --local argparse
```

## Hades Debug Output

Inside the Hades game, there's a Debug console. To turn it on, run Hades with the flags below. This has been tested by editing a shortcut to Hades.exe on Windows.

```
/DebugDraw=true /DebugKeysEnabled=true
```

Once you're in the game, there are a couple known ways to control the display:

* `Ctrl+D` cycles through a few debug displays. For example, the `Script (2/12)` display shows all the lua variables.
* `F6` enters Filter mode for some of the display modes, allowing you to filter down what is shown. Start typing to filter, and press `F6` again to stop capturing keystrokes as filter input.
