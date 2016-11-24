//Type Acteur
Meteor.methods({
  'addTypeA' : function(typeA){
    console.log("The method 'addTypeA' has been called !");
    console.log("Type acteur : "+typeA);

    return TypeActeur.insert({name : typeA});
  },
  'deleteTypeA' : function(typeAId){
    console.log("The method 'deleteTypeA' has been called !");
    console.log("Id Type Acteur : "+typeAId);

    return TypeActeur.remove({ _id :typeAId});
  }
});
