function navLink(href, label) {
  const active = location.pathname.endsWith(href) ? 'active' : '';
  return `<a class="${active}" href="${href}">${label}</a>`;
}
function renderLayout(title, subtitle, body) {
  document.body.innerHTML = `
  <div class="shell">
    <aside class="sidebar">
      <h1>DeckClaw</h1>
      <nav class="nav">
        ${navLink('index.html', 'Dashboard')}
        ${navLink('widgets.html', 'Widgets')}
        ${navLink('forms.html', 'Forms')}
        ${navLink('tables.html', 'Tables')}
        ${navLink('kanban.html', 'Kanban')}
        ${navLink('users.html', 'Users')}
        ${navLink('openclaw.html', 'OpenClaw')}
        ${navLink('tasks.html', 'Tasks')}
        ${navLink('reports.html', 'Reports')}
        ${navLink('settings.html', 'Settings')}
        ${navLink('login.html', 'Login')}
        ${navLink('register.html', 'Register')}
        ${navLink('terms.html', 'Terms')}
      </nav>
    </aside>
    <main class="main">
      <header class="topbar">
        <button class="btn btn-secondary" data-sidebar-toggle>☰</button>
        <strong>${title}</strong>
        <span class="muted">Template visual v0.1</span>
      </header>
      <section class="content">
        <h2 class="page-title">${title}</h2>
        <p class="muted">${subtitle}</p>
        ${body}
      </section>
      <footer class="footer">DeckClaw Template · Referência UX/UI</footer>
    </main>
  </div>
  <div class="toast-stack"></div>`;
}
