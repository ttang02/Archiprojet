//Critère de performance 
Meteor.methods({
   'addCritPerf' : function(){
       console.log("The method 'addCritSecuritEmpty' has been called !");
       var typetdr = [];
       CritTypeTempsReponse.find().forEach(function(typetdrc){
           typetdr.push(typetdrc._id);
       });
       
       var perf = [];
       for(var i = 0 ; i < typetdr.length ; i++){
           var tdr = CritPerformance.insert({tdr : typetdr[i], standard : 0, charge : 0, createAt : new Date()});
           perf.push(tdr);
       }
       return perf;
   },
   'updateCritPerformance': function(idcritPerf, standard, charge){
       console.log("The method 'updateCritPerformance' has been called !");
       console.log("\tid critere perf : "+idcritPerf);
       console.log("\tstandard : "+standard);
       console.log("\tcharge : "+charge);
       
       return CritPerformance.update({_id : idcritPerf}, {$set : {standard : standard, charge : charge}});
   },
   'deleteCritPerformance' : function(idcritPerf){
       console.log("The method 'deleteCritPerformance' has been called !");
       console.log("\tid critere perf : "+idcritPerf);
       
       return CritPerformance.remove({_id : idcritPerf});
   }
});