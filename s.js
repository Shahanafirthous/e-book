const userId=document.getElementById('userId');
const fireName =document.getElementById('firstName');
const lastName =document.getElementById('lastName');
const email =document.getElementById('email');
const password =document.getElementById('password');
const button=document.getElementById('button');

const database=firebase.database();
const rootRef=database.ref("users");
button.addEventListener("click",(e) => {
     e.preventDefault();
	 rootRef.child(userId.value).set({
    
         first_name:firstName.value,
         last_name:lastName.value,
		 email:email.value,
		 password:password.value
         });
});
