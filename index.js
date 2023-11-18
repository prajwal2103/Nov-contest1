const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for(let i in data){
        if(data[i].profession=="developer"){
            console.log(data[i].name);
        }
    }
  }
  
  // 2. Add Data
  function addData() {
    let newObj={
        name:prompt("enter name"),
        age:parseInt(prompt("enter age")),
        profession:prompt("enter profession")
    }
    data.push(newObj);
    console.log(data)
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    let ans=data.filter((element)=>{
        if(element.profession=="admin"){
         return false;
        }
        return true;
    });
    console.log(ans)
   
    
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let newArray=[
        { name: "abc", age: 25, profession: "developer" },
       { name: "xyz", age: 28, profession: "manager" },
    ]
   data.push(...newArray)
   console.log(data)
  }
  
  // 5. Average Age
  function averageAge() {
    let avgAge=0;
    data.forEach((e)=>{
        avgAge+=e.age;
    })
    let total=avgAge/data.length;
    console.log(total)
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let present=false;
    data.forEach((element)=>{
        if(element.age>25){
           present=true;
        }
    })
    if(present==true){
        console.log("present");
    }
    else{
        console.log("not present");
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
   
  
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>{
        return a.age-b.age;
    })
    console.log(data)
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach((e)=>{
        if(e.name=="john"){
            e.profession="manager"
        }
    })
    console.log(data)
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let countDeveloper=0;
    let countAdmin=0;

    for(let i in data){
        if(data[i].profession=="developer"){
           countDeveloper++;
        }
        else if(data[i].profession=="admin"){
            countAdmin++;
        }
    }
    console.log(countDeveloper +" "+ countAdmin)
  }