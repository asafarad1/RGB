function scrollTrigger(a_header, options = {}){
    let els = document.querySelectorAll(a_header)
    els = Array.from(els)
    els.forEach(el => {
      console.log('in addObserver()')
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
    let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(options.cb){
                    options.cb(el)
                }else{
                    entry.target.classList.add('active')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
  }
  // Example usages:
  scrollTrigger('.a_header')
  
  // scrollTrigger('.scroll-reveal', {
  //   rootMargin: '-200px',
  // })
  
  // scrollTrigger('.loader', {
  //   rootMargin: '-200px',
  //   cb: function(el){
  //       el.innerText = 'Loading...'
  //       setTimeout(() => {
  //           el.innerText = 'Task Complete!'
  //       }, 1000)
  //   }
  // })