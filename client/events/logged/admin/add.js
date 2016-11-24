Template.adminAddTypeAU.events({
    'click #addAU' : function(event){
        // Removing default effects
        event.preventDefault();
        
        //Fetching the form's data
        var typeAUName = $('[name=typeAu]').val();
        
        //Checking if var exist
        var typeAU = TypeActeur.findOne({ name : typeAUName});
        if(typeAU){
            //exist so display a flash message
            Materialize.toast("Ce type d'acteur existe déjà ! ", 4000);
        }
        else{
            Meteor.call('addTypeA',typeAUName);
            Materialize.toast("Le type d'acteur usager a bien été ajouté !", 4000);
            $('[name=typeAu]').val();
        }
    }
});
