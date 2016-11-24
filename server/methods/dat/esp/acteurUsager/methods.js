//Acteur usagers
Meteor.methods({
     'addActeurUsagerEmpty' : function(){
       console.log("The method 'addActeurUsagerEmpty' has been called !");

       return ActeurUsager.insert({name : "", min: 0, rie : 0, ext : 0, pub : 0, createAt: new Date()});
     },
     'updateActeurUsager' : function(idActeurUsager, name, min, rie, ext, pub){
        console.log("The method 'updateActeurUsager' has been called !");
        console.log("idActeurUsager : "+idActeurUsager);
        console.log("name : "+name);
        console.log("min : "+min);
        console.log("rie : "+rie);
        console.log("ext : "+ext);
        console.log("pub : "+pub);
        
        return ActeurUsager.update({ _id : idActeurUsager}, {$set : {name : name, min : min, rie : rie, ext : ext, pub : pub}});
     },
     'deleteActeurUsager' : function(idActeurUsager){
       console.log("The method 'deleteActeurUsager' has been called !");
       console.log("id Acteur Usager : "+idActeurUsager);

       Esp.find().forEach(function(esp){
           Meteor.call('deleteAUToEsp', esp._id, idActeurUsager);
       });
       return ActeurUsager.remove({ _id : idActeurUsager});
     },
      'deleteActeurUsagerById' : function(idActeurUsager){
       console.log("The method 'deleteActeurUsagerById' has been called !");
       console.log("id Acteur Usager : "+idActeurUsager);

       return ActeurUsager.remove({ _id : idActeurUsager});
     }
});
