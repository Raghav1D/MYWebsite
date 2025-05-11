function toggleSidebar() {
      const sidebar = document.querySelector('.sidebar');
      const overlay = document.getElementById('overlay');
      sidebar.classList.remove('animate-out');
      sidebar.classList.add('animate-in');
      sidebar.style.display = 'flex';
      overlay.style.display = 'block';
    }

    function hideSidebar() {
      const sidebar = document.querySelector('.sidebar');
      const overlay = document.getElementById('overlay');
      sidebar.classList.remove('animate-in');
      sidebar.classList.add('animate-out');
      setTimeout(() => {
        sidebar.style.display = 'none';
        sidebar.classList.remove('animate-out');
      }, 500);
      overlay.style.display = 'none';
    }

    function closeSidebar() {
      hideSidebar();
    }