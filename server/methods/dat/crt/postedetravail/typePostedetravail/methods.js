//type de poste
Meteor.methods({
  'addTypePdT' : function(typePdT){
    console.log("The method 'addTypePdT' has been called !");
    console.log("Type Poste de travail : "+typePdT);

    return TypePostdTravail.insert({name : typePdT});
  },
  'deleteTypePdT' : function(idTypePdT){
    console.log("The method 'deleteTypePdT' has been called !");
    console.log("Id Type Poste de travail : "+idTypePdT);

    return TypePostdTravail.remove({ _id :idTypePdT});
  }
});
