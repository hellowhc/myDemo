var person = [
            { name: '刘小华', src: '1.jpg', sex: 'male', des: '漂亮的女孩子' },
            { name: '王花', src: '2.jpg', sex: 'male', des: '漂亮的程序猿' },
            { name: '陈军', src: '3.jpg', sex: 'female', des: '我是一个学霸' },
            { name: '王华', src: '4.jpg', sex: 'female', des: '我喜欢游泳' },
            { name: '陈思思', src: '5.jpg', sex: 'male', des: '我喜欢看电影' },
            { name: '陈学习', src: '6.jpg', sex: 'female', des: '我爸我妈爱学习' } ,
            { name: '王美丽', src: '7.jpg', sex: 'male', des: '我妈是美丽得妈妈' }

        ];
        //防抖封装的函数
     var  oInp = document.getElementsByTagName('input')[0];
     var oUl = document.getElementById('list');     
     var btnList = document.getElementById('sex');
     var timer = undefined;
     var sexArr;
     var state =create({text:'',sex:'all'});
    function init(){
        renderDate(person);
       bind();
    }
    init();
   state.sub(function(){
    renderDate(add(person,obj));
   })
     oInp.oninput = setDate;
        function setDate(){
            clearTimeout(timer);
            let self = this;
            timer = setTimeout(function(){
               state.dispath({type:'text',value:self.value})
              
            },1000)
        }

        function renderDate(arr){
            var str = '';
            arr.forEach( ele => {
                str += `<li>
                    <img src="./img/${ele.src}" alt="">\
                    <span class="name">${ele.name}</span> \
                    <span class="des">${ele.des}</span>\
                    </li>`;
                oUl.innerHTML=str;
            })
        }   

    function fileText(arr,val){
       let textArr= arr.filter((ele,index)=>{
           return ele.name.indexOf(val) !== -1
        })
        return textArr;
    }


    function bind(){
        btnList.addEventListener('mousedown',function(e){
            if(e.target.tagName=='LI')
            state.dispath({type:'sex',value:e.target.getAttribute('sex')});
                document.getElementsByClassName('active')[0].className='';
                e.target.className='active';
                // renderDate(add(person,obj))
        },false)
    }

    function fileSex(arr,sex){
        if(sex=='all'){
            return arr;
        }else{
          return arr.filter(ele=>{
                return ele.sex==sex
            })
        }
    }


    var obj = {
        sex:fileSex,
        text:fileText
    }
    // var state = {
    //     sex:'all',
    //     text:''
    // }

    //实现两个数组的合并
    function add(arr,obj){
        var lastArr=arr;
        for(var prop in obj){
            lastArr = obj[prop](lastArr,state.getState()[prop]);
        }
        return lastArr;
    }


    //对象容易暴露对象  
    //采用函数  也只能采用构造函数
    
    //也只有通过两者的合并
    