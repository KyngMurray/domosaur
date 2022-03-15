// ---------------------- DOMosaur --------------------------


// ----------------------- WARM UP CHALLENGES -----------------------------


// ----------------- #1 -----------------------

function spanResize(){
    let newSpan = document.querySelector('.mess-with-me')
    newSpan.style.fontSize = '40px'
}

spanResize()

// ----------------- #2 -----------------------

function changeBackgroundColor (){
    let newColor = document.querySelector('p.mess-with-me')
    newColor.style.backgroundColor = 'green'
}
changeBackgroundColor()

// ----------------- #3 -----------------------

function hiddenImage (){
    let hiddenImage = document.querySelector('#hide-me')
    hiddenImage.style.visibility = 'hidden'
}

hiddenImage()

// ----------------- #4 -----------------------

function changeImageSize (){
    let newImageSize = document.querySelector('#triceratops')
    newImageSize.style.width = '324px'
}
changeImageSize()

// ----------------------- EVENT LISTENER CHALLENGES -----------------------------


// ----------------- #1 -----------------------

let orangeColor = document.querySelector('.mess-with-me')
orangeColor.addEventListener('click', function(){
    orangeColor.style.color = 'orange'
})

// ----------------- #2 -----------------------

let redBorder = document.querySelector('#triceratops')
redBorder.addEventListener('click', function(){
    redBorder.style.border = 'solid red'
})

// ----------------- #3 -----------------------

let transparent = document.querySelector('#feathers')
transparent.addEventListener('click', function(){
    transparent.style.opacity = '50%'
})

// ----------------- #4 -----------------------

let switchButtonColor = document.querySelector('#toggle')
switchButtonColor.addEventListener('click', function(){
    switchButtonColor.style.backgroundColor = 'blue'
})

// ----------------- #5 -----------------------

let growHoveredImage = document.querySelector('#biggify')
growHoveredImage.addEventListener('mouseenter', function(){
    growHoveredImage.style.width = '200px'
})

// ----------------------- STRETCH GOALS -----------------------------


// ----------------- #1 -----------------------



// ----------------- #1 -----------------------
