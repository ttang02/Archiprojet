//Volumétrie fichier
Meteor.methods({
    'addVolFichierEmpty' : function(){
        console.log("The method 'addVolFichierEmpty' has been called !");
        return VolFichier.insert({ f1 : 0, f2 : 0, f3 : 0, total : 0});
    },
    'updateVolFichier' : function(idVolDonnee, f1, f2, f3, d1, d2){
        console.log("The method 'updateVolFichierEmpty' has been called!");
        console.log("\tVolumetrie fichier ID : "+idVolDonnee);
        console.log("\tF1 : "+f1);
        console.log("\tF2 : "+f2);
        console.log("\tF3 : "+f3);
        var total = ((d1 * f1 * f3) + (d2 * f1 * f2 * f3)) / 1000;
        return VolFichier.update({_id : idVolDonnee}, {$set : {f1 : f1, f2 : f2, f3 : f3, total : total}});
    },
    'deleteVolFichier': function(idVolDonnee){
        console.log("The method 'deleteVolFichier' has been called!");
        console.log("\tID Volumetrie fichier : "+idVolDonnee);
        return VolFichier.remove(idVolDonnee);
    }
});

