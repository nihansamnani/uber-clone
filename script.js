document.querySelector(".p4left").addEventListener("mousemove", function(){
    gsap.to(".arrowl", {
        x: 10
    })
})
document.querySelector(".p4left").addEventListener("mouseleave", function(){
    gsap.to(".arrowl", {
        x: 0
    })
})
document.querySelector(".p4right").addEventListener("mousemove", function(){
    gsap.to(".arrowr", {
        x: 10
    })
})
document.querySelector(".p4right").addEventListener("mouseleave", function(){
    gsap.to(".arrowr", {
        x: 0
    })
})