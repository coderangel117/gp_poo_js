window.onload = function () {
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
        new Maison('5 avenue Marechal', 3),
        new Caserne('5 avenue Marechal', 3),
        new Immeuble('1 rue du coin', 3),
        new Maison('5 avenue Marechal', 3),
        new Immeuble('5 avenue Marechal', 3),
        new Maison('1 rue du coin', 3),
        new Immeuble('5 avenue Marechal', 3),
        new Maison('5 avenue Marechal', 3),
        new Immeuble('1 rue du coin', 3),
        new Maison('5 avenue Marechal', 3),
        new Maison('5 avenue Marechal', 3)
        
        /* mettre 20 batiments */
    ]

    residence.forEach(
        (Batiment) => {
            Batiment.afficher()
        }
    )
}