//PERIODE
Meteor.methods({
    'addcritDispoPeriode': function(idtypePeriode){
       console.log("The method 'addcritDispoPeriode' has been called !");
       console.log("\tID type Exigence : "+idtypePeriode);
       
       return CritDispoPeriode.insert({ typePeriode : idtypePeriode, 
                                        debut : "",
                                        fin: "",
                                        nbu : "",
                                        cht : "",
                                        createAt : new Date()
                                      });
    },
    'updatecritDispoPeriode' : function(idDispoPeriode, debut, fin, nbu, cht){
        console.log("The method 'updatecritDispoPeriode' has been called !");
        console.log("\tID Dispo Periode : "+idDispoPeriode);
        console.log("\tdebut : "+debut);
        console.log("\tfin : "+fin);
        console.log("\tnbu : "+nbu);
        console.log("\t cht : "+cht);
        
        
        return CritDispoPeriode.update({_id : idDispoPeriode}, {$set : {debut : debut, fin : fin, nbu : nbu, cht : cht}});
    },
    'deletecritDispoPeriode' : function(idDispoPeriode){
        console.log("The method 'deletecritDispoPeriode' has been called !");
        console.log("\tID Dispo Periode : "+idDispoPeriode);
        
        return CritDispoPeriode.remove({_id : idDispoPeriode});
    }
    
});