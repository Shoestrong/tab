define(function(){
    /*
    * tabSelect.js 一个简单的tab切换
    * tab包含盒子需要id,tab标题盒子属性[data-tab=tabTitle]，tab内容盒子属性[data-tab=tabCon]
    * param @tabDOM 切换tab包含盒子的id
    * param @tabTitleClass 切换tab的标题高亮的class名
    * param @e 是点击切换还是划过切换，如忽略，默认click
    */
    var Tabselect = function(opts) {
        this.opts = opts;
        this.init();
    }
    Tabselect.prototype={
        init:function(){
            this.oneChange();
        },
        eventTarget:function(){
            if (this.opts.events === "click" || this.opts.events == null) {
                return "click";
            } else if (this.opts.events === "mouseover") {
                return "mouseover";
            } else {
                return false;
            }
        },
        changeEvent:function(tabTitleClass,events,sel){
            sel.find("[data-tab=tabTitle]").children().on(events,function(){
                var idx=$(this).index();
                $(this).addClass(tabTitleClass).siblings().removeClass(tabTitleClass);
                sel.find("[data-tab=tabCon]").children().eq(idx).show().siblings().hide();
            })
        },
        oneChange:function(){
            var $sel=this.opts.tabDOM;
            this.changeEvent(this.opts.tabTitleClass,this.eventTarget,$sel);
        }
    }

    return Tabselect;
    /*
    *    require(['tabSelect'], function (tabSelect){
    *        tabSelect.tab("dom的id名","active","click");
    *    });
    */
})
