//Hebergement
Meteor.methods({
    'addHebergementEmpty' : function(){
        console.log("The method 'addHebergementEmpty' has been called!");
        return Hebergement.insert({name : "", createAt: new Date()});
    },
    'updateHebergement' : function(idHebergement, name){
        console.log("The method 'updateHebergement' has been called!");
        console.log("Objectif ID : "+idHebergement);
        console.log("Champs input :" +name);
        
        return Hebergement.update({_id : idHebergement}, {$set: {name : name}});
    },
    'deleteHebergement' : function(idHebergement){
        console.log("The method 'deleteHebergement' has been called!");
        console.log("Objectif ID : "+idHebergement);
      
        Crt.find().forEach(function(cont){
            Meteor.call('deleteHebergementToCrt', cont._id, idHebergement); 
        });
       return Hebergement.remove(idHebergement);
    },
     'deleteHebergementById' : function(idHebergement){
        console.log("The method 'deleteHebergementById' has been called!");
        console.log("Objectif ID : "+idHebergement);
        
        return Hebergement.remove(idHebergement);
    }
});