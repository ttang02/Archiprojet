//Exigence non fonctionnelle

Meteor.methods({
    'addEnfEmpty' : function(){
        console.log("The method 'addEnfEmpty' has been called !");
        
        var critSecurite = Meteor.call('addCritSecuritEmpty');
        var critDispo = Meteor.call('addcritDispoEmpty');
        var critPerformance = Meteor.call('addCritPerf');
        var critExploi = Meteor.call('addCritExploiEmpty');
        
        return Enf.insert({ critSecurite : critSecurite,
                            critDispo : critDispo,
                            critPerformance : critPerformance,
                            critExploi : critExploi
        });
    },
    'deleteEnf' : function(idEnf){
        console.log("The method 'deleteEnf' has been called !");
        console.log("ID ENF : "+idEnf);
        var enf = Enf.findOne({ _id : idEnf});
        
        Meteor.call('deleteCritSecurit', enf.critSecurite);
        Meteor.call('deleteSecuritDispo',enf.critDispo);
        
        for(var i = 0; i< enf.critPerformance.length ; i++){
            console.log(enf.critPerformance[i]);
        }

        return Enf.remove({_id : idEnf});
    }

});

