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
  for(var i=0;i<this.input.length;i++){
    for(var j=i+1;j<this.input.length;j++){
      if(this.input[i]>this.input[j]){
          var temp1=this.input[i];
          this.input[i]=this.input[j];
          this.input[j]=temp1;
      }
    }
  }
  var arrlen=arr.length;
  minimum(){
    // Write your code here
    return arr[0];

  }
  // Write your code here
  maxmum(){
      return arr[arrlen-1];
  }
  lenmum(){
      return arrlen;
  }
  avemum(){
      var sum=0;
      for(var k=0;k<arrlen;k++){
        sum+=arr[k];
      }
      var ave=(sum/arrlen).toFixed(2);
      return (ave);
  }

}
