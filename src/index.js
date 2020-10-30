let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  ///----------------------------------------------------------------------///
  // Make a fetch (GET) request to get all of the toys 
  const toyUrl = "http://localhost:3000/toys/"
  const toyCollection = document.querySelector('#toy-collection')

  fetch(toyUrl)
  .then(response => response.json())
  .then(toy => renderToys(toy))

  // iterate through the array of toys 
  const renderToys = (toy) => {
    for(const toyObj of toy){
      renderToy(toyObj)
    }
  }
  // Create a div tag with a class card for each toy and append to the collection div
  // Each card should have an <h2>, img, <p> , and button
  
  const renderToy = (toyObj) => {
    const toyDiv = document.createElement('div')
    toyDiv.className = "card"
   
    toyDiv.innerHTML = `
    <h2 id=${toyObj.id}> ${toyObj.name}</h2>
    <img src=${toyObj.image} class="toy-avatar" />
    <p>${toyObj.likes} </p>
    <button data-id=${toyObj.id} class="like-btn">Like <3</button>
    `
    
    toyCollection.append(toyDiv)

  }
//   // Create a submit form on the add-toy-form(POST)
  const submitHandler = () => {
    const addingToy = document.querySelector('.add-toy-form')
    addingToy.addEventListener('submit', (event) => {
      event.preventDefault()
      // console.log(event.target)
      const name = event.target.name.value 
      const image = event.target.image.value
      // console.log(name)
      // console.log(image)
    const post = {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: name, image: image, likes: 0}),
    }

    fetch(toyUrl, post)
    .then(response => response.json())
    .then(newToyObj => {
      renderToy(newToyObj)
    })
  })
}

const clickHandler = () => {
  document.addEventListener('click', (event) => {
    console.log(event.target.dataset.id)

    if(event.target === '.like-btn'){
      const button = event.target

      // const id = event.target.dataset.id
      // const pTag = event.target.previousElementSibling.textContent 
      console.log(button)

      
    }
  })
}
//Last Deliverable will be done inside of the function renderToy(toyObj)
clickHandler()
submitHandler()
});


// get the id 
//if statement 
// PAthc request 
//