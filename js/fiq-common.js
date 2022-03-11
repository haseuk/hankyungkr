let tab1 = document.querySelector('.fiq-tab-wrap1')
let tab2 = document.querySelector('.fiq-tab-wrap2')
let tab3 = document.querySelector('.fiq-tab-wrap3')
let tab4 = document.querySelector('.fiq-tab-wrap4')
let tab5 = document.querySelector('.fiq-tab-wrap5')
let tab6 = document.querySelector('.fiq-tab-wrap6')
let tab7 = document.querySelector('.fiq-tab-wrap7')
let tab8 = document.querySelector('.fiq-tab-wrap8')
let tab9 = document.querySelector('.fiq-tab-wrap9')
let tabs = document.querySelectorAll('.fiq-tab-btn')
Array.prototype.forEach.call(tabs, function(e) {
  e.addEventListener('click', function() {
    let idx = e.getAttribute('data-tab');
    if(e.classList.contains('fiq-tab1-btn')) {
      tabActive(tab1,idx);
    } else if(e.classList.contains('fiq-tab2-btn')) {
      tabActive(tab2,idx);
    } else if(e.classList.contains('fiq-tab3-btn')) {
      tabActive(tab3,idx);
    } else if(e.classList.contains('fiq-tab4-btn')) {
      tabActive(tab4,idx);
    } else if(e.classList.contains('fiq-tab5-btn')) {
      tabActive(tab5,idx);
    } else if(e.classList.contains('fiq-tab6-btn')) {
      tabActive(tab6,idx);
    } else if(e.classList.contains('fiq-tab7-btn')) {
      tabActive(tab7,idx);
    } else if(e.classList.contains('fiq-tab8-btn')) {
      tabActive(tab8,idx);
    } else {
      tabActive(tab9,idx);
    }
  })
});

function tabActive(st, num) {
  st.classList.remove('fiq-tab1-active', 'fiq-tab2-active', 'fiq-tab3-active', 'fiq-tab4-active', 'fiq-tab5-active', 'fiq-tab6-active', 'fiq-tab7-active', 'fiq-tab8-active', 'fiq-tab9-active');
  st.classList.add('fiq-tab'+num+'-active');
}

window.onload = function() {
  printTime();
}

let timeTxt = document.querySelectorAll('.fiq-date-time');
function printTime() {
  let dateInfo = new Date();
  let year = dateInfo.getFullYear();
  let month = dateInfo.getMonth() + 1;
  let date = dateInfo.getDate();
  let hours = modifyNumber(dateInfo.getHours());
  let minutes = modifyNumber(dateInfo.getMinutes());
  let seconds = modifyNumber(dateInfo.getSeconds());
  for (let i = 0; i < timeTxt.length; i++) {
    timeTxt[i].innerHTML = (year + '/' + month + '/' + date + ' ' + ' | ' + hours + ':' + minutes + ':' + seconds);
  }
  setTimeout('printTime()', 1000);
}
function modifyNumber(time){
  if(parseInt(time)<10){
    return "0"+ time;
  } else {
    return time;
  }
}

let stars = document.querySelectorAll('.fiq-favorite');
Array.prototype.forEach.call(stars, function(e) {
  e.addEventListener('click',function() {
    if(e.classList.contains('fiq-on')) {
      e.classList.remove('fiq-on');
    } else {
      e.classList.add('fiq-on');
    }
  })
})

let depthBtn = document.querySelectorAll('.fiq-depth-open');
Array.prototype.forEach.call(depthBtn, function(e) {
  e.addEventListener('click', function() {
    let depth1El = e.parentElement.nextElementSibling;
    if(!depth1El.classList.contains('fiq-active')) {
      e.parentElement.nextElementSibling.classList.add('fiq-active');
      e.classList.add('fiq-active');
    } else {
      e.parentElement.nextElementSibling.classList.remove('fiq-active');
      e.classList.remove('fiq-active');
    }
  })
});

let innerTabs = document.querySelectorAll('.fiq-inner-tab-wrap .fiq-inner-tab');
let innerTabWrap = document.querySelector('.fiq-inner-tab-wrap');
Array.prototype.forEach.call(innerTabs, function(e) {
  e.addEventListener('click', function() {
    if(e.classList.contains('fiq-inner-tab1')) {
      innerTabWrap.classList.remove('fiq-inner-tab2-active');
      innerTabWrap.classList.add('fiq-inner-tab1-active');
    } else {
      innerTabWrap.classList.remove('fiq-inner-tab1-active');
      innerTabWrap.classList.add('fiq-inner-tab2-active');
    }
  })
});

let inputFile = document.querySelector('#fiq-file');
let uploadName = document.querySelector('.fiq-upload-name');
if(inputFile)inputFile.addEventListener('change', function() {
  let fileName = inputFile.value;
  if(fileName.match(/fakepath/)) {
    fileName = fileName.replace(/c:\\fakepath\\/i, '');
  }
  uploadName.value = fileName;
});

// let findBtn = document.querySelectorAll('.fiq-find');
// let searchPop = document.querySelector('.fiq-search-popup');
let listView = document.querySelector('.fiq-list-view');
// Array.prototype.forEach.call(findBtn, function(e) {
//   e.addEventListener('click',function() {
//     searchPop.classList.add('fiq-on');
//   });
// })
if(listView)listView.addEventListener('click', function() {
  searchPop.classList.remove('fiq-on');
});

let itemAdd = document.querySelector('.fiq-del-add .fiq-add');
let addCode = document.querySelector('.fiq-add-code');
let addCodeClose = document.querySelector('.fiq-add-code .fiq-a');
if(itemAdd)itemAdd.addEventListener('click', function() {
  addCode.classList.add('fiq-on');
  itemAdd.classList.add('fiq-on');
});
if(addCodeClose)addCodeClose.addEventListener('click', function() {
  addCode.classList.remove('fiq-on');
  itemAdd.classList.remove('fiq-on');
});
