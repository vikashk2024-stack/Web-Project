document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  
  const img1 = document.querySelector(".img1"); 
  const img2 = document.querySelector(".img2"); 
  const img3 = document.querySelector(".img3"); 
  const img4 = document.querySelector(".img4"); 
  const img5 = document.querySelector(".img5"); 
  
  img1.style.transform = `translateY(${-scrollY * 0.1}px)`; 
  img2.style.transform = `translateY(${-scrollY * 0.1}px)`; 

    img3.style.transform = `translateY(${scrollY * 0.1}px)`; 

    img4.style.transform = "translateY(0px)"; 

  
  let scale = 0.8 + scrollY * 0.0003; 
  if (scale > 1) scale = 1; // limit to original size
  img5.style.transform = `translateX(-50%) scale(${scale})`;

  
  const fadeElems = document.querySelectorAll(".fade-in, .slide-up");
  fadeElems.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});
