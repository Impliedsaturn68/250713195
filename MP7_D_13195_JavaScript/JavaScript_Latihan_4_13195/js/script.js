function fn_valform(){
    var input="";
    if(document.getElementById("nama").value==""){
        input += ("\n Anda belum mengisikan nama");
    }
    if(document.getElementById("email").value==""){
        input+=("\n Anda belum mengisikan email");
    }
    if(document.getElementById("umur").value=""){
        input+=("\n Anda belum mengisikan umur");
    }
    
    if (input != "") {
        alert("Peringatan:\n" + input);
        return false;
    }else if(document.getElementById("email").value!="^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$"){
        return true;
    }else{
        return true;
    }

}