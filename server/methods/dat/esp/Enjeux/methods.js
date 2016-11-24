//Enjeux
Meteor.methods({
    'addEnjeuxEmpty' : function(){
        console.log("The method 'addEnjeuxEmpty' has been called!");
        return Enjeux.insert({name : "", createAt: new Date()});
    },
    'updateEnjeux' : function(idEnjeux, name){
        console.log("The method 'updateEnjeux' has been called!");
        console.log("Objectif ID : "+idEnjeux);
        console.log("Champs input :"+name);
        
        return Enjeux.update({_id : idEnjeux}, {$set: {name : name}});
    },
    'deleteEnjeux' : function(idEnjeux){
        console.log("The method 'deleteObjectif' has been called!");
        console.log("Objectif ID : "+idEnjeux);
        Esp.find().forEach(function(esp){
            Meteor.call('deleteEnjToEsp', esp._id, idEnjeux); 
        });
       return Enjeux.remove(idEnjeux);
    },
     'deleteEnjeuxById' : function(idEnjeux){
        console.log("The method 'deleteObjectif' has been called!");
        console.log("Objectif ID : "+idEnjeux);
       
       return Enjeux.remove(idEnjeux);
    }
});