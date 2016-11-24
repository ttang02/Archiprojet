//ESP
Meteor.methods({
  'addEspEmpty' : function(){
    console.log("The method 'addEspEmpty' has been called !");

    return Esp.insert({ nomProjet : "",
                        objectifs : [],
                        enjeux : [],
                        contexte : [],
                        planning : [],
                        acteurProjet : [],
                        acteurUsager : []
    });

  },
  /************************** NomProjet  ***************************/
  'addNomProjetToEsp' : function(idEsp, nomProjet){
    console.log("The method 'addNomProjetToEsp' has been called !");
    console.log("ID ESP : "+idEsp);
    console.log("nom Projet : "+nomProjet);
    
    Esp.update({_id : idEsp}, {$set : {nomProjet : nomProjet}});
  },
  
  /********************************Objectif ************************/
  'addObjToEsp' : function(idEsp, idObjectif){
      console.log("The method 'addObjToEsp' has been called !");
      console.log("Id ESP : "+idEsp);
      console.log("Id Objectif : "+idObjectif);

      //Add Obj to Esp if he's not already in it
      var esp = Esp.findOne({ _id : idEsp});
      var espObjectifs = esp.objectifs;
      var i = espObjectifs.indexOf(idObjectif);

      if(i == -1){
        espObjectifs.push(idObjectif);
        Esp.update({ _id : idEsp}, {$set: { objectifs : espObjectifs}});
      }

  },

  'deleteObjToEsp' : function(idEsp, idObjectif){
      console.log("The method 'deleteObjToEsp' has been called !");
      console.log("Id ESP : "+idEsp);
      console.log("Id Objectif : "+idObjectif);

      //Remove the objectif from the esp
      var esp = Esp.findOne({ _id : idEsp});
      var espObjectifs = esp.objectifs;
      var i = espObjectifs.indexOf(idObjectif);

      if(i != -1){
        Meteor.call('deleteObjectifById', idObjectif);
        espObjectifs.splice(i,1);
        Esp.update({ _id : idEsp}, {$set: { objectifs : espObjectifs}});
      }
  },
  /************************************************************************/
  /****************************ENJEUX  ***********************************/
  'addEnjToEsp' : function(idEsp, idEnjeux){
      console.log("The method 'addEnjToEsp' has been called !");
      console.log("Id ESP : "+idEsp);
      console.log("Id Enjeux : "+idEnjeux);

      //Add Enj to Esp if he's not already in it
      var esp = Esp.findOne({ _id : idEsp});
      var espEnjeux = esp.enjeux;

      var i = espEnjeux.indexOf(idEnjeux);

      if(i == -1){

        espEnjeux.push(idEnjeux);
        Esp.update({ _id : idEsp}, {$set: { enjeux : espEnjeux}});
      }
  },

  'deleteEnjToEsp' : function(idEsp, idEnjeux){
      console.log("The method 'deleteEnjToEsp' has been called !");
      console.log("Id ESP : "+idEsp);
      console.log("Id Enjeux : "+idEnjeux);

      //Remove the enjeux from the esp
      var esp = Esp.findOne({ _id : idEsp});
      var espEnjeux = esp.enjeux;
      var i = espEnjeux.indexOf(idEnjeux);

      if(i != -1){
        Meteor.call('deleteEnjeuxById', idEnjeux);
        espEnjeux.splice(i,1);
        Esp.update({ _id : idEsp}, {$set: { enjeux : espEnjeux}});
      }
  },
  /********************************************************************/
  /************************* ACTEUR USAGERS***************************/
   'addAUToEsp' : function(idEsp, idActeurUsager){
      console.log("The method 'addAUToEsp' has been called !");
      console.log("Id ESP : "+idEsp);
      console.log("Id Acteur Usager : "+idActeurUsager);

      //Add Enj to Esp if he's not already in it
      var esp = Esp.findOne({ _id : idEsp});
      var espAU = esp.acteurUsager;

      var i = espAU.indexOf(idActeurUsager);

      if(i == -1){
        espAU.push(idActeurUsager);
        Esp.update({ _id : idEsp}, {$set: { acteurUsager : espAU}});
      }
  },

   'deleteAUToEsp' : function(idEsp, idActeurUsager){
      console.log("The method 'deleteAUToEsp' has been called !");
      console.log("Id ESP : "+idEsp);
      console.log("Id Enjeux : "+idActeurUsager);

      //Remove the enjeux from the esp
      var esp = Esp.findOne({ _id : idEsp});
      var espAU = esp.acteurUsager;
      var i = espAU.indexOf(idActeurUsager);

      if(i != -1){
        Meteor.call('deleteActeurUsagerById', idActeurUsager);
        espAU.splice(i,1);
        Esp.update({ _id : idEsp}, {$set: { acteurUsager : espAU}});
      }
  },
  /*******************************************************************/
  /**************************Acteur Projet****************************/
   'addAPToEsp' : function(idEsp, idActeurProjet){
      console.log("The method 'addAPToEsp' has been called !");
      console.log("Id ESP : "+idEsp);
      console.log("Id Acteur Projet : "+idActeurProjet);

      //Add Enj to Esp if he's not already in it
      var esp = Esp.findOne({ _id : idEsp});
      var espAP = esp.acteurProjet;

      var i = espAP.indexOf(idActeurProjet);

      if(i == -1){
        espAP.push(idActeurProjet);
        Esp.update({ _id : idEsp}, {$set: { acteurProjet : espAP}});
      }
  },

   'deleteAPToEsp' : function(idEsp, idActeurProjet){
      console.log("The method 'deleteAPToEsp' has been called !");
      console.log("Id ESP : "+idEsp);
      console.log("Id Enjeux : "+idActeurProjet);

      //Remove the enjeux from the esp
      var esp = Esp.findOne({ _id : idEsp});
      var espAP = esp.acteurProjet;

      var i = espAP.indexOf(idActeurProjet);

      if(i != -1){
        Meteor.call('deleteActeurProjetById',idActeurProjet);
        espAP.splice(i,1);
        Esp.update({ _id : idEsp}, {$set: { acteurProjet : espAP}});
      }
  },
  /*****************************************************************/
  /********************** CONTEXTE *********************************/
  'addContexteToEsp' : function(idEsp, idContexte){
     console.log("The method 'addContexteToEsp' has been called !");
     console.log("Id ESP : "+idEsp);
     console.log("Id Contexte : "+idContexte);

     //Add contexte to Esp if he's not already in it
     var esp = Esp.findOne({ _id : idEsp});
     var espContexte = esp.contexte;

     var i = espContexte.indexOf(idContexte);

     if(i == -1){
       espContexte.push(idContexte);
       Esp.update({ _id : idEsp}, {$set: { contexte : espContexte}});
     }
 },

  'deleteContexteToEsp' : function(idEsp, idContexte){
    console.log("The method 'addContexteToEsp' has been called !");
    console.log("Id ESP : "+idEsp);
    console.log("Id Contexte : "+idContexte);

    //delete contexte in Esp
    var esp = Esp.findOne({ _id : idEsp});
    var espContexte = esp.contexte;

    var i = espContexte.indexOf(idContexte);

    if(i != -1){
       Meteor.call('deleteContexteById',idContexte);
       espContexte.splice(i,1);
       Esp.update({ _id : idEsp}, {$set: { contexte : espContexte}});
    }
 },
 /******************************************************************/
 /*******************************Planning***************************/
 'addPlanningToEsp' : function(idEsp, idPlanning){
    console.log("The method 'addPlanningToEsp' has been called !");
    console.log("Id ESP : "+idEsp);
    console.log("Id Planning : "+idPlanning);

    //Add Planning to Esp if he's not already in it
    var esp = Esp.findOne({ _id : idEsp});
    var espPlanning = esp.planning;

    var i = espPlanning.indexOf(idPlanning);

    if(i == -1){
      espPlanning.push(idPlanning);
      Esp.update({ _id : idEsp}, {$set: { planning : espPlanning}});
    }
},
 'deletePlanningToEsp' : function(idEsp, idPlanning){
   console.log("The method 'deletePlanningToEsp' has been called !");
   console.log("Id ESP : "+idEsp);
   console.log("Id Planning : "+idPlanning);

   //delete Planning in Esp
   var esp = Esp.findOne({ _id : idEsp});
   var espPlanning = esp.planning;

   var i = espPlanning.indexOf(idPlanning);

   if(i != -1){
     Meteor.call('deletePlanningById',idPlanning);
     espPlanning.splice(i,1);
     Esp.update({ _id : idEsp}, {$set: { planning : espPlanning}});
   }
},
/********************************************************************/
  'deleteEsp' : function(idEsp){
    console.log("The method 'deleteEsp' has been called !");
    console.log("ID ESP : "+idEsp);

    var esp = Esp.findOne({ _id : idEsp});

    //objectifs
    for(var i = 0 ; i < esp.objectifs.length ; i++){
      Meteor.call('deleteObjToEsp', idEsp, esp.objectifs[i]);
    }
    //enjeux
    for(var i = 0 ; i < esp.enjeux.length ; i++){
      Meteor.call('deleteEnjToEsp',idEsp, esp.enjeux[i]);
    }
    //acteur projet
    for(var i = 0 ; i < esp.acteurProjet.length ; i++){
      Meteor.call('deleteAPToEsp', idEsp, esp.acteurProjet[i]);
    }
    //acteur usager
    for(var i = 0 ; i < esp.acteurUsager.length; i++){
      Meteor.call('deleteAUToEsp', idEsp, esp.acteurUsager[i]);
    }
    //contexte
    for(var i = 0 ; i < esp.contexte.length; i++){
      Meteor.call('deleteContexteToEsp', idEsp, esp.contexte[i]);
    }
    //planning
    for(var i = 0 ; i < esp.planning.length; i++){
      Meteor.call('deletePlanningToEsp', idEsp, esp.planning[i]);
    }
    return Esp.remove({_id : idEsp});
  }
});
