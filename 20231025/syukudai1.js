function checkAge(){
    let num = document.querySelector(`#age`);
    let window1 = document.querySelector(`#window`);

    if((num.value)<=20) {
        window1.alert("未成年");
    }else if ((num.value)>=20) {
        window1.alert("成人");
    }else if ((num.value)>=65) {
        window1.alert("高齢者");
    }else if ((num.value)<=0)
        window1.alert("エラー");
}