Router.route('/ficheprojet',{
    name : 'ficheProjet',
    template : 'ficheProjet',
    title : 'ficheProjet'
});

Router.route('/aide',{
   name: 'aide',
   template : 'aide',
   title : 'aide'
});

Router.route('/detailprojet',{
   name : 'moreprojet',
   template : 'moreprojet',
   title : 'moreprojet',
   onBeforeAction : function(){
       var iddat = Session.get('id_dat');
       if(iddat){
           this.next();
       }
       else{
           Router.go('home');
       }
   }
});