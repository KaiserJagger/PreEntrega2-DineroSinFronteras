    
    /*           $$$$-$$$$      Dineros sin Fronteras          $$$$-$$$$        */  

/*
        Pre Entrega Nº 2
    Nombre: Nicolas Andreolli
*/

const desc = 0.05


//Array compuesto con objetos

const listCountrys = [
    
    {
        pais: "Bolivia" && "bolivia",
        conversion: 0.04,
        moneda: "Pesos bolivianos"
        
    },

    {
        pais: "Estados Unidos" && "estados unidos",
        conversion: 0.007,
        moneda: "Dolares"
    },

    {
        pais: "Canada" &&"canada",
        conversion: 0.009,
        moneda: "Dolares canadienses"

    },

    {
        pais: "Chile" && "chile",
        conversion: 6.72,
        moneda : "Pesos chilenos",
    },

    {
        pais: "Brasil" && "brasil",
        conversion: 0.03,
        moneda: "Reales", 
    },

    {
        pais: "Uruguay" && "uruguay",
        conversion: 0.28,
        moneda: "Pesos uruguayos",
    },

    {
        pais: "Venezuela" && "venezuela",
        conversion: 228.90,
        moneda: "Bolivarianos",
    },

    {
        pais: "Colombia" && "colombia",
        conversion: 30.85,
        moneda: "Pesos colombianos",
    }

];

// Clase de cliente
class Usuario{
    constructor(nombre, apellido, email, contraseña){
        this.nombre = nombre;
        this.apellido= apellido;
        this.email = email;
        this.contraseña = contraseña;
    } 
}

// Funcion de bienvenida

function inicio(){
    alert("Bienvenidos a Dinero sin fronteras");
    ingresoCliente();
    alert("Desea Mandar Dinero?");
    ingresoDePais();
}

function ingresoCliente(){
    const list = [];
    list.push(new Usuario
    (prompt("Ingrese nombre: "),
    prompt("Ingrese apellido: "),
    prompt("Ingrese email"),
    prompt("Ingrese clave: "))
    );

    list.forEach((usuario) => {
        console.log(
    `Usuario
            Nombre: ${usuario.nombre} 
            Apellido: ${usuario.apellido}
            Email: ${usuario.email}
            Contraseña: *********
             `
        );    
    });
}

    
    function ingresoDePais(){
    
        let ingresePais = prompt("Ingrese Pais:  \n\nChile \n\nBrasil \n\nUruguay \n\nVenezuela \n\nColombia \n\n Bolivia \n\nEstados Unidos \n\nCanada");
        const paises = listCountrys.find((country) => 
        {
            return country.pais === ingresePais;
        })
        if(paises === undefined) {
            alert("Pais invalido, vuelva a ingresar");   
        }else {
            alert ("\nSe va a mandar a " + paises.pais + " $" + enterAmount() * paises.conversion + " " + paises.moneda);
        }
    }  
        
function enterAmount(){
    let amount = parseFloat(prompt("Ingrese un monto entre 100 y 100.000 pesos argentinos"));
    while(amount !== 0){
        if(amount > 100 && amount <= 100000){
            let descTotal = amount * desc;  //Aqui sacamos el porcentaje de la comision que se queda la pagina
           console.log("La ganancia es de: " + descTotal + " pesosARG"); //aqui se la mostramos solo al desarrollador
            let res = amount - descTotal;
           return res;
        }else{
            alert("El monto ingresado es incorrecto");
        }
        amount = parseFloat(prompt("Ingrese un monto entre 1 y 100mil pesosARG"));
    }
}

inicio();



