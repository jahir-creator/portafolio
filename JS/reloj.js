function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible


    setTimeout("mueveReloj()",1000)
    var myhora = momentoActual.toLocaleTimeString();
    var hora1 = "20:00:00";
    var hora2 = "20:02:00";
    var hora3 = "20:03:00";
    var hora4 = "20:04:00";
    var hora5 = "20:05:00";

    if (myhora == hora1){
        console.log("cambia de color");
        
        obj = document.documentElement.setAttribute('tema', 'coloruno');
        
    }
    if (myhora == hora2){
        console.log("cambia de color");
        
        obj = document.documentElement.setAttribute('tema', 'colordos');
        
    }
    if (myhora == hora3){
        console.log("cambia de color");
        
        obj = document.documentElement.setAttribute('tema', 'colortres');
        
    }
    if (myhora == hora4){
        console.log("cambia de color");
        
        obj = document.documentElement.setAttribute('tema', 'colorcuatro');
        
    }
    if (myhora == hora5){
        console.log("cambia de color");
        
        obj = document.documentElement.setAttribute('tema', 'colorcinco');
        
    }
}
