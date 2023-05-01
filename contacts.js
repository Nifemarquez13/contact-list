
let Contacts = [{
    id: 0,
    names: "Ana",
    lastname: "Ospina Rojas",
    telephone: 3215901740,
    email: "ana@gmail.com",
    locations:{
        city: "Montería",
        direction: "Cll 45-34b"
    }
}, {
    id: 1,
    names: "Laura",
    lastname: "Muñoz",
    telephone: 3126580317,
    email: "laura@gmail.com", 
    locations:{
        city: "Apartadó",
        direction: "Cll 23b"
    } 
}, {
    id: 2,
    names: "Marisol",
    lastname: "Parra",
    telephone: 3508329837,
    email: "marisol@gmail.com",
    locations:{
        city: "Apartadó",
        direction: "Cll 105B-11"
    }
}];

function addContacts(Name, lastname, Telephone, Email, city, direction) {
    let endContact = (Contacts[Contacts.length - 1].id)    
    
let contact = {
    id : endContact+1, 
    names : Name,
    lastname: lastname,
    telephone : Telephone,
    email : Email,
    locations:{
        city: city,
        direction: direction,
    }
  };

    Contacts.push(contact)
}

addContacts("Yessica", "Sotomayor", 3214789234, "yessica@gmail.com", "cali", "Cll 65-09");
console.log(Contacts);
const deleteContacts = (name, lastname)=>{
    let contactFound = Contacts.filter((Contact)=>Contact.names==name&&Contact.lastname==lastname);
    let posContacts = Contacts.findIndex((Contact)=>Contact==contactFound[0]);
Contacts.splice(posContacts, 1);
}

deleteContacts("Laura", "Muñoz");

console.log(Contacts);


function showContacts() {

Contacts.map((Contact)=>console.log("Nombre: "+Contact.names+" \nApellido: "+Contact.lastname+" \nTeléfono: "+Contact.telephone));

}

showContacts();