// deliverables 1 instructions: done
// 1. grab #ramen-menu div off DOM
// 2. on page load, fetch all ramen objects 
// 3. create an img tag for each ramen object 
// 4. append each img tag to #ramen-menu div 
// 5. set img tag src to ramen object image 

// deliverable 2 instructions: done
// 1. when each ramen image clicked, fire event 
// 2. event:
// 3. grab .detail-image from DOM and set src to ramen image and alt to ramen name 
// 4. grab .name from DOM and set textContent to ramen name 
// 5. grab .restaurant from DOM and set textContent to ramen restaurant 
// 6. grab #rating-display from DOM and set textContent to ramen rating 
// 7. grab #comment-display from DOM and set textContent to ramen comment 
 
// deliverable 3 instructions:
// 1. grab #new-ramen from the DOM 
// 2. add submit event to #new-ramen form 
// 3. create new ramen object (keys: comment, image, name, rating, restaurant) (values: typed into form) 
// 4. add new ramen object to #ramen-menu div 

fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then((data) => renderRamen(data));

function renderRamen(ramenArray){
    const ramenDiv = document.querySelector('#ramen-menu')
    ramenArray.forEach((ramenList) => {
        console.log(ramenList)
        
        const img = document.createElement('img')
        img.src = ramenList.image
        ramenDiv.append(img)

        //adds an event listener so when an image is lciked it displays the ramen's details.
        img.addEventListener('click', showRamenDetail)
        function showRamenDetail() {
            //variable that pulls .detail-image from the document
            const imgLocation = document.querySelector('.detail-image')
        
            imgLocation.src = ramenList.image
            imgLocation.alt = ramenList.name

            //info pulled from the list of objects
            const nameLocation = document.querySelector('.name')
            nameLocation.textContent = ramenList.name
            const restaurantLocation = document.querySelector('.restaurant')
            restaurantLocation.textContent = ramenList.restaurant
            const ratingLocation = document.querySelector('#rating-display')
            ratingLocation.textContent = ramenList.rating
            const commentLocation = document.querySelector('#comment-display')
            commentLocation.textContent = ramenList.comment
        }
    })
}
//making a new form
const newRamenForm = document.querySelector('#new-ramen')
newRamenForm.addEventListener('submit', (event) => addNewRamen(event))
function addNewRamen(event){
    //prevents website from resetting when form is submitted
    event.preventDefault()

    //this info is provided by the form on the page
    const newRamenObj = {
        "comment":event.target['new-comment'].value,
        "image":event.target.image.value,
        "name":event.target.name.value,
        "rating":event.target.rating.value,
        "restaurant":event.target.restaurant.value

    }
    newRamenForm.reset()
    renderRamen([newRamenObj])
}