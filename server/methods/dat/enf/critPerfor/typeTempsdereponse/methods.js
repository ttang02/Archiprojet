//type temps de réponse
Meteor.methods({
   'addTypeTempsdeReponse' : function(typetdr){
        console.log("The method 'addTypeAppmetier' has been called !");
        console.log("\tType tdr : "+typetdr);
        
        return CritTypeTempsReponse.insert({name : typetdr});
   },
   deleteTypeTempsdeReponse : function(idtypetdr){
       console.log("The method 'deleteTypeTempsdeReponse' has been called !");
       console.log("\tID tdr : "+idtypetdr);
       
       return CritTypeTempsReponse.remove({_id : idtypetdr });
   }
   
});