function success(string){
  console.log(string)
}

function readFile(callback){
  var req = new XMLHttpRequest();
  req.open("GET","./data.json",true);
  req.addEventListener("load",function(){
    if( req.status<400 )
      callback("yes");
  })
  req.send(null);
  var js = JSON.parse( req.responseText );
  console.log(js.time);
}

readFile(success)
