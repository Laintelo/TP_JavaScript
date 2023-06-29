function submitForm(event){
  event.preventDefault();
  
  var form = document.forms.namedItem("DonneesUtilisateur")
  var nom = form.elements.nom.value;
  const nom_regex = /^[a-zA-ZÀ-ÿ\- ]{2,15}$/
  const prenom_regex = /^[a-zA-ZÀ-ÿ\- ]{2,30}$/

  // Vérification du nom saisi
  var er_nom = document.getElementById("erreur-nom");
  if (nom === ""){
    er_nom.innerHTML = "❌ veuillez renseigner le nom !"
    er_nom.style.color="red";
    return;
  }
  else if (!nom_regex.test(nom)){
    er_nom.innerHTML = "❌ le nom doit contenir uniquement des lettres, des espaces et des tirets. !"
    er_nom.style.color="red";
    return;
  }
  else{
    er_nom.innerHTML = "✅ le nom est valide !"
    er_nom.style.color="green";
  }

  var prenom = form.elements.prenom.value;

  // Vérification du prenom saisi
  var er_prenom = document.getElementById("erreur-prenom");
  if (prenom === ""){
    er_prenom.innerHTML = "❌ veuillez renseigner le prenom !"
    return;
  }
  else if (!prenom_regex.test(prenom)){
    er_prenom.innerHTML = "❌ le prenom doit contenir uniquement des lettres, des espaces et des tirets. !"
    er_prenom.style.color="red";
    return;
  }
  else{
    er_prenom.innerHTML = "✅ le prenom est valide !"
    er_prenom.style.color="green";
  }

  var genres = form.elements.genre;
  
  var genre = "";
  for(let i = 0; i < genres.length; i++){
    if (genres[i].checked){
      genre = genres[i].value;
      break;
    }
  }

  const tel_regex = /^(\d{2} ){4}\d{2}$/;
  var er_tel = document.getElementById("erreur-tel")
  var tel = form.elements.telephone.value;
  if (!tel_regex.test(tel)){
    er_tel.innerHTML = "❌ Le numéro de téléphone doit être au format '00 00 00 00 00'."
    return;
  }
  else{
    er_tel.innerHTML = "✅ Le numéro de téléphone est valide."
  }

  var nationalite = form.elements.nationnalite.value;
  var er_nat = document.getElementById("erreur-nat")
  if (nationalite === ""){
    er_nat.innerHTML = "❌ Veuillez sélectionner votre nationnalité";
    return;
  }

  var TableUtilisateurs = document.getElementById("TableUtilisateurs");
  var tBody = TableUtilisateurs.getElementsByTagName("tbody")[0];
  var ligne = tBody.insertRow();
  ligne.insertCell().textContent = nom;
  ligne.insertCell().textContent = prenom;
  ligne.insertCell().textContent = genre;
  ligne.insertCell().textContent = tel;
  ligne.insertCell().textContent = nationalite;

  form.reset();
  er_nom.innerHTML = "";
  er_prenom.innerHTML = "";
  er_tel.innerHTML = "";
  er_nat.innerHTML = "";
  TableUtilisateurs.style.display = "table";
}