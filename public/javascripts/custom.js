$(document).ready(function(){

    $('.test-add-link').click(function (event) {
				event.preventDefault();
				//var url = window.location.hostname;
				//var http = location.protocol;
				var url =window.location.origin;
        var element = $(this);
        var Id = element.attr("id");
        var link = $("#link_"+Id).val();
        var title = $("#title_"+Id).val();
				var data = {};
				data.title = title;
				data.link = link;
        $.ajax({
            url: url + '/add_job_data',
            method: 'post',
						//contentType: 'application/json',
						//data: {'title' : title},
						//data: JSON.stringify({ data}),
						data: data,
            dataType: 'json',
            success: function(data){
                if(data.result)
									alert('Successfully added');
								else
									alert('Already added');
            }
        });
				return false;
    });

		$("input[name=txtEmail]").change(function (event){

			var emailc = $("input[name=txtEmail]").val();

			var aa = function checkMail()
			{
				$(".error").text("");
			}

			if(!emailc || !emailc.trim())
			{
            $(".error").text("Something went wrong!");
            setTimeout( aa, 1000);
						/*
            setTimeout(
						function ()
						{
							checkMail()
							//$(".error").text("");
						}
						, 1000);
						*/
			}
			else
			{
				var url = window.location.origin;
                var data = {};
                data.email = emailc;
                $.ajax({
                     url: url + '/check_email',
                     method: 'post',
                     data: data,
                     dataType: 'json',
                     success: function(data){
                         if(data.result)
												 {
													 $(".error").text("this email can be sent! whooo ray..");
													 clears = function() { $(".error").text(""); }
													 setTimeout(clears, 2000);
												 }else{
													 
													 $(".error").text("Sorry this email can not be sent")
                        var redirect = function() { window.location.href = "/list"; }
													setTimeout(redirect, 2000);
													 
												 }
                     }
                });
			}

		});

});
