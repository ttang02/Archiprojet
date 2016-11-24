//Objectifs
Meteor.methods({
    'addObjectifEmpty' : function(){
        console.log("The method 'addObjectifEmpty' has been called!");
        return Objectifs.insert({name : "", createAt: new Date()});
    },
    'updateObjectif' : function(idObjectif, name){
        console.log("The method 'updateObjectif' has been called!");
        console.log("Objectif ID : "+idObjectif);
        console.log("Champs input :" +name);
        
        return Objectifs.update({_id : idObjectif}, {$set: {name : name}});
    },
    'deleteObjectif' : function(idObjectif){
        console.log("The method 'deleteObjectif' has been called!");
        console.log("Objectif ID : "+idObjectif);

        Esp.find().forEach(function(esp){
            Meteor.call('deleteObjToEsp', esp._id, idObjectif); 
        });
       return Objectifs.remove(idObjectif);
    },
    'deleteObjectifById' : function(idObjectif){
        console.log("The method 'deleteObjectifById' has been called !");
        console.log("id objectif : "+idObjectif);
        
        return Objectifs.remove(idObjectif);
    }
});