function Counter() {
    this.init();
}
Counter.prototype.init = function () {
    /*
        $('.plus');//加
        $('.ac');//清屏
        $('.backspace');//删除
        $('.plus-minus');//正负
        $('.divide');//除
        $('.multiply');//乘
        $('.minus');//减
        $('.decimal');//小数点
        $('.equal')//等*/
    this.view = $('.view');//显示区域
    this.num = [];
    this.nowNum = '';
    this.status;
    this.bindEvent();
    this.lock = true;
    this.lock2 = true;
};
Counter.prototype.bindEvent = function () {
    var self = this;
    //点击数字
    $('.one').add('.tow').add('.three').add('.four').add('.five').add('.six').add('.seven').add('.eight').add('.nine').add('.zero').on('click', function () {
        var number = $(this).text();
        self.lock == true ? '' : self.nowNum = 0; self.lock = true;//初始化
        self.print(number);//显示
    });
    //点击运算符
    $('.plus').add('.divide').add('.multiply').add('.minus')
        .on('click', function () {
            self.status = $(this).text();
            if (self.lock2 == true) {
                self.num.push(parseFloat(self.nowNum));
                self.nowNum = '';
            }
            self.lock2 = false;
        })
    //点击等号
    $('.equal').on('click', function () {
        self.lock = false;
        self.lock2 = true;
        self.num.push(parseFloat(self.nowNum));
        self.count(self.status);
    })
    //清零 小数点  删除 正负
    $('.ac').add('.backspace').add('.decimal').add('.plus-minus').on('click', function () {
        var val = $(this).text(),
            lastLen = self.nowNum.length - 1;
        if (val == '-/+') {
            self.nowNum *= -1;
            self.print();
        }
        if (val == 'AC') {
            self.nowNum = 0;
            self.print('');
        }
        if (val == '←') {
            self.nowNum.length > 1 ? self.nowNum = self.nowNum.substring(0, self.nowNum.length - 1) : self.nowNum = 0;
            self.print('');
        }
        if (val == '.') {
            self.print('.');
        }
    })
};
Counter.prototype.count = function (status) {
    var len = this.num.length;
    switch (status) {
        case '+':
            this.nowNum = this.num[len - 2] + this.num[len - 1];
            this.num[len - 1] = this.nowNum;
            this.print('');
            break;
        case '/':
            this.nowNum = this.num[len - 2] / this.num[len - 1];
            this.num[len - 1] = this.nowNum;
            this.print('');
            break;
        case 'x':
            this.nowNum = this.num[len - 2] * this.num[len - 1];
            this.num[len - 1] = this.nowNum;
            this.print('');
            break;
        case '-':
            this.nowNum = this.num[len - 2] - this.num[len - 1];
            this.num[len - 1] = this.nowNum;
            this.print('');
            break;
        default:
            break;
    }
}
//显示内容
Counter.prototype.print = function (n) {
    var self = this;
    n !== undefined ? this.nowNum += n : '';
    this.view.text(parseFloat(this.nowNum));
}
new Counter();