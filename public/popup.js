document.getElementById('injectButton').addEventListener('click', async () => {
    try {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: loadReactBundle,
            args: [chrome.runtime.getURL("static/js/main.b86ee573.js")]
        });

    } catch (error) {
        console.error('Failed to inject React bundle:', error);
    }
});

function loadReactBundle(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true; // Non-blocking loading
        script.type = "text/javascript"
        script.onload = () => {
            console.log('React bundle loaded successfully');
            resolve();
        };

        script.onerror = (error) => {
            console.error('Error loading React bundle:', error);
            reject(error);
        };

        document.body.appendChild(script);
    });
}