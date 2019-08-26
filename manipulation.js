$(document).ready(function(){
$('#createStudent').on('click', function(){
	console.log("clcik")
	$('#form').modal();
});









var counter = 0; 
curr_row = null;

$('#save').on('click', function(){
	var Cid = $('#id').val($('td.id').last().text());
	var id  = $('#id').val();
	var name = $('#fname').val();
	var cy = $('#cy').val();
	var newData = "<tr id ='row' "+ (counter++) + "class = 'info'>"
				+"<td class= 'id'>"+counter+"</td>"
				+"<td class= 'name'>"+name+"</td>"
				+"<td class= 'cy'>"+cy+"</td>"
				+"<td class= 'Actionbutton'><button id='edit' type= 'button' class='btn btn-primary'>"
				+"Edit</button><button id='delete' type= 'button' class='btn btn-danger'>"
				+"Delete</button></tr>";

	var oldData = "<tr id ='row' "+ Cid+ "class = 'info'>"
				+"<td class= 'id'>"+Cid+"</td>"
				+"<td class= 'name'>"+name+"</td>"
				+"<td class= 'cy'>"+cy+"</td>"
				+"<td class= 'Actionbutton'><button id='edit' type= 'button' class='btn btn-primary'>"
				+"Edit</button><button id='delete' type= 'button' class='btn btn-danger'>"
				+"Delete</button></tr>";

	if(curr_row){
		console.log('curr_row')
		$('table tbody').find($(curr_row)).replaceWith(oldData);
		curr_row =  null;
	}else{
		console.log('appending')
		$('table tbody').append(newData);
	}
	$('#id').val($('td.id').last().text());
	$('#name').val('');
	$('#cy').val('');
	$('#form').modal('hide');

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
})
});