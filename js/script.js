window.onload = () => {
        
    var button = document.getElementById('bars-image');

    function displayFlex() {
    var displayToggle = document.getElementById("displayToggle");
    if (displayToggle.style.display === "flex"){
      var before = CSSRulePlugin.getRule(".navigation:before");
    var sequence = gsap.timeline();
    sequence.to(before, {opacity: 0, duration: 0.5})
    .to(".navigation", {height: 0, duration: 0.5});
    gsap.to(".navigation a", {opacity: 0, duration: 0.5});
    setTimeout(displayNone, 900);
    function displayNone(){
      displayToggle.style.display = "none";
    }
    
    }
    else {
      displayToggle.style.display = "flex";
      var before = CSSRulePlugin.getRule(".navigation:before");
    var sequence = gsap.timeline();
    sequence.fromTo(".navigation", {height: 0}, {height: 180, duration: 0.5})
    .fromTo(before, {opacity: 0}, {opacity: 1, duration: 0.5});
    gsap.fromTo(".navigation a", {opacity: 0}, {opacity: 1, duration: 0.5, delay: 0.5});
    }
    
    }
    button.addEventListener ("click", function () {
      displayFlex()
      
      });
  

   
 }