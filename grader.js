function average(arr){
	//add all scores together
	var jumlah=0;
	// arr.forEach(function(score){
	// 	jumlah+=score;
	// });
	
	for (var i=0; i<arr.length; i++){
		jumlah += arr[i];
	}
	
	// console.log(jumlah);
	//divide by total number of scores
	var average = Math.round(jumlah/arr.length);
	console.log(average);
	
	
};

var scores =[90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 =[40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);