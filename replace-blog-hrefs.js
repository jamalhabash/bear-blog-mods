const script = document.currentScript;

document.addEventListener("DOMContentLoaded", function () {
    // Get values from the <script> attributes, default to ''
    const domain = script.getAttribute('domain') || ''; 
    const pathToReplace = script.getAttribute('pathToReplace') || '/blog';
    const replacementPath = script.getAttribute('replacementPath') || '';

    // Select all <a> elements on the page
    document.querySelectorAll("a").forEach(link => {
        // Replace all instances of href to the /blog path.
        // The match is made more specific by checking if the domain is included in the href
        // There are places in bearblog where the domain is not in the href, in that case check if the href is just the path, which means it points to our website.
        if (link.href.includes(domain + pathToReplace) || link.href.startsWith(pathToReplace)) {
            // Replace the pathMatchString in the href with a new string (example '/posts')
            link.href = link.href.replace(pathToReplace, replacementPath);
        }
    });
});
