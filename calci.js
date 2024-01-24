(function () {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');
    let on = document.querySelector('.btn-green');
    let off = document.querySelector('.btn-red');
    let backslash = document.querySelector('.btn-orange');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    clear.addEventListener('click', function (e) {
        screen.value = " ";
    })

    on.addEventListener('click', function (e) {
        screen.value = "0";
    })

    off.addEventListener('click', function (e) {
        screen.value = " ";
    })

    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = 'Please Enter';
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

})();