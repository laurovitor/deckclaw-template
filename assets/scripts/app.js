(function () {
  const sidebar = document.querySelector('.sidebar');
  const toggle = document.querySelector('[data-sidebar-toggle]');
  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      if (window.innerWidth <= 960) sidebar.classList.toggle('open');
      else sidebar.classList.toggle('collapsed');
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
