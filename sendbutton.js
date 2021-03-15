let btnOne = document.getElementById('btn');
let snd = document.getElementById('sendmsg');
let close = document.getElementById('plus');

btnOne.addEventListener("click", function () {
    btnOne.classList.toggle("move");
    msg.classList.toggle("respone");
    snd.classList.toggle('send');
    close.classList.toggle('one-move');
});
