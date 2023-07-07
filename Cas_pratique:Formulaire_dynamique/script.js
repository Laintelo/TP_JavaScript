var form = document.forms[0]

// Récupérer les éléments du formulaire
var nomInput = form.elements.nom
var prenomInput = form.elements.prenom
var genreInput = form.elements.genre
var telInput = form.elements.telephone
var natInput = form.elements.nationnalite

// Définir les différentes expressions régulières
const nom_regex = /^[a-zA-ZÀ-ÿ\- ]{2,15}$/;
const prenom_regex = /^[a-zA-ZÀ-ÿ\- ]{2,30}$/;
const tel_regex = /^(\d{2} ){4}\d{2}$/;

// Les variables de validation des entrées
var CheckNom = false;
var CheckPrenom = false;
var CheckTel = false;
var CheckNat = false;

// Lier les évènements aux fontions de validation
nomInput.addEventListener('input', function(){
    CheckNom = ValiderNom(nomInput.value);
});

prenomInput.addEventListener('input', function(){
    CheckPrenom = ValiderPrenom(prenomInput.value);
});

telInput.addEventListener('input', function(){
    CheckTel = ValiderTel(telInput.value)
})

natInput.addEventListener('input', function(){
    CheckNat = ValiderNat(natInput.value);
})

/*genreInput.addEventListener('input', function(){
    Checkgenre = ValiderGenre(genreInput)
})*/

var er_nom = document.getElementById("erreur-nom");
function ValiderNom(nom){
    if (nom === ""){
        er_nom.innerHTML = "❌ veuillez renseigner le nom !";
        er_nom.style.color = "red";
        return false;
    }
    else if (!nom_regex.test(nom)){
        er_nom.innerHTML = "❌ le nom doit contenir uniquement des lettres, des espaces et des tirets. !";
        er_nom.style.color = "red";
        return false;
    }
    else{
        er_nom.innerHTML = "✅ le nom est valide !";
        er_nom.style.color = "green";
        return true;
    }
}

var er_prenom = document.getElementById("erreur-prenom");
function ValiderPrenom(prenom){
    if (prenom === ""){
        er_prenom.innerHTML = "❌ veuillez renseigner le prenom !";
        er_prenom.style.color = "red";
        return false;
    }
    else if (!prenom_regex.test(prenom)){
        er_prenom.innerHTML = "❌ le prenom doit contenir uniquement des lettres, des espaces et des tirets. !";
        er_prenom.style.color = "red";
        return false;
    }
    else{
        er_prenom.innerHTML = "✅ le prenom est valide !";
        er_prenom.style.color = "green";
        return true;
    }
}

var er_tel = document.getElementById("erreur-tel");
function ValiderTel(tel){
    if (tel === ""){
        er_tel.innerHTML = "❌ veuillez renseigner le numéro de téléphone !";
        er_tel.style.color = "red";
        return false;
    }
    else if (!tel_regex.test(tel)){
        er_tel.innerHTML = "❌ Le numéro de téléphone doit être au format '00 00 00 00 00'.";
        er_tel.style.color = "red";
        return false;
    }
    else{
        er_tel.innerHTML = "✅ le numéro de telephone est valide !";
        er_tel.style.color = "green";
        return true;
    }
}

var er_nat = document.getElementById("erreur-nat");
function ValiderNat(nat){
    if (nat === ""){
        er_nat.innerHTML = "❌ Veuillez sélectionner votre nationnalité !";
        er_nat.style.color = "red";
        return false;
    }
    else{
        er_nat.innerHTML = "✅ La sélection est valide."
        er_nat.style.color = "green";
        return true;
    }
}



/*var er_genre = document.getElementById('erreur-genre');
var genre = "";
function ValiderGenre(tabGenre){
    for(let i = 0; i < tabGenre.length; i++){
        if (tabGenre[i].checked){
        genre = tabGenre[i].value;
        break;
        }
    }
    if (genre === ""){
        er_genre.innerHTML = "❌ Veuillez sélectionner votre genre !";
        er_genre.style.color = "red";
        return false;
    }
    else{
        er_genre.innerHTML = "✅ Sélection valide.";
        er_genre.style.color = "green";
        return true;
    }
}*/

function submitForm(event){
    event.preventDefault();

    // Validation du genre
    var genre = "";
    for(let i = 0; i < genreInput.length; i++){
    if (genreInput[i].checked){
        genre = genreInput[i].value;
        break;
    }
    }
    if (genre === ""){
        var er_genre = document.getElementById('erreur-genre');
        er_genre.innerHTML = "❌ Veuillez sélectionner votre genre !";
        er_genre.style.color = "red";
        return;
    }
    else{
        var er_genre = document.getElementById('erreur-genre');
        er_genre.innerHTML = "✅ Sélection valide.";
        er_genre.style.color = "green";
    }

    if(CheckNom && CheckPrenom && CheckTel && CheckNat){
        var TableUtilisateurs = document.getElementById("TableUtilisateurs");
        var tBody = TableUtilisateurs.getElementsByTagName("tbody")[0];
        var ligne = tBody.insertRow();
        ligne.insertCell().textContent = nomInput.value;
        ligne.insertCell().textContent = prenomInput.value;
        ligne.insertCell().textContent = genre;
        ligne.insertCell().textContent = telInput.value;
        ligne.insertCell().textContent = natInput.value;

        form.reset();
        er_nom.innerHTML = "";
        er_prenom.innerHTML = "";
        er_genre.innerHTML = "";
        er_tel.innerHTML = "";
        er_nat.innerHTML = "";
        TableUtilisateurs.style.display = "table"; 
    }
}
