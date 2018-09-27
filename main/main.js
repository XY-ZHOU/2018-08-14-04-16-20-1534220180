module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
    o) 最大值 = ${sequence.maxmum()}
    o) 元素数量 = ${sequence.lenmum()}
    o) 平均值 = ${sequence.avemum()}
// Write your code here
`);
};

class Sequence {
   constructor(input) {
    // Write your code here
    this.input=input;
  }
  var arr=this.input;
   var len = arr.length;
   for (var i = 0;i<len;i++) {
      for (var j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j+1]) {
          var temp = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = temp;
        }
      }
   }

   minimum(){
     // Write your code here
     return arr[0];
   }
   // Write your code here
   maxmum(){
       return arr[len-1];
   }
   lenmum(){
       return len;
   }
   avemum(){
       var sum=0;
       for(var k=0;k<len;k++){
         sum+=arr[k];
       }
       var ave=(sum/len).toFixed(2);
       return (ave);
   }

}
