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
    constructor(UneAdresse, UnNbCamions, UnNbFirefighters)
    {
        super(UneAdresse);
        this.Firefighter =  UnNbFirefighters;
        this.nbCamion = UnNbCamions;
        super.SetImage("caserne.jpg");
    }

    SetNbFirefighter(UnNbFirefighters){
        this.nbFirefighter= UnNbFirefighters;
    }
    GetNbFirefighter(){
        return this.nbFirefighter;
    }

    SetNbCamion(UnNbCamions){
        this.nbCamion= UnNbCamions;
    }

    GetNbCamion(){
        return this.nbCamion;
    }
}
/* - ajouter classe hopital */

class Hopital extends Batiment{
    constructor(UneAdresse, UnNbServices)
    {
        super(UneAdresse);
        this.nbService = UnNbServices;
        super.SetImage("hopital.png");
    }

    SetNbService(UnNbServices){
        this.nbService = UnNbServices;
    }

    GetNbService(){
        return this.nbService;
    }
}

/* - ajouter classe immeuble */
class Immeuble extends Batiment{
    constructor(UneAdresse, UnNbEtages)
    {
        super(UneAdresse);
        this.nbEtage = UnNbEtages;
        super.SetImage("immeuble.png");
    }

    SetnbEtage(UnNbEtages){
        this.nbPiece = UnNbEtages;
    }

    GetNbEtage(){
        return this.nbEtage;
    }
}