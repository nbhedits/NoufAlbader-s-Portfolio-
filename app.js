// All portfolio content lives here. Edit this file to add or change work.

const GROUPS = [
  { id: "web", title: "Websites and web tools" },
  { id: "apps", title: "Apps (UI/UX)" },
  { id: "identity", title: "Design systems and UI work" },
  { id: "campaigns", title: "Campaigns and content" },
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
    body: ["Pulse is live now. BD and Command come next."],
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
    summary: "Web studio website.",
    body: ["Web studio website, live on Vercel."],
    facts: [["Type", "Website"], ["Hosting", "Vercel"]],
    link: { href: "https://marble-web-studio.vercel.app/", label: "Visit Marble" },
    art: { fx: "35%", fy: "-40%", sx: "20%", sy: "-35%" },
  },
  {
    id: "onemove",
    group: "web",
    name: "ONE-MOVE",
    kind: "Website",
    status: { label: "Live", dot: "live" },
    summary: "Website, live at onemove.site.",
    body: ["Website, live at onemove.site."],
    facts: [["Type", "Website"], ["Domain", "onemove.site"]],
    link: { href: "https://www.onemove.site/", label: "Visit ONE-MOVE" },
    art: { fx: "-10%", fy: "-20%", sx: "-20%", sy: "-45%" },
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
      "Designed and built in FlutterFlow, and taken through App Store submission cycles.",
    ],
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
  {
    id: "onemove-identity",
    group: "identity",
    name: "ONE-MOVE",
    sub: "Identity",
    kind: "Identity · Design system",
    status: { label: "Done", dot: "done" },
    summary: "Visual identity for ONE-MOVE.",
    body: ["The visual identity for ONE-MOVE."],
    facts: [["Scope", "Identity"], ["Client", "ONE-MOVE"]],
    art: { fx: "30%", fy: "-15%", sx: "-25%", sy: "-30%" },
  },
  {
    id: "shades",
    group: "campaigns",
    name: "Shades Beach",
    kind: "Social · Campaign",
    status: { label: "Monthly", dot: "live" },
    summary: "Monthly posts and stories for Shades Beach in Jeddah, plus a November campaign.",
    body: [
      "Monthly posts and stories for Shades Beach in Jeddah.",
      "And a November campaign built around activities and workshops.",
    ],
    facts: [["Location", "Jeddah"], ["Output", "Posts, stories"], ["Campaign", "November: activities and workshops"]],
    art: { fx: "20%", fy: "-40%", sx: "0%", sy: "-35%" },
  },
  {
    id: "hakkaka",
    group: "campaigns",
    name: "Hakkaka Najdiya",
    kind: "Copywriting · Instagram",
    status: { label: "Ongoing", dot: "" },
    summary: "Instagram captions written in the account's Saudi white-dialect voice.",
    body: ["Instagram captions for Hakkaka Najdiya, written in the account's own Saudi white-dialect voice."],
    facts: [["Platform", "Instagram"], ["Voice", "Saudi white dialect"], ["Output", "Captions"]],
    art: { fx: "0%", fy: "-25%", sx: "15%", sy: "-40%" },
  },
];

// Content creation — pages from the Canva "Portfolio" folder.
const CONTENT = [
  {
    id: "events",
    title: "Live Event Highlights",
    desc: "Event coverage for the Ministry of Culture, Diriyah Season, Cyberani by Aramco, New Murabba, the Heritage Commission and the Environment Fund.",
    shots: [
      ["مسرحية ترحال 2025 · وزارة الثقافة", true],
      ["مسرحية ترحال 2025", true],
      ["حفل توزيع الجوائز الثقافية · وزارة الثقافة", true],
      ["Diriyah Season 24/25"],
      ["Diriyah Season 24/25"],
      ["Cyberani Corporate by Aramco"],
      ["New Murabba"],
      ["معرض بنان للحرف اليدوية · هيئة التراث", true],
      ["اليوم الوطني السعودي من قلب الدرعية", true],
      ["Saudi Games · Diriyah"],
      ["مبادرة خطى مستدامة مع صندوق البيئة", true],
    ],
  },
  {
    id: "culinary",
    title: "Culinary Visuals",
    desc: "Restaurant and café content: the D&G opening in Diriyah, Joe & the Juice, Angelina, Sarabeth's, Cova Café, The Sift, Maiz and more.",
    shots: [
      ["Flamingo Room"],
      ["Dolce & Gabbana · Opening of the largest branch, Diriyah"],
      ["Joe & the Juice"],
      ["Joe & the Juice"],
      ["Angelina"],
      ["Sarabeth's"],
      ["Brunch & Cake"],
      ["Cova Café"],
      ["The Sift"],
      ["The Sift"],
      ["Maiz"],
    ],
  },
  {
    id: "heritage",
    title: "Heritage Storytelling",
    descAr: "أقدّم محتوى فيديو احترافي يوثّق أجواء وفعاليات الدرعية بأسلوب إبداعي ينقل التجربة الحقيقية للجمهور. أركّز على إبراز التفاصيل، الطاقة، وروح المكان من خلال قصص بصرية جذابة تساعد الجهات والعلامات التجارية على الوصول لجمهورها وتعزيز حضورها في السوشال ميديا. هدفي تحويل كل فعالية ولحظة إلى محتوى مؤثر يلفت الانتباه ويترك انطباعًا لا يُنسى.",
    desc: "Diriyah, told through video: Bujairi Terrace, Diriyah Season, Sada Al-Wadi and the Samri.",
    shots: [
      ["Diriyah · @visitdiriyah · @bujairiterrace · @diriyahseason"],
      ["Diriyah"],
      ["Bujairi Terrace"],
      ["صدى الوادي · Sada Al-Wadi", true],
      ["السامري في الدرعية", true],
      ["Diriyah Season · منزال"],
      ["Diriyah Season · معرض الإمام تركي بن عبدالله"],
    ],
  },
  {
    id: "sports",
    title: "الاتحاد السعودي للرياضة للجميع",
    titleAr: true,
    label: "Sports",
    desc: "Content for the Saudi Sports for All Federation: Les Mills Festival, Riyadh Marathon, Sand Clash Festival and the Move With Us marathon.",
    shots: [
      ["Les Mills Festival 2024 · Riyadh Marathon 2024 · تدريبات المجموعات قبل الماراثون 2025"],
      ["ماراثون تحرك معنا 2025 · Sand Clash Festival 2024"],
      ["Group training runs"],
    ],
  },
];

const IMG_EXT = "png";
const shotSrc = (section, i) => `assets/content/${section}/${String(i + 1).padStart(2, "0")}.${IMG_EXT}`;

// ---------- helpers ----------
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const hasArabic = (s) => /[؀-ۿ]/.test(s);
const textSpan = (s) => (hasArabic(s) ? `<span class="ar" dir="auto">${esc(s)}</span>` : esc(s));

function art(p, big) {
  const a = p.art || {};
  const style = `--fx:${a.fx};--fy:${a.fy};--sx:${a.sx};--sy:${a.sy}`;
  return `<div class="art" style="${style}" aria-hidden="true">
    <span class="eyebrow art-kind">${esc(p.sub || p.kind.split(" · ")[0])}</span>
    <span class="art-word${p.ar ? " ar" : ""}"${p.ar ? ' dir="rtl"' : ""}>${esc(p.name)}</span>
  </div>`;
}

function chip(status) {
  return `<span class="chip"><span class="chip-dot ${status.dot}"></span>${esc(status.label)}</span>`;
}

function displayName(p) {
  return p.sub && p.sub !== "Identity" ? `${p.name} (${p.sub})` : p.sub ? `${p.name} identity` : p.nameLatin || p.name;
}

// ---------- home ----------
function renderHome() {
  $("#groups").innerHTML = GROUPS.map((g) => {
    const items = PROJECTS.filter((p) => p.group === g.id);
    return `<div class="group">
      <div class="group-head"><h3>${esc(g.title)}</h3><span class="caption">${items.length} ${items.length === 1 ? "project" : "projects"}</span></div>
      <div class="grid">${items.map(card).join("")}</div>
    </div>`;
  }).join("");

  $("#feature-list").innerHTML = CONTENT.map((c) =>
    `<li><span>${c.titleAr ? `<span class="ar">${esc(c.title)}</span>` : esc(c.title)}</span><span class="caption">${c.shots.length} pages</span></li>`
  ).join("");

  // first image of each collection
  const picks = [["events", 3], ["culinary", 1], ["heritage", 2], ["sports", 0]];
  $("#mosaic").innerHTML = picks.map(([s, i]) => `<img src="${shotSrc(s, i)}" alt="" loading="lazy">`).join("");
}

function card(p) {
  return `<a class="card" href="#work-${p.id}">
    ${art(p)}
    <div class="card-body">
      <div class="card-title"><h4>${esc(displayName(p))}</h4>${chip(p.status)}</div>
      <p>${esc(p.summary)}</p>
      <span class="card-more">View project</span>
    </div>
  </a>`;
}

// ---------- views ----------
function renderProject(p) {
  const group = GROUPS.find((g) => g.id === p.group);
  return `<a class="btn btn-ghost back" href="#work">All work</a>
  <div class="detail">
    ${art(p, true)}
    <div class="detail-copy">
      <p class="eyebrow">${esc(group.title)}</p>
      <h1>${esc(displayName(p))}</h1>
      <div class="chips"><span class="chip">${esc(p.kind)}</span>${chip(p.status)}</div>
      <p class="lead">${esc(p.summary)}</p>
      ${p.body.map((b) => `<p>${esc(b)}</p>`).join("")}
      <dl class="facts">${p.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
      <div class="detail-actions">
        ${p.link ? `<a class="btn btn-navy" href="${p.link.href}" target="_blank" rel="noopener">${esc(p.link.label)} ↗</a>` : ""}
        <a class="btn btn-glass" href="#work">Back to all work</a>
      </div>
    </div>
  </div>`;
}

function renderHub() {
  return `<a class="btn btn-ghost back" href="#content">Home</a>
  <div class="hub-head">
    <p class="eyebrow">Content creation</p>
    <h1>Four collections. Real moments.</h1>
    <p>I shoot, edit and tell the story on the ground. Pick a collection.</p>
  </div>
  <div class="hub-grid">${CONTENT.map((c, i) => `
    <a class="card hub-card" href="#content-${c.id}">
      <div class="cover"><img src="${shotSrc(c.id, [3, 1, 2, 0][i])}" alt="" loading="lazy"></div>
      <div class="card-body">
        <div class="card-title">
          <h4${c.titleAr ? ' class="ar" dir="rtl"' : ""}>${esc(c.title)}</h4>
          <span class="chip">${c.label ? esc(c.label) + " · " : ""}${c.shots.length} pages</span>
        </div>
        <p>${esc(c.desc)}</p>
        <span class="card-more">Open collection</span>
      </div>
    </a>`).join("")}
  </div>`;
}

function renderGallery(c) {
  return `<a class="btn btn-ghost back" href="#content-hub">Content creation</a>
  <div class="gallery-head">
    <p class="eyebrow">Content creation${c.label ? " · " + esc(c.label) : ""}</p>
    <h1${c.titleAr ? ' class="ar" dir="rtl"' : ""}>${esc(c.title)}</h1>
    ${c.descAr ? `<p class="desc ar" dir="rtl" lang="ar">${esc(c.descAr)}</p>` : ""}
    <p class="desc">${esc(c.desc)}</p>
  </div>
  <div class="gallery">${c.shots.map(([cap], i) => `
    <figure class="shot" role="button" tabindex="0" data-i="${i}" aria-label="Open image ${i + 1}">
      <img src="${shotSrc(c.id, i)}" alt="${esc(cap)}" loading="lazy">
      <figcaption>${textSpan(cap)}</figcaption>
    </figure>`).join("")}
  </div>
  <nav class="sub-nav" aria-label="Other collections">
    ${CONTENT.filter((o) => o.id !== c.id).map((o) => `<a class="btn btn-glass" href="#content-${o.id}">${o.titleAr ? `<span class="ar">${esc(o.title)}</span>` : esc(o.title)}</a>`).join("")}
  </nav>`;
}

// ---------- lightbox ----------
let lb = { section: null, i: 0, opener: null };

function openLightbox(c, i) {
  lb = { section: c, i, opener: document.activeElement };
  $("#lightbox").hidden = false;
  showShot();
  $("#lb-close").focus();
}
function showShot() {
  const { section: c, i } = lb;
  const [cap] = c.shots[i];
  $("#lb-img").src = shotSrc(c.id, i);
  $("#lb-img").alt = cap;
  $("#lb-caption").innerHTML = textSpan(cap);
  $("#lb-count").textContent = `${i + 1} / ${c.shots.length}`;
}
function step(d) {
  const n = lb.section.shots.length;
  lb.i = (lb.i + d + n) % n;
  showShot();
}
function closeLightbox() {
  $("#lightbox").hidden = true;
  if (lb.opener) lb.opener.focus();
}

$("#lb-close").addEventListener("click", closeLightbox);
$("#lb-prev").addEventListener("click", () => step(-1));
$("#lb-next").addEventListener("click", () => step(1));
$("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });
document.addEventListener("keydown", (e) => {
  if ($("#lightbox").hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") step(1);
  if (e.key === "ArrowLeft") step(-1);
});

// ---------- router ----------
// Hashes are plain tokens: #work-keplerr, #content-hub, #content-events
const HOME_ANCHORS = ["", "top", "work", "content", "about", "contact"];

function route() {
  const hash = location.hash.slice(1);
  const view = $("#view");
  const home = $("#home");

  if (HOME_ANCHORS.includes(hash)) {
    view.hidden = true;
    home.hidden = false;
    const target = hash && hash !== "top" ? document.getElementById(hash) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
    return;
  }

  let html = null;
  let gallery = null;
  if (hash.startsWith("work-")) {
    const p = PROJECTS.find((x) => x.id === hash.slice(5));
    if (p) html = renderProject(p);
  } else if (hash === "content-hub") {
    html = renderHub();
  } else if (hash.startsWith("content-")) {
    gallery = CONTENT.find((x) => x.id === hash.slice(8));
    if (gallery) html = renderGallery(gallery);
  }

  if (!html) { location.hash = ""; return; }

  home.hidden = true;
  view.hidden = false;
  view.innerHTML = html;
  window.scrollTo(0, 0);

  if (gallery) {
    view.querySelectorAll(".shot").forEach((el) => {
      const open = () => openLightbox(gallery, Number(el.dataset.i));
      el.addEventListener("click", open);
      el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
    });
  }
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
