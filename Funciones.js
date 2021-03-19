var video_out = document.getElementById("vid-box");
function login(form) {
     var phone = window.phone = PHONE({
     number        : form.username.value || "Anonymous", // listen on username line else Anonymous
     publish_key   : 'pub-c-54e1d1db-6334-4d21-bd5d-3174528b0c9a',
     subscribe_key : 'sub-c-0f2371d8-8908-11eb-a47e-8aa5932e3236',
 }); 
 phone.ready(function(){ form.username.style.background="#55ff5b"; });
 phone.receive(function(session){
     session.connected(function(session) { video_out.appendChild(session.video); });
     session.ended(function(session) { video_out.innerHTML=''; });
 });
 return false;  // So the form does not submit.
}
function makeCall(form){
        if (!window.phone) alert("Login First!");
	else phone.dial(form.number.value);
	return false;
}