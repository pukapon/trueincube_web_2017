function someFunction(data, callback){
    console.log(3)
    callback(data)
}

function execute(){
    console.log(1)
    someFunction(2, function(data){
        console.log(data)
    })
    console.log(4)
}

execute();