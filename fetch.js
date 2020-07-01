 $.getJSON('http://api.icndb.com/jokes/latest',function(data){            
            var index = Math.floor(Math.random() * 574);
            var get_joke = data.value[index].joke;
            $('#jokes').html("Joke : " + get_joke);

            $( "#button" ).click(function(){
                index = Math.floor(Math.random() * 574);
                get_joke = data.value[index].joke;
                $('#jokes').html("Joke : " + get_joke);
            });

            });

$.getJSON('https://dog.ceo/api/breed/hound/images',function(data){
            var index1 = Math.floor(Math.random() * 1000);
            var index2 = Math.floor(Math.random() * 1000);
            var index3 = Math.floor(Math.random() * 1000); 
            $('.get_img1').attr('src', data.message[index1]);
            $('.get_img2').attr('src', data.message[index2]);
            $('.get_img3').attr('src', data.message[index3]);

            $( "#button" ).click(function() {
                var index1 = Math.floor(Math.random() * 1000);
                var index2 = Math.floor(Math.random() * 1000);
                var index3 = Math.floor(Math.random() * 1000); 
                $('.get_img1').attr('src', data.message[index1]);
                $('.get_img2').attr('src', data.message[index2]);
                $('.get_img3').attr('src', data.message[index3]);
            });
        });

       
