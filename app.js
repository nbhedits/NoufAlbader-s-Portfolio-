// All portfolio content lives here. Edit this file to add or change work.

const GROUPS = [
  { id: "web", title: "Websites and web tools" },
  { id: "apps", title: "Apps (UI/UX)" },
  { id: "identity", title: "Design systems and UI work" },
];

const PROJECTS = [
  {
    id: "keplerr",
    group: "web",
    name: "Keplerr AI",
    sub: "Pulse",
    kind: "SaaS · Web app",
    status: { label: "Live", dot: "live" },
    summary: "Arabic-first SaaS for Saudi agencies. Client reporting and an approval portal in one place.",
    body: [
      "Clients open the portal, see every deliverable with its status, and approve or ask for changes. In Arabic or English, light or dark.",
      "Pulse is live now. BD and Command come next.",
    ],
    shot: "assets/work/pulse.jpg",
    facts: [["Product", "Pulse"], ["For", "Saudi agencies"], ["Language", "Arabic-first"], ["Next", "BD, Command"]],
    link: { href: "https://app.keplerrai.com/", label: "Open app.keplerrai.com" },
    art: { fx: "5%", fy: "-35%", sx: "-15%", sy: "-20%" },
  },
  {
    id: "marble",
    group: "web",
    name: "Marble",
    kind: "Website",
    status: { label: "Live", dot: "live" },
    summary: "Web studio for US med spas and aesthetic clinics. Websites that fill your calendar.",
    body: ["Clinics already pay for ads. Marble builds the site that turns that traffic into bookings."],
    facts: [["Type", "Website"], ["For", "US med spas, aesthetic clinics"], ["Hosting", "Vercel"]],
    shot: "assets/work/marble.jpg",
    link: { href: "https://marble-web-studio.vercel.app/", label: "Visit Marble" },
    art: { fx: "35%", fy: "-40%", sx: "20%", sy: "-35%" },
  },
  {
    id: "cariq",
    group: "apps",
    name: "CarIQ",
    kind: "Mobile app · UI/UX",
    status: { label: "App Store cycles", dot: "" },
    summary: "AI car-manual assistant for Saudi-spec cars. Built in FlutterFlow.",
    body: [
      "Car manuals are long and nobody reads them. CarIQ is an AI assistant that knows the manual for Saudi-spec cars.",
      "Pick your car, then ask AI about it or browse features and controls, warning lights, maintenance basics and FAQs.",
      "Designed and built in FlutterFlow, and taken through App Store submission cycles.",
    ],
    shot: "assets/work/cariq.jpg",
    facts: [["Built with", "FlutterFlow"], ["Market", "Saudi-spec cars"], ["Stage", "App Store submission"]],
    art: { fx: "40%", fy: "-25%", sx: "-5%", sy: "-40%" },
  },
  {
    id: "keplerr-identity",
    group: "identity",
    name: "Keplerr AI",
    sub: "Identity",
    kind: "Identity · Design system",
    status: { label: "Done", dot: "done" },
    summary: "Visual identity and UI system for Keplerr AI.",
    body: ["The visual identity behind Keplerr AI and the Pulse app."],
    facts: [["Scope", "Identity, UI"], ["Client", "Keplerr AI"]],
    art: { fx: "15%", fy: "-45%", sx: "10%", sy: "-25%" },
  },
  {
    id: "marble-identity",
    group: "identity",
    name: "Marble",
    sub: "Identity",
    kind: "Identity · Design system",
    status: { label: "Done", dot: "done" },
    summary: "Visual identity for Marble.",
    body: ["The visual identity for Marble's web studio."],
    facts: [["Scope", "Identity"], ["Client", "Marble"]],
    art: { fx: "-5%", fy: "-30%", sx: "30%", sy: "-30%" },
  },
];

// Content creation — each collection opens in Canva.
const CONTENT = [
  {
    title: "Live Event Highlights",
    kind: "Events",
    desc: "Ministry of Culture, Diriyah Season, Cyberani by Aramco, New Murabba, the Heritage Commission and the Environment Fund.",
    href: "https://canva.link/f4e3ibahg962lw4",
    art: { fx: "10%", fy: "-35%", sx: "-10%", sy: "-30%" },
  },
  {
    title: "Culinary Visuals",
    kind: "Restaurants",
    desc: "The D&G opening in Diriyah, Joe & the Juice, Angelina, Sarabeth's, Cova Café, The Sift, Maiz and more.",
    href: "https://canva.link/wzx1jnls7405pw0",
    art: { fx: "35%", fy: "-30%", sx: "15%", sy: "-40%" },
  },
  {
    title: "Heritage Storytelling",
    kind: "Diriyah",
    desc: "Diriyah told through video: Bujairi Terrace, Diriyah Season, Sada Al-Wadi and the Samri.",
    href: "https://canva.link/5j4v4cdgnrw9kh0",
    art: { fx: "-5%", fy: "-40%", sx: "25%", sy: "-25%" },
  },
  {
    title: "الاتحاد السعودي للرياضة للجميع",
    ar: true,
    kind: "Sports",
    desc: "Saudi Sports for All Federation: Les Mills Festival, Riyadh Marathon, Sand Clash Festival and the Move With Us marathon.",
    href: "https://canva.link/flanpztksadcm7w",
    art: { fx: "25%", fy: "-20%", sx: "-20%", sy: "-35%" },
  },
];

// ---------- helpers ----------
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function art(item, label) {
  const a = item.art || {};
  const style = `--fx:${a.fx};--fy:${a.fy};--sx:${a.sx};--sy:${a.sy}`;
  if (item.shot) {
    return `<div class="art art-shot" style="${style}">
      <span class="eyebrow art-kind" aria-hidden="true">${esc(label)}</span>
      <img src="${item.shot}" alt="${esc(item.name)} screen" loading="lazy">
    </div>`;
  }
  return `<div class="art" style="${style}" aria-hidden="true">
    <span class="eyebrow art-kind">${esc(label)}</span>
    <span class="art-word${item.ar ? " ar" : ""}"${item.ar ? ' dir="rtl"' : ""}>${esc(item.name || item.title)}</span>
  </div>`;
}

function chip(status) {
  return `<span class="chip"><span class="chip-dot ${status.dot}"></span>${esc(status.label)}</span>`;
}

function displayName(p) {
  if (p.sub === "Identity") return `${p.name} identity`;
  return p.sub ? `${p.name} (${p.sub})` : p.name;
}

function railControls(id) {
  return `<div class="rail-controls" data-for="${id}">
    <button class="rail-btn" type="button" data-dir="-1" aria-label="Previous">←</button>
    <button class="rail-btn" type="button" data-dir="1" aria-label="Next">→</button>
  </div>`;
}

// ---------- home ----------
function projectCard(p) {
  return `<a class="card" href="#work-${p.id}">
    ${art(p, p.sub || p.kind.split(" · ")[0])}
    <div class="card-body">
      <div class="card-title"><h4>${esc(displayName(p))}</h4>${chip(p.status)}</div>
      <p>${esc(p.summary)}</p>
      <span class="card-more">View project</span>
    </div>
  </a>`;
}

function contentCard(c) {
  return `<a class="card" href="${c.href}" target="_blank" rel="noopener">
    ${art(c, c.kind)}
    <div class="card-body">
      <div class="card-title"><h4${c.ar ? ' class="ar" dir="rtl"' : ""}>${esc(c.title)}</h4></div>
      <p>${esc(c.desc)}</p>
      <span class="card-more out">View the work</span>
    </div>
  </a>`;
}

function renderHome() {
  $("#groups").innerHTML = GROUPS.map((g) => {
    const items = PROJECTS.filter((p) => p.group === g.id);
    const railId = `rail-${g.id}`;
    return `<div class="group">
      <div class="group-head">
        <h3>${esc(g.title)}</h3>
        <span class="caption">${items.length} ${items.length === 1 ? "project" : "projects"}</span>
        ${railControls(railId)}
      </div>
      <div class="rail" id="${railId}">${items.map(projectCard).join("")}</div>
    </div>`;
  }).join("");

  $("#rail-content").innerHTML = CONTENT.map(contentCard).join("");
  setupRails();
}

// Arrow buttons slide a row by one card; they dim at either end.
function setupRails() {
  document.querySelectorAll(".rail-controls").forEach((ctrl) => {
    const rail = document.getElementById(ctrl.dataset.for);
    const [prev, next] = ctrl.querySelectorAll(".rail-btn");
    const update = () => {
      const max = rail.scrollWidth - rail.clientWidth;
      prev.disabled = rail.scrollLeft <= 2;
      next.disabled = rail.scrollLeft >= max - 2;
      ctrl.hidden = max <= 2;
    };
    ctrl.querySelectorAll(".rail-btn").forEach((btn) =>
      btn.addEventListener("click", () => {
        const card = rail.firstElementChild;
        const step = card ? card.getBoundingClientRect().width + 20 : rail.clientWidth;
        rail.scrollBy({ left: step * Number(btn.dataset.dir), behavior: "smooth" });
      })
    );
    rail.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });
}

// ---------- project page ----------
function renderProject(p) {
  const group = GROUPS.find((g) => g.id === p.group);
  return `<a class="btn btn-glass back" href="#work">All work</a>
  <div class="detail">
    ${art(p, p.sub || p.kind.split(" · ")[0])}
    <div class="detail-copy">
      <p class="eyebrow">${esc(group.title)}</p>
      <h1>${esc(displayName(p))}</h1>
      <div class="chips"><span class="chip">${esc(p.kind)}</span>${chip(p.status)}</div>
      <p class="lead">${esc(p.summary)}</p>
      ${p.body.map((b) => `<p>${esc(b)}</p>`).join("")}
      <dl class="facts">${p.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
      <div class="detail-actions">
        ${p.link ? `<a class="btn btn-sapphire" href="${p.link.href}" target="_blank" rel="noopener">${esc(p.link.label)} ↗</a>` : ""}
        <a class="btn btn-glass" href="#work">Back to all work</a>
      </div>
    </div>
  </div>`;
}

// ---------- router ----------
// Hashes are plain tokens: #work, #content, #work-keplerr
const HOME_ANCHORS = ["", "top", "work", "content", "about", "contact"];

function route() {
  const hash = location.hash.slice(1);
  const view = $("#view");
  const home = $("#home");

  if (HOME_ANCHORS.includes(hash)) {
    view.hidden = true;
    home.hidden = false;
    window.dispatchEvent(new Event("resize")); // re-check slide buttons now the rows are visible
    const target = hash && hash !== "top" ? document.getElementById(hash) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
    return;
  }

  const p = hash.startsWith("work-") && PROJECTS.find((x) => x.id === hash.slice(5));
  if (!p) { location.hash = ""; return; }

  home.hidden = true;
  view.hidden = false;
  view.innerHTML = renderProject(p);
  window.scrollTo(0, 0);
}

// ---------- copy email ----------
$("#copy-email").addEventListener("click", async (e) => {
  const btn = e.currentTarget;
  const email = $("#email").textContent;
  try {
    await navigator.clipboard.writeText(email);
    btn.textContent = "Copied";
  } catch {
    const r = document.createRange();
    r.selectNodeContents($("#email"));
    const s = getSelection();
    s.removeAllRanges();
    s.addRange(r);
    btn.textContent = "Selected, press copy";
  }
  setTimeout(() => (btn.textContent = "Copy email"), 2000);
});

$("#year").textContent = new Date().getFullYear();
renderHome();
window.addEventListener("hashchange", route);
route();
