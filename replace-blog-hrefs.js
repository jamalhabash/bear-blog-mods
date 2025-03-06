document.addEventListener("DOMContentLoaded", function () {
    // Function to get the value of a query parameter by name
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Get the 'domain' parameter from the query string
    // Default to ''
    const domainMatchString = getQueryParam('domain') || ''; 
    const pathMatchString = getQueryParam('pathToReplace') || '';
    const pathReplacementString = getQueryParam('replacementPath') || '';

    // Select all <a> elements on the page
    document.querySelectorAll("a").forEach(link => {
        // Check if the href attribute contains the domain and path. 
        // The domain is included to make the match more specific, and not impact hrefs to other websites
        if (link.href.includes(domainMatchString + pathMatchString)) {
            // Replace the pathMatchString in the href with a new string (example '/posts')
            link.href = link.href.replace(pathMatchString, replacementPath);
        }
    });
});
