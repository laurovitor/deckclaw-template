(function () {
  const sidebar = document.querySelector('.sidebar');
  const toggle = document.querySelector('[data-sidebar-toggle]');
  const floatingPopover = document.querySelector('[data-floating-popover]');

  function closeFloatingPopover() {
    if (!floatingPopover) return;
    floatingPopover.classList.remove('open');
    floatingPopover.innerHTML = '';
  }

  function openFloatingPopover(trigger, html) {
    if (!floatingPopover || !trigger) return;
    const rect = trigger.getBoundingClientRect();
    floatingPopover.innerHTML = html;
    floatingPopover.style.left = `${rect.right + 10}px`;
    floatingPopover.style.top = `${Math.max(8, rect.top)}px`;
    floatingPopover.classList.add('open');
  }

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      if (window.innerWidth <= 960) sidebar.classList.toggle('open');
      else sidebar.classList.toggle('collapsed');
      closeFloatingPopover();
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

  const overlayBackdrop = document.querySelector('[data-overlay-dismiss]');
  const panelTriggers = document.querySelectorAll('[data-open-panel]');
  const panels = document.querySelectorAll('.right-panel');

  function closePanels() {
    panels.forEach(panel => panel.classList.remove('open'));
    overlayBackdrop?.classList.remove('open');
  }

  panelTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const panelName = btn.dataset.openPanel;
      const targetPanel = document.querySelector(`.right-panel[data-panel="${panelName}"]`);
      const isOpen = targetPanel?.classList.contains('open');
      closePanels();
      if (!isOpen && targetPanel) {
        targetPanel.classList.add('open');
        overlayBackdrop?.classList.add('open');
      }
    });
  });

  document.querySelectorAll('[data-overlay-dismiss]').forEach(el => {
    el.addEventListener('click', closePanels);
  });

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
