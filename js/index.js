//Creating the array to insert in the drop-down list
var cityArray = ["NYC", "SF", "LA", "ATX", "SYD"];

$(document).ready(function()
{
//adding the array elements to the drop-down list during page load	
cityArray.forEach(function(elements,index) {
    var html = '<option>'+ elements +'</option>';
	$('#city-type').append(html);
});

//changing the background of the page based on the value selected by the drop-down list
$('#city-type').change(function() {
   var cityName = $(this).val().toLowerCase().trim();
   $('body').attr('class',cityName);
});

});
	