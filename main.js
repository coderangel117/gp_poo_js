window.onload = function () {

    document.write("<p>'Residence Charles DE GAULLE'</p>")

    let residence = [
        new Maison('1 rue du coin', 3),
        new Immeuble('5 avenue Marechal', 3),
        new Maison('5 avenue Marechal', 3),
        new Immeuble('1 rue du coin', 3),
        new Maison('5 avenue Marechal', 3),
        new Immeuble('5 avenue Marechal', 3),
        new Maison('1 rue du coin', 3),
        new Hopital('5 avenue Marechal', 3),
        new Immeuble('5 avenue Marechal', 3),
        new Maison('1 rue du coin', 3),
        new Maison('5 avenue Marechal', 5),
        new Caserne('5 avenue Marechal', 10, 50),
        new Immeuble('1 rue du coin', 3),
        new Maison('5 avenue Marechal', 3),
        new Immeuble('5 avenue Marechal', 3),
        new Maison('1 rue du coin', 3),
        new Immeuble('5 avenue Marechal', 3),
        new Maison('5 avenue Marechal', 3),
        new Immeuble('1 rue du coin', 3),
        new Maison('5 avenue Marechal', 3),
        new Maison('5 avenue Marechal', 3)   ]

    residence.forEach(
        (Batiment) => {
            Batiment.afficher()
        }
    )

    document.write("<p>'Residence Andre MALRAUX'</p>")
    let residence2= [
    new Caserne('5 avenue Marechal', 3, 25),
    new Maison('1 rue du coin', 3),
    new Maison('5 avenue Marechal', 3),
    new Immeuble('5 avenue Marechal', 3),
    new Maison('1 rue du coin', 3),
    new Caserne('5 avenue Marechal', 3, 15),
    new Hopital('5 avenue Marechal', 3),
    new Immeuble('1 rue du coin', 3),
    new Maison('5 avenue Marechal', 3),
    new Caserne('5 avenue Marechal', 6, 35)   ]

    residence2.forEach(
        (Batiment) => {
            Batiment.afficher()
        }
    )
}