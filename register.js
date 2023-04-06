let form = document.getElementById("formsubmit");
let userData = JSON.parse(localStorage.getItem("user_data")) || [];
let abc="";
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    var arr = [];
    while(arr.length < 4){
        var r = Math.floor(Math.random() * 9) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    let obj = {
        id: form.unique.value,
        age: form.age.value,
        name: form.name.value,
        designation: form.designation.value,
        priority: form.priority.value,
        vaccine: form.vaccine.value,
        otp: +arr.join("")
    }
    if(form.name.value.length < 4){
        alert("Name should be at least four character long.");
        return;
    }
    if(+form.age.value < 18 || +form.age.value > 40){
        alert("age should be between 18 to 40.")
        return;
    }
    if(userData.length == 0){
        userData.push(obj);
        localStorage.setItem("user_data",JSON.stringify(userData));
    }else{
        let istrue = false;

       for(let i =0; i<userData.length; i++){
            if(userData[i].id == form.unique.value){
                istrue = true;
                break;
            }
       }
       if(istrue == true){
        alert("User already registred");
        return;
       }else{
        userData.push(obj);     
           localStorage.setItem("user_data",JSON.stringify(userData));
       }
    }


})


// done code

// git commit changing
// don't try to understand
