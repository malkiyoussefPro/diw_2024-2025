//Json User
//variables 

let i = 0;
const passwordInicial = "Ramis.20";
const admin= {

    id : 1,
    name: "admin",
    email : "desenvolupador@iesjoanramis.org",
    password_hash : "Ramis.20",
    edit_users : 1,
    edit_neews : 1,
    edit_bone_files : 1,
    is_first_login : 1,
    active : 1

}

const uesrs = localStorage.setItem("Admin", admin);//crear
const mostrarStr = JSON.stringify(admin);//decodificar como string
document.write(mostrarStr);//mostrar por pantalla 
// const mostrarParse = JSON.parse(admin);
// document.write(mostrarParse);

function hash_password(){

}