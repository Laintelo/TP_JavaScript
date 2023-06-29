function obtenircivilite() {
    var form = document.forms[0];
    var civilites = form.elements.civilite;
    var CiviliteSelectionnee = "";

    for(let i = 0; i < civilites.length; i++){
      if (civilites[i].checked){
        CiviliteSelectionnee = civilites[i].value;
        break;
      }
    }
    
    var resultat = document.getElementById("resultat");
    resultat.textContent = "Vous avez sélectionné la civilité : " + CiviliteSelectionnee;
  }