window.onload = () => {
    let body = document.getElementsByTagName('body')[0];

    let oledToggle = document.getElementById('oled');
    let oledOff = document.getElementById('oled-off');
    let oledOn = document.getElementById('oled-on');

    oledToggle.addEventListener('click', () => {
        body.classList.toggle('bg-black');
        oledOff.classList.toggle('off-active');
        oledOn.classList.toggle('on-active');
    });

    let soundToggle = document.getElementById('sound');
    let soundOff = document.getElementById('sound-off');
    let soundOn = document.getElementById('sound-on');

    soundToggle.addEventListener('click', () => {
        soundOff.classList.toggle('off-active');
        soundOn.classList.toggle('on-active');
    });
}
