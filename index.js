let cardContent = document.querySelector(".card")
let categoryContent = document.querySelector(".categories")

function addContent() {
    let cardHTML = ''
    for (let i = 0; i < 20; i++) {
        cardHTML += `
        <div class="card-container">
        <div class="card-thumbnail">
          <img src="./Images/Graphic-Card.png" alt="content">
        </div>

        <div class="card-details">
          <img class="card-profile" src="./Images/profile.jpeg" alt="author profile">
          <div class="card-text">
            <p class="card-title">5 simple tips to making responsive layouts the easy way</p>
            <p class="card-author">Kevin Powell</p>
            <p class="card-views">351k views</p>
            <span class="card-posted">1 year ago</span>
          </div>
        </div>
      </div>`
    }
    cardContent.innerHTML += cardHTML
}

addContent()

let categoryList = ['Mixes', 'Gaming', 'Music', 'Live']
function addCategoryList() {
    let categoryHTML = ''
    for (let i = 0; i < categoryList.length; i++) {
        categoryHTML += `
        <a href="#" class="category">${categoryList[i]}</a>
        `
    }
    categoryContent.innerHTML += categoryHTML
}

addCategoryList()
