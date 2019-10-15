// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleCards = document.querySelector('.cards-container')


axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(response => {
    console.log(response);
    response.data.articles.javascript.forEach(cur =>{
        articleCards.appendChild(getCard(cur));
    });
    response.data.articles.bootstrap.forEach(cur =>{
        articleCards.appendChild(getCard(cur));
    });
    response.data.articles.technology.forEach(cur =>{
        articleCards.appendChild(getCard(cur));
    });
    response.data.articles.jquery.forEach(cur =>{
        articleCards.appendChild(getCard(cur));
    });
    response.data.articles.node.forEach(cur =>{
        articleCards.appendChild(getCard(cur));
    });
})


.catch(err => console.log(err))

function getCard(data){
    const mainContent = document.createElement('div')
    const headline = mainContent.appendChild(document.createElement('div'))
    const author = mainContent.appendChild(document.createElement('div'))
    const imageContainer = author.appendChild(document.createElement('div'))
    const span = author.appendChild(document.createElement('span'))
    const image = imageContainer.appendChild(document.createElement('img'))

    mainContent.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imageContainer.classList.add('img-container')
    image.src = data.authorPhoto
    headline.textContent = data.headline
    span.textContent = data.authorsName

    return mainContent
}



