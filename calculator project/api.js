/*const prm=new Promise(function(resolve,reject){
    console.log("fetching data from dB")
    setTimeout(()=>{
        resolve("got the data from database")
        reject("failed to get data from dB");//choose resolve or reject
    },3000);
})
prm.then(function(result){
    console.log("in then method")
    console.log(result)
})
prm.catch(function(err){
    console.log("in catch method")
    console.log(err)
})*/
/*function getUserData(){
    const data=fetch("https://randomuser.me/api/");//fetch a promise
    console.log(data);//success of a promise-.then
    data.then(function(resolve){//for getting data from dB(response is convert to human readable-json)
         const result=resolve.json()//we can read json so convert so result is promise again so then is used
         result.then(function(userData){//vanilla JS
            console.log(userData);
         })
    })
    data.catch(function(error){
          console.log(error);
    })
}*/
async function getUserData_V2(){
    const data=await fetch("https://randomuser.me/api/");
    var result=await data.json()
    console.log(data);
    //console.log(result);
}
getUserData_V2();