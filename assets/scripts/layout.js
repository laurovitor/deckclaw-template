function icon(name, cls = '') {
  const icons = {
    dashboard: '<path d="M3 10.5h7V3H3v7.5Zm0 10.5h7V13.5H3V21Zm11-18v4h7V3h-7Zm0 18h7v-10.5h-7V21Z"/>',
    briefcase: '<path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5M3 9h18v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Zm8 4.5h2"/>',
    folder: '<path d="M3 7.5a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.5Z"/>',
    users: '<path d="M16.5 19.5v-1.2a3.3 3.3 0 0 0-3.3-3.3H7.8a3.3 3.3 0 0 0-3.3 3.3v1.2M10.5 11.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8.2 8.3v-1.2a3.3 3.3 0 0 0-2.1-3.1m-1-10.1a3 3 0 0 1 0 6"/>',
    puzzle: '<path d="M9 3.8a2.2 2.2 0 1 1 4.4 0V6h2.3a1.7 1.7 0 0 1 1.7 1.7V10h2.2a2.2 2.2 0 1 1 0 4.4H17.4v2.3a1.7 1.7 0 0 1-1.7 1.7H13.4V21a2.2 2.2 0 1 1-4.4 0v-2.6H6.7A1.7 1.7 0 0 1 5 16.7v-2.3H2.8a2.2 2.2 0 1 1 0-4.4H5V7.7A1.7 1.7 0 0 1 6.7 6H9V3.8Z"/>',
    dot: '<circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/>',
    bot: '<rect x="5" y="7" width="14" height="11" rx="3"/><path d="M12 7V4m-4 8h.01m8 0h.01M8 18v2m8-2v2"/>',
    settings: '<path d="M12 8.4a3.6 3.6 0 1 1 0 7.2 3.6 3.6 0 0 1 0-7.2Zm7.6 3.6-.9-.5a6.9 6.9 0 0 0-.4-1.1l.5-.9a1 1 0 0 0-.2-1.2l-1.1-1.1a1 1 0 0 0-1.2-.2l-.9.5a7 7 0 0 0-1.1-.4l-.5-.9a1 1 0 0 0-1-.6h-1.6a1 1 0 0 0-1 .6l-.5.9c-.4.1-.8.2-1.1.4l-.9-.5a1 1 0 0 0-1.2.2L5.4 8.3a1 1 0 0 0-.2 1.2l.5.9c-.2.3-.3.7-.4 1.1l-.9.5a1 1 0 0 0-.6 1v1.6a1 1 0 0 0 .6 1l.9.5c.1.4.2.8.4 1.1l-.5.9a1 1 0 0 0 .2 1.2l1.1 1.1a1 1 0 0 0 1.2.2l.9-.5c.3.2.7.3 1.1.4l.5.9a1 1 0 0 0 1 .6h1.6a1 1 0 0 0 1-.6l.5-.9c.4-.1.8-.2 1.1-.4l.9.5a1 1 0 0 0 1.2-.2l1.1-1.1a1 1 0 0 0 .2-1.2l-.5-.9c.2-.3.3-.7.4-1.1l.9-.5a1 1 0 0 0 .6-1V13a1 1 0 0 0-.6-1Z"/>',
    brick: '<path d="M3 7h18v10H3V7Zm6 0v10M15 7v10M3 12h18"/>',
    candidate: '<path d="M12 12a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Zm0 2.4c-4.2 0-7.6 2.3-7.6 5.2V21h15.2v-1.4c0-2.9-3.4-5.2-7.6-5.2Z"/>',
    chat: '<path d="M4 5.5h16a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 20 17.5H9l-4.5 3v-3H4A1.5 1.5 0 0 1 2.5 16V7A1.5 1.5 0 0 1 4 5.5Z"/>',
    bell: '<path d="M7.5 9.5a4.5 4.5 0 1 1 9 0v3.3l1.5 2v.7h-12v-.7l1.5-2V9.5Zm2.7 8.5a1.8 1.8 0 0 0 3.6 0"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    chevron: '<path d="m8 10 4 4 4-4"/>',
    'chevron-left': '<path d="m14.5 6-6 6 6 6"/>',
    'chevron-right': '<path d="m9.5 6 6 6-6 6"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    user: '<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0"/>',
    plug: '<path d="M9 3v5m6-5v5M8 8h8v2a4 4 0 0 1-4 4h0a4 4 0 0 1-4-4V8Zm4 6v7"/>',
    logout: '<path d="M14 8V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3m-4-4h10m0 0-3-3m3 3-3 3"/>',
    more: '<circle cx="12" cy="6" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="18" r="1.5"/>',
    check: '<path d="m5 12 4 4 10-10"/>',
    trash: '<path d="M4 7h16M10 11v6m4-6v6M9 7l1-2h4l1 2m-8 0 1 12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2l1-12"/>',
    ban: '<circle cx="12" cy="12" r="9"/><path d="m8.5 8.5 7 7"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 10v6m0-9h.01"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    spark: '<path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z"/>'
  };
  return `<svg class="dc-icon ${cls}" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || ''}</svg>`;
}

function dropdownLink(href, label, iconName) {
  return `<a href="${href}"><span class="menu-item-icon" aria-hidden="true">${icon(iconName)}</span><span>${label}</span></a>`;
}

function navLink(href, label, iconName, isSub = false) {
  const active = location.pathname.endsWith(href) ? 'active' : '';
  return `<a class="${active} ${isSub ? 'sub-item' : ''}" href="${href}" title="${label}">
    <span class="nav-icon" aria-hidden="true">${icon(iconName)}</span>
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
          ${navLink('index.html', 'Dashboard', 'dashboard')}
          ${navLink('jobs.html', 'Jobs', 'briefcase')}
          ${navLink('projects.html', 'Projects', 'folder')}
          ${navLink('candidates.html', 'Candidates', 'candidate')}
          <div class="nav-dropdown ${location.pathname.endsWith('tasks.html') || location.pathname.endsWith('tables.html') || location.pathname.endsWith('forms.html') ? 'open' : ''}">
            <button class="nav-dropdown-trigger" data-nav-dropdown aria-expanded="false" title="Operações">
              <span class="nav-icon" aria-hidden="true">${icon('puzzle')}</span>
              <span class="nav-label">Operações</span>
              <span class="nav-caret" aria-hidden="true">${icon('chevron', 'caret-icon')}</span>
            </button>
            <div class="nav-submenu">
              ${navLink('tasks.html', 'Tasks', 'dot', true)}
              ${navLink('tables.html', 'Tables Legacy', 'dot', true)}
              ${navLink('forms.html', 'Forms Legacy', 'dot', true)}
            </div>
          </div>
        `)}

        <div class="nav-separator" role="separator" aria-hidden="true"></div>

        ${navGroup('Admin', `
          ${navLink('users.html', 'Users', 'users')}
          ${navLink('openclaw.html', 'OpenClaw', 'bot')}
          ${navLink('settings.html', 'Settings', 'settings')}
        `)}

        <div class="nav-separator" role="separator" aria-hidden="true"></div>

        ${navGroup('Referência', `
          ${navLink('widgets.html', 'UI Kit', 'brick')}
        `)}
      </div>

      <div class="sidebar-footer">
        <button class="profile-trigger" data-profile-toggle aria-expanded="false" title="Perfil do usuário">
          <img class="profile-photo" src="https://i.pravatar.cc/80?img=12" alt="Foto de perfil de Lauro Vitor">
          <span class="profile-name">Lauro Vitor</span>
          <span class="nav-caret" aria-hidden="true">${icon('chevron', 'caret-icon up')}</span>
        </button>

        <div class="profile-menu" data-profile-menu>
          ${dropdownLink('settings.html', 'Minha conta', 'user')}
          ${dropdownLink('openclaw.html', 'Integrações', 'plug')}
          ${dropdownLink('login.html', 'Logout', 'logout')}
        </div>
      </div>
    </aside>

    <main class="main">
      <header class="topbar">
        <div class="topbar-left">
          <button class="btn btn-secondary sidebar-toggle" data-sidebar-toggle aria-label="Abrir ou fechar menu lateral" title="Menu">
            <span data-sidebar-icon>${icon('chevron-left', 'sidebar-toggle-icon')}</span>
          </button>
          <div>
            <strong>${title}</strong>
            ${subtitle ? `<div class="topbar-subtitle">${subtitle}</div>` : ''}
          </div>
        </div>
        <div class="topbar-right">
          <button class="icon-btn" data-open-panel="chat" aria-label="Abrir chat" title="Chat">${icon('chat')}</button>
          <button class="icon-btn notif-btn" data-open-panel="notifications" aria-label="Abrir notificações" title="Notificações">${icon('bell')}<span class="notif-badge" aria-label="2 notificações novas">2</span></button>
        </div>
      </header>

      <section class="content">
        <h1 class="page-title">${title}</h1>
        <p class="page-subtitle">${subtitle || ''}</p>
        ${body}
      </section>

      <footer class="footer">
        <div class="footer-left">
          <span class="footer-brand"><img class="footer-brand-icon" src="assets/icons/deckclaw-mark.svg" alt="" aria-hidden="true">DeckClaw</span> · <span class="footer-version" tabindex="0">v1.1.1<span class="version-tooltip">Última release: 14/03/2026 · 16:32 (GMT-3)</span></span>
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
  <div class="overlay-backdrop" data-overlay-dismiss></div>
  <aside class="right-panel" data-panel="chat" aria-label="Painel de chat">
    <div class="panel-head"><strong>Chat</strong><button class="panel-close" data-overlay-dismiss aria-label="Fechar">${icon('close')}</button></div>
    <div class="panel-body panel-list">
      <article class="mini-card">
        <img class="mini-avatar" src="https://i.pravatar.cc/80?img=32" alt="Avatar de Ana Souza">
        <div class="mini-card-content"><strong>Ana Souza</strong><p>Acabei de subir a versão final do board.</p></div>
        <div class="mini-actions">
          <button class="icon-btn icon-btn-sm" data-dropdown-toggle aria-label="Ações da conversa com Ana Souza">${icon('more')}</button>
          <div class="mini-dropdown" data-dropdown-menu>
            <button type="button" data-toast="Conversa marcada como lida"><span class="menu-item-icon">${icon('check')}</span><span>Marcar como lida</span></button>
            <button type="button" data-toast="Conversa apagada"><span class="menu-item-icon">${icon('trash')}</span><span>Apagar conversa</span></button>
            <button type="button" data-toast="Contato bloqueado"><span class="menu-item-icon">${icon('ban')}</span><span>Bloquear</span></button>
          </div>
        </div>
      </article>
      <article class="mini-card">
        <img class="mini-avatar" src="https://i.pravatar.cc/80?img=15" alt="Avatar de Bruno Lima">
        <div class="mini-card-content"><strong>Bruno Lima</strong><p>Você consegue revisar as notificações ainda hoje?</p></div>
        <div class="mini-actions">
          <button class="icon-btn icon-btn-sm" data-dropdown-toggle aria-label="Ações da conversa com Bruno Lima">${icon('more')}</button>
          <div class="mini-dropdown" data-dropdown-menu>
            <button type="button" data-toast="Conversa marcada como lida"><span class="menu-item-icon">${icon('check')}</span><span>Marcar como lida</span></button>
            <button type="button" data-toast="Conversa apagada"><span class="menu-item-icon">${icon('trash')}</span><span>Apagar conversa</span></button>
            <button type="button" data-toast="Contato bloqueado"><span class="menu-item-icon">${icon('ban')}</span><span>Bloquear</span></button>
          </div>
        </div>
      </article>
      <article class="mini-card">
        <img class="mini-avatar" src="https://i.pravatar.cc/80?img=5" alt="Avatar de Carla Freitas">
        <div class="mini-card-content"><strong>Carla Freitas</strong><p>Novo candidato aceitou o convite para entrevista.</p></div>
        <div class="mini-actions">
          <button class="icon-btn icon-btn-sm" data-dropdown-toggle aria-label="Ações da conversa com Carla Freitas">${icon('more')}</button>
          <div class="mini-dropdown" data-dropdown-menu>
            <button type="button" data-toast="Conversa marcada como lida"><span class="menu-item-icon">${icon('check')}</span><span>Marcar como lida</span></button>
            <button type="button" data-toast="Conversa apagada"><span class="menu-item-icon">${icon('trash')}</span><span>Apagar conversa</span></button>
            <button type="button" data-toast="Contato bloqueado"><span class="menu-item-icon">${icon('ban')}</span><span>Bloquear</span></button>
          </div>
        </div>
      </article>
    </div>
  </aside>
  <aside class="right-panel" data-panel="notifications" aria-label="Painel de notificações">
    <div class="panel-head panel-head-actions">
      <strong>Notificações</strong>
      <button class="btn btn-secondary btn-xs" data-mark-all-read><span class="menu-item-icon">${icon('check')}</span><span>Marcar todos como lido</span></button>
      <button class="panel-close" data-overlay-dismiss aria-label="Fechar">${icon('close')}</button>
    </div>
    <div class="panel-body panel-list" data-notification-list>
      <article class="mini-card notification-card" data-notification-item>
        <span class="mini-badge">${icon('spark')}</span>
        <div class="mini-card-content"><strong>Build finalizado</strong><p>Deploy da sprint #24 concluído com sucesso.</p></div>
        <button class="icon-btn icon-btn-sm" data-close-item aria-label="Fechar notificação">${icon('close')}</button>
      </article>
      <article class="mini-card notification-card" data-notification-item>
        <span class="mini-badge">${icon('clock')}</span>
        <div class="mini-card-content"><strong>Lembrete de entrevista</strong><p>Entrevista com Fernanda às 18:30.</p></div>
        <button class="icon-btn icon-btn-sm" data-close-item aria-label="Fechar notificação">${icon('close')}</button>
      </article>
      <article class="mini-card notification-card" data-notification-item>
        <span class="mini-badge">${icon('info')}</span>
        <div class="mini-card-content"><strong>Nova atualização</strong><p>Checklist de QA foi atualizado no projeto DeckClaw.</p></div>
        <button class="icon-btn icon-btn-sm" data-close-item aria-label="Fechar notificação">${icon('close')}</button>
      </article>
    </div>
  </aside>
  <div class="floating-popover" data-floating-popover></div>
  <div class="toast-stack"></div>`;
}
