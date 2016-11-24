//Volumétrie données
Meteor.methods({
    'addVolDonneeEmpty' : function(){
        console.log("The method 'addVolDonneesEmpty' has been called !");
        return VolDonnee.insert({ d1 : 0, d2 : 0, d3 : 0, d4 : 0, total : 0});
    },
    'updateVolDonneEmpty' : function(idVolDonnee, d1, d2, d3, d4){
        console.log("The method 'updateVolDonneEmpty' has been called!");
        console.log("\tVolumetrie donnee ID : "+idVolDonnee);
        console.log("\tD1 : "+d1);
        console.log("\tD2 : "+d2);
        console.log("\tD3 : "+d3);
        console.log("\tD4 : "+d4);
        var total = ((d1 * d4) + (d2 * d3 * d4)) / 1000;
        return VolDonnee.update({_id : idVolDonnee}, {$set : {d1 : d1, d2 : d2, d3 : d3, d4 : d4, total : total}});
    },
    'deleteVolDonnee': function(idVolDonnee){
        console.log("The method 'deleteVolDonnee' has been called!");
        console.log("\tID Volumetrie Donnee : "+idVolDonnee);
        
        return VolDonnee.remove(idVolDonnee);
    }
});

