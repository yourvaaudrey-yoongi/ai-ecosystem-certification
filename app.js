const dataUrl = "site/data/course-data.json";
const sessionKey = "aiEcosystemCertificationUser";

function makeChip(text) {
  const chip = document.createElement("span");
  chip.className = "stat-chip";
  chip.textContent = text;
  return chip;
}

function makePill(text) {
  const pill = document.createElement("span");
  pill.className = "pill";
  pill.textContent = text;
  return pill;
}

function makeCheck(text) {
  const row = document.createElement("div");
  row.className = "check-item";
  const label = document.createElement("div");
  label.textContent = text;
  row.append(label);
  return row;
}

/* ===== NEW LOGIC START ===== */

function hasVideoContent(module) {
  return Boolean(module.video && String(module.video).trim());
}

function isComingSoonLabel(value) {
  return String(value || "").trim().toLowerCase() === "coming soon";
}

function formatRuntime(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "Coming soon";
  }

  const totalSeconds = Math.round(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  if (minutes <= 0) {
    return `0m ${remainingSeconds}s`;
  }

  return `${minutes}m ${remainingSeconds}s`;
}

function getInitialRuntimeLabel(module) {
  if (!hasVideoContent(module)) {
    return "Coming soon";
  }

  if (!isComingSoonLabel(module.duration) && String(module.duration || "").trim()) {
    return module.duration;
  }

  return "Loading runtime...";
}

/* ===== NEW LOGIC END ===== */

function createModuleCard(module) {
  const article = document.createElement("article");
  article.className = "module-card reveal";

  const video = document.createElement("video");
  video.controls = true;
  video.preload = "metadata";
  video.poster = module.poster;
  video.src = module.video;
  article.append(video);

  const body = document.createElement("div");
  body.className = "module-body";

  const meta = document.createElement("div");
  meta.className = "module-meta";

  const order = document.createElement("span");
  order.className = "module-order";
  order.textContent = module.orderLabel;

  const duration = document.createElement("span");
  duration.className = "module-duration";
  duration.textContent = getInitialRuntimeLabel(module);

  meta.append(order, duration);
  body.append(meta);

  const title = document.createElement("h3");
  title.className = "module-title";
  title.textContent = module.title;
  body.append(title);

  const headline = document.createElement("p");
  headline.className = "module-headline";
  headline.textContent = module.headline;
  body.append(headline);

  const subheadline = document.createElement("p");
  subheadline.className = "module-subheadline";
  subheadline.textContent = module.subheadline;
  body.append(subheadline);

  const tags = document.createElement("div");
  tags.className = "module-tags";
  const cardTags = ["Video lesson", "Checklist exercise", "AI ecosystem curriculum"];

  if (!hasVideoContent(module)) {
    cardTags.push("Placeholder module");
  }

  cardTags.forEach((text) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = text;
    tags.append(tag);
  });
  body.append(tags);

  if (hasVideoContent(module)) {
    video.addEventListener("loadedmetadata", () => {
      duration.textContent = formatRuntime(video.duration);
    });

    video.addEventListener("error", () => {
      duration.textContent = "Coming soon";
    });
  } else {
    duration.textContent = "Coming soon";
  }

  const lessonBlock = document.createElement("div");
  lessonBlock.className = "lesson-block";

  const heading = document.createElement("h4");
  heading.textContent = "Checklist Of What You Learned";
  lessonBlock.append(heading);

  const checklist = document.createElement("div");
  checklist.className = "module-checklist";
  module.focus.forEach((item, index) => {
    const row = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = `${module.id}-${index}`;
    const text = document.createElement("span");
    text.textContent = item;
    row.append(input, text);
    checklist.append(row);
  });
  lessonBlock.append(checklist);
  body.append(lessonBlock);

  article.append(body);
  return article;
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
}

function setRevealState(rootSelector, isVisible) {
  document.querySelectorAll(`${rootSelector} .reveal`).forEach((node) => {
    node.classList.toggle("is-visible", isVisible);
  });
}

function updateAuthView() {
  const user = localStorage.getItem(sessionKey);
  const authView = document.getElementById("auth-view");
  const portalView = document.getElementById("portal-view");
  const logoutButton = document.getElementById("logout-button");
  const portalTitle = document.getElementById("portal-title");

  if (user) {
    authView.classList.add("hidden");
    portalView.classList.remove("hidden");
    logoutButton.classList.remove("hidden");
    portalTitle.textContent = `Welcome, ${user}`;
    setRevealState("#portal-view", true);
  } else {
    authView.classList.remove("hidden");
    portalView.classList.add("hidden");
    logoutButton.classList.add("hidden");
    setRevealState("#auth-view", true);
  }

  setupReveal();
}

function submitKitOptIn(loginConfig, email) {
  const formAction = (loginConfig.kitFormAction || "").trim();
  if (!formAction) {
    return false;
  }

  const form = document.createElement("form");
  form.method = "post";
  form.action = formAction;
  form.target = "kit-optin-frame";
  form.style.display = "none";

  const fields = {
    email_address: email,
    ...(loginConfig.kitTag ? { tag: loginConfig.kitTag } : {}),
    ...(loginConfig.kitSource ? { source: loginConfig.kitSource } : {})
  };

  Object.entries(fields).forEach(([name, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.append(input);
  });

  document.body.append(form);
  form.submit();
  window.setTimeout(() => form.remove(), 1000);
  return true;
}

async function init() {
  const response = await fetch(dataUrl);
  const data = await response.json();

  document.title = data.title;
  document.getElementById("hero-kicker").textContent = data.kicker;
  document.getElementById("hero-title").textContent = data.title;
  document.getElementById("hero-headline").textContent = data.headline;
  document.getElementById("hero-subheadline").textContent = data.subheadline;
  document.getElementById("login-title").textContent = data.login.title;
  document.getElementById("login-subheadline").textContent = data.login.subheadline;

  const statRibbon = document.getElementById("stat-ribbon");
  statRibbon.append(
    makeChip(`${data.stats.lessonCount} video modules`),
    makeChip(`${data.stats.runtime} total runtime`),
    makeChip(data.stats.format)
  );

  const audienceList = document.getElementById("audience-list");
  data.audience.forEach((item) => audienceList.append(makePill(item)));

  const outcomeList = document.getElementById("outcome-list");
  data.outcomes.forEach((item) => outcomeList.append(makeCheck(item)));

  const moduleGrid = document.getElementById("module-grid");
  data.modules.forEach((module) => moduleGrid.append(createModuleCard(module)));

  const loginForm = document.getElementById("login-form");
  const feedback = document.getElementById("login-feedback");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const wantsNewsletter = document.getElementById("newsletter-optin").checked;

    if (!email) {
      feedback.textContent = "Enter your email to continue.";
      return;
    }

    const optedIn = wantsNewsletter ? submitKitOptIn(data.login, email) : false;

    const firstName = email.split("@")[0].replace(/[._-]/g, " ");
    const normalized = firstName.replace(/\b\w/g, (char) => char.toUpperCase());
    localStorage.setItem(sessionKey, normalized || "Member");
    feedback.textContent = optedIn
      ? "Access granted. Your email was also sent to the newsletter form."
      : "Access granted. Opening the certification portal.";
    updateAuthView();
    document.getElementById("portal-view").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("logout-button").addEventListener("click", () => {
    localStorage.removeItem(sessionKey);
    updateAuthView();
    window.location.hash = "";
  });

  updateAuthView();
}

init().catch((error) => {
  console.error(error);
});
