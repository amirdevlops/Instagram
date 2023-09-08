/*const tabsBox = document.querySelector(".tabs-box");
const allTabs = tabsBox.querySelectorAll(".tab");
const arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

const handleIcons = () => {
    const maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].style.display = tabsBox.scrollLeft <= 0 ? "none" : "block";
    arrowIcons[1].style.display = maxScrollableWidth - tabsBox.scrollLeft <= 1 ? "none" : "block";
};

arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        const scrollOffset = icon.id === "left" ? -100 : 100;
        tabsBox.scrollLeft += scrollOffset;
        handleIcons();
    });
});

allTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});

const dragging = (e) => {
    if (!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
    handleIcons();
};

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
};

tabsBox.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - tabsBox.offsetLeft;
    scrollLeft = tabsBox.scrollLeft;
});

tabsBox.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - tabsBox.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the sensitivity
    tabsBox.scrollLeft = scrollLeft - walk;
    handleIcons();
});

tabsBox.addEventListener("touchend", dragStop);

window.addEventListener("resize", handleIcons);
handleIcons(); // Initial icon handling   


function changeDivClassOnScroll() {
  
    // Define the scroll threshold at which you want to change the class
    const scrollThreshold = 200; // Change this value as needed
    
    // Listen for the scroll event
    window.addEventListener("scroll", function() {
        // Get the current scroll position
        const scrollY = window.scrollY || window.pageYOffset;
        
        // Check if the scroll position is greater than or equal to the threshold
        if (scrollY >= scrollThreshold) {
          return true; 
        } 
        
    });
  }


  let a = changeDivClassOnScroll()
  console.log(a)

  function hasScrollCrossedThreshold() {
    // Define the scroll threshold at which you want to change the class
    const scrollThreshold = 300; // Change this value as needed
    
    // Get the current scroll position
    const scrollY = window.scrollY || window.pageYOffset;
    
    // Check if the scroll position is greater than or equal to the threshold
    return scrollY >= scrollThreshold;
}

let a = hasScrollCrossedThreshold();
console.log(a);*/


