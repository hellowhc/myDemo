es6字符串数组方法:{
    字符串方法:{
        var str='1';
        str.charAt(num)  //返回对象这一位的字数字
        str.charCodeAt(num);//返回这一位的阿斯克码
          str.toUpperCase() //把字符串里面的字母转换成大写
          str.toLowerCase() //把字符串里面的大写字母转化成小写字母
          str.includes(str,start)//查找字符串 返回true 和false start从字符串的哪一位开始查找 可填可不填 indexof的加强版
          str.startsWith(str,start)//查找字符串是不是从str开始的  strat 同上
          str.endsWith(str,start) //查找字符串是不是从str结尾的 start 同上
          str.repeat(num) //将这个字符串复制num个
          模板字符串:{
              eg:"['+str+'] love ['+str+']"
              ${}: //字符串拼接 ${str} =="'++'"  {里面还可以计算}
                `` 动态添加dom ==\

          }
        }
        数组方法:{
            传统数组(构造函数):{
                var arr=new Array(num) //数字而且只有一个参数，创建一个长度为n的数组
                var arr=new Array('str') //非数字str， 创建一个数组[str]
                var arr =new Array('str',num,num )//多个参数，返回右多个参数构成数组
            }
            es6加强的Array的构造函数:{
                Array.of(); 
                var arr=new Array.of(num)
                var arr=new Array.of('str')
                var arr =new Array.of('str',num,num )
                //不管参数是什么 都将参数变换为数组
                Array.from(listArray)//将类数组转换成数组
                var arr=Array.from(listArray)  
                arr.find(function(item表达式){})  // 找到就返回该值
                arr.findIndex(function(item表达式){})//返回索引值 没找到返回-1
                find()-findIndex() //特点  只要找到就立刻停止 不再往下查找
                arr.fill('str',start,end ) //将数组里的所有东西都复制了 strat索引从哪开始 end 从哪结束，一般用来初始化数组
                

            }
        }
}