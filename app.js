
var firebaseConfig = {
    apiKey: "AIzaSyDom5JMOIuMWxURciKsXL9v87liPXPQdU0",
    authDomain: "chat-application-9fc10.firebaseapp.com",
    databaseURL: "https://chat-application-9fc10.firebaseio.com",
    projectId: "chat-application-9fc10",
    storageBucket: "chat-application-9fc10.appspot.com",
    messagingSenderId: "1087898455761",
    appId: "1:1087898455761:web:7dba37addccea8228a3ff0",
    measurementId: "G-F9VVLES8PH"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


/*const facebook_login=()=>{
  var provider=new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
 
  // ...
});

}*/

const nameForm=document.getElementById("nameForm");
const nameInput=document.getElementById("name-input");
const namebtn=document.getElementById("name-btn");
const messageScreen=document.getElementById("messages");
const messageForm=document.getElementById("message-form");
const msgInput=document.getElementById("msg-input");
const msgBtn=document.getElementById("msg-btn");
const db=firebase.database();
const msgRef=db.ref("/msgs")
const id=uuid();
let name;


messageForm.addEventListener("submit",event=>{
 event.preventDefault();
 const text=msgInput.value;
 if(!name){
   return alert("Yo have to set up same name");

 }
 else if(!text.trim())return alert("You have to type in some messeges");
 const msg={
   id,
   name,
   text
  };
  msgRef.push(msg);
  msgInput.value="";
});
const updateMsges=data =>{
  const{id:userID,name,text}=data.val();
  const msg=`<li class="msg ${id == userID && "my"}">
  <span>
      <i class="name">${name}: </i>${text}
  </span>
</li> `;
messageScreen.innerHTML+=msg;
};

msgRef.on('child_added',updateMsges);
   


nameForm.addEventListener('submit',e=>{
  e.preventDefault();
  if(nameInput.value.trim().length<4)
  return  alert("Name should be  more then 4 character");

nameForm.style.display='none';
msgInput.removeAttribute("disabled");
msgBtn.removeAttribute("disabled")
return (name =nameInput.value);
});

function  Alldelete(){
  list.innerHTML="";
}