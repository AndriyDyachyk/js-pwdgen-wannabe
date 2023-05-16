// Richiesta all'utente del suo nome e definifione prima variabile
let name = prompt('Come ti chiami?');

// Richiesta del cognome all'utente e definizione della seconda variabile
let surname = prompt('Qual è il tuo cognome?');

// Richiesta del colore preferito dell'utente e definizione della terza variabile
let fav_color = prompt('Qual è il tuo colore preferito?');

// generazione della password mediante aggregazione degli imput e il numero 21
let password_generata = name + surname + fav_color + '21';

// Visualizzazione a video della password generata
document.getElementById('la_tua_password').innerHTML = 'La tua nuova password è:' + ' ' + password_generata;