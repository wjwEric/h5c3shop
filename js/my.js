$(function(){
    let flag = false;
    let clientY = $(window).height();
    $("#goNext").click(function(){
        $.fn.fullpage.moveSectionDown();
    })
    $("#fullpage").fullpage({
        navigation:true,
        // loopBottom:true,
        // loopTop:true,
        scrollingSpeed:1000,
        afterLoad:function(anchorLink,index){
           if(index==2&&!flag){
               $(".section:nth-child(2) .computer .computer_search").show().animate({right:"370px"},500,function(){
                  //搜索框走进来，沙发两个字显示   
                $(".section:nth-child(2) .computer .computer_search .computer_search_words").animate({opacity:1},500,function(){
  
                    $(".section:nth-child(2) .computer .computer_search_center").show().animate({left:"60%",top:"4%",height:"30px"},500,function(){
                        flag = true;
                    });
                    $(".section:nth-child(2) .computer .computer_search").hide(); 
                    $(".section:nth-child(2) .computer .computer_goods").show().animate({height:"218px"},1000,function(){
                        $("#goNext").animate({opacity:1},200);
                    });
                    $(".section:nth-child(2) .words-01").animate({opacity:0},1000);
                    $(".section:nth-child(2) .words-02").animate({opacity:1},1000);
                   })
               })
           }
        },
        onLeave:function(index,nextIndex,direction ){
           $("#goNext").animate({opacity:0},200)
           if(index==2&&nextIndex==3&&flag){
               $(".section:nth-child(2) .computer .computer_shirt-02").show().animate({bottom:-(clientY-250),"width":"207px",left:260,height:166},2000,function(){
                   $(".section:nth-child(3) .main .select .options").animate({opacity:0},500,function(){
                      $(".section:nth-child(3) .main .select .button").animate({opacity:0},500,function(){
                        $("#goNext").animate({opacity:1},200)
                      })
                   });
                   
               })
               $(".section:nth-child(2) .computer .computer_cover").show();
           }
           if(index==3&&nextIndex==4){
               $(".section:nth-child(2) .computer .computer_shirt-02").hide();
               $(".section:nth-child(3) .main .t1f").show().animate({bottom:-(clientY-250)-50,left:"247px"},2000,function(){
                    $(this).hide();
                    $(".section:nth-child(4) .car .t1f").show();
                    $(".section:nth-child(4) .car").animate({left:2000},2000,"easeInElastic",function(){
                        $('.section:nth-child(4) .node').show();
                        $(".section:nth-child(4) .node .t1s").animate({opacity:1},500);
                        $(".section:nth-child(4) .words-04").animate({opacity:0},500);
                        $("#goNext").animate({opacity:1},200)
                    })
               })
           }
           if(index==4&&nextIndex==5){
               $(".section:nth-child(5) .hand-05").animate({top:"40%"},1000,function(){
                   $(".section:nth-child(5) .mouse-05-a").show();
                   $(".section:nth-child(5) .words-05").addClass("words-05_change")
                   $(".section:nth-child(5) .t1f").show().animate({bottom:"70px"},1000,function(){
                       $(".section:nth-child(5) .order-05").animate({bottom:"390px"},1000,function(){
                        $("#goNext").animate({opacity:1},200)
                       });
                       
                   })
               })
           }
           if(index==5&&nextIndex==6){
               $(".section:nth-child(5) .t1f").animate({bottom:-(clientY-500),left:"40%",width:65},1000,function(){
                   $(this).hide();
               });
               $(".section:nth-child(6) .box").animate({left:"38%"},1000,function(){
                   $(this).animate({bottom:40},500,function(){
                       $(this).hide();
                       $(".section:nth-child(6) .words-06-a").show().animate({left:"30%"},1500)
                       $(".section:nth-child(6)").animate({backgroundPositionX:"100%"},1500,function(){
                           $(".section:nth-child(6) .man").show().animate({bottom:"116px",right:"500px",height:"305px"},1000,function(){
                               $(".section:nth-child(6) .door").animate({opacity:1},500,function(){
                                   $(".section:nth-child(6) .women").show().animate({right:"350px",height:"306px"},500,function(){
                                    $("#goNext").animate({opacity:1},200)
            
                                   })
                               })
                           })
                           $(".section:nth-child(6) .t1k").animate({opacity:1},500)
                       })
                       $(".section:nth-child(6) .img_88").show().animate({bottom:"119px",right:"48%"},1500)
                   })
               });
           }
           if(index==6&&nextIndex==7){
               $(".section:nth-child(7) .star").animate({width:120},1500,function(){
                   $(".section:nth-child(7) .good").show();
                   $("#goNext").animate({opacity:1},200)
               })



               $(".section:nth-child(8) .beginButton").hover(function(){
              $(".section:nth-child(8) .beginButton .btn-08").hide();
              $(".section:nth-child(8) .beginButton .gif").show();
            },function(){
                console.log(333)
             $(".section:nth-child(8) .beginButton .btn-08").show();
             $(".section:nth-child(8) .beginButton .gif").hide();
            })
            $(document).mousemove(function(event){
                var x = event.clientX-85;
                var y = event.clientY+10;
                if(y<clientY-449){
                    y=clientY-449
                }
                $(".section:nth-child(8) .hand").css({left:x,top:y})
            })
            $(".section:nth-child(8) .again").click(function(){
                $.fn.fullpage.moveTo(1);
                $("img,.move").attr("style","")
                flag = false;
            })
           }
        }
    })
    
})