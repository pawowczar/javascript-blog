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
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  console.log(titleList);

  titleList.innerHTML = '';
  
  /* find all the articles and save them to variable: articles */
  /* ... */
  
  const articles = document.querySelectorAll(optArticleSelector);

  // let html ='';

  /* for each article */

 
  /* get the article id */

  for(let article of articles){

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
    //html = html + linkHTML;
    //console.log(html);
  }
    
  //titleList.innerHTML = html;
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
    const tagList = article.querySelector(optArticleTagsSelector);
    console.log('taglist' + tagList);

    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log('articleTags ' + articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray){
    /* generate HTML of the link */
    let html = '<li><a href="#tag-' + tag +'"><span>' + tag + '</span></a></li>';
    /* add generated code to html variable */
      console.log(html);
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagList.insertAdjacentHTML('beforeend', html);
  /* END LOOP: for every article: */}
  
}

generateTags();