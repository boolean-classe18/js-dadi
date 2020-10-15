// Gioco dei dadi, chi fa di più vince

var lancio_dado1 = Math.floor(Math.random() * 6) + 1;
console.log('giocata 1 = ' + lancio_dado1);

var lancio_dado2 = Math.floor(Math.random() * 6) + 1;
console.log('giocata 2 = ' + lancio_dado2);

// 0.0000001 * 6 = 0.0000006 => 0 + 1 = 1
// 0.9999999 * 6 = 5.999999 => 5 + 1 = 6

if(lancio_dado1 > lancio_dado2) {
    console.log('vince giocatore 1!');
} else if(lancio_dado2 > lancio_dado1) {
    console.log('vince giocatore 2!');
} else {
    console.log('pareggio!');
}
