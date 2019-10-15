// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicComponent = document.querySelector('.topics');

 axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response =>{
    console.log(response);
    response.data.topics.forEach(cur =>{
        topicComponent.appendChild(topics(cur));
    });
})

.catch(error => console.log(error))

function topics(item){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = item;
    return tab;
}