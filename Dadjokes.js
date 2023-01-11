
$( document ).ready(function() {
  $('#btn').click(function(){
    
    $.ajax({
    type: 'GET',
    url: 'https://dad-jokes.p.rapidapi.com/random/joke',
    dataType: 'json',
    headers: {
                       'content-type': "application/json",
                       'X-RapidAPI-Key': '93141554f5msh52e06b031d76121p1b5d8bjsn1f5f7e899344',
        		           'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
                    },
    success: function (data) 
    {
       debugger;
       $('#joke1').html(data.body[0].setup + data.body[0].punchline);
       console.log(data.body[0].setup + data.body[0].punchline);
    },
    error:function(e){
      alert('error')
    }
  });
  })
});