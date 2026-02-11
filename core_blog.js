let currentLanguage = 'pt';

const postsContainer = document.getElementById('posts-container');


function renderPosts() {
  if(postsContainer){
   postsContainer.innerHTML = '';
 if(blogPosts){            blogPosts.forEach(post => {

   var postsContainer_more="";
   if(post.more && post.more==true){  postsContainer_more= `<a href="#" class="read-more" data-pt="Ler mais" data-en="Read more">${currentLanguage === 'pt' ? 'Ler mais' : 'Read more'}</a>`;
                                      
                const postElement = document.createElement('article');
                postElement.className = 'post-card';
                postElement.innerHTML = `
                    <div class="post-image" style="background-image: url('${post.image}')"></div>
                    <div class="post-content">
                        <div class="post-meta">
                            <span class="post-category" data-pt="${post.category.pt}" data-en="${post.category.en}">${post.category[currentLanguage]}</span>
                            <span>${post.date} | ${post.author}</span>
                        </div>
                        <h3 class="post-title" data-pt="${post.title.pt}" data-en="${post.title.en}">${post.title[currentLanguage]}</h3>
                        <p class="post-excerpt" data-pt="${post.excerpt.pt}" data-en="${post.excerpt.en}">${post.excerpt[currentLanguage]}</p>
                        ${postsContainer_more}
                    </div>
                `;
                postsContainer.appendChild(postElement);
            });

              }    }
        }


    function switchLanguage(lang) {
           if(lang && lang!=""){   currentLanguage = lang;
            
            renderPosts();    }
   }


