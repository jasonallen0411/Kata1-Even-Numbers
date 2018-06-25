var numbersArray = [2, 5, 7, 10, 12, 13, 47, 48, 32, 6, 31, 94, 17, 30];

$("#evenNumbers").click(function(){
var numbersArray = [2, 5, 7, 10, 12, 13, 47, 48, 32, 6, 31, 94, 17, 30];
	function even(n){
  	return n.filter(function(val){return val%2===0});
	};
	$("#arrayArea").html(even(numbersArray));
	alert(even(numbersArray));
});












