const reverse = function(arr) {

	let revarr = [];
	let i = 0;
	for(i ; i<=((arr.length)-1);i++){
		revarr[i]= arr[((arr.length)-1-i)];
	}
	return revarr;
};
const reversearray = reverse([1,2,3,4,5,6,9,36,524])

console.log(reversearray);