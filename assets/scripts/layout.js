function navLink(href, label) {
  const active = location.pathname.endsWith(href) ? 'active' : '';
  return `<a class="${active}" href="${href}"><span class="dot"></span>${label}</a>`;
}

function renderLayout(title, subtitle, body) {
  document.body.innerHTML = `
  <div class="shell">
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">D</div>
        <div class="brand-title">DeckClaw</div>
      </div>

      <div class="nav-title">Principal</div>
      <nav class="nav">
        ${navLink('index.html', 'Dashboard')}
        ${navLink('jobs.html', 'Jobs')}
        ${navLink('projects.html', 'Projects')}
        ${navLink('candidates.html', 'Candidates')}
        ${navLink('tasks.html', 'Tasks')}
        ${navLink('users.html', 'Users')}
        ${navLink('openclaw.html', 'OpenClaw')}
        ${navLink('settings.html', 'Settings')}
      </nav>

      <div class="nav-title">Referência</div>
      <nav class="nav">
        ${navLink('widgets.html', 'UI Kit')}
        ${navLink('tables.html', 'Tables Legacy')}
        ${navLink('forms.html', 'Forms Legacy')}
      </nav>
    </aside>

    <main class="main">
      <header class="topbar">
        <div class="topbar-left">
          <button class="btn btn-secondary" data-sidebar-toggle>☰</button>
          <strong>${title}</strong>
        </div>
        <div class="topbar-right">
          <span class="muted">DeckClaw template alinhado ao app atual</span>
          <div class="avatar">LV</div>
        </div>
      </header>

      <section class="content">
        <h1 class="page-title">${title}</h1>
        <p class="page-subtitle">${subtitle}</p>
        ${body}
      </section>

      <footer class="footer">DeckClaw Template · identidade visual do app atual (estático)</footer>
    </main>
  </div>
  <div class="toast-stack"></div>`;
}
