
$(document).ready(function(){
	var counter = 1;
	var curr_row = null;
	$('#save').click(function(){
		var Uid = $('input[name = "id"]').val();
		var named = $('input[name="fname"]').val();
		var coarsed = $('input[name="cy"]').val();
		var addrs = $('input[name = "address"]').val();
		var eml = $('input[name = "email"]').val(); 
		var markuped = "<tr data-name='name' data-cy = 'cy'><td name='id' class = 'id' id= 'Uid' value ="+counter+">"+(counter++)+
						"</td><td name='fname' class = 'fname'>" + named + "</td><td name='cy' class = 'cy'>" + coarsed +"</td>" +
						"<td name='address' class='address' style= 'display:none'>"+addrs+ 
						"</td><td name='email' class='email' style= 'display:none'>"+eml+ "</td><td>" + 
						"<button type = 'button' class='btn btn-primary' id = 'edit' style = 'display:none'>Edit</button> "+
						" <button type = 'button' class='btn btn-warning' id= 'delete' style = 'display:none'>Delete</button>";

		if(curr_row){
			$('table tbody').find($(curr_row)).replaceWith(markuped);
				curr_row = null;		
		}else{
			$('table tbody').append(markuped);
		}
		$("#id").val('');
		$("#fname").val('');
		$("#cy").val('');
		$("#address").val('');
		$("#email").val('');

		$('#form').modal('hide');

		$('td').hover(function(){
		$(this).css('background-color','cyan');
		$('#edit , #delete').show();
		// $('#delete').show();
	}, function(){
		$(this).css('background-color', '');
		$('#edit, #delete').hide();
		// $('#delete').hide();
	});

		
		$('body').on('click','#delete', function(){
			$(this).parents('tr').remove();
		})

		

	});

	$('#cancel').on('click', function(){
		$('#form').modal('hide');
	});

	$('#createStudent').on('click',function(){
		$('#form').modal();
		$('#update').attr({'id':'save', 'class':'btn btn-outline-primary'});
		$("#id").val('');
		$("#fname").val('');
		$("#cy").val('');
		$("#address").val('');
		$("#email").val('');
		$('#update').hide();

	});

	$('body').on('click','#edit', function(){
			$('#form').modal();
			$('#save').attr({'id':'update', 'class':'btn btn-primary'});
			counter--;
			curr_row = $(this).parents('tr');
			$('#id').val($(this).closest('tr').find('td.id').text());
			$('#fname').val($(this).closest('tr').find('td.fname').text());
			$('#cy').val($(this).closest('tr').find('td.cy').text());
			$('#address').val($(this).closest('tr').find('td.address').text());
			$('#email').val($(this).closest('tr').find('td.email').text());
		});



			
	


	
})