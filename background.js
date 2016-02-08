
function getWordThenSearch(info, tab) {

    // if (typeof info.selectionText === "undefined") { console.log("Selection text is undefined"); }
    // if (info.menuItemId === "context_for_page") { console.log("PAGE is selected"); }
    
    //Currently this simply checks for which menu item was clicked.
    if (info.menuItemId === "context_for_all_but_page" && typeof info.selectionText !== "undefined") {
        chrome.tabs.create({ 
            url: "http://www.yes24.com/searchcorner/Search?query=" + info.selectionText
        });
    }
}

chrome.contextMenus.onClicked.addListener(getWordThenSearch);
chrome.runtime.onInstalled.addListener(function() {
    var contexts = ["selection","link","editable"];
    chrome.contextMenus.create({
        "title": " YES24에서 \"%s\" 도서 검색",
        "contexts": contexts,
        "id": "context_for_all_but_page"
    });

    // chrome.contextMenus.create({
    //     "title": "그냥 페이지에서 오른쪽 눌렀을 때",
    //     "contexts": ["page"],
    //     "id": "context_for_page"
    // });
});