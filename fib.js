var x=1;
var arr = [];
for (var i = 0; i < 10; i++){
  arr[i] = x;
  if (arr.length > 2) x = arr[i] + arr[i-1];
  console.log(x);
}
