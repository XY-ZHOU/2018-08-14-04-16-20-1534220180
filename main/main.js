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
  var arr=[];
  var len = this.input.length;
  for (var i = 0; i < len;i++) {
     for (var j = 0; j < len - 1 - i; j++) {
       if (this.input[0][j] > this.input[0][j+1]) {
         var temp = this.input[0][j+1];
         this.input[0][j+1] = this.input[0][j];
         this.input[0][j] = temp;
       }
     }
  }
 var arr=this.input[0];
  minimum(){
    // Write your code here
    return arr[0];

  }
  // Write your code here
  maxmum(){
      return arr[arr.length-1];
  }
  lenmum(){
      return arr.length;
  }
  avemum(){
      var sum=0;
      for(var k=0;k<arr.length;k++){
        sum+=arr[k];
      }
      var ave=(sum/arr.length).toFixed(2);
      return (ave);
  }

}
