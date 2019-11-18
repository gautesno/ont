/* eslint-env browser, node, global */
/* eslint no-console: "off" */

(function() {
    /**
     * Check and set a global guard variable.
     * If the script is injected into the same page again,
     * it will do nothing.
     */
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;
    
    /** 
     * Listen for messages from the background script.
     * Call "addRule()", "seeRules()" or "manual()".
     */
    browser.runtime.onMessage.addListener((message) => {
        if (message.command === "addRule") {
            
        } else if (message.command === "seeRules") {
            
        } else if (message.command === "manual") {
            
        }
    })
})();