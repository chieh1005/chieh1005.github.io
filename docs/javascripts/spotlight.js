// Track the pointer over grid cards so the spotlight follows the cursor.
// Delegated on document so it keeps working after MkDocs instant navigation.
document.addEventListener("pointermove", function (e) {
  if (!e.target.closest || !window.matchMedia("(hover: hover)").matches) return;
  var card = e.target.closest(".md-typeset .grid.cards > *");
  if (!card) return;
  var r = card.getBoundingClientRect();
  card.style.setProperty("--mx", e.clientX - r.left + "px");
  card.style.setProperty("--my", e.clientY - r.top + "px");
});
