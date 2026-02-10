  const container = document.getElementById('sitemap-container');

function createSubdomainCard(subdomain) {
    const card = document.createElement('div');
    card.className = 'subdomain';

    const title = document.createElement('h2');
    title.textContent = subdomain.name;
    card.appendChild(title);

    const ul = document.createElement('ul');
    ul.className = 'links';

    subdomain.links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.url;
      a.textContent = link.title;
      a.target = '_blank'; 
      li.appendChild(a);
      ul.appendChild(li);
    });

    card.appendChild(ul);
    return card;
  }


if(fs_subdomains){
  fs_subdomains.forEach(sub => {
    const card = createSubdomainCard(sub);
    container.appendChild(card);
  });
  }

