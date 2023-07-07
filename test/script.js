var form = document.forms[0]

var nomInput = form.elements.nom;
var prenomInput = form.elements.prenom;

const nom_regex = /^[a-zA-ZÀ-ÿ\- ]{2,15}$/;
const prenom_regex = /^[a-zA-ZÀ-ÿ\- ]{2,30}$/;

var CheckNom = false;
var CheckPrenom = false;
nomInput.addEventListener('input', function(){
    CheckNom = ValiderNom(nomInput.value);
});

prenomInput.addEventListener('input', function(){
    CheckPrenom = ValiderPrenom(prenomInput.value);
});

function ValiderNom(nom){
    var er = document.getElementById("er_nom")
    if (!nom_regex.test(nom)){
        er.innerHTML = "Saisie invalide"
        er.style.color = "red";
        return false
    }
    else{
        er.innerHTML = "Saisie valide"
        er.style.color = "green";
        return true
    }
}

function ValiderPrenom(prenom){
    var er = document.getElementById("er_prenom")
    if (!prenom_regex.test(prenom)){
        er.innerHTML = "Saisie invalide"
        er.style.color = "red";
        return false;
    }
    else{
        er.innerHTML = "Saisie valide"
        er.style.color = "green";
        return true;
    }
}

function OnSubmitForm(event){
    event.preventDefault();

    if (CheckNom && CheckPrenom){
        alert("Formulaire envoyé !")
        form.reset()

        
    }
    else{
        alert("Les données ne sont pas valide !")
    }
}
