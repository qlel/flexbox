$(document).ready(function(){
    var data=[
        {
            "href":"exp/catPlayMisuc/index.html",
            "url" :"exp/img/music.png",
            "h1"  :"FlexBox布局测试",
            "p"   :"2009年,W3C提出了一种新的方案---Flex布局。",
            "span":"flexbox"
        },
        {
            "href":"exp/news/index.html",
            "url" :"exp/img/news.png",
            "h1"  :"bootstrap体验",
            "p"   :"用bootstrap实现的新闻网站",
            "span":"bootstrap news"
        },
        {
            "href":"www.baidu.com",
            "url" :"exp/img/3.jpg",
            "h1"  :"测试",
            "p"   :"js测试数据",
            "span":"qlel text"
        },
        {
            "href":"www.baidu.com",
            "url" :"exp/img/3.jpg",
            "h1"  :"测试",
            "p"   :"js测试数据",
            "span":"qlel text"
        },
        {
            "href":"www.baidu.com",
            "url" :"exp/img/3.jpg",
            "h1"  :"测试",
            "p"   :"js测试数据",
            "span":"qlel text"
        },
        {
            "href":"www.baidu.com",
            "url" :"exp/img/3.jpg",
            "h1"  :"测试",
            "p"   :"js测试数据",
            "span":"qlel text"
        },
        {
            "href":"www.baidu.com",
            "url" :"exp/img/3.jpg",
            "h1"  :"测试",
            "p"   :"js测试数据",
            "span":"qlel text"
        },
        {
            "href":"www.baidu.com",
            "url" :"exp/img/3.jpg",
            "h1"  :"测试",
            "p"   :"js测试数据",
            "span":"qlel text"
        },
        {
            "href":"www.baidu.com",
            "url" :"exp/img/3.jpg",
            "h1"  :"测试",
            "p"   :"js测试数据",
            "span":"qlel text"
        },
        {
            "href":"www.baidu.com",
            "url" :"exp/img/3.jpg",
            "h1"  :"测试",
            "p"   :"js测试数据",
            "span":"qlel text"
        },
        {
            "href":"www.baidu.com",
            "url" :"exp/img/3.jpg",
            "h1"  :"测试",
            "p"   :"js测试数据",
            "span":"qlel text"
        },
    ];
    $.each(data,function(i,v){
        var items=$("<div>").addClass("item-"+(i+1)).appendTo($(".main"));
        var af=$("<a>").attr("href",data[i].href).addClass("card").appendTo(items);
        var imgs=$("<div>").css("background-image","url("+data[i].url+")").addClass("image").appendTo(af);
        var arti=$("<article>").appendTo(af);
        $("<h1>").text(data[i].h1).appendTo(arti);
        $("<p>").text(data[i].p).appendTo(arti);
        $("<span>").text(data[i].span).appendTo(arti);
    });
})