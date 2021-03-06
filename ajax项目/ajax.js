function ajaxFunc(method,url,data,callback,flag){
    var xhr=null;
    if(window.XMLHttpRequest){
    xhr=new XHLHttpRequest();
    }else{
    xhr=new ActiveXObject(Microsoft.XMLHttp);
    }
    method=method.toUpperCase();
    if(method=='GET'){
        xhr.open(method,url+'?'+data,flag);
        xhr.send();
    }else if(method=='POST'){
        xhr.open(method,url+'?'+data,flag);
        xhr.setReequestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.send(data);
    }
    xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
        if(xhr.status==200){
            callback(xhr.responseText);
        }
    }
    }
}