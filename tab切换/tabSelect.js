define(function(){
    /*
    * tabSelect.js 一个简单的tab切换
    * tab包含盒子需要id,tab标题盒子属性[data-tab=tabTitle]，tab内容盒子属性[data-tab=tabCon]
    * param @tabDOM 切换tab包含盒子的id
    * param @tabTitleClass 切换tab的标题高亮的class名
    * param @e 是点击切换还是划过切换，如忽略，默认click
    */
    var eventTarget=function(e){
            if (e === "click" || e == null) {
                return "click";
            } else if (e === "mouseover") {
                return "mouseover";
            } else {
                return false;
            }
        },
        changeEvent=function(tabTitleClass,events,sel){
            sel.find("[data-tab=tabTitle]").children().on(events,function(){
                var idx=$(this).index();
                $(this).addClass(tabTitleClass).siblings().removeClass(tabTitleClass);
                sel.find("[data-tab=tabCon]").children().eq(idx).show().siblings().hide();
            })
        },
        oneChange=function(tabDOM,tabTitleClass,events){
            var _this=this;
            var $sel=$(tabDOM);
            changeEvent(tabTitleClass,events,$sel);
        }
    return {
        tab:function(tabDOM,tabTitleClass,e){
            var events = eventTarget(e);
            oneChange(tabDOM,tabTitleClass,events);
        }
    }
    /*
    *    require(['tabSelect'], function (tabSelect){
    *        tabSelect.tab("dom的id名","active","click");
    *    });
    */
})
