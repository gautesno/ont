/*
 * Listen for clicks on buttons, and send the appropriate message to the content
 * scripts in the page.
 */
function listenForClick() {
    document.addEventListener("click", (e) => {
        
        /**
         * Given the 
         */
    });
}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute beastify content script: ${error.message}`);
}

/**
 * When the addon loads, inject the content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
browser.tabs.executeScript({file: "/content_scripts/newtab.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);