let clave;

let intentos = 0 ;
const MAX_INTENTOS = 3 ;

    do{
        clave=prompt("ingresa la contraseña");
        intentos ++;

        if(clave === "recordatorio123" ){
            console.log("contraseña correcta")
            break;
        }

        if(intentos >= MAX_INTENTOS){
            console.log("la cantidad de intentos se alcanzo")
            break;
        }
    
        alert("contraseña incorrecta")
        
    }while(true);
    

let recordatori =prompt("ingresar un recordatorio ");
let diaDelRecordatorio =prompt ("ingresar dia del recordatorio ");
let horaDelRecordatorio =parseInt(prompt("ingresar hora del recordatorio "));

function recordatorio ( recordatorios , dia , hora ,){
    console.log("tu recordatorio es" +" "+ recordatorios +" "+ "el dia"+" "+ dia+" "+ "a las "+" "+ hora)
}
recordatorio (recordatori,diaDelRecordatorio,horaDelRecordatorio)


