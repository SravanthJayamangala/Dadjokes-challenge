const temp = document.getElementById("limit");

$( document ).ready(function() {
  var userinput=0;
  var count=0;
  var total =0;
  var i=1;
  document.querySelector('#btn').style.display = 'none'; 
  document.querySelector('#clr').style.display = 'none'; 
  document.querySelector('#btncount').addEventListener('click',showBtn);
 
  function showBtn(e) { 
  document.querySelector('#btn').style.display = 'block'; 
  document.querySelector('#clr').style.display = 'block'; 
  e.preventDefault(); 
  } 

  $('#btncount').click(function (){
    debugger;
   userinput= $('#txtcount').val();
   total=userinput;
   temp.innerHTML = "<h4 style='dispaly:flex;margin-right: 30px;'>"+'Your Joke Count : '+total+"</h4>"
   if(userinput>0)
   {
   document.getElementById('btncount').style.visibility= 'hidden';
   //console.count(userinput);
   document.getElementById('txtcount').style.visibility= 'hidden';
   $('#btncount').prop('disabled', true);
   //console.count(userinput);
   alert("Count Submitted Successfully...Press 👉Joke")
   }
   else
   {
    alert("Please enter the value");
   }
   count=0;
   console.log(count);
 });

  $('#btn').click(function(){
    debugger;
    count=count+1;

     if(count>=userinput){

      $('#btn').prop('disabled', true);

      document.getElementById('btn').style.visibility= 'hidden';
    }
      
   console.log(count);
   
    $.ajax({

    type: 'GET',

    url: 'https://dad-jokes.p.rapidapi.com/random/joke',

    dataType: 'json',

    headers: {

                       'content-type': "application/json",

                       'X-RapidAPI-Key': '69f5629098msh2937e5cf4b4a80ep1f6681jsn8d964b518220',

                       'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'

                    },

    success: function (data)

    {
      $('#joke1').html(i+". "+data.body[0].setup);

      console.log(data.body[0].setup);

      $('#joke2').html(data.body[0].punchline);

      console.log(data.body[0].punchline);
    i++;
    }

  });

});

});

