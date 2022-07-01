(function(main){
    const XHRequest = new XMLHttpRequest(),
    ajaxUtils = {};

ajaxUtils.sendGetRequest = function (requestUrl, reponseHandler, isJsonResponse){
    XHRequest.onreadystatechange = function(){
        handleReponse(XHRequest, reponseHandler, isJsonResponse);
    };

    XHRequest.open("GET", requestUrl, true);
    XHRequest.send(null);
};

function handleReponse(request, reponseHandler){
    if(XHRequest.readyState == 4 && XHRequest.status == 200){

        if(isJsonResponse == undefined){
            isJsonResponse = true;
        }

        if(isJsonResponse){
            reponseHandler(JSON.parse(XHRequest.responseText));
        } else {
            reponseHandler(XHRequest);
        }
    }

};

main.$ajaxUtils = ajaxUtils;
})(window);