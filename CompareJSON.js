var obj1 ={
    name : "Person",
    age : 5
};
var obj2 ={
    name : "Person",
    age : 6
};
var flag = 0;
console.log("Example >> JSON COMPARISON >>")
for(var key in obj1){
    
    if(obj1[key]===obj2[key] ){
        flag = 1;
    }
    else{
        flag = 0;
        
    }
    if (flag == 0){
        break;
        
    }
   
}
if (flag == 0)
console.log("JSON Objects are different");
else
console.log("JSON Objects are Same");