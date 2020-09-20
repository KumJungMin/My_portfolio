image = document.querySelector(".IntroImg");

function setDate(){       
  const now = new Date();
  const second = now.getSeconds();
  const secondsDegrees = (second/60)*360 + 90; 
  image.style.transform = `rotate(${secondsDegrees}deg)`;
  }
setInterval(setDate, 1000);                 

// 스크롤이 어떤 위치에 도달시 버튼 색 변경

homeBtn = document.querySelector(".button-5");
aboutBtn = document.querySelector(".button-6");
skillBtn = document.querySelector(".button-7");
awardBtn = document.querySelector(".button1");

document.addEventListener('scroll', function() {
    var currentScrollValue = document.documentElement.scrollTop;
    if(currentScrollValue>=0 && currentScrollValue<=526){
        homeBtn.style.backgroundColor = "#74EEE8";
        aboutBtn.style.backgroundColor = "white";
        skillBtn.style.backgroundColor = "white";
        awardBtn.style.backgroundColor = "white";
    }else if(currentScrollValue>=527 && currentScrollValue<=1200){
        homeBtn.style.backgroundColor = "white";
        aboutBtn.style.backgroundColor = "#74EEE8";
        skillBtn.style.backgroundColor = "white";
        awardBtn.style.backgroundColor = "white";
    }else if(currentScrollValue>=1200 && currentScrollValue<=1800){
        homeBtn.style.backgroundColor = "white";
        aboutBtn.style.backgroundColor = "white";
        skillBtn.style.backgroundColor = "#74EEE8";
        awardBtn.style.backgroundColor = "white";
    }else if(currentScrollValue>=1801){
        homeBtn.style.backgroundColor = "white";
        aboutBtn.style.backgroundColor = "white";
        skillBtn.style.backgroundColor = "white";
        awardBtn.style.backgroundColor = "#74EEE8";
    }
    
  
    
    console.log('currentScrollValue is ' + currentScrollValue);

});

// tab

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

// inner tab
function openCity1(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }