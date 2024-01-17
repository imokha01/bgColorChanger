const value = document.getElementById("input")
const backGround = document.getElementById("main")
const button = document.getElementById("button")

const arrColor = ["brown", "blue", "pink", ]

const colorChanger = () => {
    let color = value.value
    console.log(color)
    backGround.style.backgroundColor = color
    console.log(Boolean(color))
    console.log(!color)
    if (!color) {
        return 
    }
    
    button.style.backgroundColor = arrColor[Math.floor(Math.random() * 3)]
}


// button.addEventListener("click", () => colorChanger())

value.value = ""