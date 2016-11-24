//service Connexes
Meteor.methods({
    'addServiceConnexeEmpty' : function(){
        console.log("The method 'addServiceConnexeEmpty' has been called !");
        return ServiceConnexe.insert({name: "", mode:"", min : false, rie : false, ext : false, pub : false, createAt: new Date()});
    },
    'updateServiceConnexe' : function(idServiceConnexe, name, mode, min, rie, ext, pub){
        console.log("The method 'updateServiceConnexe' has been called !");
        console.log("\tid Service Connexe :" +idServiceConnexe);
        console.log("\tName : "+name);
        console.log("\tMode : "+mode);
        console.log("\tMin :" +min);
        console.log("\tRIE :"+rie);
        console.log("\tEXT :"+ext);
        console.log("\tPUB :"+pub);

        return ServiceConnexe.update({_id: idServiceConnexe }, {$set : {name : name, mode : mode , min : min, rie : rie, ext : ext, pub : pub}});
    },
    'deleteServiceConnexe' : function(idServiceConnexe){
       console.log("The method 'deleteServiceConnexe' has been called !");
       console.log("\tid Service Connexe : "+idServiceConnexe);
       Fsd.find().forEach(function(fsd){
           Meteor.call('deleteServiceConnexeToFsd', fsd._id, idServiceConnexe);
       });
       return ServiceConnexe.remove({_id: idServiceConnexe});
    },
     'deleteServiceConnexeById' : function(idServiceConnexe){
       console.log("The method 'deleteServiceConnexeById' has been called !");
       console.log("\tid Service Connexe : "+idServiceConnexe);
       return ServiceConnexe.remove({_id: idServiceConnexe});
    }
})
