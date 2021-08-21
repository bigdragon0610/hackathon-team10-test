'use strict';
//sample1
 //画像パス
    let imgSample1 = 'http://www.musubime.jp/images/sample/01/01.jpg';
    let imgSample2 = 'http://www.musubime.jp/images/sample/01/02.jpg';
    let imgSample3 = 'http://www.musubime.jp/images/sample/01/03.jpg';
    let imgSample4 = 'http://www.musubime.jp/images/sample/01/04.jpg';
    let imgSample5 = 'http://www.musubime.jp/images/sample/01/05.jpg';
 
    let imgAry = [imgSample1, imgSample2, imgSample3, imgSample4, imgSample5];
 
    //ロード時に画像を表示
    for (let i = 0; i < imgAry.length; i++) {
        $('.sampleImg>ul').append('<li><img src=' + imgAry[i] + '></li>');
    };
 
    let i = 0; //左右クリックの増減数
    let moveSide = -1000; //横の移動幅
 
    //左クリックイベント
    $('.previousButton').click(function() {
        // 左右クリックの増減が0より大きかったら処理
        if (i > 0) {
            i = i - 1; //右クリック回数を1個減らす
            let leftCnt = moveSide * i; //移動幅の合計
            $(".sample li:first").animate({
                marginLeft: leftCnt //左マージンを指定して右に移動させる
            }, {
                duration: 500 //移動速度
            });
        };
    });
 
 
    let imgLen = imgAry.length; //画像の配列数
    let imgLenWaru = imgAry.length-1; //配列の合計÷表示画像数
 
    //右クリックイベント
    $('.nextButton').click(function() {
        if (i < imgLenWaru) { //右クりックの合計回数より少なかったら処理
            i = i + 1; //左クリック回数を1個増やす
            let leftCnt = moveSide * i; //移動幅の合計
 
            $(".sample li:first").animate({ //li要素の先頭をアニメートさせる
                marginLeft: leftCnt //左マージンを指定して左に移動させる
            }, {
                duration: 500 //移動速度
            });
        };
    });



//  $(document).ready(function () {
//      var $photos = $('#photos'),
//          $lis    = $('#photos li');
//      var li_count = $lis.length;
//      var li_width = $lis.width() + parseInt($lis.css('margin-left'), 10) + parseInt($lis.css('margin-right'), 10);
//      $photos.css('width', (li_width * li_count) + 'px');
//      setInterval(function () {
//          $photos.stop().animate({
//              marginLeft: parseInt($photos.css('margin-left'), 10) - li_width + 'px'
//          }, function () {
//              $photos.css('margin-left', '0px');
//              $photos.find('li:first').appendTo($photos);
//          });
//      }, 1500);
//  });



// //sample01
// let picturesSrc = ['http://www.musubime.jp/images/sample/01/01.jpg','http://www.musubime.jp/images/sample/01/02.jpg','http://www.musubime.jp/images/sample/01/03.jpg','http://www.musubime.jp/images/sample/01/04.jpg','http://www.musubime.jp/images/sample/01/05.jpg'];
// let num = 0;

// function goForward(){
//     if(num == 4){
//         num = 0;
//     } else {
//         num ++;
//     }
//     document.getElementById("sample01").src=picturesSrc[num];
// }
// function goBack(){
//     if(num == 0){
//         num = 4;
//     } else {
//         num --;
//     }
//     document.getElementById("sample01").src=picturesSrc[num];
// }


//sample02
let picturesSrc2 = ['http://www.musubime.jp/images/sample/02/01.jpg','http://www.musubime.jp/images/sample/02/02.jpg','http://www.musubime.jp/images/sample/02/03.jpg','http://www.musubime.jp/images/sample/02/04.jpg','http://www.musubime.jp/images/sample/02/05.jpg'];
let num2 = 0;

function goForward2(){
    if(num2 == 4){
        num2 = 0;
    } else {
        num2 ++;
    }
    document.getElementById("sample02").src=picturesSrc2[num2];
}
function goBack2(){
    if(num2 == 0){
        num2 = 4;
    } else {
        num2 --;
    }
    document.getElementById("sample02").src=picturesSrc2[num2];
}


//sample03
let picturesSrc3 = ['http://www.musubime.jp/images/sample/03/01.jpg','http://www.musubime.jp/images/sample/03/02.jpg'];
let num3 = 0;

function goForward3(){
    if(num3 == 1){
        num3 = 0;
    } else {
        num3 ++;
    }
    document.getElementById("sample03").src=picturesSrc3[num3];
}
function goBack3(){
    if(num3 == 0){
        num3 = 1;
    } else {
        num3 --;
    }
    document.getElementById("sample03").src=picturesSrc3[num3];
}

//sample04
let picturesSrc4 = ['http://www.musubime.jp/images/sample/04/01.jpg','http://www.musubime.jp/images/sample/04/02.jpg','http://www.musubime.jp/images/sample/04/03.jpg','http://www.musubime.jp/images/sample/04/04.jpg','http://www.musubime.jp/images/sample/04/05.jpg'];
let num4 = 0;

function goForward4(){
    if(num4 == 4){
        num4 = 0;
    } else {
        num4 ++;
    }
    document.getElementById("sample04").src=picturesSrc4[num4];
}
function goBack4(){
    if(num4 == 0){
        num4 = 4;
    } else {
        num4 --;
    }
    document.getElementById("sample04").src=picturesSrc4[num4];
}




// let picturesSrc = ['http://www.musubime.jp/images/sample/01/01.jpg','http://www.musubime.jp/images/sample/01/02.jpg','http://www.musubime.jp/images/sample/01/03.jpg','http://www.musubime.jp/images/sample/01/04.jpg','http://www.musubime.jp/images/sample/01/05.jpg'];
// let num = 0;


// function slideshow(){
//     if(num == 4){
//         num = 0;
//     } else {
//         num ++;
//     }
//     document.getElementById("sample1").src=picturesSrc[num];
// }

// // console.log (picturesSrc)