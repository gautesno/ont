 
(function () {
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
        switch (message.command) {
            case 'addRule':
                console.log("Add rule");
                break;
            case 'seeRules':
                console.log("See rule(s)");
                break;
            case 'manual':
                console.log("Open manual");
                break;
        }
        /*
        if (message.command === "addRule") {
            
        } else if (message.command === "seeRules") {
            
        } else if (message.command === "manual") {
            
        }
        */
    })
})();