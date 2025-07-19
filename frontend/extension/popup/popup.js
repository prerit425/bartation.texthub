// popup/popup.js
document.getElementById("countBtn").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getSelectedText,
  }, ([result]) => {
    const text = result.result || "";
    const wordCount = text.trim().split(/\s+/).length;
    document.getElementById("result").innerText = `Word Count: ${wordCount}`;
  });
});

function getSelectedText() {
  return window.getSelection().toString();
}
