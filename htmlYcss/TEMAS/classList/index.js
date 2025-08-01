document.addEventListener('DOMContentLoaded',()=> {

  gsap.registerPlugin(SplitText)

  const split = new SplitText('.title', {
            type: "chars"      
        });
console.log(split)
        gsap.fromTo(split.chars,{
          opacity:0,
          filter: `blur(10px)`,
          x:100
        },{
             x: 0, 
            duration: 1,     
            stagger: 0.1,
            opacity:1 ,
        filter: `blur(0px)`,
     
        })




})