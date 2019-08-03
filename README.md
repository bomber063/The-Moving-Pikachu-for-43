# The-Moving-Pikachu-for-43
* 此项目的比卡丘(Pikachu)的设计稿来自于[codepen](https://codepen.io/)，一般都是搜索英文名，你还可以搜索马里奥(Mario),宠物小精灵(Pokemon),熊猫(Panda)，蜡笔小新(Crayon Shin-chan),大白(Baymax)等等
* 此比卡丘别人做的[预览](https://codepen.io/TeorikDeli/pen/CozBw)
* 因为移动端有些手机的宽度是只有320px的，所以最好是宽度控制在**320px以内**。
* 用到的取颜色软件——ColorPix.
* 截取尺寸软件就是QQ截屏
* 整体的宽是316px，高是178px，然后用软件测量也取色来做简单的部分——圆形的眼睛和腮红。
* 鼻子部分主要是用border
```
      border:12px solid;
      border-color:#000000 transparent transparent;
```
* 嘴巴部分稍微有点难度，上嘴唇
```
        .topLeftLip {
            height: 22px;
            width: 63px;
            border: 2px solid #000000;
            border-bottom-left-radius: 1600px 800px;
            border-top: none;
            border-right: none;
            position: absolute;
            top: 48px;
            /*left:93px;如果按照左边定位，放大后嘴巴会改变 */
            right: 50%;
            transform: rotate(-25deg)
        }

        .topRightLip {
            height: 22px;
            width: 63px;
            border: 2px solid #000000;
            border-bottom-right-radius: 1600px 800px;
            border-top: none;
            border-left: none;
            position: absolute;
            top: 48px;
            /* right:93px;如果按照右边定位，放大后嘴巴会改变 */
            left: 50%;
            transform: rotate(25deg);
```
* 下嘴唇和舌头，要用到[overflow:hidden](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)，这个是由父元素（父元素中非static元素）的范围来决定，所以这里设置了两个父元素：
1. lip里面包括了上下嘴唇。这里因为还要涉及到互相覆盖的问题，所以使用了[z-index](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index)，为了上嘴唇把下嘴唇遮住，所以上嘴唇的颜色和背景颜色都设置为黄色，为了遮住下嘴唇。
2. lowerLip里面包括了舌头。
3. 1和2也可以用伪元素::before和::after也可以，这样伪元素前面的那个选择器就可以作为一个父元素来使用overflow:hidden.
```
    <div class="lip">
     <div class="topLeftLip"></div>
     <div class="topRightLip"></div>
     <div class="lowerLip">
            <div class="tongue"></div>
     </div>
    </div>
```
* 定位按照中线来定位，这样放大后也不会改变位置，
* 给手机端做适配
```
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```