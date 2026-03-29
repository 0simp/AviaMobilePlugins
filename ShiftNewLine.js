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
        let text = ''
        const firstLine = document.getElementsByClassName('cm-line').item(0)
        for(const child of firstLine.parentElement.children){
          text = text+`${child.children[0].textContent}\n`
        }
        editor.textContent = text
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
