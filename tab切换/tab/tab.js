define(function(){
    /*
    * tabSelect.js 一个简单的tab切换
    * tab包含盒子需要id,tab标题盒子属性[data-tab=tabTitle]，tab内容盒子属性[data-tab=tabCon]
    * param @tabDOM 切换tab包含盒子的id
    * param @tabTitleClass 切换tab的标题高亮的class名
    * param @e 是点击切换还是划过切换，如忽略，默认click
    */
    var Tab = function(opts) {
        this.opts = opts;
        this.init();
    }

    Tab.prototype = {
        init: function() {
            this.binEvents();
        },
        binEvents: function() {
            var that = this;
            if ($.isArray(this.opts.data) && this.opts.data.length > 0) {
                for (var i = 0; i < this.opts.data.length; i++) {
                    var item = this.opts.data[i];
                    item.nav.on(that.events(), function() {
                        that.showPage($(this));
                    })
                }
                this.opts.data[0].nav.trigger('click');
            } else {
                this.opts.navs.on(that.events(), function() {
                    that.showPageByIndex($(this).index());
                });
                this.opts.navs.eq(0).trigger('click');
            }
        },
        events:function(){
            if(this.opts.eventTab==null || this.opts.eventTab=="click"){
                this.opts.eventTab="click";
            }else if(this.opts.eventTab=="mouseover"){
                this.opts.eventTab="mouseover"
            }else{
                return false;
            }
            return this.opts.eventTab;
        },
        showPage: function(element) {
            var dest = element.data('href');
            $('#' + dest).show().addClass('current-tab').siblings().removeClass('current-tab').hide();
            if (this.opts.activeClass) {
                element.addClass(this.opts.activeClass).siblings().removeClass(this.opts.activeClass);
            } else if (this.opts.activeStyle) {
                element.opts.css(this.opts.activeStyle).siblings().removeAttr('style');
            }
        },
        showPageByIndex: function(index) {
            this.opts.contents.eq(index).show().addClass('current-tab').siblings().removeClass('current-tab').hide();
            if (this.opts.activeClass) {
                this.opts.navs.eq(index).addClass(this.opts.activeClass).siblings().removeClass(this.opts.activeClass);
            } else if (this.opts.activeStyle) {
                this.opts.navs.eq(index).css(this.opts.activeStyle).siblings().removeAttr('style');
            }
        }
    }
    return Tab;
    /*
    *    require(['tabSelect'], function (tabSelect){
    *        tabSelect.tab("dom的id名","active","click");
    *    });
    */
})
