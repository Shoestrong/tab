require.config({
    paths : {
       jquery : 'jquery.min'
    }
});
require(['jquery','tab'], function ($,tab){
    new tab({
        navs: $('.tabTitle div'),
        contents: $('.tabCon div'),
        eventTab:'mouseover',
        activeStyle:{
        	color:'#fff',
        	background:'green',
        	fontSize:'20px'
        }
    })
});
