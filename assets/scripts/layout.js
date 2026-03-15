function icon(name, cls = '') {
  const icons = {
    dashboard: 'ri-dashboard-line',
    briefcase: 'ri-briefcase-4-line',
    folder: 'ri-folder-3-line',
    users: 'ri-team-line',
    puzzle: 'ri-puzzle-2-line',
    dot: 'ri-checkbox-blank-circle-fill',
    bot: 'ri-robot-2-line',
    settings: 'ri-settings-3-line',
    brick: 'ri-layout-grid-line',
    candidate: 'ri-user-search-line',
    menu: 'ri-menu-line',
    chat: 'ri-chat-3-line',
    bell: 'ri-notification-3-line',
    chevron: 'ri-arrow-down-s-line',
    'chevron-up': 'ri-arrow-up-s-line',
    'chevron-down': 'ri-arrow-down-s-line',
    'chevron-left': 'ri-arrow-left-s-line',
    'chevron-right': 'ri-arrow-right-s-line',
    close: 'ri-close-line',
    user: 'ri-user-3-line',
    plug: 'ri-plug-2-line',
    logout: 'ri-logout-box-r-line',
    more: 'ri-more-2-fill',
    check: 'ri-check-line',
    trash: 'ri-delete-bin-6-line',
    ban: 'ri-forbid-2-line',
    info: 'ri-information-line',
    clock: 'ri-time-line',
    spark: 'ri-flashlight-line'
  };
  const klass = icons[name] || 'ri-circle-line';
  return `<i class="ri ${klass} ${cls}" aria-hidden="true"></i>`;
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
          <img class="brand-mark-img" src="assets/icons/brand.svg" alt="DeckClaw">
          <div class="brand-title">DeckClaw</div>
        </div>

        ${navGroup('Principal', `
          ${navLink('index.html', 'Dashboard', 'dashboard')}
          ${navLink('agents.html', 'Agentes', 'candidate')}
          ${navLink('openclaw.html', 'OpenClaw', 'bot')}
          ${navLink('projects.html', 'Projetos', 'folder')}
          ${navLink('tasks.html', 'Tarefas', 'puzzle')}
          ${navLink('reports.html', 'Relatórios', 'briefcase')}
          ${navLink('users.html', 'Usuários', 'users')}
          ${navLink('settings.html', 'Configurações', 'settings')}
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
          ${navLink('icons.html', 'Remix Icons', 'spark')}
          ${navLink('elements.html', 'Elementos básicos', 'puzzle')}
        `)}
      </div>

      <div class="sidebar-footer">
        <button class="profile-trigger" data-profile-toggle aria-expanded="false" title="Perfil do usuário">
          <img class="profile-photo" src="https://i.pravatar.cc/80?img=12" alt="Foto de perfil de Lauro Vitor">
          <span class="profile-name">Lauro Vitor</span>
          <span class="nav-caret profile-caret" aria-hidden="true">${icon('chevron-up', 'caret-icon')}</span>
        </button>

        <div class="profile-menu" data-profile-menu>
          ${dropdownLink('settings.html', 'Minha conta', 'user')}
          <label class="theme-switch-row" for="themeToggle">
            <span class="menu-item-icon">${icon('spark')}</span>
            <span>Tema escuro</span>
            <span class="theme-switch"><input id="themeToggle" type="checkbox" aria-label="Alternar tema"><span class="theme-switch-slider"></span></span>
          </label>
          ${dropdownLink('login.html', 'Logout', 'logout')}
        </div>
      </div>

      <button class="sidebar-edge-toggle" data-sidebar-toggle aria-label="Abrir ou fechar menu lateral" title="Alternar menu">
        <span data-sidebar-icon>${icon('chevron-left', 'sidebar-toggle-icon')}</span>
      </button>
    </aside>

    <main class="main">
      <header class="topbar">
        <div class="topbar-left">
          <div class="topbar-title-wrap">
            <strong>${title}</strong>
            ${subtitle ? `<div class="topbar-subtitle">${subtitle}</div>` : ''}
          </div>
          <div class="topbar-mobile-brand">
            <img src="assets/icons/brand.svg" alt="DeckClaw" class="topbar-mobile-brand-icon">
            <span class="topbar-mobile-brand-name">DeckClaw</span>
          </div>
        </div>
        <div class="topbar-right">
          <button class="icon-btn" data-open-panel="chat" aria-label="Abrir chat" title="Chat">${icon('chat')}</button>
          <button class="icon-btn notif-btn" data-open-panel="notifications" aria-label="Abrir notificações" title="Notificações">${icon('bell')}<span class="notif-badge" aria-label="2 notificações novas">2</span></button>
          <button class="icon-btn mobile-menu-btn" data-sidebar-toggle-top aria-label="Abrir menu" title="Menu">${icon('menu')}</button>
        </div>
      </header>

      <section class="content">
        <h1 class="page-title">${title}</h1>
        <p class="page-subtitle">${subtitle || ''}</p>
        ${body}
      </section>

      <footer class="footer">
        <div class="footer-left">
          <span class="footer-brand"><img class="footer-brand-icon" src="assets/icons/brand.svg" alt="" aria-hidden="true">DeckClaw</span> · <span class="footer-version" tabindex="0">v1.1.1-build<span class="version-tooltip">Última release: 14/03/2026 · 16:32 (GMT-3)</span></span>
        </div>
        <div class="footer-right">
          <a href="support.html">suporte</a>
          <span>-</span>
          <a href="https://deckclaw.api.br" target="_blank" rel="noopener">apidoc</a>
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
    </div>
  </aside>
  <aside class="right-panel" data-panel="notifications" aria-label="Painel de notificações">
    <div class="panel-head"><strong>Notificações</strong><button class="panel-close" data-overlay-dismiss aria-label="Fechar">${icon('close')}</button></div>
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
    </div>
    <div class="panel-footer">
      <button class="panel-footer-action" data-mark-all-read>${icon('check')} <span>Marcar todas como lidas</span></button>
    </div>
  </aside>
  <div class="floating-popover" data-floating-popover></div>
  <div class="toast-stack"></div>`;
}
