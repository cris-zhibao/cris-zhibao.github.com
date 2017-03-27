/**
 * Created by CXH·1553 on 2015/3/19.
 */
$(function () {

    var iN = true;
    var iC = true;
    var iD = true;
    var iB = true;
    //音乐

    function rnd(n,m) {
        return parseInt(Math.random()*(m-n))+n
    }
    var iNow2=0;
    var arr=["1.mp3","2.mp3","3.mp3","4.mp3"];

    $(".ch_audio").click(function () {
        if(iN){
            $('.ch_audio p').addClass('fontshadow');
            iNow++;
            iN = false;
        }
        iNow2=rnd(1,arr.length+1);

        $(".ch_audio audio").attr('src','../music/'+iNow2+'.mp3');

        var aud=$('.ch_aud')[0];
        console.log(aud)
        aud.play();

    });
    //线索-模式
    var iNow3=0;
    $(".ch_ms_btn").click(function () {
        if(iD){
            $('.ch_ms_btn p').addClass('fontshadow');
            iNow++;
            iD = false;
        }
        iNow3++;
        if(iNow3==5)iNow3=0;
        $(".ch_img").css('background-image','url("../img/t'+iNow3+'.png")');
    });


    //线索-空气

    var iNow = 0;
    $('.ch_kq .btn').on('click',function () {
        iNow++;
        $('.ch_kq p').addClass('fontshadow');
        $('.ch_kq .btn').css('display','none');
        $('.ch_kq .ch_btn1').fadeIn();

        if(iNow==5){
            window.location.assign('alert.html');
        }

    });
    //空气2
    $('.ch_kq2 .btn').on('click',function () {
        iNow++;
        $('.ch_kq2 p').addClass('fontshadow');
        $('.ch_kq2 .btn').css('display','none');
        $('.ch_kq2 .ch_btn1').fadeIn();

        if(iNow==5){
            window.location.assign('alert.html');
        }

    });
    //窗帘
    var iL = true;
    $('.ch_cl_btn').on('click',function () {
        if(iC){
            $('.ch_cl_btn p').addClass('fontshadow');
            iNow++;
            iC = false;
        }
        if(iL){
            $('.ch_cl img').attr('src','../img/close.gif');
            iL = false;
        }else{
            $('.ch_cl img').attr('src','../img/open.gif');
            iL = true;
        }


        if(iNow==5){
            window.location.assign('alert.html');
        }

    });

    //线索-毛衣
    $('.ch_my .btn').on('click',function () {
        iNow++;
        $('.ch_my p').addClass('fontshadow');
        $('.ch_my .btn').css('display','none');
        $('.ch_my .ch_btn1').fadeIn();

        if(iNow==5){
            window.location.assign('alert.html');
        }

    });
    //线索-床垫
    $('.ch_cd .btn').on('click',function () {
        iNow++;
        $('.ch_cd p').addClass('fontshadow');
        $('.ch_cd .btn').css('display','none');
        $('.ch_cd .ch_btn1').attr('src','../img/v_bed.png');
        if(iNow==5){
            window.location.assign('alert.html');
        }

    });
    //线索-壁灯
    $.each( $('.ch_lamp_box .btn'),function (i) {
        $('.ch_lamp_box .btn').eq(i).attr('num',i);

    });
    $('.ch_lamp_box .btn').click(function () {
        if(iB){
            iNow++;
            iB = false;
        }

        $(this).css('display','none');
        $('.ch_lame').eq($(this).attr('num')).css("display","block");


        if(iNow==5){
            window.location.assign('alert.html');
        }

    });

// 点击进入卫生间
$('.qk_door').click(function(){
        $('.page').css('display','none');
        $('.big_box').css({'display':'block','opacity':'1'});
      })
      
// 点击返回客厅

  $('.qk_back').click(function(){
      $('.page').css('display','block');
      $('.big_box').css({'display':'none','opacity':'0'});
      $('.qk_gif').css('display','none');
 })












});