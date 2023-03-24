let round = 'x';
let title = document.querySelector('.title')
let sqr = [];
// Vous pouvez utiliser ce code gratuitement ** Oualid Hamri
function yervah() {

    for (let i = 1; i < 10; i++) {
        sqr[i] = document.getElementById('sqrt' + i).innerHTML;
    }
    if (sqr[1] == sqr[2] && sqr[2] == sqr[3] && sqr[1] != '') {
        title.innerHTML = 'Yervah ' + sqr[1];
        document.getElementById('but').style.visibility = 'visible';
        exitFunc();
    }
    else if (sqr[4] == sqr[5] && sqr[5] == sqr[6] && sqr[4] != '') {
        title.innerHTML = 'Yervah  ' + sqr[4];
        document.getElementById('but').style.visibility = 'visible';
        exitFunc();

    }
    else if (sqr[7] == sqr[8] && sqr[8] == sqr[9] && sqr[7] != '') {
        title.innerHTML = 'Yervah ' + sqr[7];
        document.getElementById('but').style.visibility = 'visible';
        exitFunc();


    }
    else if (sqr[1] == sqr[4] && sqr[4] == sqr[7] && sqr[1] != '') {
        title.innerHTML = 'Yervah ' + sqr[1];
        document.getElementById('but').style.visibility = 'visible';
        exitFunc();

    }
    else if (sqr[4] == sqr[5] && sqr[5] == sqr[6] && sqr[4] != '') {
        title.innerHTML = 'Yervah ' + sqr[4];
        document.getElementById('but').style.visibility = 'visible';
        exitFunc();


    }
    else if (sqr[7] == sqr[8] && sqr[8] == sqr[9] && sqr[7] != '') {
        title.innerHTML = 'Yervah ' + sqr[7];
        document.getElementById('but').style.visibility = 'visible';
        exitFunc();
    }
    else if (sqr[2] == sqr[5] && sqr[5] == sqr[8] && sqr[2] != '') {
        title.innerHTML = 'Yervah ' + sqr[2];
        document.getElementById('but').style.visibility = 'visible';
        exitFunc();
    }
    else if (sqr[3] == sqr[6] && sqr[6] == sqr[9] && sqr[3] != '') {
        title.innerHTML = 'Yervah ' + sqr[3];
        document.getElementById('but').style.visibility = 'visible';
        exitFunc();
    }
    else if (sqr[1] == sqr[5] && sqr[5] == sqr[9] && sqr[1] != '') {
        title.innerHTML = 'Yervah ' + sqr[1];
        document.getElementById('but').style.visibility = 'visible';
        exitFunc();
    }
    else if (sqr[3] == sqr[5] && sqr[5] == sqr[7] && sqr[3] != '') {
        title.innerHTML = 'Yervah ' + sqr[3];
        document.getElementById('but').style.visibility = 'visible';
        exitFunc();
    }
    else if (sqr[1] != '' && sqr[2] != '' && sqr[3] != '' && sqr[4] != '' && sqr[5] != '' && sqr[6] != '' &&  sqr[7] != '' && sqr[8] != '' && sqr[9] != '') {
        document.getElementById('but').style.visibility = 'visible';
    }


}

function play(id) {
    let element = document.getElementById(id);

    if (round === 'x' && element.innerHTML == '') {
        element.innerHTML = 'X';
        round = 'o';

    }
    if (round === 'o' && element.innerHTML == '') {
        element.innerHTML = 'O';
        round = 'x';

    }
    yervah();

}
