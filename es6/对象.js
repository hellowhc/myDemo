定义属性:{
    /**
     * let a ='a';
     * let b='b';
     * let c='c';
     * let stuff={
     *  [a+b]:c//输出的是  ab:c
     * }
     * 
     */
        es6关于对象新增的一些方法: {
            Object.is(1,1) //判断是不是相等
            Object.assign(可以有多个对象)  //将里面的对象合并在第一个对象里面，并返回一个新数组
            Object.keys() //返回对象的属性名
            Object.values()  //返回对象的属性值
            Object.entries() //把对象里的key，value转换成数组形式
            增强对象原型:{
                Object.getPrototypeOf()//获取对象原型
                Object.setPrototypeOf(p1,p2);将p1的原型等于p2的原型
            }
            对象数组的解构赋值:{
                对象赋值:{
                    let obj={
                        height:'18',
                        width:'122',
                        hobby:'play',
                        name:{
                            name1:'sdfd',
                        }  
                    }
                    let {height,width,hobby,name,name:{name1}}=obj  //height=18 width=122;
                    结构失败:{
                       // 如果{里面多个属性} 会输出undefined
                        //还可以添加默认值 height=15  // 如果对象里面height有值的话 就去原始值 else 就取默认值
                    }
                }
                数组赋值:{
                    let [a,b,c]=[1,2,3];//a=1,b=2,c=3  一一对应 
                    [b]=[a]  //赋值 b=1;
                }
            }
            对象的Map方法:{
                var map =new Map();(可以传一个二维数组[[a,1],[b,2],[key,value]]);
                map.set(key,value) //定义属性
                map.get(key) //取出属性
                map.has(key) //查看有没有这个属性  有就返回true else false
                map.delete(key) //删除某个属性
                map.clear() //清空整个对象
                map.size()  //返回多少个
                map.forEach()  //遍历整个map  和数组的forEach 一样
                map的去重方法:{
                    Array.prototype.unique=function(){
                        var reArr=[];
                        var map =new Map();
                        this.forEach(function(item){
                            if(!map.has(item)){
                                map.set(item,1);
                                reArr.push(item);
                            }
                           
                        })
                        return reArr;
                    }
                }
            }
        }



}