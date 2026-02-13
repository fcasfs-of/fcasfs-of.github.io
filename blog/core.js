let currentLanguage = "pt";



function filtrarLista() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("filtroInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("posts-container");
  li = ul.querySelectorAll(".post-card");
  for (i = 0; i < li.length; i++) {
    if (li[i].innerText.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}




function get_infos_historic(asdd){     var itnt_forpag= "";  var count_itend= 0;  var paginationLimit=0;   var pageCount=0;
if(asdd){
    if(asdd.paginationLimit && asdd.listItems && asdd.paginatedList){  
const paginatedList = document.getElementById(asdd.paginatedList);
const listItems = paginatedList.querySelectorAll(asdd.listItems);
 paginationLimit = asdd.paginationLimit;
 count_itend=listItems.length;    itnt_forpag=paginationLimit;
 pageCount = Math.ceil(listItems.length / paginationLimit);
}
}
return { count_pages: pageCount, itens_porpages: itnt_forpag, count_itens:count_itend }; }



function ufpdate_hiscopagge(asdd){
if(asdd){

  if(asdd.contItems && asdd.paginationNumbers && asdd.paginatedList && asdd.listItems && asdd.prevButton && asdd.nextButton && asdd.paginationLimit && asdd.paginationNumberp && asdd.paginationLindex && asdd.paginationclass){  


const contdstItems = document.getElementById(asdd.contItems);

const paginationNumberp = asdd.paginationNumberp;
const paginationLindex = asdd.paginationLindex;
const paginationclass = asdd.paginationclass;

const paginationNumbers = document.getElementById(asdd.paginationNumbers);
const paginatedList = document.getElementById(asdd.paginatedList);
const listItems = paginatedList.querySelectorAll(asdd.listItems);
const nextButton = document.getElementById(asdd.nextButton);
const prevButton = document.getElementById(asdd.prevButton);

paginationNumbers.innerHTML="";
contdstItems.innerHTML="";
contdstItems.classList.remove("notpop");


const paginationLimit = asdd.paginationLimit;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;



const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {    disableButton(prevButton);  } else {    enableButton(prevButton);  }
  if (pageCount === currentPage || pageCount < 2 ) {    disableButton(nextButton);  }  else {    enableButton(nextButton);  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(paginationNumberp).forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute(paginationLindex));   
    enableButton(button);   
    if (pageIndex == currentPage) {      button.classList.add("active");   disableButton(button);       }
  });
};

const appendPageNumber = (index) => { 
  const pageNumber = document.createElement("button");
  pageNumber.className = paginationclass;
  var fdappendPageNumber=index;
  if(pageCount>=10){     if(index<=9){   fdappendPageNumber="0"+index;   }    }
  pageNumber.innerHTML = fdappendPageNumber;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + fdappendPageNumber);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();  handlePageButtonsStatus();
  
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {      item.classList.remove("hidden");    }
  });
};


contdstItems.classList.add("notpop");
contdstItems.innerHTML="<hr/>"+listItems.length.toLocaleString('en-US').replace(/,/g, ".");
if(listItems.length<1){
contdstItems.classList.remove("notpop");
contdstItems.innerHTML="Lista de \"Histórico\" está Vazia.";
}



  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {    setCurrentPage(currentPage - 1);  });

  nextButton.addEventListener("click", () => {    setCurrentPage(currentPage + 1);  });

  document.querySelectorAll(paginationNumberp).forEach((button) => {
    const pageIndex = Number(button.getAttribute(paginationLindex));
    if (pageIndex) {
      button.addEventListener("click", () => {        setCurrentPage(pageIndex);      });
    }
  });
}

}


}




var scriptmsfdffgg = document.createElement("script");
    scriptmsfdffgg.setAttribute("type", "text/javascript");
    scriptmsfdffgg.setAttribute("src", "https://lightbox.fcasfs-of.cloud-fs.net/app/api.js");
document.getElementsByTagName("head")[0].appendChild(scriptmsfdffgg);



  const text_thnv = "";



  function openModal(contentOptions) {
    fsmodal_open({
      id: "previ_box",
      tiptext: text_thnv,
      scroll_hide: "yes",
      noclose: false,
      include: { player: contentOptions.includePlayer },
      content: {
        title: contentOptions.title,
        type: contentOptions.type,
        context: contentOptions.context,
        poster: contentOptions.poster,
        size: contentOptions.size,
        description: contentOptions.description
      }
    });
  }


function openModal_img(tl, im, des) {
openModal({
      title: tl,
      type: "image",
      context: im,
      size: "450",
      includePlayer: "no",
      description: des
    });
}




function postF_imgs(id){
if(id && ppost_infos){   if(ppost_infos[id]){
openModal_img(ppost_infos[id].tlt, ppost_infos[id].img, ppost_infos[id].desc);  
}    }
}

function postf_add(po){
if(po && ppost_infos){
ppost_infos.push({ tlt: po["name"][currentLanguage], img: po["image"], desc: po.date+" | "+po.author });   
}  
}



var postiid=0;   var ppost_infos=[];

ppost_infos.push({ tlt: "", img: "", desc:"" });
              


function renderPosts() {  postiid=0;

var check_modall=false; 
if(document.getElementById("previ_box")){   check_modall=true;   }                     
if(check_modall==false){    
    var newDil_modal = document.createElement("div");   newDil_modal.id="previ_box";    newDil_modal.innerHTML = '';      document.getElementsByTagName("body")[0].appendChild(newDil_modal);     
}

                    
  const postsContainer = document.getElementById('posts-container');
  
  if(postsContainer){

    var buscmod = document.createElement("span");
      buscmod.innerHTML = `<div class="busca" style="width:70%;">   <input type="text" id="filtroInput" placeholder="...">  <button onclick="filtrarLista();"><svg fill="#fff" width="20px" height="20px" viewBox="0 0 50 50" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit"><path d="M35.66 29.539c1.661-2.739 2.632-5.948 2.632-9.385 0-10.029-8.115-18.15-18.146-18.154-10.022.003-18.146 8.125-18.146 18.152 0 10.018 8.125 18.139 18.152 18.139 3.44 0 6.645-.972 9.384-2.633l12.343 12.342 6.121-6.124-12.34-12.337zm-15.51 1.841c-6.202-.015-11.216-5.027-11.227-11.216.012-6.202 5.027-11.215 11.227-11.229 6.199.016 11.215 5.028 11.228 11.229-.013 6.182-5.031 11.201-11.228 11.216z"/></svg></button>   </div>  <br/><br/><br/>`;
//postsContainer.firstChild.appendChild(buscmod);

    
   postsContainer.innerHTML = '';
    
 if(blogPosts){            blogPosts.forEach(post => {
if(post){
postiid=postiid+1;

postf_add(post);

   var postsContainer_more="";      var postsContainer_moretxt={ pt:"Ler mais", en: "Read more" };

var lbox_moday="";
if(post.lbox && post.lbox==true){
lbox_moday=` onclick="postF_imgs('${postiid}');" `;
}

  if(post.custom){  
    if(post.custom[currentLanguage]){    if(post.custom[currentLanguage].more && post.custom[currentLanguage].more!=""){    postsContainer_moretxt[currentLanguage]=post.custom[currentLanguage].more;   }     }
  }
   if(post.more && post.more==true){     if(post.link){  if(post.link[currentLanguage] && post.link[currentLanguage]!=""){   postsContainer_more= `<a href="${post.link[currentLanguage]}" class="read-more" data-pt="${postsContainer_moretxt.pt}" data-en="${postsContainer_moretxt.en}">${currentLanguage === 'pt' ? postsContainer_moretxt.pt : postsContainer_moretxt.en}</a>`;     }    }    }
                                      
                const postElement = document.createElement('article');
                postElement.className = 'post-card';
                postElement.id = 'post_'+postiid+"_fs";
                postElement.innerHTML = `
                    <div ${lbox_moday} class="post-image" style="pointer-events: auto;  background-image: url('${post.image}')"></div>
                    <div class="post-content">
                        <div class="post-meta">
                            <span class="post-category" data-pt="${post.category.pt}" data-en="${post.category.en}">${post.category[currentLanguage]}</span>
                            <span>${post.date} | ${post.author}</span>
                        </div>
                        <h3 class="post-title" data-pt="${post.title.pt}" data-en="${post.title.en}">${post.title[currentLanguage]}</h3>
                        <p class="post-excerpt" style="color:#000; " data-pt="${post.excerpt.pt}" data-en="${post.excerpt.en}">${post.excerpt[currentLanguage]}</p>
                        ${postsContainer_more}
                    </div>
                `;

  postsContainer.appendChild(postElement);

}
            });   

              }    
           }
        }     


    function switchLanguage(lang) {
           if(lang && lang!=""){    currentLanguage = lang;

             document.querySelectorAll('[data-pt], [data-en]').forEach(element => {
                if (element.hasAttribute(`data-${lang}`)) {
                    const newText = element.getAttribute(`data-${lang}`);
                    
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.value = newText;
                    } else if (element.hasAttribute('data-html')) {
                        element.innerHTML = newText;
                    } else {
                        element.textContent = newText;
                    }
                }
            });

            renderPosts();   

 ufpdate_hiscopagge({
  paginationNumbers:"pagination-numbers",
  paginatedList:"posts-container", listItems:".post-card",
  nextButton:"next-button",  prevButton:"prev-button",
  paginationLimit:6,
  paginationNumberp:".pagination-number",
  paginationLindex: "page-index",
  paginationclass: "pagination-number",
  contItems:"dcont_ksit"
  });    
        
      }
   }



  
