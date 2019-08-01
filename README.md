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