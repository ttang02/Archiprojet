Template.datAdd.events({
    'click #addDat' : function(event){
        event.preventDefault();

        //Fetching the form's data
        var nameDat = $('[name=datName]').val();

        var dat = Dat.findOne({name : nameDat});
        if(dat || nameDat == ""){
            Materialize.toast("Un autre projet a le même nom ou le champ est vide!", 4000);

        }
        else{
            Meteor.call('addDat', nameDat, Meteor.userId(), function(wawa,error){
                console.log(wawa);
            });
            Materialize.toast("Le projet "+nameDat+" a été ajouté !", 4000);
            $('[name=datName]').val("");
        }
    }
});
