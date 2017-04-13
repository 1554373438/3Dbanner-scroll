$(function() {

  var vm = new Vue({
    el: 'body',
    data: {
     p: ['1','2','3','4'],
    txt1:true,
    txt2:false,
    txt3:false,
    txt4:false
    },
    methods: {
      init: function() {
        var self = this;
        var num = 0 ;
        timedCount();
        function timedCount (){
           num = num + 1 ;
          setTimeout(timedCount,4000)
          console.log(num);  //1,2,3,4
          if ( (num%4) == 1) {
              self.txt1 = true;
              self.txt2 = false;
              self.txt3 = false;
              self.txt4 = false;
          }else if((num%4) == 2){
              self.txt1 = false;
              self.txt2 = true;
              self.txt3 = false;
              self.txt4 = false;
          }
          else if((num%4) == 3){
              self.txt1 = false;
              self.txt2 = false;
              self.txt3 = true;
              self.txt4 = false;
          }else if((num%4) == 0){
              self.txt1 = false;
              self.txt2 = false;
              self.txt3 = false;
              self.txt4 = true;
          }

        }

      },
      

      



    }
  });

  vm.init();

})
