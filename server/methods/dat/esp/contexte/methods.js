//contexte
Meteor.methods({
   'addContexteEmpty' : function(){
       console.log("The method 'addContexteEmpty' has been called!");
       return Contexte.insert({name : "", createAt : new Date()});
   },
   'updateContexte' : function(idContexte, name){
        console.log("The method 'updateContexte' has been called!");
        console.log("Objectif ID : "+idContexte);
        console.log("Champs input :" +name);

        return Contexte.update({_id : idContexte}, {$set: {name : name}});
    },
    'deleteContexte' : function(idContexte){
        console.log("The method 'deleteContexte' has been called!");
        console.log("Objectif ID : "+idContexte);

        Esp.find().forEach(function(esp){
            Meteor.call('deleteContexteToEsp', esp._id, idContexte);
        });
       return Contexte.remove(idContexte);
    },
    'deleteContexteById' : function(idContexte){
        console.log("The method 'deleteContexteById' has been called !");
        console.log("id objectif : "+idContexte);

        return Contexte.remove(idContexte);
    }
});
