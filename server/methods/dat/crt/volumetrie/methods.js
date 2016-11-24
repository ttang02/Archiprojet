//Volumetrie
Meteor.methods({
    'addVolumetrieEmpty' : function(){
        console.log("The method 'addVolumetrieEmpty' has been called!");
        var volDonnee = Meteor.call('addVolDonneeEmpty');
        var volFichier = Meteor.call('addVolFichierEmpty');
        var redVol = Meteor.call('addRedVolumEmpty');
        
        return Volumetrie.insert({volDonnee : volDonnee, volFichier : volFichier,  redVol : redVol, createAt: new Date()});
    },
    'deleteVolumetrie' : function(idVolumetrie){
        console.log("The method 'deleteVolumetrie' has been called!");
        console.log("\tVolumetrie ID : "+idVolumetrie);
        
        var vol = Volumetrie.findOne({_id : idVolumetrie});
        Meteor.call('deleteVolDonnee', vol.volDonnee);
        Meteor.call('deleteVolFichier', vol.volFichier);
        Meteor.call('deleteRedVol', vol.redVol);
        
        return Volumetrie.remove({_id : idVolumetrie});
    },
});
