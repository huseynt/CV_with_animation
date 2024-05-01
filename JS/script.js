const elementsOne = document.querySelectorAll(".progress")
const elementsTwo = document.querySelectorAll(".progressTwo")

const objBar = [
    {name: "skillProject", value: 70},
    {name: "skillSoftware", value: 80},
    {name: "skillProcess", value: 60},
]

const objBarTwo = [
    {name: "softwareHtml", value: 90},
    {name: "softwareCss", value: 85},
    {name: "softwareSass", value: 90},
    {name: "softwareJavascript", value: 65},
    {name: "softwareReact", value: 10}
]


objBar.forEach( (e,index) => {

    setTimeout(function () {
        let item = document.querySelector(`#${e.name}`)
        item.style.width=`${e.value}%`
    },index*500)
})

objBarTwo.forEach( (e,index) => {

    setTimeout(function () {
        let item = document.querySelector(`#${e.name}`)
        item.style.width=`${e.value}%`
    },index*500)
})