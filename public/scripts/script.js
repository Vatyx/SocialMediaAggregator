console.log("This was included");

window.fbAsyncInit = function() {
    FB.init({
      appId      : 'your-app-id',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// FB.getLoginStatus(function(response) {
//   if (response.status === 'connected') {
//     console.log('Logged in.');
//   }
//   else
//   {
//   	console.log("nope")
//   }
// });

// $("body").click(function()
// {
// 	$("contentContainer").append("<contentColumn class='newitem'></div>")

// });

$("contentColumn").click(function()
{
	//this.append("<content></content>")

});

$("#instagram").click(function() 
{
	$.get("/instagram/auth");
	//window.location.replace("https://api.instagram.com/oauth/authorize/?client_id=ad894ecb14cb4928bd00f5e4d8c2ae67&redirect_uri=http://localhost:3000/instagram_callback&response_type=code");
});