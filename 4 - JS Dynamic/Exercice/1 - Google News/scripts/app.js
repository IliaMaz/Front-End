/*
    News website
    You are now in charge of the coding of a news related website.
    The data are provided by google news service
    and will be avaible in you code thanks to the file data.js

    You are required today to add each article to a section
    that will be filtered by category.

    Hint :
    1 - Start by creating a variable form the <section> #trending

    2 - Create a loop over all the articles that will
        - Duplicate a mockup <article> tag to the <section>
        - Add the good class from the category like this : <article class="science">...
        - Modify the *title* (<h3>) to the newly duplicated <article> element
        - Modify the *content* (<p>) of the article
        - modify the <a> "read more" link (<a>) pointing to the *url*

    3  Create an Event Listener so that
    when the form with the select is submitted
    you will show only the good caterogy article
     get the value from the <select> input (the property is called .value)
     Applied a display none to EACH article (using .style.display)
     Show EACH article that has that class corresponding to the category




 BONUS : to make this even more interactive a list of category can replace the form submission
 uncomment this part of the HTML code
 Create an Event listener that will listen to "click" FOR EACH of the links an launch an function called "filterArticles"
 The function "filterArticles" will :
     remove the CSS class "selected" FOR EACH of the links inside this list
     add the CSS class "selected" to the clicked link using this line
        this.classList.add("selected"); // "this" is the current html element that triggered the event
     filter the section articles using the algorythm from question 3 (time for a function maybe ?)
*/
//debugger;
const sectionSelect = document.querySelector('#trending');
const selectArticle = document.querySelector('article');
for (const article of articles) {
    const selectArticle = document.querySelector('article');
    const newArticle = selectArticle.cloneNode(true);
    document.querySelector('section').append(newArticle);
    newArticle.querySelector('h2').innerText = article.title;
    newArticle.querySelector('p').innerText = article.content;
    newArticle.querySelector('a').innerText = article.url;
    newArticle.classList.add(article.category);
}
selectArticle.remove();
const selectArticlez = document.querySelectorAll('article'); // -> [] -> FOR OF
const myForm = document.querySelector('form');
const select = document.querySelector('#category');
let selectV = select.value;

myForm.addEventListener('submit', filter);

function filter(event) {
    event.preventDefault();
    selectV = select.value;
    for (const art of selectArticlez) {
        if ((selectV == 'all') || (art.classList.contains(selectV))) {
            art.style = '';
        } else {
            art.style.display = 'none';
        }
    }
}

// const listAll = document.querySelector('#all');
const listAll = document.querySelectorAll('li a');
listAll[0, 1, 2].addEventListener('click', filterArticles);

// listScience.addEventListener('click', filterArticles);
// listPolitics.addEventListener('click', filterArticles);
for (const list of listAll) {
    if (list.classList.contains('selected')) {
        list.classList.remove('selected');
    }
}

function filterArticles(event) {
    console.log(event.target.href.split('#')[1]);

}



