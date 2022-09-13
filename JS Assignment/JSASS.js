// Question 1:Ans
var a = [1, 2, 3, 4, 5, 1, 3];
var searchNum = 7;
var elem = [];
var numberOfindexs = 0;
for (var i = 0; i <= a.length - 1; i++) {
  if (searchNum == a[i]) {
    numberOfindexs++;
    elem.push(i);
  }
}
if (numberOfindexs == 1) {
  console.log( `The index of ${searchNum} is ${elem}`);
} else if (numberOfindexs > 1) {
  console.log( `The index of ${searchNum} is ${elem}`);
} else {
  console.log("Output : -1");
}


// Question 2:Ans

let n = 5; 
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += n - j + 1;
  }
  string += "\n";
}
console.log(string);


// Question 3:Ans

  const arry = [3,2,1,4,5,45]
  arry.sort(function(a,b){return a-b})
 
  console.log(arry);

// Question 4:Ans
    function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 checkStringsAnagram("indian","ndiani")
 checkStringsAnagram("Hello","jello")



// Question 5:Ans

    function reverseStr(str){
        let output =' '
    for(let i=str.length-1; i>=0; i--)
    {
        output=output + str[i]
    }
    return output
    }
    console.log(reverseStr('Hello'))