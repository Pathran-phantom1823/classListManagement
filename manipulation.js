

$(document).ready(function(){
	$('#createStudent').on('click', function(){
		console.log("clcik")
		$('#form').modal();
		$('input').val(null);
	})

	var counter = 0; 
	curr_row = null;
	var update = false;

	$('#save').on('click', function(){
		var id  = $('#Uid').val();
		var name = $('#fname').val();
		var cy = $('#cy').val();
		var address = $('#address').val();
		var email = $('#email').val();
		counter ++;
		var tmp_counter = counter;
		if(curr_row){
		tmp_counter= $('#Uid').val();
		}	
		var newData = "<tr id ='row' "+ tmp_counter + "class = 'info'>"
					+"<td class= 'id' id= 'id'>"+tmp_counter+"</td>"
					+"<td class= 'name'>"+name+"</td>"
					+"<td class= 'cy'>"+cy+"</td>"
					+"<td class= 'address' style='display:none;'>"+address+"</td>"
					+"<td class= 'email'  style='display:none;'>"+email+"</td>"
					+"<td class= 'Actionbutton'  style='display:none;'><button id='edit' type= 'button' class='btn btn-primary'>"
					+"Edit</button><button id='delete' type= 'button' class='btn btn-danger'>"
					+"Delete</button></tr>";

		if(curr_row){
			console.log(counter-=1);
			$('table tbody').find(curr_row).replaceWith(newData);
			curr_row = null;	
		}
		else{
			
			$('table tbody').append(newData);
		}


		$('#id').val($('td.id').last().text());
		$('#name').val('');
		$('#cy').val('');
		$('#form').modal('hide');

		$('td').hover(function(){
			var element = $(this);
				position = element.index();
				element.parents().find('td').css('background-color', 'cyan');
				$('.Actionbutton').show();
			},function(){
					$(this).parents().find('td').css('background-color', '');
					$('.Actionbutton').hide();
			});
		// $('td').live('mousenter', function(){

		// })
	});


	$('body').on('click', '#delete', function(){
		$(this).parents('tr').remove();
		return false;
	});

	$('body').on('click', '#edit', function(){
		$('#form').modal();
		curr_row = $(this).parents('tr');
		$('#Uid').val($(this).closest('tr').find('td.id').text());
		$('#fname').val($(this).closest('tr').find('td.name').text());
		$('#cy').val($(this).closest('tr').find('td.cy').text());
		$('#address').val($(this).closest('tr').find('td.address').text());
		$('#email').val($(this).closest('tr').find('td.email').text());
	});

	$('#cancel').on('click', function(){
		$('input').val(null);
		$('#form').modal('hide');
	})

	



});	