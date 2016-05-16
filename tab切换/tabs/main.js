require.config({
    paths : {
       jquery : 'jquery.min'
    }
});
require(['jquery','tabSelect'], function ($,tabSelect){
    new tabSelect({
        tabDOM:$("#tab1"),
        tabTitleClass:"active"
    })
    // tabSelect.tab("#tab2","active","mouseover")
});
