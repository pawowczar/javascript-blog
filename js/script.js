'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  
  console.log('Link was clicked!');
  console.log(event);

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* [IN PROGRESS] add class 'active' to the clicked link */
  
  clickedElement.classList.add('active');
   
  
  console.log('clickedElement:', clickedElement);
  console.log('clickedElement (with plus): ' + clickedElement);
  console.log('Active class added to link');
  
  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.post');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log('articleSelector ' + articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */
  
  const targetArticle = document.querySelector(articleSelector);
  console.log('targetArticle ' + targetArticle);

  /* Dalczego w Console.log targetArticel wyskakuje Object Htmlelement ?*/
  
  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
  

}


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optArticleAuthorSelector ='.post-author',
  optTagsListSelector ='.tags .list',
  optTitleListSelector = '.titles'; 


function generateTitleLinks(customSelector = ''){

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  console.log("title list " + titleList);

  titleList.innerHTML = '';
  
  /* find all the articles and save them to variable: articles */
  /* ... */
  
  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  let html ='';

  /* for each article */
  for(let article of articles){
  /* get the article id */
    const articleId = article.getAttribute('id');
    console.log(articleId);

    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log(articleTitle);

    
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId +'"><span>' + articleTitle + '</span></a></li>';
    
    console.log(linkHTML);

    /* insert link into titleList */
    //titleList.innerHTML = titleList.innerHTML + linkHTML;
    titleList.insertAdjacentHTML('beforeend', linkHTML);

    /* insert link into html variable */
    html = html + linkHTML;
    //console.log(html);
  }
    
  // titleList.innerHTML = html;
}



generateTitleLinks();

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

const optArticleTagsSelector = '.post-tags .list'; 

function generateTags(){
  

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);

  

  /* START LOOP: for every article: */
  for(let article of articles){
    /* find tags wrapper */
    const tagWraper = article.querySelector(optArticleTagsSelector);
    // console.log(tagWraper);


    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    // console.log('articleTags ' + articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    // console.log(articleTagsArray);
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray){
    /* generate HTML of the link */
    // let html = '<li><a href="#tag-' + tag +'"><span>' + tag + '</span></a></li>';
    
html += '<li><a href="#tag-' + tag +'"><span>' + tag +  '</span></a></li>';

/* add generated code to html variable */
      // console.log('href ' + html);
    /* END LOOP: for each tag */
    }
    
    /* insert HTML of all the links into the tags wrapper */
    tagWraper.insertAdjacentHTML('beforeend', html);
    
  /* END LOOP: for every article: */}
  
}

generateTags();


// Akcja po kliknięciu w tag//


function tagClickHandler(event){
  /* prevent default action for this event */
  
  event.preventDefault();
  
  
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  // console.log(clickedElement);
  
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  // console.log(href);
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  // console.log('tag ' + tag);
  /* find all tag links with class active */
  const tagActiveLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  // console.log("tagActiveLinks " + tagActiveLinks);

  /* START LOOP: for each active tag link */
  for(let tagActiveLink of tagActiveLinks){
    /* remove class active */
    
    tagActiveLink.classList.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
  

  /* START LOOP: for each found tag link */
  for( let tagLink of tagLinks){

    /* add class active */
    tagLink.classList.add('active');
  /* END LOOP: for each found tag link */
}
  /* execute function "generateTitleLinks" with article selector as argument */
  
  
  
  generateTitleLinks('[data-tags~="' + tag + '"]')
  

}


function addClickListenersToTags(){
  


  /* find all links to tags */
  const tags = document.querySelectorAll('.post-tags a');
  /* START LOOP: for each link */
  for(let tag of tags){
    tag.addEventListener('click', tagClickHandler);
  }
  /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();


function generateAuthor(){
  /* find all articles
   */
  const articles = document.querySelectorAll(optArticleSelector);
  
  /* START LOOP: for every Author: */
  for(let article of articles){
    /* find authors wrapper */
   
    const authorWraper = article.querySelector(optArticleAuthorSelector);
    /* make html variable with empty string */
    let html = '';
    /* get author from data-author attribute */
    const articleAuthor = article.getAttribute('data-author');
    console.log(articleAuthor);
   
/* create HTML of the link */
    html += '<a href="#' + articleAuthor + '"><span>' + articleAuthor +  '</span></a>';

    /* insert HTML of all the links into the tags wrapper */
    authorWraper.insertAdjacentHTML('beforeend', html);
  /* END LOOP: for every athor: */
  }
}

generateAuthor();



function authorClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log(clickedElement);
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('href ' + href);
  /* make a new constant "author" and extract tag from the "href" constant */
  const author = href.replace('#', '');
  console.log('author - ' + author);
  /* find all author links with class active */
  const authorActiveLinks = document.querySelectorAll('a.active[href^="#"]');
  /* START LOOP: for each active author link */
  for (let authorActiveLink of authorActiveLinks){
    /* remove class active */
    authorActiveLink.classList.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all author links with "href" attribute equal to the "href" constant */
  const authorLinks = document.querySelectorAll('a[href="' + href + '"]');
  console.log('authorLinks - ' + authorLinks);

  /* START LOOP: for each found tag link */
  for ( let authorLink of authorLinks){
  /* add class active */
    authorLink.classList.add('active');
  /* END LOOP: for each found tag link */
  }
  //   /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]')
  }
  

function addClickListenersToAuthors(){
  /* find all links to tags */
  const authors = document.querySelectorAll('.post-author a');
  /* START LOOP: for each link */
  for(let author of authors){
  /* add authorClickHandler as event listener for that link */
    author.addEventListener('click', authorClickHandler);
  /* END LOOP: for each author */
}
 
}

addClickListenersToAuthors();


// function generateTags(){
//   /* [NEW] create a new variable allTags with an empty array */
//   let allTags = [];

//   /* find all articles */
//   const articles = document.querySelectorAll(optArticleSelector);
//   /* START LOOP: for every article: */
//   for (let article of articles){
//     /* find tags wrapper */

//     /* make html variable with empty string */

//     /* get tags from data-tags attribute */

//     /* split tags into array */

//     /* START LOOP: for each tag */

//       /* generate HTML of the link */

//       /* add generated code to html variable */

//       /* [NEW] check if this link is NOT already in allTags */
//       if(allTags.indexOf(linkHTML) == -1){
//         /* [NEW] add generated code to allTags array */
//         allTags.push(linkHTML);
//       }

//     /* END LOOP: for each tag */
//     }
//     /* insert HTML of all the links into the tags wrapper */

//   /* END LOOP: for every article: */

//   /* [NEW] find list of tags in right column */
//   const tagList = document.querySelector(optTagsListSelector);

//   /* [NEW] add html from allTags to tagList */
//   tagList.innerHTML = allTags.join(' ');
// }