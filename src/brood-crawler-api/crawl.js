/**
* crawl.js
* @author Sidharth Mishra
* @description Brood Crawler APIs
* @created Thu Nov 16 2017 15:40:30 GMT-0800 (PST)
* @copyright 2017 Sidharth Mishra
* @last-modified Thu Nov 16 2017 15:40:30 GMT-0800 (PST)
*/

//==============================================================================================

//# ES6 styled imports
import program from "commander";
import { search } from "./brood.js";
//# ES6 styled imports

//==============================================================================================

//# program CLI definition
program.version("1.0.0").description("Search OpenGenus/cosmos from your command-line.");

//==============================================================================================
//# custom help
//~~~~~~~~~~~~~~~~~~

program.on("--help", () =>
  console.log(`
    Usage Example
    ~~~~~~~~~~~

    brood [search-string]

`)
);

//==============================================================================================

//# let commander handle the incoming command-line arguments
program.parse(process.argv);
//# let commander handle the incoming command-line arguments

//# Case of no args, print usage info to CMD
if (!program.args.length) program.help();
//# Case of no args, print usage info to CMD

// console.log(program.args);
// node ./bin/brood.js harry had a little lamb
// [ 'harry', 'had', 'a', 'little', 'lamb' ]

const searchString = program.args.join(" "); // restore the spaces

search(searchString); // let brood do the search work
//==============================================================================================
