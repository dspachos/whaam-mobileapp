document.addEventListener("intel.xdk.device.ready",function(){ 
	//add code
	intel.xdk.device.hideSplashScreen(); 

},false);  


window.addEventListener('push', checkPage);


function checkPage() {
 if(document.getElementById('page-main')) {
    	console.log('xa!');
    }
}




$(document).on('click', '#toggle1', function(e){
			  alert( "Handler for .click() called." );
 });

