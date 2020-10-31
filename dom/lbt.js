var oContainer = document.getElementById('container');
var oTab = document.getElementById('tab');
var oImgBox = document.getElementById('img-box');
var aLi = document.getElementsByTagName('li');
var aImg = document.getElementsByTagName('img');
var curIndex = 0;

var oPrev = document.getElementById('prev');
var oNext = document.getElementById('next');


function qingkong(){
    for (var j = 0; j < aLi.length; j++){
        aLi[j].className = '';
        aImg[j].style.display = 'none';
    }
    aLi[curIndex].className = 'actived';
    aImg[curIndex].style.display = 'block';
}
for (var i = 0; i < aLi.length; i++)
{
    aLi[i].index = i;
    aLi[i].onclick = function () {
        curIndex = this.index;
        qingkong();
    }
}

oPrev.onclick = function () {
    curIndex--;
    if (curIndex < 0) {
        curIndex = 4;
    }
    qingkong();
}

oNext.onclick = function () {
    curIndex++;
    if (curIndex>4) {
        curIndex = 0;
    }
    qingkong();
}

var timer;

function lun() {
    timer = setInterval(function () {
        oNext.onclick();
    }, 1000)
}

lun();

oContainer.onmouseover = function () {
    clearInterval(timer);
}

oContainer.onmouseout = function () {
    lun();
}