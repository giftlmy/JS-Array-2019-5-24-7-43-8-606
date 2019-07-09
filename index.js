// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]'; //a不是
var b = [1, 2, 3, 4]; //b是
//TODO


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
for ( var i = 0; i <a.length; i++){
    a[i]=a[i]*2;
}
// TODO should output [2,4,6,8,10]


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors[0]+" "+colors[1]+" "+colors[2]+" "+colors[3]);
// case 2 output: 'Red+Green+White+Black'
console.log(colors[0]+"+"+colors[1]+"+"+colors[2]+"+"+colors[3]);
// case 3 output: 'Red,Green,White,Black'
console.log(colors[0]+","+colors[1]+","+colors[2]+","+colors[3]);


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
 for(var i=0;i<a.length;i++){
    for(var j=i+1;j<a.length;j++){
        if(a[i]<a[j]){
	      var temp =a[i];
		  a[i]=a[j];
		  a[j]=temp;
	    }
    }
 }
//TODO should output: [10,8,5,4,1]


// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var h={};
var maxNum=0；
var maxEle=null;
for(var i=0;i<a.length;i++){
	var j = a[i];
	h[j] === undefined? h[j]=1:(h[j]++);
	if(h[j]>maxNum){
		maxEle =j;
		maxNum =h[j];
	}
}
console.log("出现次数最多的元素为"+maxEle);
//TODO should output: 'a'
