Template.ficheProjet.events({
    'change select' : function(){
        var value = $('.row > .input-field > [name="selectProjet"]').val();
        Session.set('id_projet',value);
    }
});