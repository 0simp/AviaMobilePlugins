(function () {

  function hookEditor(editor) {
    if (editor.__shiftNewLineHooked) return;
    editor.__shiftNewLineHooked = true;

    editor.addEventListener("keydown", (e) => {

      if (e.key !== "Enter") return;

      if(e.shiftKey){
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        const text = editor.textContent
        if(text!=editor.ariaPlaceholder){
            editor.textContent=text+'\n'
        }
      }else{
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        const sendButton = [...document.querySelectorAll("button")]
          .find(b => b.innerText.includes("send"));

        if (sendButton) sendButton.click();
      }

    }, true);

  }

  const observer = new MutationObserver(() => {
    const editor = document.querySelector(".cm-content[contenteditable='true']");
    if (editor) hookEditor(editor);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

})();