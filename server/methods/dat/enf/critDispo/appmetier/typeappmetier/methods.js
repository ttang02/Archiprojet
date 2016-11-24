//type app metier
Meteor.methods({
  'addTypeAppmetier' : function(typecE){
    console.log("The method 'addTypeAppmetier' has been called !");
    console.log("Type acteur : "+typecE);

    return CritTypeAppMetier.insert({name : typecE});
  },
  'deleteTypeAppmetier' : function(typeCEId){
    console.log("The method 'deleteTypeAppmetier' has been called !");
    console.log("Id Type Acteur : "+typeCEId);

    return CritTypeAppMetier.remove({ _id :typeCEId});
  }
});
