/**
 * Created by Administrator on 2017/3/19.
 */
   $(function () {
       //点击关闭按钮
       $(".lxq_close").click(function () {
           $(".lxq_bigbox").fadeTo(1500, 0);
           window.location.assign('index.html');
       });
       
       //太棒了和太可惜了页面切换
       $(".very_Good").click(function () {
          $(".veryGood").css("display","none") ;
           $(".noPrize").css("display","block");
       });
       //太可惜了和已抽奖页面切换
       $(".no_Prize").click(function () {
           $(".noPrize").css("display","none") ;
           $(".lxq_show").css("display","block");
       });
       //恭喜你页面效果


       //恭喜你  //恭喜你页面效果
       $(".to_congratulation").click(function () {
           $(".lxq_show").css("display","none");
           $(".qk_box").css("display","block");
           $('.r_flower').animate({right:"2%"},2000);
           $('.l_flower').animate({left:"6%"},2000);
       });
       


     //  进入游戏结束页面
     $(".confirm_button").click(function () {
       $(".qk_box").css("display","none") ; 
       $(".v_tail").css("display","block");
         
         $('.v_picture2').animate({left:"1.4rem"},1400);
         $('.v_picture3').animate({left:"0.4rem"},1800);
         $('.v_picture4').animate({opacity:1},1000);
         $('.v_flower_1').animate({left:"0rem",top:"6rem"},1400);
         $('.v_picture5').animate({opacity:1,left:"3rem"},1000);
         $('.v_picture7').animate({top:"13.4rem",opacity: 1},1000);
      });
       


       //查看全部线索
       $(".lxq_seeAll").click(function () {
           $(".veryGood").css("display","none") ;
           $(".lxq_hide").css("display","block");
           $.each($('.prize_box li'),function () {
             $('.prize_box li').eq($(this).index()).animate({opacity:1},1000*$(this).index());
          });
       });
       //查看所有线索内的抽奖按钮
       $(".lxq_luck_draw").click(function () {
           $(".lxq_hide").css("display","none");
           $(".noPrize").css("display","block");
       });


       


   });






