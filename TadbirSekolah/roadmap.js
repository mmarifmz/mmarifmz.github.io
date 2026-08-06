const repo = "https://github.com/mmarifmz/TadbirSekolah/blob/main/";

const modules = {
  "Academic & PBD": { icon: "TP", colour: "#80e0a7" },
  "e-RPH": { icon: "R", colour: "#65c7e8" },
  "MySG Governance": { icon: "G", colour: "#f2c76f" },
  "School Operations": { icon: "SO", colour: "#e891bf" },
  "Sukan & Kokurikulum": { icon: "K", colour: "#f09b72" },
  "Reporting & Insight": { icon: "BI", colour: "#b8a5ff" },
  "Public Directory": { icon: "10k", colour: "#62d2b1" },
  "Authority Analytics": { icon: "JP", colour: "#79aaf2" },
  "Platform & Demo": { icon: "PD", colour: "#e4c86c" },
  "Trust & Infrastructure": { icon: "RLS", colour: "#a0c9b7" },
};

const features = [
  { title: "Teacher-owned PBD entry", module: "Academic & PBD", horizon: "current", description: "Teachers record TP, evidence, and remarks while retaining professional judgement; the system does not auto-decide TP.", source: "laravel/routes/web.php", evidence: "Live workflow" },
  { title: "PBD analysis and intervention", module: "Academic & PBD", horizon: "current", description: "Year, class, and subject analysis surfaces TP distributions and links pupils to editable intervention actions.", source: "laravel/app/Services/Reporting/PbdAnalysisService.php", evidence: "Implemented" },
  { title: "UPSA and UASA assessment analysis", module: "Academic & PBD", horizon: "current", description: "Assessment entry, class comparison, year-level analysis, and signed CSV/PDF exports use server-scoped school data.", source: "laravel/routes/web.php", evidence: "Implemented" },
  { title: "Dialog prestasi", module: "Reporting & Insight", horizon: "current", description: "Subject comparisons, intervention briefs, and decision-ready PDF outputs connect analysis to follow-up.", source: "laravel/routes/web.php", evidence: "Implemented" },
  { title: "Private report-slip generation", module: "Reporting & Insight", horizon: "current", description: "Configurable report jobs generate private, expiring, authorized downloads with retry support.", source: "laravel/routes/web.php", evidence: "Implemented" },
  { title: "School insight workspace", module: "Reporting & Insight", horizon: "current", description: "Evidence-backed summaries identify attention areas without replacing school leaders' interpretation.", source: "laravel/app/Services/Reporting/InsightService.php", evidence: "Implemented" },

  { title: "Weekly e-RPH workspace", module: "e-RPH", horizon: "current", description: "Teachers plan the week, reuse timetable context, track completion, and move directly between assigned lessons.", source: "docs/erph/README.md", evidence: "Pilot candidate" },
  { title: "Autosave and conflict recovery", module: "e-RPH", horizon: "current", description: "Idempotent drafts, retryable failures, cached recovery, and explicit server/local choices protect concurrent edits.", source: "docs/erph/PHASE-9-PILOT-ACCEPTANCE.md", evidence: "Automated evidence" },
  { title: "DSKP and RPT curriculum binding", module: "e-RPH", horizon: "current", description: "Versioned curriculum editions and RPT plans bind lesson dates to an auditable active release and immutable source snapshot.", source: "docs/erph/PHASE-27-CURRICULUM-BINDING-RELEASE-CONTRACT.md", evidence: "Implemented" },
  { title: "Review, return, and escalation", module: "e-RPH", horizon: "current", description: "Reviewer assignments, bulk review, returns, escalation, notifications, and administrator digest support accountable approval.", source: "docs/erph/PHASE-15-REVIEWER-WORKFLOW.md", evidence: "Implemented" },
  { title: "e-RPH PDF and materials", module: "e-RPH", horizon: "current", description: "Authorized PDF downloads, private teaching materials, retention controls, and DATA DEMO marking protect operational records.", source: "docs/erph/PHASE-30-RPH-PDF-DOWNLOAD.md", evidence: "Implemented" },
  { title: "Curriculum delivery health", module: "e-RPH", horizon: "current", description: "Progress projections, incremental delivery facts, queue probes, failure records, and health dashboards support measured operations.", source: "docs/erph/PHASE-29-SCALE-AND-OPERATIONS.md", evidence: "Verified locally" },

  { title: "MySG governance workspace", module: "MySG Governance", horizon: "current", description: "A role-aware command centre connects committees, compliance, actions, meetings, risks, evidence, and calendar events.", source: "docs/MYSG-DAY-3.md", evidence: "Implemented" },
  { title: "Strategic plans and reviews", module: "MySG Governance", horizon: "current", description: "Schools define objectives, indicators, owners, improvement plans, reviews, and controlled workflow states.", source: "laravel/routes/web.php", evidence: "Implemented" },
  { title: "Decision insights with provenance", module: "MySG Governance", horizon: "current", description: "Generated insights expose source metrics and confidence for human confirmation before conversion into improvement work.", source: "docs/MYSG-DAY-3.md", evidence: "Implemented" },
  { title: "Approval and evidence chain", module: "MySG Governance", horizon: "current", description: "Versioned private evidence, verification, school approval steps, and PPD escalation preserve an auditable trail.", source: "laravel/app/Services/Governance/GovernanceApprovalService.php", evidence: "Implemented" },

  { title: "Classes and pupil lifecycle", module: "School Operations", horizon: "current", description: "Class setup, pupil profiles, transfers, archives, restores, and scoped teacher access support the school year lifecycle.", source: "laravel/routes/web.php", evidence: "Implemented" },
  { title: "Safe roster import", module: "School Operations", horizon: "current", description: "Template, preview, validation, and explicit commit stages reduce the risk of authoritative roster changes.", source: "laravel/routes/web.php", evidence: "Implemented" },
  { title: "Academic-year rollover", module: "School Operations", horizon: "current", description: "Administrators preview rollover effects before creating the next year, preserving historical school records.", source: "laravel/routes/web.php", evidence: "Implemented" },
  { title: "School identity and branding", module: "School Operations", horizon: "current", description: "Draft, publish, rollback, reset, and logo workflows keep school identity controlled and recoverable.", source: "laravel/routes/web.php", evidence: "Implemented" },

  { title: "Activities and participation", module: "Sukan & Kokurikulum", horizon: "current", description: "Schools manage activities, staff assignments, pupil participation, sessions, attendance, achievements, and private evidence.", source: "laravel/routes/web.php", evidence: "Implemented" },
  { title: "Cocurricular authority aggregates", module: "Authority Analytics", horizon: "current", description: "JPN and PPD see aggregate participation and KPI views without pupil names, identifiers, or free text.", source: "laravel/routes/web.php", evidence: "Implemented" },
  { title: "JPN and PPD dashboards", module: "Authority Analytics", horizon: "current", description: "Authority dashboards, saved views, signed summaries, school aggregates, and governance approval queues remain scope-limited.", source: "laravel/routes/web.php", evidence: "Implemented" },

  { title: "National reference directory", module: "Public Directory", horizon: "current", description: "A portable, provenance-tracked directory publishes 10,230 reference schools beneath JPN and PPD structures.", source: "laravel/docs/education-directory.md", evidence: "Live" },
  { title: "Search, map, and school profiles", module: "Public Directory", horizon: "current", description: "Search, autocomplete, viewport map data, weather, reference profiles, and approved module status support public discovery.", source: "laravel/routes/web.php", evidence: "Live" },
  { title: "Public information and feedback", module: "Public Directory", horizon: "current", description: "Accessible policy, FAQ, contact, sitemap, feedback, disclaimer, copyright, privacy, and security pages complete the public portal.", source: "laravel/routes/web.php", evidence: "Live" },

  { title: "Synthetic demo lifecycle", module: "Platform & Demo", horizon: "current", description: "One controlled setup, health check, rollover, refresh, and rollback path owns comprehensive synthetic demonstration data.", source: "docs/DEMO-MANAGEMENT.md", evidence: "Operational" },
  { title: "Directory publication controls", module: "Platform & Demo", horizon: "current", description: "Platform administrators review, activate, publish, geocode, rematch, and monitor reference records without creating tenants.", source: "laravel/docs/education-directory.md", evidence: "Operational" },
  { title: "Tenant isolation and encrypted PII", module: "Trust & Infrastructure", horizon: "current", description: "Laravel authorization, tenant context, PostgreSQL FORCE RLS, versioned PII encryption, audit, and private storage form the security boundary.", source: "docs/ARCHITECTURE.md", evidence: "Production foundation" },
  { title: "Three-environment delivery", module: "Trust & Infrastructure", horizon: "current", description: "Local, demo, and production use distinct databases and roles, controlled migrations, health checks, workers, schedulers, and rollback paths.", source: "docs/operations/database-environments.md", evidence: "Operational" },

  { title: "e-RPH school pilot", module: "e-RPH", horizon: "next", description: "Run the dated staging evidence pack and a two-week, one-school pilot with real participant sign-offs before broader enablement.", source: "docs/erph/PHASE-9-PILOT-ACCEPTANCE.md", evidence: "September candidate" },
  { title: "Sports meet security foundation", module: "Sukan & Kokurikulum", horizon: "next", description: "Introduce tenant-safe meets, houses, events, entries, officials, versioned scoring, draft/confirmed/void results, audit, and RLS tests.", source: "docs/sports/ANNUAL-SPORTS-MEET-DELIVERY-PLAN.md", evidence: "Next planned tranche" },
  { title: "Directory location review tranche", module: "Public Directory", horizon: "next", description: "Expand reviewed coordinates in bounded batches, retaining source, confidence, human review, and safe activation controls.", source: "laravel/docs/education-directory.md", evidence: "Candidate" },
  { title: "Governance pilot feedback pass", module: "MySG Governance", horizon: "next", description: "Use structured school feedback to refine planning, approvals, insights, and guided tours without weakening role boundaries.", source: "docs/MYSG-DAY-3.md", evidence: "Candidate" },
  { title: "Operational evidence pack", module: "Trust & Infrastructure", horizon: "next", description: "Record deployed revision, TLS/RLS proof, queue and scheduler logs, backup restore drill, and rollback rehearsal for the pilot candidate.", source: "docs/erph/PHASE-31-STAGING-HANDOFF.md", evidence: "Required gate" },

  { title: "Live sports day dashboard", module: "Sukan & Kokurikulum", horizon: "wishlist", description: "Publish safe, versioned house standings, medals, recent results, event detail, and records from confirmed results only.", source: "docs/sports/ANNUAL-SPORTS-MEET-DELIVERY-PLAN.md", evidence: "Idea · no date" },
  { title: "Parent progress digest", module: "Reporting & Insight", horizon: "wishlist", description: "An opt-in, privacy-reviewed summary of published school-approved progress and upcoming actions for guardians.", source: "README.md", evidence: "Idea · no date" },
  { title: "Attendance action workflow", module: "School Operations", horizon: "wishlist", description: "Move from aggregate attendance insight to authorized case follow-up, owner assignment, reminders, and outcome tracking.", source: "README.md", evidence: "Idea · no date" },
  { title: "Modular school onboarding", module: "Platform & Demo", horizon: "wishlist", description: "Let a school activate one module first, complete readiness checks, and expand later without buying or configuring the whole suite.", source: "README.md", evidence: "Idea · no date" },
  { title: "PIBG service connector", module: "School Operations", horizon: "wishlist", description: "Show audited family-contribution status through an explicit external-service boundary without copying payment credentials into TadbirSekolah.", source: "laravel/config/education.php", evidence: "Idea · no date" },
  { title: "Authority trend benchmarking", module: "Authority Analytics", horizon: "wishlist", description: "Privacy-safe cohort and time-series comparisons for like-for-like school populations, with minimum-count suppression.", source: "README.md", evidence: "Idea · no date" },
  { title: "Offline teacher capture", module: "Academic & PBD", horizon: "wishlist", description: "Resilient offline drafts for low-connectivity classrooms with explicit reconciliation and conflict review on reconnect.", source: "README.md", evidence: "Idea · no date" },
  { title: "School request voting", module: "Platform & Demo", horizon: "wishlist", description: "A transparent, non-PII request board where pilot schools can rank roadmap needs and see decision status.", source: "README.md", evidence: "Idea · no date" },
];

const horizonLabels = { current: "Current", next: "September 2026", wishlist: "Wishlist" };
const state = { horizon: "all", module: "all", search: "", view: "cards" };

const grid = document.querySelector("#featureGrid");
const filters = document.querySelector("#moduleFilters");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const dialog = document.querySelector("#featureDialog");

function sourceUrl(path) {
  return path === "README.md" ? `${repo}README.md` : `${repo}${path}`;
}

function renderModuleFilters() {
  const names = ["all", ...Object.keys(modules)];
  filters.innerHTML = names.map(name => `<button type="button" data-module="${name}" class="${state.module === name ? "active" : ""}">${name === "all" ? "All modules" : name}</button>`).join("");
}

function filteredFeatures() {
  const needle = state.search.trim().toLowerCase();
  return features.filter(feature => {
    const matchesHorizon = state.horizon === "all" || feature.horizon === state.horizon;
    const matchesModule = state.module === "all" || feature.module === state.module;
    const matchesSearch = !needle || `${feature.title} ${feature.module} ${feature.description}`.toLowerCase().includes(needle);
    return matchesHorizon && matchesModule && matchesSearch;
  });
}

function render() {
  const visible = filteredFeatures();
  grid.className = `feature-grid ${state.view === "matrix" ? "matrix" : ""}`;
  grid.innerHTML = visible.map((feature) => {
    const module = modules[feature.module];
    const index = features.indexOf(feature);
    return `<article class="feature-card" data-horizon="${feature.horizon}" style="--module-colour:${module.colour}">
      <div class="feature-top">
        <span class="module-label"><span class="module-icon" style="color:${module.colour};background:${module.colour}1f">${module.icon}</span>${feature.module}</span>
        <span class="status-label">${horizonLabels[feature.horizon]}</span>
      </div>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
      <footer><span>${feature.evidence}</span><button type="button" data-detail="${index}" aria-label="Read details for ${feature.title}">Details →</button></footer>
    </article>`;
  }).join("");
  resultCount.textContent = `${visible.length} ${visible.length === 1 ? "feature" : "features"} shown`;
  emptyState.hidden = visible.length !== 0;
  grid.hidden = visible.length === 0;
  renderModuleFilters();
  syncUrl();
}

function syncUrl() {
  const params = new URLSearchParams();
  if (state.horizon !== "all") params.set("horizon", state.horizon);
  if (state.module !== "all") params.set("module", state.module);
  if (state.search) params.set("q", state.search);
  if (state.view !== "cards") params.set("view", state.view);
  history.replaceState(null, "", `${location.pathname}${params.size ? `?${params}` : ""}${location.hash}`);
}

function openDetails(index) {
  const feature = features[index];
  document.querySelector("#dialogModule").textContent = `${feature.module} · ${horizonLabels[feature.horizon]}`;
  document.querySelector("#dialogTitle").textContent = feature.title;
  document.querySelector("#dialogDescription").textContent = feature.description;
  document.querySelector("#dialogMeta").innerHTML = `<span>${feature.evidence}</span><span>${feature.horizon === "current" ? "Available in canonical Laravel" : feature.horizon === "next" ? "Candidate, subject to gates" : "No committed date"}</span>`;
  document.querySelector("#dialogSource").href = sourceUrl(feature.source);
  dialog.showModal();
}

document.querySelector(".horizon-tabs").addEventListener("click", event => {
  const button = event.target.closest("button[data-horizon]");
  if (!button) return;
  state.horizon = button.dataset.horizon;
  document.querySelectorAll(".horizon-tabs button").forEach(item => {
    const active = item === button;
    item.classList.toggle("active", active);
    item.setAttribute("aria-selected", active);
  });
  render();
});

filters.addEventListener("click", event => {
  const button = event.target.closest("button[data-module]");
  if (!button) return;
  state.module = button.dataset.module;
  render();
});

document.querySelector(".view-toggle").addEventListener("click", event => {
  const button = event.target.closest("button[data-view]");
  if (!button) return;
  state.view = button.dataset.view;
  document.querySelectorAll(".view-toggle button").forEach(item => {
    const active = item === button;
    item.classList.toggle("active", active);
    item.setAttribute("aria-pressed", active);
  });
  render();
});

searchInput.addEventListener("input", () => { state.search = searchInput.value; render(); });
grid.addEventListener("click", event => {
  const button = event.target.closest("button[data-detail]");
  if (button) openDetails(Number(button.dataset.detail));
});
document.querySelector("#clearFilters").addEventListener("click", () => {
  state.horizon = "all";
  state.module = "all";
  state.search = "";
  searchInput.value = "";
  document.querySelectorAll(".horizon-tabs button").forEach(item => {
    const active = item.dataset.horizon === "all";
    item.classList.toggle("active", active);
    item.setAttribute("aria-selected", active);
  });
  render();
});

dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
document.addEventListener("keydown", event => {
  if (event.key === "/" && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
});

const themeToggle = document.querySelector("#themeToggle");
const savedTheme = localStorage.getItem("ts-roadmap-theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("ts-roadmap-theme", nextTheme);
});

const params = new URLSearchParams(location.search);
if (["current", "next", "wishlist"].includes(params.get("horizon"))) state.horizon = params.get("horizon");
if (Object.hasOwn(modules, params.get("module"))) state.module = params.get("module");
if (["cards", "matrix"].includes(params.get("view"))) state.view = params.get("view");
state.search = params.get("q") || "";
searchInput.value = state.search;
document.querySelectorAll(".horizon-tabs button").forEach(item => {
  const active = item.dataset.horizon === state.horizon;
  item.classList.toggle("active", active);
  item.setAttribute("aria-selected", active);
});
document.querySelectorAll(".view-toggle button").forEach(item => {
  const active = item.dataset.view === state.view;
  item.classList.toggle("active", active);
  item.setAttribute("aria-pressed", active);
});

document.querySelector("#currentCount").textContent = features.filter(item => item.horizon === "current").length;
document.querySelector("#moduleCount").textContent = Object.keys(modules).length;
document.querySelector("#nextCount").textContent = features.filter(item => item.horizon === "next").length;
render();
