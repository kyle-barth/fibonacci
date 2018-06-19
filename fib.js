var x=1;
var arr = [];
for (var i = 0; i < 20; i++){
  arr[i] = x;
  if (arr.length > 1) x = arr[i] + arr[i-1];
}
console.log(arr.toString());
