  const container = document.getElementById('sitemap-container');

function createSubdomainCard(subdomain) {
  if(subdomain){
    const card = document.createElement('div');
    card.className = 'subdomain';

    const title = document.createElement('h2');
    if(subdomain.name){   title.textContent = subdomain.name;    }
    card.appendChild(title);

    const ul = document.createElement('ul');
    ul.className = 'links';

    if(subdomain.links){
    subdomain.links.forEach(link => {
      if(link){
      const li = document.createElement('li');
      const a = document.createElement('a');
       if(link.url){   a.href = link.url;   }
       if(link.title){    a.textContent = link.title;    }
      a.target = '_blank'; 
      li.appendChild(a);
      ul.appendChild(li);
      }
    });
    }

    card.appendChild(ul);
    return card;
  }
  }


if(fs_subdomains){
  fs_subdomains.forEach(sub => {
      if(sub){
    const card = createSubdomainCard(sub);
    container.appendChild(card);
      }
  });
  }

