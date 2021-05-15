document.addEventListener('DOMContentLoaded', () => {
    let goDefault = document.getElementById("goDefault");
    let input = document.getElementById("input");

    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            execute();
        }
    });

    goDefault.addEventListener("click", async () => {
        execute();
    })
})

async function execute() {
    // get current tab
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    let inputVal = input.value;

    if(inputVal === 'csr8' || inputVal === 'csr9') {
        const match = tab.url.match(/(dev[0-9]{1,2})/)
        if (match) {
            const newUrl = tab.url.replace(match[0], inputVal);
            chrome.tabs.create({url:newUrl});
        }
    }
}
