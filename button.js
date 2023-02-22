function changer(){
    div1=document.getElementById("div1").style;
    div2=document.getElementById("div2").style;
    div3=document.getElementById("div3").style;
    div1.background="gray";
    div2.visibility="hidden";
    div3.border="4px dashed pink"
    document.getElementById("button").style.display="none";
}

function ajouter(){
    var artiste=document.getElementById("add").value.trim();
    var lg=artiste.length;
    artiste=artiste.substr(0,1).toUpperCase()+artiste.substr(1,lg).toLowerCase();
    var select=document.getElementById('liste_artiste');
    //chercher l'artiste dans la liste
    for(i=0; i<select.length;i++)
        if(artiste == select.children[i].text){
            alert("Article existe dans la base");
            return;
        }       
    // L'artiste n'existe pas, on l'insère
    var element=document.createElement('option');
    var texte=document.createTextNode(artiste);
    element.appendChild(texte);
    select.appendChild(element);
    alert("Insertion Reussi");
    document.getElementById('add').value="";
}

function supprimer(){
    var artiste=document.getElementById('sup').value.trim();
    var lg=artiste.length-1;
    artiste=artiste.substr(0,1).toUpperCase()+artiste.substr(1,lg).toLowerCase();
    var select=document.getElementById('liste_artiste');

    for(i=0; i<select.length;i++)
        if (artiste == select.children[i].text && select.children[i].value!=0)
        {
            select.removeChild(select.children[i]);
            alert("Artiste supprimé");
            document.getElementById('sup').value="";
            return;
        }
    alert("Artiste non inscrit dans la base");
}