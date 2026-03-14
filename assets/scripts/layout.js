function navLink(href, label, icon, isSub = false) {
  const active = location.pathname.endsWith(href) ? 'active' : '';
  return `<a class="${active} ${isSub ? 'sub-item' : ''}" href="${href}" title="${label}">
    <span class="nav-icon" aria-hidden="true">${icon}</span>
    <span class="nav-label">${label}</span>
  </a>`;
}

function navGroup(title, links) {
  return `<div class="nav-group">
    <div class="nav-title">${title}</div>
    <nav class="nav">${links}</nav>
  </div>`;
}

function renderLayout(title, subtitle, body) {
  document.body.innerHTML = `
  <div class="shell">
    <aside class="sidebar" aria-label="Menu lateral">
      <div>
        <div class="brand">
          <div class="brand-mark">D</div>
          <div class="brand-title">DeckClaw</div>
        </div>

        ${navGroup('Principal', `
          ${navLink('index.html', 'Dashboard', '🏠')}
          ${navLink('jobs.html', 'Jobs', '💼')}
          ${navLink('projects.html', 'Projects', '📁')}
          ${navLink('candidates.html', 'Candidates', '🧑‍💼')}
          <div class="nav-dropdown ${location.pathname.endsWith('tasks.html') || location.pathname.endsWith('tables.html') || location.pathname.endsWith('forms.html') ? 'open' : ''}">
            <button class="nav-dropdown-trigger" data-nav-dropdown aria-expanded="false" title="Operações">
              <span class="nav-icon" aria-hidden="true">🧩</span>
              <span class="nav-label">Operações</span>
              <span class="nav-caret" aria-hidden="true">▾</span>
            </button>
            <div class="nav-submenu">
              ${navLink('tasks.html', 'Tasks', '•', true)}
              ${navLink('tables.html', 'Tables Legacy', '•', true)}
              ${navLink('forms.html', 'Forms Legacy', '•', true)}
            </div>
          </div>
        `)}

        <div class="nav-separator" role="separator" aria-hidden="true"></div>

        ${navGroup('Admin', `
          ${navLink('users.html', 'Users', '👥')}
          ${navLink('openclaw.html', 'OpenClaw', '🤖')}
          ${navLink('settings.html', 'Settings', '⚙️')}
        `)}

        <div class="nav-separator" role="separator" aria-hidden="true"></div>

        ${navGroup('Referência', `
          ${navLink('widgets.html', 'UI Kit', '🧱')}
        `)}
      </div>

      <div class="sidebar-footer">
        <button class="profile-trigger" data-profile-toggle aria-expanded="false" title="Perfil do usuário">
          <img class="profile-photo" src="https://i.pravatar.cc/80?img=12" alt="Foto de perfil de Lauro Vitor">
          <span class="profile-name">Lauro Vitor</span>
          <span class="nav-caret" aria-hidden="true">▴</span>
        </button>

        <div class="profile-menu" data-profile-menu>
          <a href="settings.html">Minha conta</a>
          <a href="openclaw.html">Integrações</a>
          <a href="login.html">Logout</a>
        </div>
      </div>
    </aside>

    <main class="main">
      <header class="topbar">
        <div class="topbar-left">
          <button class="btn btn-secondary sidebar-toggle" data-sidebar-toggle aria-label="Abrir ou fechar menu lateral" title="Menu">
            <span data-sidebar-icon>☰</span>
          </button>
          <div>
            <strong>${title}</strong>
            ${subtitle ? `<div class="topbar-subtitle">${subtitle}</div>` : ''}
          </div>
        </div>
        <div class="topbar-right">
          <button class="icon-btn" aria-label="Abrir chat" title="Chat">💬</button>
          <button class="icon-btn" aria-label="Abrir notificações" title="Notificações">🔔</button>
        </div>
      </header>

      <section class="content">
        <h1 class="page-title">${title}</h1>
        <p class="page-subtitle">${subtitle || ''}</p>
        ${body}
      </section>

      <footer class="footer">
        <div class="footer-left">
          DeckClaw · <span class="footer-version" tabindex="0">v1.1.1-build<span class="version-tooltip">Última release: 14/03/2026 · 16:32 (GMT-3)</span></span>
        </div>
        <div class="footer-right">
          <a href="#">suporte</a>
          <span>-</span>
          <a href="#">apidoc</a>
          <span>-</span>
          <a href="terms.html">terms</a>
        </div>
      </footer>
    </main>
  </div>
  <div class="toast-stack"></div>`;
}
