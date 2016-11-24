//Fonctionnalités metier

Meteor.methods({
    'addFoncMetierEmpty' : function(){
        console.log("The method 'addFoncMetierEmpty' has been called !");

        return FoncMetier.insert({ name : "", min : false, rie : false, ext : false, pub : false, createAt: new Date()});
    },
   'updateFM' : function(idFoncMetier, name, min, rie, ext, pub){
        console.log("The method 'updateFM' has been called !");
        console.log("\tid Fonctionnalités metier :" +idFoncMetier);
        console.log("\tName : "+name);
        console.log("\tMin :" +min);
        console.log("\tRIE :"+rie);
        console.log("\tEXT :"+ext);
        console.log("\tPUB :"+pub);

        return FoncMetier.update({_id: idFoncMetier }, {$set : {name : name, min : min, rie : rie, ext : ext, pub : pub}});

    },
    'deleteFM' : function(idFoncMetier){
       console.log("The method 'deleteFM' has been called !");
       console.log("id Fonctionnalité Metier : "+idFoncMetier);
       Fsd.find().forEach(function(fsd){
           Meteor.call('deleteFMToFsd', fsd._id, idFoncMetier);
       });
       return FoncMetier.remove({_id: idFoncMetier});
    },
     'deleteFMById' : function(idFoncMetier){
       console.log("The method 'deleteFMById' has been called !");
       console.log("id Fonctionnalité Metier : "+idFoncMetier);

       return FoncMetier.remove({_id: idFoncMetier});
    }
});
