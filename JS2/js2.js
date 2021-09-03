var nums = [4,3,2,7,11,15];
var target = 9;
var result = []
for (var i = 0 ; i < nums.length; i++) {
	for (var j = i + 1; j <nums.lenth; j++) {
		if(nums[i] + nums[j] == target) {
			console.log("succses")
		}
	}
}
// console.log(result[0], "\t", retult[1])