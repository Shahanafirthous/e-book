const userId=document.getElementById('userId');
const fireName =document.getElementById('firstName');
const lastName =document.getElementById('lastName');
const email =document.getElementById('email');
const password =document.getElementById('password');


const database=firebase.database();

addBtn.addEventListener("click",(e) => {
     e.preventDefault();
     database.ref('/users/'+ userId.value).set({
         first_name:firstName.value,
         last_name:lastName.value,
		 email:email.value,
		 password:password.value
         });
});
