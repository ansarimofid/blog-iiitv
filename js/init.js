$('document').ready(function () {

    /*****************
     ***Toogle Picker**
     ******************/
    $('#picker li a').click(function () {
        var ch = $(this).attr('data-color');
//        console.log(ch);
        changeColor(ch);
    });

    /************************
     ***Toggle Primary Color**
     *************************/
    $('.picker-toggle').click(function () {
        $('.color-picker').toggleClass('hide-picker');
    });

    /************************************
     ***Random Switch Color on Page load**
     *************************************/
    var pcolor = ['orange', 'pink', 'cyan', 'green', 'blue'];
    changeColor(pcolor[Math.floor(Math.random() * 5)]);


    /*******************
     ***Color Switcher**
     ******************/

    function changeColor(ch) {
        var color = {
            orange: "rgb(255,61,0)",
            pink: "rgb(233, 30, 99)",
            cyan: "rgb(0, 150, 136)",
            green: "rgb(76, 175, 80)",
            blue: "rgb(33, 150, 243)"
        };
        $('style.dynamic-style').html(".primary-color{color: " + color[ch] + "!important;}.primary-background{background-color: " + color[ch] + " !important;}nav>ul>li>a:hover{color:" + color[ch] + "!important;}");
    }
})
