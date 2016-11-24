//Critere Securite

Meteor.methods({
   'addCritSecuritEmpty': function(){
        console.log("The method 'addCritSecuritEmpty' has been called !");
        var typeexigence = [];
        TypecritExigence.find().forEach(function(typeCS){
            typeexigence.push(typeCS._id);
        });
        var exigence = [];
        for(var i = 0 ; i < typeexigence.length; i++){
            var cs = Meteor.call('addcritSecuExigence', typeexigence[i]);
            console.log(cs);
            exigence.push(cs);
        }
        return CritSecurite.insert({exigence : exigence, etude : "", createAt: new Date()});
   },
   'updateCritSecurit' : function(idCSecurite, etude){
       console.log("The method 'updateCritSecurit' has been called !");
       console.log("\tid critere securite : "+idCSecurite);
       console.log("\tEtude : "+etude);

       return CritSecurite.update({_id : idCSecurite}, {$set : {etude : etude}});
    },

   'deleteCritSecurit' : function(idCSecurite){
       console.log("The method 'deleteCritSecurit' has been called !");
       console.log("\tid critere securite : "+idCSecurite);
       var critSecuExigence = CritSecurite.findOne({ _id :idCSecurite});
       var exigences = critSecuExigence.exigence;
       for(var i = 0 ; i < exigences.length ; i++){
           Meteor.call('deletecritSecuExigence', exigences[i]);
       }
       return CritSecurite.remove({_id : idCSecurite});
   }
});
