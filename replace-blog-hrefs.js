document.addEventListener("DOMContentLoaded", function () {
    // Function to get the value of a query parameter by name
    function getQueryParam(name) {
        scriptUrl = URL(document.currentScript.src)
        const urlParams = new URLSearchParams(scriptUrl.search);
        return urlParams.get(name);
    }

    const script = document.currentScript;
    // Get the 'domain' parameter from the query string
    // Default to ''
    const domain = script.getAttribute('domain') || ''; 
    const pathToReplace = script.getAttribute('pathToReplace') || '';
    const replacementPath = script.getAttribute('replacementPath') || '';

    console.log(domain);
    console.log(pathToReplace);
    console.log(replacementPath);

    // Select all <a> elements on the page
    document.querySelectorAll("a").forEach(link => {
        // Check if the href attribute contains the domain and path. 
        // The domain is included to make the match more specific, and not impact hrefs to other websites
        if (link.href.includes(domain + pathToReplace) || link.href.startsWith(pathToReplace)) {
            // Replace the pathMatchString in the href with a new string (example '/posts')
            link.href = link.href.replace(pathToReplace, replacementPath);
        }
    });
});
