(function () {
  "use strict";

  document.querySelectorAll("[data-tabs]").forEach(function (tabs) {
    var buttons = Array.from(tabs.querySelectorAll('[role="tab"]'));
    var panels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

    function activate(button) {
      buttons.forEach(function (item) {
        var selected = item === button;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-selected", String(selected));
        item.tabIndex = selected ? 0 : -1;
      });

      panels.forEach(function (panel) {
        panel.hidden = panel.id !== button.getAttribute("aria-controls");
      });
    }

    buttons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        activate(button);
      });

      button.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        var direction = event.key === "ArrowRight" ? 1 : -1;
        var next = (index + direction + buttons.length) % buttons.length;
        buttons[next].focus();
        activate(buttons[next]);
      });
    });
  });

  document.querySelectorAll("a[href]").forEach(function (link) {
    if (link.hostname && link.hostname !== window.location.hostname) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
})();
