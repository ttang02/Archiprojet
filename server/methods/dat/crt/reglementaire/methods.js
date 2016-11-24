//Reglementaire
Meteor.methods({
    'addReglementaireEmpty' : function(){
        console.log("The method 'addReglementaireEmpty' has been called!");
        return Reglementaire.insert({name : "", createAt: new Date()});
    },
    'updateReglementaire' : function(idReglementaire, name){
        console.log("The method 'updateReglementaire' has been called!");
        console.log("Objectif ID : "+idReglementaire);
        console.log("Champs input :" +name);
        
        return Reglementaire.update({_id : idReglementaire}, {$set: {name : name}});
    },
    'deleteReglementaire' : function(idReglementaire){
        console.log("The method 'deleteReglementaire' has been called!");
        console.log("Objectif ID : "+idReglementaire);
        
        Crt.find().forEach(function(cont){
            Meteor.call('deleteReglementaireToCrt', cont._id, idReglementaire); 
        });
       return Reglementaire.remove(idReglementaire);
    },
    'deleteReglementaireById' : function(idReglementaire){
        console.log("The method 'deleteReglementaireById' has been called!");
        console.log("Objectif ID : "+idReglementaire);
        
        return Reglementaire.remove(idReglementaire);
    }
});