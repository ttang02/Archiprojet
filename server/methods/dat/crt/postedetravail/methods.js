//Poste de travail
Meteor.methods({
    'addPdTEmpty' : function(){
        console.log("The method 'addPdTEmpty' has been called!");
        return PostTravail.insert({typePdT : "",name : "", createAt: new Date()});
    },
    'updatePdT' : function(idPdT, typePdT, name){
        console.log("The method 'updatePdT' has been called!");
        console.log("ID Poste de Travail :"+idPdT);
        console.log("ID TYPE PDT :"+typePdT);
        return PostTravail.update({_id : idPdT}, {$set: {typePdT : typePdT, name : name}});
    },
    'deletePdT' : function(idPdT){
        console.log("The method 'deletePdT' has been called!");
        console.log("Objectif ID : "+idPdT);
        
        Crt.find().forEach(function(cont){
            Meteor.call('deletePdTToCrt', cont._id, idPdT); 
        });
       return PostTravail.remove(idPdT);
    },
    'deletePdTById' : function(idPdT){
        console.log("The method 'deletePdTById' has been called!");
        console.log("Objectif ID : "+idPdT);
        
       return PostTravail.remove(idPdT);
    }
});