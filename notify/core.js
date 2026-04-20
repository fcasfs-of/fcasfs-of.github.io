  const translations = {
    pt: {
      notificationsTitle: "Notificações",
      searchPlaceholder: "Pesquisar...",
      categories: [
        { id: 'inotices', name: 'Avisos Importantes' },
        { id: 'alerts', name: 'Alertas' },
        { id: 'reminders', name: 'Lembretes' },
        { id: 'messages', name: 'Mensagens' },
        { id: 'security', name: 'Segurança' },
        { id: 'support', name: 'Suporte' },
        { id: 'wnew', name: 'Novidades' },
        { id: 'updates', name: 'Atualizações' },
        { id: 'recommendations', name: 'Recomendações' },
        { id: 'maintenance', name: 'Manutenção' }
      ],
      noResults: "Nenhuma Notificação Encontrada."
    },
    en: {
      notificationsTitle: "Notifications",
      searchPlaceholder: "Search...",
      categories: [
        { id: 'inotices', name: 'Important Notices' },
        { id: 'alerts', name: 'Alerts' },
        { id: 'reminders', name: 'Reminders' },
        { id: 'messages', name: 'Messages' },
        { id: 'security', name: 'Security' },
        { id: 'support', name: 'Support' },
        { id: 'wnew', name: 'What\'s New' },
        { id: 'updates', name: 'Updates' },
        { id: 'recommendations', name: 'Recommendations' },
        { id: 'maintenance', name: 'Maintenance' }
      ],
      noResults: "No Notifications Found."
    }
  };



  const categoriesContainer = document.getElementById('categories-container');

  const searchInput = document.getElementById('search-input');

  function setLanguage(lang) {
    currentLang = lang;

  document.querySelectorAll('.lang-btn').forEach(btfn => {
      btfn.classList.remove("active");
      if(btfn.getAttribute('data-lang').toLowerCase()==currentLang.toLowerCase()){        btfn.classList.add("active");   }
  });

    
    document.getElementById('dnotificationsTitle').innerHTML = translations[lang].notificationsTitle+"  <span id='totoaldeitrt'></span>";
    document.querySelector('h1 .notiis').innerHTML = translations[lang].notificationsTitle;
    document.getElementById('search-input').setAttribute('placeholder', translations[lang].searchPlaceholder);
    renderCategories();
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });


function formatarValor(valor) {    return valor.toLocaleString('pt-BR');    }

var count_liyr= 0;

function renderCategories() {
    categoriesContainer.innerHTML = '';
count_liyr= 0;
  
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
      categoryTitle.innerHTML = "<span class='img "+cat.id+"'></span>  <br/>"+cat.name+"";
      //categoryTitle.className = cat.id;
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
          
          count_liyr=count_liyr+1;
          
          var notfy_disdd="";
          if(notif.disable==true){  notfy_disdd=" disabled";  }
          notifDiv.className = 'notification'+notfy_disdd;

          const iconWrapper = document.createElement('div');
          iconWrapper.className = 'icon';
          iconWrapper.innerHTML = notif.icon;

          const contentDiv = document.createElement('div');
          contentDiv.className = 'content';

          const titleDiv = document.createElement('div');
          titleDiv.className = 'title';
          titleDiv.innerHTML = notif.title[currentLang];

          const messageDiv = document.createElement('div');
          messageDiv.className = 'message';
          messageDiv.innerHTML = notif.message[currentLang];

          contentDiv.appendChild(titleDiv);
          contentDiv.appendChild(messageDiv);

          notifDiv.appendChild(iconWrapper);
          notifDiv.appendChild(contentDiv);

          notifContainer.appendChild(notifDiv);
        });
      }

      categoryDiv.appendChild(notifContainer);
      categoriesContainer.appendChild(categoryDiv);

        if(document.getElementById('totoaldeitrt')){  document.getElementById('totoaldeitrt').innerHTML="("+formatarValor(count_liyr)+")";  }

    });
  }

  searchInput.addEventListener('input', () => {
    renderCategories();
  });

