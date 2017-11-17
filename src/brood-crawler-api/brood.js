/**
* brood.js
* @author Sidharth Mishra
* @description Brood.js is the core logic that contacts GitHub and processes the results before offering it to the user.
* @created Thu Nov 16 2017 16:13:14 GMT-0800 (PST)
* @copyright 2017 Sidharth Mishra
* @last-modified Thu Nov 16 2017 16:13:14 GMT-0800 (PST)
*/

//==============================================================================================

//# ES6 imports
import Request from "request";
import Path from "path";
import FS from "fs";
import { take, map, filter, reduceRight } from "lodash";
import { waterfall, series } from "async";
import { cyan, bgBlack, underline } from "colors";
//# ES6 imports

//==============================================================================================

/**
 * search
 * ~~~~~~~~~
 * Searches the entered string in GitHub's OpenGenus/cosmos repository
 *
 * @param {string} searchString The search string entered by the consumer. This will be searched in GitHub's
 * OpenGenus/cosmos repository.
 */
export const search = searchString => {
  //# waterfall pipeline
  waterfall(
    [
      callback => fetchResultsFromGitHub(searchString, callback),
      processResultsFromGitHub,
      displayResultsToUser
    ],
    (err, reason) => console.log(`Failed beacause`, err, reason)
  );
  //# waterfall pipeline
};

//==============================================================================================

/**
 * fetchResultsFromGitHub
 * ~~~~~~~~~~~~~~~~~~~~~~~~~
 * Fetches the results of the search from GitHub by using GitHub's code search API
 *
 * @param {string} searchString The seach string entered by user/consumer
 * @param {(error:string, results:string) => void} callback The callback function that needs to be executed after this function has finished executing
 */
const fetchResultsFromGitHub = (searchString, callback) => {
  Request.get(
    `https://api.github.com/search/code?q=${encodeURIComponent(
      searchString
    )}+in:file+repo:OpenGenus/cosmos`,
    {
      headers: {
        "User-Agent": "brood-crawler"
      }
    },
    (error, response, body) => {
      //# fail case
      if (error) {
        console.log(`${JSON.stringify(error)}`);
        return; // bail out from the pipeline, no need to propagate
      }
      //# fail case

      // console.log(`Response:: ${JSON.stringify(response)}`); -- only to be used for debugging
      // console.log(`Body:: ${body}`);

      callback(null, body + ""); // propagate down the waterfall
    }
  );
};

//==============================================================================================

/**
 * processResultsFromGitHub
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Processes the result string obtained by trimming away unwanted fields.
 *
 * @param {string} resultString The results obtained from GitHub's search API
 * @param {(error:string, pResults: ProcessedResults) => void} callback The callback function
 */
const processResultsFromGitHub = (resultString, callback) => {
  //# fail case
  if (!resultString || (resultString && resultString.length === 0)) {
    console.log("Error: The result string is empty!");
    return;
  }
  //# fail case

  /**
   * @type {{items:[{name:string, path:string, html_url:string}]}}
   */
  const results = JSON.parse(resultString);

  //# fail case #2
  if (!results["items"] || (results["items"] && results["items"].length === 0)) {
    console.log("No links found.");
    return;
  }
  //# fail case #2

  const pResults = results["items"].map(p => {
    return { name: p["name"], path: Path.join("cosmos", p["path"]), url: p["html_url"] };
  });

  // console.log(JSON.stringify(pResults, null, 4));

  callback(null, take(pResults, 10)); // return only top 10 results
};

//==============================================================================================

//# type definitons for documentation purposes only
/**
 * @typedef {[ProcessedResult]} ProcessedResults
 *
 * @typedef {{name:string, url:string, path:string}} ProcessedResult
 */
//# type definitons for documentation purposes only

//==============================================================================================

/**
 * displayResultsToUser
 * ~~~~~~~~~~~~~~~~~~~~~~~~
 * Displays the processed results to the user so that they can lookup the results
 *
 * @param {ProcessedResults} pResults The processed results obtained from `processResultsFromGitHub`
 * @param {any} callback The callback that is ignored since displayResultsToUser is a terminal operation in the pipeline.
 */
const displayResultsToUser = (pResults, callback) => {
  //# base case
  // console.log(JSON.stringify(pResults, null, 4));
  if (!pResults || (pResults && pResults.length === 0)) {
    console.log("Sorry, no results found.");
    return;
  }
  //# base case

  const displayString = map(pResults, formatOutputString).join("\n");

  console.log("Quick 10 Search Results:");
  console.log("~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("");
  console.log(`Double click while holding "Command" key to follow the link.`);
  console.log(displayString);
};

//==============================================================================================

/**
 * formatOutputString
 * ~~~~~~~~~~~~~~~~~~~~
 * Generates the formatted output string to be displayed for the processed result.
 *
 * @param {ProcessedResult} pResult The processed result
 * @param {number} index The position of the search result
 *
 * @returns {string} The processed and formatted result string
 */
const formatOutputString = (pResult, index) => {
  return `

  ${index + 1}. "${pResult.name}" is located at "${pResult.path}".
  URL: ${cyan(underline(bgBlack(pResult.url)))}

  `;
};

//==============================================================================================
