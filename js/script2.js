document.addEventListener("DOMContentLoaded",
function(event){
    document.querySelector("button").addEventListener("click", function(){
        $ajaxUtils.sendGetRequest("/data/name.txt", function(res){
            var msg = 
            res.firstNam +" "+ res.lastName;
            document.querySelector("#content").innerHTML = "<h2>Hello " +msg+ "!</h2>" 
        });
    });
   
}
);