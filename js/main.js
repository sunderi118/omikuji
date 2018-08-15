(function() {
    'use strict';

    var btn = document.getElementById('btn');

    btn.addEventListener('click', function() {

        var results = ["大吉", "吉","小吉","中吉","小吉","凶","大凶"];
        var n = Math.floor(Math.random() * results.length);
        this.textContent = results[n];
        // switch (n){
            // case 0: this.textContent = "lucky day";
            // break;
            // case 1 : this.textContent = "ok day";
            // break;
            // case 2: this.content = "be careful...";
            // break

    });
    btn.addEventListener('mousedown', function() {
        this.className = 'pushed';
    });
    btn.addEventListener('mouseup', function() {
        this.className = '';
    });
})();