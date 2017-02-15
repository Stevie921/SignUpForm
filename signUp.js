$(document).ready(function(){
  $('#myform').validate({ // initialize the plugin
        rules: {
            field1: {
                required: true,
                minlength: 5
            },
            field2: {
                required: true,
                email: true
            },
            field3: {
               required: true,
               minlength: 5
            },
              field4: {
               required: true,
               minlength: 5
            }
        },
        submitHandler: function (form){
         alert('valid form submitted');
         return false;
        }
     });
 
});


console.log("file loaded");