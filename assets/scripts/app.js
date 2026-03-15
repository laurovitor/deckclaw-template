(function () {
  const sidebar = document.querySelector('.sidebar');
  const toggles = document.querySelectorAll('[data-sidebar-toggle], [data-sidebar-toggle-top]');
  const sidebarIcon = document.querySelector('[data-sidebar-icon]');
  const floatingPopover = document.querySelector('[data-floating-popover]');
  const overlayBackdrop = document.querySelector('[data-overlay-dismiss]');

  function closeFloatingPopover() {
    if (!floatingPopover) return;
    floatingPopover.classList.remove('open');
    floatingPopover.innerHTML = '';
  }

  function positionFloatingPopover(trigger) {
    if (!floatingPopover || !trigger) return;
    const rect = trigger.getBoundingClientRect();
    const margin = 8;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const popRect = floatingPopover.getBoundingClientRect();

    let left = rect.right + margin;
    if (left + popRect.width > vw - margin) {
      left = Math.max(margin, rect.left - popRect.width - margin);
    }

    let top = rect.top;
    if (top + popRect.height > vh - margin) {
      top = Math.max(margin, rect.bottom - popRect.height);
    }

    if (top < margin) top = margin;
    floatingPopover.style.left = `${left}px`;
    floatingPopover.style.top = `${top}px`;
  }

  function openFloatingPopover(trigger, html) {
    if (!floatingPopover || !trigger) return;
    floatingPopover.innerHTML = html;
    floatingPopover.classList.add('open');
    requestAnimationFrame(() => positionFloatingPopover(trigger));
  }

  function updateSidebarIcon() {
    if (!sidebarIcon) return;
    const isMobile = window.innerWidth <= 960;
    const collapsed = isMobile ? !sidebar?.classList.contains('open') : sidebar?.classList.contains('collapsed');
    sidebarIcon.innerHTML = collapsed
      ? '<i class="ri ri-arrow-right-s-line sidebar-toggle-icon" aria-hidden="true"></i>'
      : '<i class="ri ri-arrow-left-s-line sidebar-toggle-icon" aria-hidden="true"></i>';
  }

  function syncBodyState() {
    const isMobile = window.innerWidth <= 960;
    const sidebarOpenMobile = isMobile && sidebar?.classList.contains('open');
    const hasOpenPanel = !!document.querySelector('.right-panel.open');

    document.body.classList.toggle('sidebar-collapsed', !isMobile && !!sidebar?.classList.contains('collapsed'));
    document.body.classList.toggle('has-overlay', sidebarOpenMobile || hasOpenPanel);
    document.body.classList.toggle('no-scroll', sidebarOpenMobile || hasOpenPanel);

    if (overlayBackdrop) {
      overlayBackdrop.classList.toggle('open', sidebarOpenMobile || hasOpenPanel);
    }
  }

  if (toggles.length && sidebar) {
    updateSidebarIcon();
    syncBodyState();
    toggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        if (window.innerWidth <= 960) sidebar.classList.toggle('open');
        else sidebar.classList.toggle('collapsed');
        closeFloatingPopover();
        updateSidebarIcon();
        syncBodyState();
      });
    });
    window.addEventListener('resize', () => {
      closeFloatingPopover();
      updateSidebarIcon();
      syncBodyState();
    });
  }

  document.querySelectorAll('[data-nav-dropdown]').forEach(trigger => {
    const dropdown = trigger.closest('.nav-dropdown');
    const submenu = dropdown?.querySelector('.nav-submenu');
    const isOpen = dropdown?.classList.contains('open');
    trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    trigger.addEventListener('click', (ev) => {
      ev.stopPropagation();
      if (sidebar?.classList.contains('collapsed')) {
        openFloatingPopover(trigger, submenu?.innerHTML || '');
        return;
      }

      dropdown?.classList.toggle('open');
      trigger.setAttribute('aria-expanded', dropdown?.classList.contains('open') ? 'true' : 'false');
    });
  });

  const profileToggle = document.querySelector('[data-profile-toggle]');
  const profileMenu = document.querySelector('[data-profile-menu]');

  if (profileToggle && profileMenu) {
    profileToggle.addEventListener('click', (ev) => {
      ev.stopPropagation();
      if (sidebar?.classList.contains('collapsed')) {
        openFloatingPopover(profileToggle, profileMenu.innerHTML);
        profileToggle.setAttribute('aria-expanded', 'true');
        return;
      }

      closeFloatingPopover();
      const open = profileMenu.classList.toggle('open');
      profileToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('click', (ev) => {
      const clickedProfile = profileMenu.contains(ev.target) || ev.target === profileToggle || profileToggle.contains(ev.target);
      if (!clickedProfile) {
        profileMenu.classList.remove('open');
        profileToggle.setAttribute('aria-expanded', 'false');
      }

      if (floatingPopover && !floatingPopover.contains(ev.target)) {
        closeFloatingPopover();
      }
    });
  }

  const panelTriggers = document.querySelectorAll('[data-open-panel]');
  const panels = document.querySelectorAll('.right-panel');

  function closePanels() {
    panels.forEach(panel => panel.classList.remove('open'));
    if (window.innerWidth <= 960) {
      sidebar?.classList.remove('open');
    }
    syncBodyState();
  }

  panelTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const panelName = btn.dataset.openPanel;
      const targetPanel = document.querySelector(`.right-panel[data-panel="${panelName}"]`);
      const isOpen = targetPanel?.classList.contains('open');
      closePanels();
      if (!isOpen && targetPanel) {
        targetPanel.classList.add('open');
      }
      syncBodyState();
    });
  });

  document.querySelectorAll('[data-overlay-dismiss]').forEach(el => {
    el.addEventListener('click', closePanels);
  });

  document.querySelectorAll('[data-dropdown-toggle]').forEach(toggleBtn => {
    const menu = toggleBtn.parentElement?.querySelector('[data-dropdown-menu]');
    toggleBtn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      document.querySelectorAll('[data-dropdown-menu].open').forEach(openMenu => {
        if (openMenu !== menu) openMenu.classList.remove('open');
      });
      menu?.classList.toggle('open');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('[data-dropdown-menu].open').forEach(menu => menu.classList.remove('open'));
  });

  document.querySelectorAll('[data-close-item]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('[data-notification-item]')?.remove();
    });
  });

  const markAllRead = document.querySelector('[data-mark-all-read]');
  if (markAllRead) {
    markAllRead.addEventListener('click', () => {
      document.querySelectorAll('[data-notification-item]').forEach(item => item.classList.add('is-read'));
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

  const themeToggle = document.querySelector('#themeToggle');
  const savedTheme = localStorage.getItem('deckclaw-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (themeToggle) {
    themeToggle.checked = savedTheme === 'dark';
    themeToggle.addEventListener('change', () => {
      const next = themeToggle.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('deckclaw-theme', next);
    });
  }

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

  syncBodyState();
})();
