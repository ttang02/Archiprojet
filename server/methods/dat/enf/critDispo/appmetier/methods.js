//APP METIER
Meteor.methods({
    'addcritDispoAppMetier': function(idtypeAppmetier){
       console.log("The method 'addcritDispoPeriode' has been called !");
       console.log("\tID type Appmetier : "+idtypeAppmetier);
       
       return CritDispoAppMetier.insert({ typeappmetier : idtypeAppmetier, 
                                        standard : "",
                                        haute: "",
                                        createAt : new Date()
                                      });
    },
    'updatecritDispoAppMetier' : function(idDispoAppmetier, standard, haute){
        console.log("The method 'updatecritDispoPeriode' has been called !");
        console.log("\tID Dispo Periode : "+idDispoAppmetier);
        console.log("\tstandard : "+standard);
        console.log("\thaute : "+haute);
        
        
        return CritDispoAppMetier.update({_id : idDispoAppmetier}, {$set : {standard : standard, haute : haute}});
    },
    'deletecritDispoAppMetier' : function(idDispoAppmetier){
        console.log("The method 'deletecritDispoPeriode' has been called !");
        console.log("\tID Dispo Periode : "+idDispoAppmetier);
        
        return CritDispoAppMetier.remove({_id : idDispoAppmetier});
    }
});