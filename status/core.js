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
            statusLabel = 'Maintenance';
            break;
          default:
            statusLabel = 'Unknown';
        }
        statusText.textContent = statusLabel;

        card.appendChild(iconWrapper);
        card.appendChild(title);
        card.appendChild(statusText);

        container.appendChild(card);
     }  });    }
    }



function is_renderStatuses() {    var is_renderStatusesdf="";
 if(statuses && statusesOptions){      
      statuses.forEach((item) => {
      if(item){
        is_renderStatusesdf=is_renderStatusesdf+'<div class="status-card">';
       is_renderStatusesdf=is_renderStatusesdf+'<div>'+ item.icon+'</div>';
       is_renderStatusesdf=is_renderStatusesdf+'<div class="status-title">'+ item.title+'</div>';
        let statusLabel = '';
        switch (statusesOptions[item.status]) {
          case 'online':
            statusLabel = 'Online';
            break;
          case 'offline':
            statusLabel = 'Offline';
            break;
          case 'maintenance':
            statusLabel = 'Maintenance';
            break;
          default:
            statusLabel = 'Unknown';
        }
       is_renderStatusesdf=is_renderStatusesdf+'<div class="status '+statusesOptions[item.status]+'">'+statusLabel+'</div>';
        is_renderStatusesdf=is_renderStatusesdf+'</div>';
     }  });     is_renderStatusesdf=is_renderStatusesdf+'<br/><br/>';   }
return is_renderStatusesdf;    }





