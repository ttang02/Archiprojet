//Securite
Meteor.methods({
    'addSecuriteEmpty' : function(){
        console.log("The method 'addSecuriteEmpty' has been called!");
        return Securite.insert({name : "", createAt: new Date()});
    },
    'updateSecurite' : function(idSecurite, name){
        console.log("The method 'updateSecurite' has been called!");
        console.log("Objectif ID : "+idSecurite);
        console.log("Champs input :" +name);
        
        return Securite.update({_id : idSecurite}, {$set: {name : name}});
    },
    'deleteSecurite' : function(idSecurite){
        console.log("The method 'deleteReglementaire' has been called!");
        console.log("Objectif ID : "+idSecurite);
        
        Crt.find().forEach(function(cont){
            Meteor.call('deleteSecuriteToCrt', cont._id, idSecurite); 
        });
       return Securite.remove(idSecurite);
    },
      'deleteSecuriteById' : function(idSecurite){
        console.log("The method 'deleteSecuriteById' has been called!");
        console.log("Objectif ID : "+idSecurite);
       
        return Securite.remove(idSecurite);
    }
});