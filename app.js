function getQuote() {
  $(".bubble").slideUp();
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    success: function(response) {
      var r = JSON.parse(response);
      currentQuote = r.quote;
      currentAuthor = r.author;
      $(".bubble").html("<q>"+currentQuote+"</q>");
      $(".bubble").slideDown();
      $(".author").html(currentAuthor);
      $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=mikeale03&text=' + encodeURIComponent('"' + currentQuote + '" -' + currentAuthor));
      $('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote));
    }
  });
}
$(document).ready(function() {
  getQuote();
  $("#getQuote").click(getQuote);
});
