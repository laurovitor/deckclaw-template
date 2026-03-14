(function () {
  const sidebar = document.querySelector('.sidebar');
  const toggle = document.querySelector('[data-sidebar-toggle]');
  const toggleIcon = document.querySelector('[data-sidebar-icon]');

  function syncSidebarIcon() {
    if (!sidebar || !toggleIcon) return;
    const mobile = window.innerWidth <= 960;
    const isClosed = mobile ? !sidebar.classList.contains('open') : sidebar.classList.contains('collapsed');
    toggleIcon.textContent = isClosed ? '☰' : '✕';
  }

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      if (window.innerWidth <= 960) sidebar.classList.toggle('open');
      else sidebar.classList.toggle('collapsed');
      syncSidebarIcon();
    });
    window.addEventListener('resize', syncSidebarIcon);
    syncSidebarIcon();
  }

  document.querySelectorAll('[data-nav-dropdown]').forEach(trigger => {
    const dropdown = trigger.closest('.nav-dropdown');
    const isOpen = dropdown?.classList.contains('open');
    trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    trigger.addEventListener('click', () => {
      if (sidebar?.classList.contains('collapsed')) return;
      dropdown?.classList.toggle('open');
      trigger.setAttribute('aria-expanded', dropdown?.classList.contains('open') ? 'true' : 'false');
    });
  });

  const profileToggle = document.querySelector('[data-profile-toggle]');
  const profileMenu = document.querySelector('[data-profile-menu]');
  if (profileToggle && profileMenu) {
    profileToggle.addEventListener('click', (ev) => {
      ev.stopPropagation();
      if (sidebar?.classList.contains('collapsed')) return;
      const open = profileMenu.classList.toggle('open');
      profileToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('click', (ev) => {
      if (!profileMenu.contains(ev.target) && ev.target !== profileToggle) {
        profileMenu.classList.remove('open');
        profileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('[data-loading]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.add('loading');
      btn.disabled = true;
      setTimeout(() => { btn.classList.remove('loading'); btn.disabled = false; }, 1200);
    });
  });

  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', () => document.querySelector(btn.dataset.openModal)?.classList.add('open'));
  });
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.modal')?.classList.remove('open'));
  });

  const toastStack = document.querySelector('.toast-stack');
  document.querySelectorAll('[data-toast]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!toastStack) return;
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = btn.dataset.toast || 'Ação concluída';
      toastStack.appendChild(toast);
      setTimeout(() => toast.remove(), 2500);
    });
  });

  document.querySelectorAll('.otp input').forEach((input, i, arr) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/g, '').slice(0, 1);
      if (input.value && arr[i + 1]) arr[i + 1].focus();
    });
  });
})();
