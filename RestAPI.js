console.log("REST API CALL")
const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3/all");
request.send(null);
request.onload=function(){
    const response = JSON.parse(this.responseText);
    console.log(response);
    //console.log(response.name);
    for(var countryAPI of response){
        const {name:{common,official},flag,capital, region,subregion,population}=countryAPI;
        //  if (name == "India"){
            console.log(`Flag is ${flag}`);
            console.log(`Country Name is ${common} Capital is ${capital} and region is ${region} and subregion is ${subregion} and population is ${population}`);
        //  }
        
    }
}
var flag = 0;
var name1 =""
var age1 = 0
var name2 = ""
var age2 = 0
console.log("Length of object is " + Object.keys(obj1).length);
for( var pobj of obj1){
    const {name,age} = obj1;
    
    name1 = pobj.name; age1=pobj.age;
    console.log(name1);
    console.log(age1);
for(var i = 0 ; i<obj1.length-1; i++){
    const {name,age} = obj1[i];
    console.log("Length of each object is " + obj1[i]);
    name2 = obj1[i].name; age2=obj1[i].age;
    console.log("Name2 -" + name2);
    console.log("Age2 - " + age2);
    console.log(`Name is ${name} and name1 is ${name1} and Age is ${age} and age is ${age1}`)
if (name1 === name2 && age1 === age2){
flag++;

}
    }
    
}
console.log(flag);
if (flag == Object.keys(obj1).length)
    console.log(`Both object are equal`)
    else
    console.log(`Objects are not equal`)