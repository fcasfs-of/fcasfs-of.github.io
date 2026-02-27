  const translations = {
    pt: {
      notificationsTitle: "Notificações",
      searchPlaceholder: "Pesquisar...",
      categories: [
        { id: 'alerts', name: 'Alertas' },
        { id: 'messages', name: 'Mensagens' },
        { id: 'updates', name: 'Atualizações' }
      ],
      noResults: "Nenhuma notificação encontrada."
    },
    en: {
      notificationsTitle: "Notifications",
      searchPlaceholder: "Search...",
      categories: [
        { id: 'alerts', name: 'Alerts' },
        { id: 'messages', name: 'Messages' },
        { id: 'updates', name: 'Updates' }
      ],
      noResults: "No notifications found."
    }
  };



  const categoriesContainer = document.getElementById('categories-container');

  const searchInput = document.getElementById('search-input');

  function setLanguage(lang) {
    currentLang = lang;
    document.querySelector('h1').textContent = translations[lang].notificationsTitle;
    document.getElementById('search-input').setAttribute('placeholder', translations[lang].searchPlaceholder);
    renderCategories();
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });


function renderCategories() {
    categoriesContainer.innerHTML = '';

    const categories = translations[currentLang].categories;
    const filteredNotifications = {};

    const searchTerm = searchInput.value.toLowerCase();

    categories.forEach(cat => {
      const notifs = notificationsData[cat.id] || [];
      const filteredNotifs = notifs.filter(n => {
        const title = n.title[currentLang].toLowerCase();
        const message = n.message[currentLang].toLowerCase();
        return title.includes(searchTerm) || message.includes(searchTerm);
      });

      filteredNotifications[cat.id] = filteredNotifs;

      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'category';

      const categoryTitle = document.createElement('h2');
      categoryTitle.textContent = cat.name;
      categoryDiv.appendChild(categoryTitle);

      const notifContainer = document.createElement('div');
      notifContainer.className = 'notifications';

      if (filteredNotifs.length === 0) {
        const noMsg = document.createElement('p');
        noMsg.style.fontStyle = 'italic';
        noMsg.style.color = '#888';
        noMsg.textContent = translations[currentLang].noResults;
        notifContainer.appendChild(noMsg);
      } else {
        filteredNotifs.forEach(notif => {
          const notifDiv = document.createElement('div');
          notifDiv.className = 'notification';

          const iconWrapper = document.createElement('div');
          iconWrapper.className = 'icon';
          iconWrapper.innerHTML = notif.icon;

          const contentDiv = document.createElement('div');
          contentDiv.className = 'content';

          const titleDiv = document.createElement('div');
          titleDiv.className = 'title';
          titleDiv.textContent = notif.title[currentLang];

          const messageDiv = document.createElement('div');
          messageDiv.className = 'message';
          messageDiv.textContent = notif.message[currentLang];

          contentDiv.appendChild(titleDiv);
          contentDiv.appendChild(messageDiv);

          notifDiv.appendChild(iconWrapper);
          notifDiv.appendChild(contentDiv);

          notifContainer.appendChild(notifDiv);
        });
      }

      categoryDiv.appendChild(notifContainer);
      categoriesContainer.appendChild(categoryDiv);
    });
  }

  searchInput.addEventListener('input', () => {
    renderCategories();
  });

