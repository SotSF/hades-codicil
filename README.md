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