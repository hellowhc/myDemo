类名{


    文本内容{
        lead:可以实现段落标签突出显示
        文本对齐{
        text-left 左对齐
        text-center 居中对齐
        text-right 右对齐
        改变大小写{
            text-lowercase 文本小写
            text-uppercase 文本大写
            text-capitalize 首字母大写
        }
        }
    }


    列表{
        list-unstyled 移除了默认的list-style的样式
        lsit-inline  设置了display:inline-block 将所有元素放置于一行
    }


    表格{
        响应式表格 将任何.table 元素包裹在 .table-responsive元素内
        即可次创建响应式表格其会在小屏幕设备上(小于768px)水平滚蛋，大于768宽度时，水平滚动条消失
        table-reponsive 响应式表格
        table 有边框有padding  只有外部边框
        table table-striped 条纹状表格 没有左右边框
        table table-bordered 带边框的表格
        table table-hover 鼠标进入动态
        table table-condensed 紧缩表格 padding减少一半
        表格状态类{
            通过这些状态类可以改变为行或单元格设置颜色  也就是改变背景
            .active 鼠标悬停在行或单元格时所设置的颜色 浅绿色
            .success 表示成功或积极的动作 浅粉红色
            .info 表示普通的提示信息或动作 浅蓝色
            .warning 表示警告或需要用户注意 
            .danger 表示危险或潜在的带来负面影响的动作 浅灰色

        }

    
        栅格参数{
                        超小屏幕（手机<768px）小屏幕(平板>768px) 中等屏幕(桌面显示器>992px) 大屏幕（大屏幕显示器>1200px）
            栅格系统行为    总是水平排列    开始是堆叠在一起的，当大于这些值得时候将变成水平排列c(也就是把多出的另起一行))
            .container(+ -fluid宽度就变成了百分百)最大宽度 None(自动)       750px               970px                       1170px
            类前缀            .col-xs-          .col-sm-            .col-md-                    .col-lg-
            lie数           12
            最大列宽        自动                ~62px               ~81px                       ~97px
            槽宽            30px 每列左右均有15px
            可嵌套          是
            偏移(offset)  .col-xs-offset-
            列排序          是
        
        }
        
        form表单{
            .form-inline form 可以使其内容左对齐并且表现为inline-block级别的控件。只适用于视口（viewport）至少在 768px 宽度时（视口宽度再小的话就会使表单折叠）。
            .form-horizontal form  并联合使用 Bootstrap 预置的栅格类，可以将 label 标签和控件组水平并排布局。这样做将改变 .form-group 的行为，使其表现为栅格系统中的行（row），因此就无需再额外添加 .row 了。
            .form-contral input selete 宽度百分百
            .sr-only label 隐藏 
            .from-group input标签都放在class为from-group div里面
            .input-group 可以实现一个输入框后面有个按钮的父及类
            .input-group-addon 通常用在父及class 为input-group 下面的 span 标签里 添加文本用 还可以添加input checked radio
            .input-group-btn  通常用在父及class 为input-group 下面的 span/div 标签里 添加按钮用

        }

        下拉菜单和上拉菜单{
            .dropup 可以上菜向上弹出
            动作 data-toggle="dropdown" 在button类添加这个才行
            .drop-group  可以实现分列式按钮式下拉菜单
            .dropdown-menu 菜单列表 父及 (ul);
            .divider 横线

        }


        导航栏{
            务必使用 <nav> 元素，或者，如果使用的是通用的 <div> 元素的话，务必为导航条设置 role="navigation" 
                    属性，这样能够让使用辅助设备的用户明确知道这是一个导航区域。
            注意 .nav-tabs .nav-pills 都是依赖于.nav
            .nav 
            .nav-tabs  选项标签类 填在父及 (ul)
            .nav-pills 胶囊式标签类 填在父及 (ul)
            .nav-stacked 可以改变.nav-pills胶囊式标签类成垂直方向排列
            .nav-justified 可以实现两端对齐           
        }


    }
}
标签{
    del 删除标签 原价现价;
    small  小号文本
    abbr 缩略语  <abbr titel="dfdssss">dfd<abbr>
    <fieldset disabled="disabled"></fieldset>禁用用于表格表单
}