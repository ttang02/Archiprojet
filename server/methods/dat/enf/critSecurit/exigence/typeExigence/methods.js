//type critere Exigence
Meteor.methods({
  'addTypecritExigence' : function(typecE){
    console.log("The method 'addTypecritExigence' has been called !");
    console.log("Type acteur : "+typecE);

    return TypecritExigence.insert({name : typecE});
  },
  'deleteTypecritExigence' : function(typeCEId){
    console.log("The method 'deleteTypecritExigence' has been called !");
    console.log("Id Type Acteur : "+typeCEId);

    return TypecritExigence.remove({ _id :typeCEId});
  }
});
