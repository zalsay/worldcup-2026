import { matches, reportMeta, standings } from "./matches.js";

const isMatchPage = () => Boolean(document.querySelector("#app")?.dataset.matchId);
const homeHref = () => (isMatchPage() ? "../index.html" : "index.html");
const matchHref = (match) => (isMatchPage() ? `./${match.href.split("/").pop()}` : match.href);
const matchDates = [...new Set(matches.map((match) => match.date))];
const defaultDate = matchDates.includes(reportMeta.dateLabel) ? reportMeta.dateLabel : matchDates[0];

const icons = {
  calendar: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4M16 2v4M3 10h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  home: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>`,
  back: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>`,
  map: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="7" cy="7" r="1.7"/><circle cx="17" cy="7" r="1.7"/><circle cx="7" cy="17" r="1.7"/><circle cx="17" cy="17" r="1.7"/><path d="M12 5v14M5 12h14"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  target: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>`
};

export function renderHome(app) {
  const visibleMatches = matches.filter((match) => match.date === defaultDate);

  app.innerHTML = `
    ${siteHeader("home")}
    <main class="page">
      <section class="section-grid">
        <div>
          <div class="section-head">
            <p class="eyebrow">Schedule</p>
            <h2>比赛列表 <span class="count-badge"><strong data-visible-count>${visibleMatches.length}</strong> 场</span></h2>
          </div>
          ${dateFilter()}
          <div class="match-list">
            ${matches.map(matchCard).join("")}
          </div>
        </div>
        <aside class="panel">
          <div class="section-head compact">
            <p class="eyebrow">Standings</p>
            <h2>赛况摘要</h2>
          </div>
          ${standingsTable()}
        </aside>
      </section>
    </main>
  `;

  bindHomeInteractions(app);
}

export function renderMatchPage(app, match) {
  if (!match) {
    app.innerHTML = `${siteHeader("detail")}<main class="page"><section class="empty"><h1>未找到比赛</h1><a class="button" href="${homeHref()}">返回首页</a></section></main>`;
    bindMenu(app);
    return;
  }

  app.innerHTML = `
    ${siteHeader("detail")}
    <main class="page">
      <nav class="breadcrumb" aria-label="面包屑">
        <a href="${homeHref()}">比赛导航</a>
        <span>/</span>
        <span>${match.title}</span>
      </nav>

      <section class="match-hero">
        <div>
          <p class="eyebrow">${match.group} · ${match.actual.status}</p>
          <h1>${match.title}</h1>
          <p class="lead">${match.headline}</p>
        </div>
        <div class="score-panel">
          <span>赛前预测</span>
          <strong>${match.prediction.tendency}</strong>
          <small>比分倾向：${match.prediction.scoreLean}</small>
          <div class="actual-score">
            <span>实际比分</span>
            <strong>${match.actual.score}</strong>
            <small>${match.actual.updatedAt || "赛后更新，不覆盖预测"}</small>
          </div>
        </div>
      </section>

      <section class="fact-row" aria-label="比赛信息">
        ${factItem(icons.calendar, "日期", `${match.date}（${reportMeta.timezone}）`)}
        ${factItem(icons.clock, "时间", match.time)}
        ${factItem(icons.map, "地点", match.venue)}
      </section>

      <section class="teams-grid">
        ${match.teams.map(teamPanel).join("")}
      </section>

      <section class="detail-grid">
        <article class="panel coach-panel">
          <div class="section-head compact">
            <p class="eyebrow">Coach View</p>
            <h2>教练组判断</h2>
          </div>
          <p>${match.coachView}</p>
        </article>
        <article class="panel">
          <div class="section-head compact">
            <p class="eyebrow">Players</p>
            <h2>关键球员</h2>
          </div>
          <div class="players">
            ${match.keyPlayers.map(playerCard).join("")}
          </div>
        </article>
      </section>
    </main>
  `;

  bindMenu(app);
}

function siteHeader(page = "home") {
  const actionIcon = page === "home" ? icons.home : icons.back;
  const actionAria = page === "home" ? "回到首页" : "返回首页";

  return `
    <header class="topbar">
      <div class="header-left">
        <a class="header-action" href="${homeHref()}" aria-label="${actionAria}">${actionIcon}</a>
        <a class="brand" href="${homeHref()}" aria-label="World Cup Match Guide">
          <span class="brand-mark">26</span>
          <span>World Cup Match Guide</span>
        </a>
      </div>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="match-menu" aria-label="打开比赛菜单">
        ${icons.menu}
      </button>
      <nav class="topnav" id="match-menu" aria-label="比赛菜单" hidden>
        <a href="${homeHref()}">首页</a>
        ${matchDates.map((date) => `
          <div class="menu-group">
            <span>${date === reportMeta.dateLabel ? "当天" : date}</span>
            ${matches
              .filter((match) => match.date === date)
              .map((match) => `<a href="${matchHref(match)}">${match.title}</a>`)
              .join("")}
          </div>
        `).join("")}
      </nav>
    </header>
  `;
}

function matchCard(match) {
  return `
    <article class="match-card" data-match-date="${match.date}"${match.date === defaultDate ? "" : " hidden"}>
      <div class="match-time">
        <span>${match.date}</span>
        <strong>${match.time}</strong>
      </div>
      <div class="match-copy">
        <p class="eyebrow">${match.group} · ${match.venue}</p>
        <h3>${match.title}</h3>
        <p>${match.headline}</p>
        <div class="match-meta">
          <span>${icons.target} 预测：${match.prediction.tendency}</span>
          <span>${icons.shield} 比分：${match.actual.score}</span>
        </div>
      </div>
      <a class="icon-button" href="${matchHref(match)}" aria-label="查看 ${match.title} 详情">${icons.arrow}</a>
    </article>
  `;
}

function dateFilter() {
  if (matchDates.length <= 1) return "";

  return `
    <div class="date-filter" aria-label="按日期筛选比赛">
      ${matchDates.map((date) => `
        <button type="button" class="date-filter-button${date === defaultDate ? " is-active" : ""}" data-date="${date}">
          ${date === reportMeta.dateLabel ? "当天" : date}
        </button>
      `).join("")}
    </div>
  `;
}

function bindHomeInteractions(app) {
  bindMenu(app);

  const buttons = app.querySelectorAll("[data-date]");
  const cards = app.querySelectorAll("[data-match-date]");
  const visibleCount = app.querySelector("[data-visible-count]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedDate = button.dataset.date;

      buttons.forEach((item) => item.classList.toggle("is-active", item === button));

      let count = 0;
      cards.forEach((card) => {
        const isVisible = card.dataset.matchDate === selectedDate;
        card.hidden = !isVisible;
        if (isVisible) count += 1;
      });

      if (visibleCount) visibleCount.textContent = String(count);
    });
  });
}

function bindMenu(root = document) {
  const button = root.querySelector(".menu-button");
  const menu = root.querySelector("#match-menu");

  if (!button || !menu) return;

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
  });
}

function standingsTable() {
  return `
    <div class="standing-list">
      ${standings.map((row, index) => `
        <div class="standing-row">
          <span>${index + 1}</span>
          <strong>${row.team}</strong>
          <em>${row.points} 分 / ${row.goalDiff} 净胜球</em>
          <p>${row.note}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function factItem(icon, label, value) {
  return `
    <div class="fact-item">
      <span class="fact-icon">${icon}</span>
      <div>
        <span>${label}</span>
        <strong>${value}</strong>
      </div>
    </div>
  `;
}

function teamPanel(team) {
  return `
    <article class="panel team-panel">
      <p class="eyebrow">${team.label}</p>
      <h2>${team.name}</h2>
      <p>${team.summary}</p>
      <div class="columns">
        <div>
          <h3>优势</h3>
          <ul>${team.strengths.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div>
          <h3>风险</h3>
          <ul>${team.risks.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </div>
    </article>
  `;
}

function playerCard(player) {
  return `
    <div class="player-card">
      <strong>${player.name}</strong>
      <span>${player.team} · ${player.role}</span>
      <p>${player.note}</p>
    </div>
  `;
}
