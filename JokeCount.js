$( document ).ready(function() {

    var userinput=0;

    var count=1;

   $('#btncount').click(function(){

    userinput= $('#txtcount').val();

    count=0;
    console.log(userinput);

   })

    $('#btn').click(function(){

      count=count+1;

      if(count>=userinput){

        $('#btn').prop('disabled', true);

      }

      console.log(count);

      $.ajax({

      type: 'GET',

      url: 'https://dad-jokes.p.rapidapi.com/random/joke',

      dataType: 'json',

              headers: {

                         'content-type': "application/json",

                        'X-RapidAPI-Key': '9bb608e8a4mshd8a19dfff003accp1a9b22jsna8ff0ad0958c',
                        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
                      },

      success: function (data)

      {

       $('#joke1').html(data.body[0].setup);

        console.log(data.body[0].setup);

         $('#joke2').html(data.body[0].punchline);

        console.log(data.body[0].punchline);

      }

    });

    })

  });