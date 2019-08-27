

$(document).ready(function(){
	$('#createStudent').on('click', function(){
		console.log("clcik")
		$('#form').modal();
		$('#id').val('');
		$('#fname').val('');
		$('#cy').val('');
		$('#address').val('');
		$('#email').val('');
	})

	var counter = 0; 
	curr_row = null;
	var update = false;

	$('#save').on('click', function(){
		var id  = $('#id').val();
		var name = $('#fname').val();
		var cy = $('#cy').val();
		var newData = "<tr id ='row' "+ (counter++) + "class = 'info'>"
					+"<td class= 'id' id= 'id'>"+counter+"</td>"
					+"<td class= 'name'>"+name+"</td>"
					+"<td class= 'cy'>"+cy+"</td>"
					+"<td class= 'Actionbutton'  style='display:none;'><button id='edit' type= 'button' class='btn btn-primary'>"
					+"Edit</button><button id='delete' type= 'button' class='btn btn-danger'>"
					+"Delete</button></tr>";

		if(!update){
					console.log('not update')
					$("table tbody").append(newData)
					} else {
					$(newData).attr("counter", ($('#' + curr_row).attr("counter")))
					$('#' + curr_row).html($(newData).html())
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

		$('#edit').on('click',function(){
				console.log('update')
				--counter;
				update = true;
				curr_row = $(this).closest("tr").attr("id");
				$('#form').modal('hide');
		})

				


	});


	$('body').on('click', '#delete', function(){
		$(this).parents('tr').remove();
		return false;
	});

	$('body').on('click', '#edit', function(){
		$('#form').modal();
		curr_row = $(this).parents('tr');
		$('#id').val($(this).closest('tr').find('td.id').text());
		$('#name').val($(this).closest('tr').find('td.name').text());
		$('#cy').val($(this).closest('tr').find('td.cy').text());
	});

	$('#cancel').on('click', function(){
		$('#form').modal('hide');
	})

	



});	