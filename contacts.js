
let Contacts = [{
    id: 0,
    names: "Ana Ospina Rojas",
    telephone: 3215901740,
    email: "ana@gmail.com",
}, {
    id: 1,
    names: "Laura Muñoz",
    telephone: 3126580317,
    email: "laura@gmail.com",  
}, {
    id: 2,
    names: "Marisol Parra",
    telephone: 3508329837,
    email: "marisol@gmail.com",
}];

function addContacts(Name, Telephone, Email) {
    let endContact = (Contacts[Contacts.length - 1].id)    
    
let contact = {
    id : endContact+1, 
    names : Name,
    telephone : Telephone,
    email : Email
  };

    Contacts.push(contact)
}

addContacts("Yessica Sotomayor", 3214789234, "yessica@gmail.com");
console.log(Contacts);
const deleteContacts = (name)=>{
    let contactFound = Contacts.filter((Contact)=>Contact.names==name)
    let posContacts = Contacts.findIndex((Contact)=>Contact==contactFound[0]);
Contacts.splice(posContacts, 1);
}

deleteContacts("Marisol Parra");

console.log(Contacts);


function showContacts() {

    Contacts.map((Contact)=>console.log("Nombre:"+Contact.names))


}

showContacts();