// var removeElement = function(nums, val) {
//     let result = [];
//     for (var i = 0; i < nums.length; i++) {
//         while (nums[i] !== val) {
//             result.push(nums[i]);
//         }
//       if (nums[i] === val ){
// result.push("_");
//       }
       
//     }
// };

var removeElement = function(nums, val) {
    while (nums.includes(val)){
        nums.splice(nums.indexOf(val),1);
    }
    return nums.length;
};
 
console.log(removeElement([1,2,4,5,3,2], 1));