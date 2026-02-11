  const containerd = document.getElementById('sitemap-container');
  const containerp = document.getElementById('psitemap-container');

function createSubdomainCard(subdomain) {
  if(subdomain){
    const card = document.createElement('div');
    card.className = 'subdomain';

    if(subdomain.name && subdomain.name!=""){       const title = document.createElement('h2');
        title.textContent = subdomain.name;        card.appendChild(title);     }

    const ul = document.createElement('ul');
    ul.className = 'links';

    if(subdomain.links){
    subdomain.links.forEach(link => {
      if(link){
      const li = document.createElement('li');
      const a = document.createElement('a');
         a.href="#";   a.textContent = "";
       if(link.url && link.url!=""){   a.href = link.url;   }
       if(link.title && link.title!=""){    a.textContent = link.title;    }
      a.target = '_blank'; 
      if(link.disable && link.disable==true){  
      a.target="";  a.className="disabled";
      a.href="#";
      }
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
    if(containerd){   containerd.appendChild(card);    }
      }
  });
  }

if(fs_subdomains_pp){
  fs_subdomains_pp.forEach(sub => {
      if(sub){
    const card = createSubdomainCard(sub);
    if(containerp){   containerp.appendChild(card);    }
      }
  });
  }


