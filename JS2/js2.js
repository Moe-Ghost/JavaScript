var nums = [3, 2, 7, 11, 15];
var target = 26;
var result = []
for(let i = 0; i < nums.length; i++) {
	for(let j = i + 1; j < nums.length; j++) {
		if(nums[i] + nums[j] === target) {
			result[0] = i;
			result[1] = j;
			break;
		}
	}
}
console.log(result);
console.log("Because " + nums[result[0]] + " + " + nums[result[1]] +" == " + target + ", we return [" + result + "].")