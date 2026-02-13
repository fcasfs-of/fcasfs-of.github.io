       const statusesOptions = ['online', 'offline', 'maintenance'];

   const container = document.getElementById('statusContainer');

    function renderStatuses() {   if(container && statuses && statusesOptions){
      container.innerHTML = ''; 
      statuses.forEach((item) => {
      if(item){
        const card = document.createElement('div');
        card.className = 'status-card';

        const iconWrapper = document.createElement('div');
        iconWrapper.innerHTML = item.icon;

        const title = document.createElement('div');
        title.className = 'status-title';
        title.textContent = item.title;

        const statusText = document.createElement('div');
        statusText.className = `status ${statusesOptions[item.status]}`;
        
        let statusLabel = '';
        switch (statusesOptions[item.status]) {
          case 'online':
            statusLabel = 'Online';
            break;
          case 'offline':
            statusLabel = 'Offline';
            break;
          case 'maintenance':
            statusLabel = 'Manutenção';
            break;
          default:
            statusLabel = 'Desconhecido';
        }
        statusText.textContent = statusLabel;

        card.appendChild(iconWrapper);
        card.appendChild(title);
        card.appendChild(statusText);

        container.appendChild(card);
     }  });    }
    }




