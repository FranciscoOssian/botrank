const fs = require("fs");

var config

fs.readFile("./config.json" , "utf8", function(err, data){
    
    if(err) return console.log("Erro ao ler arquivo");
  
    config = JSON.parse(data);
  })

exports.GetConfig = function() {
    return config
}

exports.SetPrefix = function(prefix){
  let student = { 
    "prefix": prefix
  };
 
  let data = JSON.stringify(student);
  fs.writeFileSync('config.json', data);
}