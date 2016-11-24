//contexte
Meteor.methods({
   'addPlanningEmpty' : function(){
       console.log("The method 'addPlanningEmpty' has been called!");
       return Planning.insert({version : "", date: "", commentaire :"",createAt : new Date()});
   },
   'updatePlanning' : function(idPlanning, version,  date, commentaire){
        console.log("The method 'updatePlanning' has been called!");
        console.log("Objectif ID : "+idPlanning);
        console.log("\tVersion :" +version);
        console.log("\tdate :" +date);
        console.log("\tCommentaire :" +commentaire);

        return Planning.update({_id : idPlanning}, {$set: {version : version, date : date, commentaire : commentaire}});
    },
    'deletePlanning' : function(idPlanning){
        console.log("The method 'deletePlanning' has been called!");
        console.log("Objectif ID : "+idPlanning);

        Esp.find().forEach(function(esp){
            Meteor.call('deletePlanningToEsp', esp._id, idPlanning);
        });
       return Planning.remove(idPlanning);
    },
    'deletePlanningById' : function(idPlanning){
        console.log("The method 'deletePlanningById' has been called !");
        console.log("id objectif : "+idPlanning);

        return Planning.remove(idPlanning);
    }
});
