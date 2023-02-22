function changerTitre(){
//document est un javascript
document.title="New title";
//document.write("BLA BLA BLA");
}

function f(image){
    image=document.getElementById(id);
    //alert(image);
    //alert(image.id);
    //alert(image.src);
    image.src="saturne.jpeg"
}

// EXERCICE MORPIONS

tour=0;
grille=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];

function jouer(id, x, y){
    if(grille[x][y] == 0) return 0;
    symbole=document.getElementById(id);
    if(tour %= 2) {
        symbole.src="croix.png"
        grille[x][y]++;
    } else {
        symbole.src="rond.png"
        grille[x][y]+2;
    }
    tour++;
    //condition victoire

}