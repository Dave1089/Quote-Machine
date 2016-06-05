$.ajaxSetup({
  cache: false
});

var getQuote = function(){
  
$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(json) {
 tweetContent = String(json[0].content);
 tweetTitle = "- "+ String(json[0].title); 
  $('.fillQuote').html(tweetContent);
  $('.author').html(tweetTitle);
   
  });
  
}      

$('#btnNext').on('click',function(){
  getQuote();
  tweetParse=tweetLink(tweetContent);
    });

var tweetLink = function(){
 link = "https://twitter.com/intent/tweet?text=";
  link+= encodeURIComponent(tweetContent).replace(/[!'()*]/g,'');
//  link+= '<br>';
  link+= encodeURIComponent(tweetTitle);
  return link;
};

$('#floatTwitter').on('click',function(e){
e.preventDefault();  
linkText = tweetLink(tweetContent);
open(linkText);
  
});
getQuote();
tweetParse = tweetLink(tweetContent);