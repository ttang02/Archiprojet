//critere de dispo
Meteor.methods({
    'addcritDispoEmpty' : function(){
        console.log("The method 'addcritPerfPeriodeEmpty' has been called !");
        //TABLEAU PERIODE
        var tperiode = [];
        CritTypePerfPeriode.find().forEach(function(typep){
            tperiode.push(typep._id);
        });
        var periode = [];
        for (var i = 0; i < tperiode.length ; i++ ) {
            var p = Meteor.call('addcritDispoPeriode', tperiode[i]);
            periode.push(p);
        }
        //TABLEAU APP METIER
        var tappmetier = [];
        CritTypeAppMetier.find().forEach(function(typeapp){
            tappmetier.push(typeapp._id);
        });
        var appmetier = [];
        for (var i = 0; i < tappmetier.length ; i++ ) {
            var ap = Meteor.call('addcritDispoAppMetier', tappmetier[i]);
            appmetier.push(ap);
        }
        return CritDispo.insert({periode : periode, description : "", appmetier : appmetier});
    },
    'updatecritDispo' : function(idcritDispo, description){
        console.log("The method 'updatecritDispo' has been called !");
        console.log("\tid critere dispo : "+idcritDispo);
        console.log("\tdescription : "+description);

        return CritDispo.update({_id : idcritDispo}, {$set : {description : description}});
    },
    'deleteSecuritDispo' : function(idcritDispo){
       console.log("The method 'deleteSecuritDispo' has been called !");
       console.log("\tid critere securite : "+idcritDispo);

       var critdispo = CritDispo.findOne({ _id :idcritDispo});
       //PERIODES
       var periodes = critdispo.periode;
       var appmetier = critdispo.appmetier;
       for(var i = 0 ; i < periodes.length ; i++){
           Meteor.call('deletecritDispoPeriode', periodes[i]);
       }
       //APPMETIER
       for(i = 0 ; i < appmetier.length ; i++){
           Meteor.call('deletecritDispoAppMetier', appmetier[i]);
       }
       return CritDispo.remove({_id : idcritDispo});
   }

});
