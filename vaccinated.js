let userData = JSON.parse(localStorage.getItem("done_user")) || [];
userData = userData.sort((a,b) => +a.priority - +b.priority);
let tableData = document.getElementById("table_data");

let filter = document.getElementById("filter");

createTable(userData);
function createTable(data){
    let table = data.map(item =>{
        return  `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.age}</td><td>${item.designation}</td><td>${item.priority}</td><td class='vaccince'>${item.vaccine}</td></tr>`
    })
    tableData.innerHTML= table.join(" ");
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