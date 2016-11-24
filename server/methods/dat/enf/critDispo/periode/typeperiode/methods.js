//type periode
Meteor.methods({
  'addTypePeriode' : function(typecE){
    console.log("The method 'addTypePeriode' has been called !");
    console.log("Type acteur : "+typecE);

    return CritTypePerfPeriode.insert({name : typecE});
  },
  'deleteTypePeriode' : function(typeCEId){
    console.log("The method 'deleteTypeA' has been called !");
    console.log("Id Type Acteur : "+typeCEId);

    return CritTypePerfPeriode.remove({ _id :typeCEId});
  }
});
