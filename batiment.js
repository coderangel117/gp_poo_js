class Batiment {
    constructor(adresse) {
        this.adresse = adresse;
    }

    getImage() {
        return this.image;
    }

    getAdresse() {
        return this.adresse;
    }

    SetImage(UneImage) {
        this.image = UneImage;
    }

    SetAdresse(UneAdresse) {
        this.adresse = UneAdresse;
    }

    afficher() {
        document.write('<img src="image/' + this.getImage() + '" height="160px" width="160px">')
    }
}

class Maison extends Batiment{
    constructor(UneAdresse, UnNbPieces)
    {
        super(UneAdresse);
        this.nbPiece = UnNbPieces;
        super.SetImage("maison.jpg");
    }

    SetNbPiece(UnNbPieces){
        this.nbPiece = UnNbPieces;
    }

    GetNbPiece(){
        return this.nbPiece;
    }
}

/* ajouter classe caserne */
class Caserne extends Batiment{
    constructor(UneAdresse, UnNbPieces)
    {
        super(UneAdresse);
        this.nbPiece = UnNbPieces;
        super.SetImage("caserne.jpg");
    }

    SetNbPiece(UnNbPieces){
        this.nbPiece = UnNbPieces;
    }

    GetNbPiece(){
        return this.nbPiece;
    }
}
/* - ajouter classe hopital */

class Hopital extends Batiment{
    constructor(UneAdresse, UnNbPieces)
    {
        super(UneAdresse);
        this.nbPiece = UnNbPieces;
        super.SetImage("hopital.png");
    }

    SetNbPiece(UnNbPieces){
        this.nbPiece = UnNbPieces;
    }

    GetNbPiece(){
        return this.nbPiece;
    }
}

/* - ajouter classe immeuble */
class Immeuble extends Batiment{
    constructor(UneAdresse, UnNbPieces)
    {
        super(UneAdresse);
        this.nbPiece = UnNbPieces;
        super.SetImage("immeuble.png");
    }

    SetNbPiece(UnNbPieces){
        this.nbPiece = UnNbPieces;
    }

    GetNbPiece(){
        return this.nbPiece;
    }
}