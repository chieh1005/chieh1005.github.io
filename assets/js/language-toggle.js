// Global language toggle functionality
(function () {
  function initLanguageToggle() {
    var langBtns = document.querySelectorAll(".lang-btn");
    var langContents = document.querySelectorAll(".lang-content");
    var currentLang = localStorage.getItem("preferred-lang") || "en";

    if (langBtns.length === 0) return;

    function setLanguage(lang) {
      localStorage.setItem("preferred-lang", lang);

      // Update button states
      langBtns.forEach(function (btn) {
        var isActive = btn.getAttribute("data-lang") === lang;
        btn.classList.toggle("active", isActive);
        if (isActive) {
          btn.style.background = "var(--aw-accent)";
          btn.style.color = "#fff";
          btn.style.fontWeight = "600";
        } else {
          btn.style.background = "transparent";
          btn.style.color = "var(--global-text-color-light)";
          btn.style.fontWeight = "500";
        }
      });

      // Update content visibility
      langContents.forEach(function (content) {
        var isActive = content.getAttribute("data-lang") === lang;
        content.classList.toggle("active", isActive);
        if (isActive) {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });

      // Re-trigger animation for reveal elements if they exist
      if (document.querySelectorAll(".aw-reveal").length > 0) {
        setTimeout(function () {
          document.querySelectorAll(".aw-reveal").forEach(function (el) {
            el.classList.remove("in");
          });
        }, 50);
      }
    }

    // Add click listeners to all language buttons
    langBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLanguage(this.getAttribute("data-lang"));
      });
    });

    // Initialize with saved language
    setLanguage(currentLang);
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguageToggle);
  } else {
    initLanguageToggle();
  }
})();
