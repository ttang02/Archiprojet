Router.route('/dat/esp',{
    name : 'esp',
    template : 'addESP',
    title : 'ajout esp',
    onBeforeAction: function() {
        var currentUserId = Meteor.userId();
        var currentUser = Meteor.users.findOne({
            _id: currentUserId
        });
        var idDat = Session.get('id_dat');

        if (currentUser) {
            var currentUserRole = currentUser.profile.role;
            var idUser = Dat.findOne({
                _id: idDat
            });

            if (idDat) {
                if (currentUserRole === 'admin') {
                    this.next();
                }
                else if (currentUserRole === "contributeur") {
                    if (currentUser.dats.contructor === Array) {
                        var i = dats.indexOf(idDat);
                        if (i != -1) {
                            this.next();
                        }
                        else {
                            Router.go('home');
                        }
                    }
                }
            }
        }
        else{
            Router.go('login');
        }
    }
});