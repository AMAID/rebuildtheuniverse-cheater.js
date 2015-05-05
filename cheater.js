var cheater=(function($){
    var LevelUp,
        presTimer,
        pres = 1,
        delay = 0;
    var $pres=$("#Pres")
    var autoClick=function(){
        presTimer=setTimeout(function(){
            $($("#TableObjects button").toArray().reverse()).click()
            setDelay()
            autoClick()
        },delay)
    }
    var setDelay=function(){
        pres=parseInt($pres.text())
        delay=parseInt($("#TableObjects button").last().parent().parent().parent().parent().parent().attr("id").substring(2,this.length))*2000/pres
    }
    var createGUI=(function(){
        var cheaterGUI=$('<div id="cheater">Cheater&nbsp;&nbsp;&nbsp;&nbsp;<button type="button">START</button></div>').prependTo($("#body"))
        cheaterGUI.css({
            "position":"fixed",
            "left":"0",
            "color":"white",
            "padding":"10px 10px",
            "background":"rgba(0,0,0,0.3)",
            "z-index":"10000"
        }).find("button").css({
            "border":"none",
            "padding":"5px 10px",
            "background":"#1717a3",
            "border-radius":"3px"
        }).click(function(){
            var $this=$(this)
            var text=$this.text()
            if(text=="START"){
                $this.text("STOP").css("background","#cc2222")
                cheater.start()
            }else{
                $this.text("START").css("background","#1717a3")
                cheater.stop()
            }
        })
    })()
    var handler={
        start:function(){
            LevelUp=setInterval(function(){
                $("[id^='spec'][onclick],[id^='tblRow'][onclick]").click()
                $("#TableObjects button").last().click();
            },1000)
            autoClick()
        },
        stop:function(){
            clearInterval(LevelUp)
            clearTimeout(presTimer)
        }
    }
    return handler
})(jQuery)