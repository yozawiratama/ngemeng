var ngemeng = {};

if ('speechSynthesis' in window) {
    // Synthesis support. Make your web apps talk!

} else {
    alert('not support, please use google chrome');
}

ngemeng.speak = function (msg) {
    var sp = new SpeechSynthesisUtterance(msg);
    sp.lang = 'id-ID';
    sp.onstart = function (e) {
        console.log('start');
    };
    sp.onend = function (e) {
        window.speechSynthesis.cancel();
    };

    window.speechSynthesis.speak(sp);
}