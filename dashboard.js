let userData = JSON.parse(localStorage.getItem("user_data")) || [];
userData = userData.sort((a,b) => +a.priority - +b.priority);
let tableData = document.getElementById("table_data");
let doneuser = JSON.parse(localStorage.getItem("done_user")) || [];
let filter = document.getElementById("filter");
function createTable(data){
    let table = data.map(item =>{
        return  `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.age}</td><td>${item.designation}</td><td>${item.priority}</td><td class='vaccince'>${item.vaccine}</td><td>${item.otp}</td><td class='delete'>Delete</td></tr>`
    })
    tableData.innerHTML= table.join(" ");

    let vaccinceClicked = document.getElementsByClassName("vaccince");

    for(let i =0; i<vaccinceClicked.length; i++){
        vaccinceClicked[i].addEventListener("click", () =>{
            var x = prompt("Enter the OTP");
            if(+x !== +data[i].otp){
                window.alert("otp miss match");  
            }else{
                doneuser.push(data[i]);
                localStorage.setItem("done_user",JSON.stringify(doneuser));
                let new_data = userData.filter((item,index) => index !== i);
                localStorage.setItem("user_data",JSON.stringify(new_data));
                alertFunction(data[i]);
                createTable(new_data);
            }
           
        })
    }

    let deleteArray = document.getElementsByClassName("delete");

    for(let i =0; i<deleteArray.length; i++){
        deleteArray[i].addEventListener("click", () =>{
            let deletedData = userData.filter((item,index) => index !== i);
            userData = deletedData;
            localStorage.setItem("user_data",JSON.stringify(userData));
            createTable(deletedData);
        })
    }

}



function alertFunction(data){
    window.alert(data.name+" Added to Queue");
    setTimeout(() => {
        window.alert("vaccinating "+data.vaccine);
    }, 5000);
    setTimeout(() =>{
        window.alert(data.name +" Vaccinated");
    },10000)
}


filter.addEventListener("change", () =>{
    console.log(filter.value);
    if(filter.value == ""){
        createTable(userData);
    }else if(filter.value == "Covaxin"){
        let filtered = userData.filter(item => item.vaccine == "Covaxin");
        createTable(filtered);
    }else if(filter.value == "Sputnik"){
        let filtered = userData.filter(item => item.vaccine == "Sputnik");
        createTable(filtered);
    }else if(filter.value == "Covishield"){
        let filtered = userData.filter(item => item.vaccine == "Covishield");
        createTable(filtered);
    }else if(filter.value == "p0"){
        let filtered = userData.filter(item => item.priority == "0");
        createTable(filtered);
    }else if(filter.value == "p1"){
        let filtered = userData.filter(item => item.priority == "1");
        createTable(filtered);
    }else if(filter.value == "p2"){
        let filtered = userData.filter(item => item.priority == "2");
        createTable(filtered);
    }else if(filter.value == "p3"){
        let filtered = userData.filter(item => item.priority == "3");
        createTable(filtered);
    }
})

let sort = document.getElementById("sort");

sort.addEventListener("click", () =>{
    if(sort.value == "low"){
        let sortedData = userData.sort((a,b) => a.age-b.age);
        createTable(sortedData);
    }else if(sort.value == "high"){
        let sortedData = userData.sort((a,b) => b.age-a.age);
        createTable(sortedData);
    }
})


createTable(userData);