// general parameters //
const sidenav_l = document.getElementById('sidenav_l')
const a1_button = document.getElementById('a1_button')
const a2_button = document.getElementById('a2_button')
const a3_button = document.getElementById('a3_button')

function scrollTrigger(selector, options = {}){
let els = document.querySelectorAll(selector)
els = Array.from(els)
els.forEach(el => {
    addObserver(el, options)
})
}

function addObserver(el, options){
if(!('IntersectionObserver' in window)){
    if(options.cb){
        options.cb(el)
    }else{
        entry.target.classList.add('active')
    }
    return
}
let observer = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(options.cb){
                options.cb(el)
            }else{
                entry.target.classList.add('active')
                if(el.id == 'a1'){
                    a1_button.style.marginBottom = "30vh";
                    a2_button.style.marginBottom = "0vh";
                    a3_button.style.marginBottom = "0vh";
                }
                if(el.id == 'a2'){
                    a1_button.style.marginBottom = "0vh";
                    a2_button.style.marginBottom = "30vh";
                    a3_button.style.marginBottom = "0vh";
                }
                if(el.id == 'a3'){
                    a1_button.style.marginBottom = "0vh";
                    a2_button.style.marginBottom = "0vh";
                    a3_button.style.marginBottom = "30vh";
                }
            }
            observer.unobserve(entry.target)
        }
    })
}, options)
observer.observe(el)
}
scrollTrigger('.a_header')