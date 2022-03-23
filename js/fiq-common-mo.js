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
  // if(timeTxt)timeTxt.innerHTML = (year + '/' + month + '/' + date + ' ' + ' | ' + hours + ':' + minutes + ':' + seconds);
  Array.prototype.forEach.call(timeTxt, function(e) {
    e.innerHTML = (year + '/' + month + '/' + date + ' ' + ' | ' + hours + ':' + minutes + ':' + seconds);
  });
  setTimeout('printTime()', 1000);
}
function modifyNumber(time){
  if(parseInt(time)<10){
    return "0"+ time;
  } else {
    return time;
  }
}


let mainTabs = document.querySelectorAll('.fiq-m-tab');
let mainTabWrap = document.querySelector('.fiq-main-tab-wrap');
Array.prototype.forEach.call(mainTabs, function(e) {
  e.addEventListener('click', function() {
    mainTabWrap.classList.remove('fiq-main-tab-active1','fiq-main-tab-active2','fiq-main-tab-active3','fiq-main-tab-active4','fiq-main-tab-active5','fiq-main-tab-active6','fiq-main-tab-active7','fiq-main-tab-active8','fiq-main-tab-active9');
    if (e.classList.contains('fiq-m-tab1')) {
      mainTabWrap.classList.add('fiq-main-tab-active1');
    } else if(e.classList.contains('fiq-m-tab2')) {
      mainTabWrap.classList.add('fiq-main-tab-active2');
    } else if(e.classList.contains('fiq-m-tab3')) {
      mainTabWrap.classList.add('fiq-main-tab-active3');
    } else if(e.classList.contains('fiq-m-tab4')) {
      mainTabWrap.classList.add('fiq-main-tab-active4');
    } else if(e.classList.contains('fiq-m-tab5')) {
      mainTabWrap.classList.add('fiq-main-tab-active5');
    } else if(e.classList.contains('fiq-m-tab6')) {
      mainTabWrap.classList.add('fiq-main-tab-active6');
    } else if(e.classList.contains('fiq-m-tab7')) {
      mainTabWrap.classList.add('fiq-main-tab-active7');
    } else if(e.classList.contains('fiq-m-tab8')) {
      mainTabWrap.classList.add('fiq-main-tab-active8');
    } else {
      mainTabWrap.classList.add('fiq-main-tab-active9');
    }
  })
});


let star = document.querySelector('.fiq-star');
if(star)star.addEventListener('click', function() {
  if(star.classList.contains('fiq-on')) {
    star.classList.remove('fiq-on');
  } else {
    star.classList.add('fiq-on');
  }
});

let tabWrap1 = document.querySelector('.fiq-tab-wrap1');
let tabWrap2 = document.querySelector('.fiq-tab-wrap2');
let tabWrap3 = document.querySelector('.fiq-tab-wrap3');
let tab1s = document.querySelectorAll('.fiq-tab-wrap1 .fiq-tab');
let tab2s = document.querySelectorAll('.fiq-tab-wrap2 .fiq-tab');
let tab3s = document.querySelectorAll('.fiq-tab-wrap3 .fiq-tab');
Array.prototype.forEach.call(tab1s, function(e) {
  e.addEventListener('click', function() {
    tabWrap1.classList.remove('fiq-tab-active1', 'fiq-tab-active2', 'fiq-tab-active3', 'fiq-tab-active4', 'fiq-tab-active5', 'fiq-tab-active6', 'fiq-tab-active7', 'fiq-tab-active8', 'fiq-tab-active9', 'fiq-tab-active10');
    if(e.classList.contains('fiq-tab1')) {
      tabWrap1.classList.add('fiq-tab-active1');
    } else if(e.classList.contains('fiq-tab2')) {
      tabWrap1.classList.add('fiq-tab-active2');
    } else if(e.classList.contains('fiq-tab3')) {
      tabWrap1.classList.add('fiq-tab-active3');
    } else if(e.classList.contains('fiq-tab4')) {
      tabWrap1.classList.add('fiq-tab-active4');
    } else if(e.classList.contains('fiq-tab5')) {
      tabWrap1.classList.add('fiq-tab-active5');
    } else if(e.classList.contains('fiq-tab6')) {
      tabWrap1.classList.add('fiq-tab-active6');
    } else if(e.classList.contains('fiq-tab7')){
      tabWrap1.classList.add('fiq-tab-active7');
    } else if(e.classList.contains('fiq-tab8')){
      tabWrap1.classList.add('fiq-tab-active8');
    } else if(e.classList.contains('fiq-tab9')){
      tabWrap1.classList.add('fiq-tab-active9');
    } else {
      tabWrap1.classList.add('fiq-tab-active10');
    }
  })
});
Array.prototype.forEach.call(tab2s, function(e) {
  e.addEventListener('click', function () {
    tabWrap2.classList.remove('fiq-tab-active1', 'fiq-tab-active2', 'fiq-tab-active3', 'fiq-tab-active4', 'fiq-tab-active5', 'fiq-tab-active6', 'fiq-tab-active7', 'fiq-tab-active8', 'fiq-tab-active9', 'fiq-tab-active10');
    if (e.classList.contains('fiq-tab1')) {
      tabWrap2.classList.add('fiq-tab-active1');
    } else if (e.classList.contains('fiq-tab2')) {
      tabWrap2.classList.add('fiq-tab-active2');
    } else if (e.classList.contains('fiq-tab3')) {
      tabWrap2.classList.add('fiq-tab-active3');
    } else if (e.classList.contains('fiq-tab4')) {
      tabWrap2.classList.add('fiq-tab-active4');
    } else if (e.classList.contains('fiq-tab5')) {
      tabWrap2.classList.add('fiq-tab-active5');
    } else if (e.classList.contains('fiq-tab6')) {
      tabWrap2.classList.add('fiq-tab-active6');
    } else {
      tabWrap2.classList.add('fiq-tab-active7');
    }
  })
});
Array.prototype.forEach.call(tab3s, function(e) {
  e.addEventListener('click', function () {
    tabWrap3.classList.remove('fiq-tab-active1', 'fiq-tab-active2', 'fiq-tab-active3', 'fiq-tab-active4', 'fiq-tab-active5', 'fiq-tab-active6', 'fiq-tab-active7', 'fiq-tab-active8', 'fiq-tab-active9', 'fiq-tab-active10');
    if (e.classList.contains('fiq-tab1')) {
      tabWrap3.classList.add('fiq-tab-active1');
    } else if (e.classList.contains('fiq-tab2')) {
      tabWrap3.classList.add('fiq-tab-active2');
    } else if (e.classList.contains('fiq-tab3')) {
      tabWrap3.classList.add('fiq-tab-active3');
    } else if (e.classList.contains('fiq-tab4')) {
      tabWrap3.classList.add('fiq-tab-active4');
    } else if (e.classList.contains('fiq-tab5')) {
      tabWrap3.classList.add('fiq-tab-active5');
    } else if (e.classList.contains('fiq-tab6')) {
      tabWrap3.classList.add('fiq-tab-active6');
    } else {
      tabWrap3.classList.add('fiq-tab-active7');
    }
  })
});

let listItems = document.querySelectorAll('.fiq-cont-inner-wrap ul li');
Array.prototype.forEach.call(listItems, function(e) {
  e.addEventListener('click', function() {
    if(!e.classList.contains('fiq-active')) {
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('fiq-active');
      }
      e.classList.add('fiq-active');
    } else {
      e.classList.remove('fiq-active');
    }
  })
});

let innerDepthWrap = document.querySelector('.fiq-inner-depth-wrap');
let innerDepths = innerDepthWrap.querySelectorAll('.fiq-inner-depth');
Array.prototype.forEach.call(innerDepths, function(e) {
  e.addEventListener('click', function() {
    innerDepthWrap.classList.remove('fiq-inner-depth-active1', 'fiq-inner-depth-active2');
    if(e.classList.contains('fiq-inner-depth1')) {
      innerDepthWrap.classList.remove('fiq-inner-depth-active2');
      innerDepthWrap.classList.add('fiq-inner-depth-active1');
    } else {
      innerDepthWrap.classList.remove('fiq-inner-depth-active1');
      innerDepthWrap.classList.add('fiq-inner-depth-active2');
    }
  })
});
let innerTabWrap2 = document.querySelector('.fiq-inner-tab-wrap2');
let innerTabs2 = innerTabWrap2.querySelectorAll('.fiq-inner-tab');
Array.prototype.forEach.call(innerTabs2, function(e) {
  e.addEventListener('click', function() {
    innerTabWrap2.classList.remove('fiq-inner-active1', 'fiq-inner-active2');
    if (e.classList.contains('fiq-inner-tab1')) {
      innerTabWrap2.classList.add('fiq-inner-active1');
    } else {
      innerTabWrap2.classList.add('fiq-inner-active2');
    }
  })
});
let innerTabWrap3 = document.querySelector('.fiq-inner-tab-wrap3');
let innerTabs3 = innerTabWrap3.querySelectorAll('.fiq-inner-tab');
Array.prototype.forEach.call(innerTabs3, function(e) {
  e.addEventListener('click', function() {
    innerTabWrap3.classList.remove('fiq-inner-active1', 'fiq-inner-active2');
    if (e.classList.contains('fiq-inner-tab1')) {
      innerTabWrap3.classList.add('fiq-inner-active1');
    } else {
      innerTabWrap3.classList.add('fiq-inner-active2');
    }
  })
});

let innerTabWrap4 = document.querySelector('.fiq-inner-tab-wrap4');
let innerTabs4 = innerTabWrap4.querySelectorAll('.fiq-inner-tab');
Array.prototype.forEach.call(innerTabs4, function(e) {
  e.addEventListener('click', function() {
    innerTabWrap4.classList.remove('fiq-inner-active1', 'fiq-inner-active2');
    if (e.classList.contains('fiq-inner-tab1')) {
      innerTabWrap4.classList.add('fiq-inner-active1');
    } else {
      innerTabWrap4.classList.add('fiq-inner-active2');
    }
  })
});
