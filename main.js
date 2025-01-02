let worshipArr = [
    { "سبحان الله": 0 },
    { "الحمدلله": 0 },
    { "لا إله إلا الله": 0 },
    { "الله أكبر": 0 },
    { "استغفر الله": 0 },
    { "اللهم صلّ على سيدنا محمد وعلى آله وصحبه وسلم": 0 }
  ];

let total = document.getElementById('total-number');
let worship = document.getElementById('worship');
let count = document.getElementById('count');

let currentIndex = 0;
let clickCount = 0;
let totalJs = 0;


// Save data to local storage
function saveData() {
  localStorage.setItem("worshipArr", JSON.stringify(worshipArr)); 
  localStorage.setItem("currentIndex", currentIndex);           
  localStorage.setItem("clickCount", clickCount);                
  localStorage.setItem("totalJs", totalJs); 
}

// Load data from local storage
function loadData() {
  const savedWorshipArr = JSON.parse(localStorage.getItem("worshipArr"));
  if (savedWorshipArr) {
      worshipArr = savedWorshipArr;
  }
  currentIndex = parseInt(localStorage.getItem("currentIndex")) || 0;
  clickCount = parseInt(localStorage.getItem("clickCount")) || 0;
  totalJs = parseInt(localStorage.getItem("totalJs")) || 0;
}


function wourshipCounter(){
  ++clickCount;
    let currentPhrase = Object.keys(worshipArr[currentIndex])[0];
  
  // If click count exceeds 33, reset and move to the next phrase
  if (clickCount > 33) {
    clickCount = 0;
    ++currentIndex;
    
    if (currentIndex == worshipArr.length) {
      currentIndex = 0;
    }
    
    // Update the displayed worship phrase
    worship.innerHTML = Object.keys(worshipArr[currentIndex])[0];
    count.innerHTML=clickCount;
    
  } 
  else{
    ++totalJs;
    ++worshipArr[currentIndex][currentPhrase];
  }

  total.innerHTML = totalJs;
  count.innerHTML=clickCount;
  saveData();
}




function initialize(){
  loadData();
  worship.innerHTML = Object.keys(worshipArr[currentIndex])[0];
  count.innerHTML=clickCount;
  total.innerHTML = `${totalJs}`;
}

document.addEventListener('DOMContentLoaded',initialize)
