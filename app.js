/* AI Ecosystem Certification Portal — app.js */
(function () {
  "use strict";

  var DATA_URL = "site/data/course-data.json";
  var STORAGE_KEY = "aiec_user";

  var $ = function (id) { return document.getElementById(id); };
  var authView        = $("auth-view");
  var portalView      = $("portal-view");
  var heroKicker      = $("hero-kicker");
  var heroTitle       = $("hero-title");
  var heroHeadline    = $("hero-headline");
  var heroSubheadline = $("hero-subheadline");
  var statRibbon      = $("stat-ribbon");
  var audienceList    = $("audience-list");
  var outcomeList     = $("outcome-list");
  var moduleGrid      = $("module-grid");
  var loginTitle      = $("login-title");
  var loginSubheadline = $("login-subheadline");
  var loginForm       = $("login-form");
  var loginFeedback   = $("login-feedback");
  var logoutButton    = $("logout-button");
  var portalTitle     = $("portal-title");

  function show(el) { if (el) el.classList.remove("hidden"); }
  function hide(el) { if (el) el.classList.add("hidden"); }
  function isLoggedIn() { return !!localStorage.getItem(STORAGE_KEY); }
  function setLoggedIn(email) { localStorage.setItem(STORAGE_KEY, email); }
  function clearLogin() { localStorage.removeItem(STORAGE_KEY); }

  var escDiv = document.createElement("div");
  function esc(str) {
    escDiv.textContent = str;
    return escDiv.innerHTML;
  }

  function statHtml(label, value) {
    return '<div class="stat"><span class="stat-value">' + esc(String(value)) + '</span><span class="stat-label">' + esc(label) + "</span></div>";
  }

  function renderMarketing(data) {
    if (heroKicker)       heroKicker.textContent      = data.kicker || "";
    if (heroTitle)        heroTitle.textContent        = data.title || "";
    if (heroHeadline)     heroHeadline.textContent     = data.headline || "";
    if (heroSubheadline)  heroSubheadline.textContent  = data.subheadline || "";

    if (statRibbon && data.stats) {
      statRibbon.innerHTML = [
        statHtml("Lessons", data.stats.lessonCount),
        statHtml("Runtime", data.stats.runtime),
        statHtml("Format",  data.stats.format)
      ].join("");
    }

    if (audienceList && data.audience) {
      audienceList.innerHTML = data.audience
        .map(function (a) { return '<span class="pill">' + esc(a) + "</span>"; })
        .join("");
    }

    if (outcomeList && data.outcomes) {
      outcomeList.innerHTML = data.outcomes
        .map(function (o) {
          return '<div class="check-item"><span class="check-icon">&#10003;</span> ' + esc(o) + "</div>";
        })
        .join("");
    }

    if (data.login) {
      if (loginTitle)       loginTitle.textContent       = data.login.title || "";
      if (loginSubheadline) loginSubheadline.textContent = data.login.subheadline || "";
      if (data.login.kitFormAction && loginForm) {
        loginForm.action = data.login.kitFormAction;
        loginForm.method = "post";
        loginForm.target = "kit-optin-frame";
      }
    }
  }

  function renderFocus(items) {
    if (!items || !items.length) return "";
    return '<ul class="module-focus">' +
      items.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") +
      "</ul>";
  }

  function renderVideo(m) {
    if (!m.video) return "";
    var poster = m.poster ? ' poster="' + esc(m.poster) + '"' : "";
    return '<video class="module-video" controls preload="none"' + poster + ">" +
      '<source src="' + esc(m.video) + '" type="video/mp4">' +
      "</video>";
  }

  function renderPortal(data) {
    var email = localStorage.getItem(STORAGE_KEY) || "";
    if (portalTitle) {
      portalTitle.textContent = "Welcome, " + email.split("@")[0] + ".";
    }

    if (moduleGrid && data.modules) {
      moduleGrid.innerHTML = data.modules.map(function (m) {
        return (
          '<article class="module-card reveal" id="' + esc(m.id) + '">' +
            '<div class="module-meta">' +
              '<span class="module-order">' + esc(m.orderLabel) + "</span>" +
              '<span class="module-duration">' + esc(m.duration) + "</span>" +
            "</div>" +
            '<h3 class="module-title">' + esc(m.title) + "</h3>" +
            '<p class="module-headline">' + esc(m.headline) + "</p>" +
            '<p class="module-sub">' + esc(m.subheadline) + "</p>" +
            renderFocus(m.focus) +
            renderVideo(m) +
          "</article>"
        );
      }).join("");
    }
  }

  function showAuth() {
    show(authView);
    hide(portalView);
    hide(logoutButton);
  }

  function showPortal(data) {
    hide(authView);
    show(portalView);
    show(logoutButton);
    renderPortal(data);
  }

  function boot() {
    fetch(DATA_URL)
      .then(function (r) {
        if (!r.ok) throw new Error("Failed to load course data (" + r.status + ")");
        return r.json();
      })
      .then(function (data) {
        renderMarketing(data);

        if (isLoggedIn()) {
          showPortal(data);
        } else {
          showAuth();
        }

        if (loginForm) {
          loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var emailInput = document.getElementById("email");
            var email = emailInput ? emailInput.value.trim() : "";
            if (!email) return;

            setLoggedIn(email);
            if (loginFeedback) {
              loginFeedback.textContent = "Access granted. Loading portal...";
              loginFeedback.style.color = "var(--color-success, #22c55e)";
            }

            var optIn = document.getElementById("newsletter-optin");
            if (loginForm.action && loginForm.action !== window.location.href && optIn && optIn.checked) {
              var kitForm = loginForm.cloneNode(true);
              kitForm.style.display = "none";
              document.body.appendChild(kitForm);
              kitForm.submit();
              document.body.removeChild(kitForm);
            }

            setTimeout(function () { showPortal(data); }, 600);
          });
        }

        if (logoutButton) {
          logoutButton.addEventListener("click", function () {
            clearLogin();
            showAuth();
          });
        }
      })
      .catch(function (err) {
        console.error("app.js:", err);
        if (loginFeedback) {
          loginFeedback.textContent = "Error loading course data. Please refresh.";
          loginFeedback.style.color = "#ef4444";
        }
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
