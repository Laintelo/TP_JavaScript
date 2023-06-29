function verifierlangues(){
  var form = document.forms[0];
  var langues = form.elements.langues;
  var languesTable = [];

  for(let i = 0; i< langues.length; i++){
    if (langues[i].checked){
      languesTable.push(langues[i].value);
    }
  }

  var ElementResultat = document.getElementById("resultat");
  var resultat = "";

  if (languesTable.length === 1){
    resultat = "Vous parlez une seule langue : " + languesTable[0];
  } else if (languesTable.length === 2){
    resultat = "Vous parlez deux langues : " + languesTable.join(" et ");
  } else if (languesTable.length === 3){
    resultat = "Vous parlez les trois langues 😎 : " + languesTable.join(", ");
  }

  ElementResultat.textContent = resultat
}