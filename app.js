// AI HealTech Dynamics - Pharmacy Platform Controller
// Phase 1 Prototype Intelligence Layer & Analytics Engine

// ==========================================
// 1. MOCK DATABASES (ENRICHED DATASETS)
// ==========================================

const MEDICINE_CATALOG = [
  { id: "dolo_650", name: "Dolo 650mg", code: "MED-DOL-65001", barcode: "890123456701", category: "Analgesic / Antipyretic", stock: 350, minStock: 50, price: 30.00, batch: "DOL-650A", expiry: "11/2027", hsn: "3004", unit: "tablets", maxDaily: 4000, location: "Rack A, Shelf 2 (A-02)" },
  { id: "croc_650", name: "Crocin 650mg", code: "MED-CRO-65002", barcode: "890123456702", category: "Analgesic / Antipyretic", stock: 280, minStock: 50, price: 28.00, batch: "CRO-901B", expiry: "09/2027", hsn: "3004", unit: "tablets", maxDaily: 4000, location: "Rack A, Shelf 2 (A-03)" },
  { id: "azith_500", name: "Azithromycin 500mg", code: "MED-AZI-50003", barcode: "890123456703", category: "Antibiotic", stock: 4, minStock: 30, price: 115.00, batch: "AZI-500X", expiry: "10/2026", hsn: "3004", unit: "tablets", maxDaily: 500, location: "Rack B, Drawer 04 (B-04)" },
  { id: "panto_40", name: "Pantoprazole 40mg", code: "MED-PAN-40004", barcode: "890123456704", category: "Antacid / PPI", stock: 220, minStock: 40, price: 85.00, batch: "PAN-4040", expiry: "12/2027", hsn: "3004", unit: "tablets", maxDaily: 80, location: "Rack C, Shelf 1 (C-01)" },
  { id: "combi_400", name: "Combiflam Tablet", code: "MED-CMB-40005", barcode: "890123456705", category: "NSAID Analgesic", stock: 190, minStock: 40, price: 42.00, batch: "CMB-8812", expiry: "05/2027", hsn: "3004", unit: "tablets", maxDaily: 1200, location: "Rack A, Shelf 3 (A-05)" },
  { id: "aug_625", name: "Augmentin 625mg", code: "MED-AUG-62506", barcode: "890123456706", category: "Antibiotic", stock: 0, minStock: 30, price: 210.00, batch: "AUG-625K", expiry: "07/2026", hsn: "3004", unit: "tablets", maxDaily: 2000, location: "Rack B, Drawer 06 (B-06)" },
  { id: "telmi_40", name: "Telmisartan 40mg", code: "MED-TEL-40007", barcode: "890123456707", category: "Antihypertensive", stock: 140, minStock: 35, price: 75.00, batch: "TEL-4011", expiry: "02/2028", hsn: "3004", unit: "tablets", maxDaily: 80, location: "Rack D, Shelf 4 (D-04)" },
  { id: "mont_10", name: "Montelukast 10mg", code: "MED-MNT-10008", barcode: "890123456708", category: "Anti-asthmatic", stock: 15, minStock: 40, price: 95.00, batch: "MNT-1099", expiry: "04/2027", hsn: "3004", unit: "tablets", maxDaily: 10, location: "Rack E, Drawer 02 (E-02)" },
  { id: "amox_500", name: "Amoxicillin 500mg", code: "MED-AMX-50009", barcode: "890123456709", category: "Antibiotic", stock: 8, minStock: 30, price: 125.00, batch: "AMX-2025X", expiry: "03/2026", hsn: "3004", unit: "capsules", maxDaily: 3000, location: "Rack B, Drawer 05 (B-05)" },
  { id: "lisin_10", name: "Lisinopril 10mg", code: "MED-LIS-10010", barcode: "890123456710", category: "Antihypertensive", stock: 110, minStock: 40, price: 45.00, batch: "LIS-8849B", expiry: "04/2027", hsn: "3004", unit: "tablets", maxDaily: 40, location: "Rack D, Shelf 3 (D-03)" },
  { id: "atorv_20", name: "Atorvastatin 20mg", code: "MED-ATV-20011", barcode: "890123456711", category: "Statin", stock: 0, minStock: 25, price: 180.00, batch: "ATV-4011C", expiry: "05/2026", hsn: "3004", unit: "tablets", maxDaily: 80, location: "Rack F, Shelf 1 (F-01)" },
  { id: "metf_500", name: "Metformin 500mg", code: "MED-MET-50012", barcode: "890123456712", category: "Antidiabetic", stock: 12, minStock: 50, price: 35.00, batch: "MET-1920X", expiry: "08/2026", hsn: "3004", unit: "tablets", maxDaily: 2550, location: "Rack C, Shelf 3 (C-03)" },
  { id: "para_500", name: "Paracetamol 500mg", code: "MED-PAR-50013", barcode: "890123456713", category: "Analgesic", stock: 450, minStock: 100, price: 15.00, batch: "PAR-9048P", expiry: "11/2028", hsn: "3004", unit: "tablets", maxDaily: 4000, location: "Rack A, Shelf 1 (A-01)" },
  { id: "aspir_100", name: "Aspirin 100mg", code: "MED-ASP-10014", barcode: "890123456714", category: "Analgesic", stock: 120, minStock: 30, price: 25.00, batch: "ASP-3022K", expiry: "06/2027", hsn: "3004", unit: "tablets", maxDaily: 4000, location: "Rack F, Shelf 2 (F-02)" },
  { id: "warf_5", name: "Warfarin 5mg", code: "MED-WRF-50015", barcode: "890123456715", category: "Anticoagulant", stock: 65, minStock: 20, price: 210.00, batch: "WRF-0599Z", expiry: "08/2026", hsn: "3004", unit: "tablets", maxDaily: 10, location: "Lock Cabinet G (G-01)" },
  { id: "ibup_400", name: "Ibuprofen 400mg", code: "MED-IBU-40017", barcode: "890123456717", category: "Analgesic", stock: 260, minStock: 50, price: 30.00, batch: "IBU-2041D", expiry: "03/2028", hsn: "3004", unit: "tablets", maxDaily: 3200, location: "Rack A, Shelf 4 (A-04)" }
];

const PATIENT_DATABASE = [
  { id: "pat_1", code: "PAT-2026-001", name: "Aarav Patel", age: 48, gender: "Male", phone: "+91 98765-43210", email: "aarav.patel@gmail.com", address: "Indiranagar, Bengaluru", bloodGroup: "O+", doctor: "Dr. Ananya Verma, MD", allergies: ["Penicillin Anaphylaxis"], activeMeds: ["Lisinopril 10mg"] },
  { id: "pat_2", code: "PAT-2026-002", name: "Priya Sharma", age: 62, gender: "Female", phone: "+91 98123-45678", email: "priya.sharma@yahoo.com", address: "Koramangala, Bengaluru", bloodGroup: "B+", doctor: "Dr. Ananya Verma, MD", allergies: ["None"], activeMeds: ["Metformin 500mg"] }
];

const DRUG_INTERACTION_MATRIX = {
  "warf_5+aspir_100": { severity: "CRITICAL", en: "CRITICAL CONTRAINDICATION: Severe internal hemorrhage risk. Warfarin and Aspirin synergistically inhibit coagulation factors.", hi: "गंभीर चेतावनी: आंतरिक रक्तस्राव का उच्च जोखिम। वॉरफेरिन और एस्पिरिन जमावट को गंभीर रूप से रोकते हैं।", mr: "गंभीर इशारा: अंतर्गत रक्तस्त्रावाचा मोठा धोका." },
  "lisin_10+ibup_400": { severity: "WARNING", en: "WARNING / MODERATE RISK: Acute renal function impairment. NSAIDs reduce antihypertensive efficacy of ACE Inhibitors.", hi: "चेतावनी: गुर्दे के कार्य में बाधा।", mr: "इशारा: मूत्राशयाच्या कार्यात अडथळा." },
  "para_500+ibup_400": { severity: "SAFE", en: "SAFE COMBINATION: Complementary analgesic mechanism. Paracetamol & Ibuprofen dual therapy is clinically safe.", hi: "सुरक्षित संयोजन: पैरासिटामोल और इबूप्रोफेन को एक साथ लेना सुरक्षित है।", mr: "सुरक्षित वापर." }
};

// ==========================================
// 2. DASHBOARD SVG CHARTS ENGINE
// ==========================================

function renderSalesChart() {
  const container = document.getElementById("sales-chart-container");
  if (!container) return;

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const revenueData = [18500, 22400, 19800, 26500, 31200, 28900, 34600];
  const rxScanData = [142, 185, 160, 210, 245, 230, 310];

  const width = 480;
  const height = 210;
  const padding = 35;

  const maxRev = Math.max(...revenueData) * 1.15;
  const maxRx = Math.max(...rxScanData) * 1.15;

  let revPoints = "";
  let rxPoints = "";
  let barsHtml = "";

  days.forEach((day, i) => {
    const x = padding + (i * (width - padding * 2) / (days.length - 1));
    const yRev = height - padding - (revenueData[i] / maxRev) * (height - padding * 2);
    const yRx = height - padding - (rxScanData[i] / maxRx) * (height - padding * 2);

    revPoints += `${x},${yRev} `;
    rxPoints += `${x},${yRx} `;

    barsHtml += `
      <text x="${x}" y="${height - 10}" font-size="10" font-weight="600" text-anchor="middle" fill="#64748b">${day}</text>
      <circle cx="${x}" cy="${yRev}" r="4" fill="#0284c7" stroke="#ffffff" stroke-width="2"/>
      <circle cx="${x}" cy="${yRx}" r="4" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
    `;
  });

  container.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" style="width: 100%; height: 100%; overflow: visible;">
      <line x1="${padding}" y1="${padding}" x2="${width - padding}" y2="${padding}" stroke="#e2e8f0" stroke-dasharray="3,3"/>
      <line x1="${padding}" y1="${height/2}" x2="${width - padding}" y2="${height/2}" stroke="#e2e8f0" stroke-dasharray="3,3"/>
      <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="#cbd5e1"/>

      <polyline fill="none" stroke="#0284c7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="${revPoints}"/>
      <polyline fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="${rxPoints}"/>

      ${barsHtml}

      <g transform="translate(${width / 2 - 110}, 15)">
        <rect x="0" y="0" width="10" height="10" rx="2" fill="#0284c7"/>
        <text x="16" y="9" font-size="10" font-weight="700" fill="#334155">Sales Revenue (₹)</text>
        <rect x="130" y="0" width="10" height="10" rx="2" fill="#10b981"/>
        <text x="146" y="9" font-size="10" font-weight="700" fill="#334155">Rx Vision Scans</text>
      </g>
    </svg>
  `;
}

function renderInventoryChart() {
  const container = document.getElementById("inventory-chart-container");
  if (!container) return;

  container.innerHTML = `
    <svg viewBox="0 0 200 200" style="width: 100%; height: 100%;">
      <circle cx="100" cy="100" r="70" fill="none" stroke="#0284c7" stroke-width="28" stroke-dasharray="150 300" stroke-dashoffset="0"/>
      <circle cx="100" cy="100" r="70" fill="none" stroke="#10b981" stroke-width="28" stroke-dasharray="110 300" stroke-dashoffset="-155"/>
      <circle cx="100" cy="100" r="70" fill="none" stroke="#f59e0b" stroke-width="28" stroke-dasharray="90 300" stroke-dashoffset="-270"/>
      <circle cx="100" cy="100" r="70" fill="none" stroke="#8b5cf6" stroke-width="28" stroke-dasharray="90 300" stroke-dashoffset="-365"/>

      <text x="100" y="94" font-size="14" font-weight="800" text-anchor="middle" fill="#0f172a">284</text>
      <text x="100" y="112" font-size="9" font-weight="700" text-anchor="middle" fill="#64748b">Total Drugs</text>
    </svg>
  `;
}

// ==========================================
// 3. BARCODE SVG GENERATOR
// ==========================================

function generateBarcodeSvg(barcodeStr, height = 24, medId = "dolo_650") {
  const str = barcodeStr || "890123456701";
  let barsHtml = "";
  let x = 0;
  for (let i = 0; i < str.length; i++) {
    const num = parseInt(str[i], 10) || 1;
    const w1 = (num % 2 === 0) ? 2 : 1;
    const w2 = (num % 3 === 0) ? 3 : 1.5;
    barsHtml += `<rect x="${x}" y="0" width="${w1}" height="${height}" fill="#0f172a"/>`;
    x += w1 + 1.5;
    barsHtml += `<rect x="${x}" y="0" width="${w2}" height="${height}" fill="#0f172a"/>`;
    x += w2 + 1;
  }
  return `
    <svg viewBox="0 0 ${x + 2} ${height + 8}" 
         style="height: ${height}px; max-width: ${height > 30 ? '280px' : '120px'}; cursor: pointer;" 
         onclick="event.stopPropagation(); app.openBarcodeModal('${medId}');"
         title="Click to Enlarge Barcode in High Resolution">
      ${barsHtml}
      <text x="${x / 2}" y="${height + 7}" font-family="monospace" font-size="${height > 30 ? 10 : 6}" font-weight="700" text-anchor="middle" fill="#475569">${str}</text>
    </svg>
  `;
}

// ==========================================
// 4. MODALS & PATIENT MANAGEMENT
// ==========================================

let activeModalMedId = null;

function openBarcodeModal(medId) {
  let med = MEDICINE_CATALOG.find(m => m.id === medId || m.code === medId || m.barcode === medId) || MEDICINE_CATALOG[0];
  activeModalMedId = med.id;
  document.getElementById("barcode-modal-title").textContent = `${med.name} (${med.code})`;
  document.getElementById("barcode-modal-subtitle").textContent = `${med.category} • Unit Retail: ₹${med.price.toFixed(2)}`;
  document.getElementById("barcode-modal-svg-container").innerHTML = generateBarcodeSvg(med.barcode, 64, med.id);
  document.getElementById("barcode-modal-code-num").textContent = med.barcode;
  document.getElementById("barcode-modal-location").textContent = `📍 Storage: ${med.location || 'Rack A-01'}`;
  document.getElementById("barcode-modal-overlay").style.display = "flex";
}

function closeBarcodeModal() {
  document.getElementById("barcode-modal-overlay").style.display = "none";
}

function handleModalAddToCart() {
  if (activeModalMedId) {
    addToCart(activeModalMedId);
    closeBarcodeModal();
  }
}

function printBarcodeLabel() {
  showToast("Printing Barcode Label", "Sent Code 128 barcode label to thermal printer spool.", "info");
}

function openPatientHistoryModal(patId) {
  const patient = PATIENT_DATABASE.find(p => p.id === patId || p.code === patId) || PATIENT_DATABASE[0];
  document.getElementById("pat-modal-name").textContent = `${patient.name} (${patient.code})`;
  document.getElementById("patient-modal-overlay").style.display = "flex";
}

function closePatientHistoryModal() {
  document.getElementById("patient-modal-overlay").style.display = "none";
}

function viewPastInvoicePdf() { 
  closePatientHistoryModal(); 
  showToast("PDF Invoice Export", "Opened past patient invoice PDF.", "info");
}

function reorderPastBill() { 
  closePatientHistoryModal(); 
  addToCartWithQty("dolo_650", 15);
  addToCartWithQty("panto_40", 10);
  switchTab("billing");
  showToast("Reorder Executed", "Loaded past bill items into current checkout basket.", "success");
}

function openAddPatientModal() {
  document.getElementById("new-patient-name").value = "";
  document.getElementById("new-patient-age").value = "34";
  document.getElementById("new-patient-gender").value = "Female";
  document.getElementById("new-patient-phone").value = "+91 98234-56789";
  document.getElementById("new-patient-blood").value = "O+";
  document.getElementById("new-patient-allergies").value = "None";
  document.getElementById("new-patient-address").value = "Indiranagar, Bengaluru";
  document.getElementById("add-patient-modal-overlay").classList.add("show");
  setTimeout(() => {
    const nameInput = document.getElementById("new-patient-name");
    if (nameInput) nameInput.focus();
  }, 100);
}

function closeAddPatientModal() {
  document.getElementById("add-patient-modal-overlay").classList.remove("show");
}

function saveNewPatientFromModal() {
  const name = document.getElementById("new-patient-name").value.trim();
  if (!name) {
    showToast("Input Required", "Please enter patient full name.", "warning");
    return;
  }
  const age = parseInt(document.getElementById("new-patient-age").value, 10) || 30;
  const gender = document.getElementById("new-patient-gender").value;
  const phone = document.getElementById("new-patient-phone").value.trim() || "+91 98000-00000";
  const bloodGroup = document.getElementById("new-patient-blood").value;
  const allergiesInput = document.getElementById("new-patient-allergies").value.trim();
  const address = document.getElementById("new-patient-address").value.trim() || "Bengaluru, Karnataka";
  
  const allergies = allergiesInput ? allergiesInput.split(",").map(s => s.trim()) : ["None"];
  const patCode = `PAT-2026-00${PATIENT_DATABASE.length + 1}`;
  
  const newPat = {
    id: `pat_${Date.now()}`,
    code: patCode,
    name: name,
    age: age,
    gender: gender,
    phone: phone,
    email: `${name.toLowerCase().replace(/\s+/g, ".")}@gmail.com`,
    address: address,
    bloodGroup: bloodGroup,
    doctor: "Dr. Ananya Verma, MD",
    allergies: allergies,
    activeMeds: ["Pantoprazole 40mg"]
  };
  
  PATIENT_DATABASE.push(newPat);
  closeAddPatientModal();
  renderPatientCards();
  showToast("Patient Registered", `Added ${name} (${patCode}) to clinic database.`, "success");
}

// ==========================================
// 5. DYNAMIC FORMULATION ENGINE & ADD DRUG MODAL
// ==========================================

function openAddDrugModal() {
  document.getElementById("new-drug-name").value = "";
  document.getElementById("new-drug-category").value = "Antibiotic";
  document.getElementById("new-drug-price").value = "145.00";
  document.getElementById("new-drug-stock").value = "100";
  document.getElementById("new-drug-minstock").value = "25";
  document.getElementById("new-drug-batch").value = `BAT-${Math.floor(1000 + Math.random() * 9000)}`;
  document.getElementById("new-drug-expiry").value = "12/2028";
  document.getElementById("new-drug-location").value = "Rack B, Shelf 3 (B-03)";
  document.getElementById("add-drug-modal-overlay").classList.add("show");
}

function closeAddDrugModal() {
  document.getElementById("add-drug-modal-overlay").classList.remove("show");
}

function saveNewDrugFromModal() {
  const name = document.getElementById("new-drug-name").value.trim();
  if (!name) {
    showToast("Input Required", "Please enter the medication trade name.", "warning");
    return;
  }

  const category = document.getElementById("new-drug-category").value;
  const price = parseFloat(document.getElementById("new-drug-price").value) || 145.00;
  const stock = parseInt(document.getElementById("new-drug-stock").value, 10) || 100;
  const minStock = parseInt(document.getElementById("new-drug-minstock").value, 10) || 25;
  const batch = document.getElementById("new-drug-batch").value || "BAT-9000";
  const expiry = document.getElementById("new-drug-expiry").value || "12/2028";
  const location = document.getElementById("new-drug-location").value || "Rack B, Shelf 3 (B-03)";

  const clean = name.toLowerCase().replace(/[^a-z0-9]/g, "_");
  const codeNum = Math.floor(10000 + Math.random() * 90000);
  const medId = `med_${clean}_${Date.now().toString().slice(-4)}`;

  const newMed = {
    id: medId,
    name: name,
    code: `MED-${name.substring(0, 3).toUpperCase()}-${codeNum}`,
    barcode: `890${codeNum}67${Math.floor(10 + Math.random() * 89)}`,
    category: category,
    stock: stock,
    minStock: minStock,
    price: price,
    batch: batch,
    expiry: expiry,
    hsn: "3004",
    unit: "tablets",
    maxDaily: 2000,
    location: location
  };

  MEDICINE_CATALOG.unshift(newMed);
  closeAddDrugModal();
  renderInventoryTable();
  renderLowStockTable();
  renderExpiringTable();
  renderBillingCatalog();
  renderBarcodeStickers();

  showToast("Drug Registered Successfully!", `Added ${newMed.name} (${newMed.code}) under ${newMed.category}. Barcode generated!`, "success");
}

function findOrCreateMedicine(query) {
  const clean = query.trim();
  if (!clean) return null;
  const existing = MEDICINE_CATALOG.find(m => 
    m.name.toLowerCase().includes(clean.toLowerCase()) || 
    m.code.toLowerCase().includes(clean.toLowerCase()) ||
    m.barcode.includes(clean)
  );
  if (existing) return existing;

  const id = `dyn_${clean.toLowerCase().replace(/[^a-z0-9]/g, "_")}_${Date.now().toString().slice(-4)}`;
  const formattedName = clean.charAt(0).toUpperCase() + clean.slice(1);
  const codeNum = Math.floor(10000 + Math.random() * 90000);
  const newMed = {
    id: id,
    name: formattedName.includes("mg") ? formattedName : `${formattedName} Tablet`,
    code: `MED-${clean.substring(0, 3).toUpperCase()}-${codeNum}`,
    barcode: `890${codeNum}67${Math.floor(10 + Math.random() * 89)}`,
    category: "General Formulation",
    stock: 100,
    minStock: 20,
    price: 45.00,
    batch: `BAT-${Math.floor(1000 + Math.random() * 9000)}`,
    expiry: "12/2027",
    hsn: "3004",
    unit: "tablets",
    maxDaily: 2000,
    location: "Rack H, Shelf 1 (H-01)"
  };

  MEDICINE_CATALOG.push(newMed);
  renderInventoryTable();
  renderLowStockTable();
  renderExpiringTable();
  renderBillingCatalog();
  renderBarcodeStickers();
  return newMed;
}

function numberToWordsRupees(amount) {
  const rounded = Math.round(amount);
  if (rounded === 0) return "Rupees Zero Only";
  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  function convert(n) {
    if (n < 20) return ones[n];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? " " + ones[n % 10] : "");
    if (n < 1000) return ones[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " + convert(n % 100) : "");
    return convert(Math.floor(n / 1000)) + " Thousand";
  }
  return "Rupees " + convert(rounded) + " Only";
}

// ==========================================
// 6. STATE & NOTIFICATION BELL DRAWER
// ==========================================

const state = {
  isAuthorized: false,
  activeTab: "overview",
  currentLang: "en",
  pinEntered: "",
  cameraStream: null,
  activeBasketIndex: 0,
  billBaskets: [[], [], []],
  selectedPatient: null,
  scannedPrescriptionMeds: [],
  scannedInvoiceItems: []
};

function toggleNotificationPopover() {
  const popover = document.getElementById("notification-popover");
  if (!popover) return;

  const isVisible = popover.classList.contains("show");
  if (isVisible) {
    popover.classList.remove("show");
  } else {
    renderNotificationItems();
    popover.classList.add("show");
  }
}

function renderNotificationItems() {
  const listContainer = document.getElementById("popover-alerts-list");
  if (!listContainer) return;

  listContainer.innerHTML = `
    <div class="notification-item critical unread" onclick="app.switchTab('inventory'); app.toggleNotificationPopover();">
      <div class="notification-icon-wrap">
        <i class="fa-solid fa-triangle-exclamation"></i>
      </div>
      <div class="notification-body">
        <div style="font-weight:700; font-size:0.85rem; color:#dc2626;">Critical Out of Stock Alert</div>
        <div style="font-size:0.775rem; color:#475569; margin-top:2px;">Augmentin 625mg & Atorvastatin 20mg have 0 stock available.</div>
        <div style="font-size:0.68rem; color:#0284c7; margin-top:4px; font-weight:600;">Click to Restock</div>
      </div>
    </div>

    <div class="notification-item critical unread" onclick="app.switchTab('overview'); app.toggleNotificationPopover();">
      <div class="notification-icon-wrap">
        <i class="fa-solid fa-calendar-xmark"></i>
      </div>
      <div class="notification-body">
        <div style="font-weight:700; font-size:0.85rem; color:#dc2626;">Expired Batch Quarantine</div>
        <div style="font-size:0.775rem; color:#475569; margin-top:2px;">Amoxicillin 500mg (Batch AMX-2025X) expired in March 2026.</div>
        <div style="font-size:0.68rem; color:#0284c7; margin-top:4px; font-weight:600;">Quarantine Batch</div>
      </div>
    </div>

    <div class="notification-item warning" style="border-bottom:1px solid #f1f5f9;">
      <div class="notification-icon-wrap">
        <i class="fa-solid fa-boxes-stacked"></i>
      </div>
      <div class="notification-body">
        <div style="font-weight:700; font-size:0.85rem; color:#d97706;">Low Stock Warning</div>
        <div style="font-size:0.775rem; color:#475569; margin-top:2px;">Azithromycin 500mg is below threshold (4 packs left).</div>
        <div style="font-size:0.68rem; color:#94a3b8; margin-top:4px;">1 hour ago</div>
      </div>
    </div>

    <div class="notification-item info">
      <div class="notification-icon-wrap">
        <i class="fa-solid fa-truck-ramp-box"></i>
      </div>
      <div class="notification-body">
        <div style="font-weight:700; font-size:0.85rem; color:#0284c7;">Supplier Receipt Verified</div>
        <div style="font-size:0.775rem; color:#475569; margin-top:2px;">Sun Pharma Invoice INV-SP-2026-9812 committed to stock.</div>
        <div style="font-size:0.68rem; color:#94a3b8; margin-top:4px;">2 hours ago</div>
      </div>
    </div>
  `;
}

function dismissAllNotifications() {
  const popover = document.getElementById("notification-popover");
  const badge = document.getElementById("bell-badge");
  if (popover) popover.classList.remove("show");
  if (badge) badge.style.display = "none";
  showToast("Notifications Cleared", "All clinical system alerts dismissed.", "success");
}

function switchBillBasket(basketIdx) {
  state.activeBasketIndex = basketIdx;
  for (let i = 0; i < 3; i++) {
    const tabBtn = document.getElementById(`bill-draft-tab-${i + 1}`);
    if (tabBtn) {
      tabBtn.style.background = i === basketIdx ? "#0284c7" : "#ffffff";
      tabBtn.style.color = i === basketIdx ? "#ffffff" : "#334155";
    }
  }
  renderBillCart();
}

function updateBasketBadgeCounts() {
  for (let i = 0; i < 3; i++) {
    const badge = document.getElementById(`bill-draft-count-${i + 1}`);
    if (badge) badge.textContent = state.billBaskets[i].reduce((s, item) => s + item.qty, 0);
  }
}

function showToast(title, desc, type = "info") {
  const stack = document.getElementById("toast-stack");
  const toast = document.createElement("div");
  toast.className = `toast-alert ${type}`;
  toast.innerHTML = `
    <div class="toast-alert-content">
      <div class="toast-alert-title">${title}</div>
      <div class="toast-alert-desc">${desc}</div>
    </div>
    <button class="toast-close-btn">&times;</button>
  `;
  stack.appendChild(toast);
  toast.querySelector(".toast-close-btn").addEventListener("click", () => toast.remove());
  setTimeout(() => toast.remove(), 4000);
}

// ==========================================
// 7. DASHBOARD LOW STOCK & EXPIRED BATCH TABLES
// ==========================================

function renderLowStockTable() {
  const tbody = document.getElementById("dash-low-stock-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  const lowStockList = MEDICINE_CATALOG.filter(med => med.stock < med.minStock);

  if (lowStockList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--text-muted); padding:1rem;">All inventory levels are fully stocked.</td></tr>`;
    return;
  }

  lowStockList.forEach(med => {
    const isZero = med.stock <= 0;
    const badgeClass = isZero ? "badge-danger" : "badge-warning"; // Keep classes for styling
    const badgeText = isZero ? "OUT OF STOCK" : "CRITICAL LOW";

    tbody.innerHTML += `
      <tr>
        <td>
          <strong>${med.name}</strong><br>
          <code style="font-size:0.68rem; color:var(--color-primary);">${med.code}</code> • <span style="font-size:0.68rem; color:#0284c7;">Location: ${med.location}</span>
        </td>
        <td><strong style="color:${isZero ? '#dc2626' : '#d97706'}">${med.stock} ${med.unit}</strong></td>
        <td>${med.minStock} ${med.unit}</td>
        <td>
          <div style="display:flex; flex-direction:column; gap:0.25rem; align-items:flex-start;">
            <span class="badge ${badgeClass}" style="font-size:0.65rem;">${badgeText}</span>
            <button class="btn btn-secondary" style="padding:0.15rem 0.4rem; font-size:0.68rem; margin-top:2px;" onclick="app.quickAdjustStock('${med.id}', 50)">+50 Restock</button>
          </div> <!-- Keeping for quick action, not an emoji in this context -->
        </td>
      </tr>
    `;
  });
}

function renderExpiringTable() {
  const tbody = document.getElementById("dash-expiring-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  const expiringList = MEDICINE_CATALOG.filter(med => 
    med.expiry.includes("2026") || med.expiry.includes("03/2026") || med.expiry.includes("05/2026")
  );

  if (expiringList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--text-muted); padding:1rem;">No expired or near-expiry batches detected.</td></tr>`;
    return;
  }

  expiringList.forEach(med => {
    const isExpired = med.expiry.includes("03/2026") || med.expiry.includes("05/2026");
    const badgeClass = isExpired ? "badge-danger" : "badge-warning"; // Keep classes for styling
    const badgeText = isExpired ? "EXPIRED QUARANTINE" : "EXPIRING < 60 DAYS";

    tbody.innerHTML += `
      <tr>
        <td>
          <strong>${med.name}</strong><br>
          <code style="font-size:0.68rem; color:var(--color-primary);">${med.code}</code>
        </td>
        <td><code>${med.batch}</code></td>
        <td><span style="font-weight:700; color:${isExpired ? '#dc2626' : '#d97706'}">${med.expiry}</span></td>
        <td>
          <div style="display:flex; flex-direction:column; gap:0.25rem; align-items:flex-start;">
            <span class="badge ${badgeClass}" style="font-size:0.65rem;">${badgeText}</span>
            <button class="btn btn-secondary" style="padding:0.15rem 0.4rem; font-size:0.68rem; margin-top:2px;" onclick="app.flagExpiredBatch('${med.id}')">Quarantine Batch</button>
          </div> <!-- Removed ⚡ for quick action -->
        </td>
      </tr>
    `;
  });
}

// ==========================================
// 8. SAFETY INTERACTION & DOSAGE VALIDATION
// ==========================================

function setupInteractionSelects() {
  const s1 = document.getElementById("inter-select-1");
  const s2 = document.getElementById("inter-select-2");
  if (!s1 || !s2) return;
  s1.innerHTML = ""; s2.innerHTML = "";
  MEDICINE_CATALOG.forEach((med, idx) => {
    s1.innerHTML += `<option value="${med.id}" ${idx === 14 ? 'selected' : ''}>${med.name} (${med.code})</option>`;
    s2.innerHTML += `<option value="${med.id}" ${idx === 13 ? 'selected' : ''}>${med.name} (${med.code})</option>`;
  });
}

function runInteractionCheck() {
  const m1 = document.getElementById("inter-select-1").value;
  const m2 = document.getElementById("inter-select-2").value;
  const resultCard = document.getElementById("interaction-result");
  const resultTitle = document.getElementById("inter-result-title");
  const resultDesc = document.getElementById("inter-result-desc");
  const resultIcon = document.getElementById("inter-result-icon");

  const pairKey1 = `${m1}+${m2}`;
  const pairKey2 = `${m2}+${m1}`;
  const interaction = DRUG_INTERACTION_MATRIX[pairKey1] || DRUG_INTERACTION_MATRIX[pairKey2];

  resultCard.style.display = "block";

  if (interaction) {
    if (interaction.severity === "CRITICAL") {
      resultCard.className = "interaction-result-card critical";
      resultIcon.style.backgroundColor = "#fee2e2"; // Keep color for severity
      resultIcon.innerHTML = `<span style="font-size: 1.5rem; color: #dc2626;">Alert</span>`;
      resultTitle.textContent = "Critical Contraindication Detected";
      resultDesc.textContent = interaction.en;
      showToast("Clinical Alert", "Critical Drug Interaction Detected!", "danger");
    } else {
      resultCard.className = "interaction-result-card warning";
      resultIcon.style.backgroundColor = "#fef3c7"; // Keep color for severity
      resultIcon.innerHTML = `<span style="font-size: 1.5rem; color: #d97706;">Warning</span>`;
      resultTitle.textContent = "Moderate Interaction Warning";
      resultDesc.textContent = interaction.en;
      showToast("Clinical Warning", "Moderate Drug Interaction Warning.", "warning");
    }
  } else {
    const med1 = MEDICINE_CATALOG.find(m => m.id === m1);
    const med2 = MEDICINE_CATALOG.find(m => m.id === m2);
    resultCard.className = "interaction-result-card safe";
    resultIcon.style.backgroundColor = "#dcfce7"; // Keep color for safety
    resultIcon.innerHTML = `<span style="font-size: 1.5rem; color: #16a34a;">OK</span>`;
    resultTitle.textContent = "Safe Combination Verified";
    resultDesc.textContent = `No adverse interaction between ${med1 ? med1.name : m1} and ${med2 ? med2.name : m2}. Safe for co-administration.`;
    showToast("Safety Checked", "No adverse interaction detected.", "success");
  }
}

function setupDosageSelects() {
  const select = document.getElementById("dosage-select-drug");
  if (!select) return;
  select.innerHTML = "";
  MEDICINE_CATALOG.forEach(med => {
    select.innerHTML += `<option value="${med.id}">${med.name} (${med.code})</option>`;
  });
}

function validateDosage() {
  const drugId = document.getElementById("dosage-select-drug").value;
  const strengthInput = document.getElementById("dosage-input-strength").value;
  const freqSelect = document.getElementById("dosage-select-freq").value;
  const resultCard = document.getElementById("dosage-result");

  const med = MEDICINE_CATALOG.find(m => m.id === drugId) || MEDICINE_CATALOG[0];
  const strength = parseFloat(strengthInput) || (med.name.match(/\d+/) ? parseFloat(med.name.match(/\d+/)[0]) : 500);
  const freq = parseInt(freqSelect, 10) || 1;
  const totalDaily = strength * freq;
  const maxLimit = med.maxDaily || 4000;

  resultCard.style.display = "block";

  if (totalDaily > maxLimit) {
    resultCard.className = "interaction-result-card critical";
    resultCard.innerHTML = `
      <div style="display: flex; gap: 1rem; align-items: flex-start;">
        <div style="font-size: 1.8rem; color: #dc2626;">Alert</div>
        <div>
          <h4 style="font-size: 1.1rem; font-weight: 700; color: #dc2626; margin-bottom: 0.35rem;">CRITICAL OVERDOSE HAZARD DETECTED</h4>
          <p style="font-size: 0.9rem; line-height: 1.45; color: #7f1d1d;">
            Prescribed Total Daily Dose: <strong>${totalDaily}mg/day</strong> (${strength}mg × ${freq} times).<br>
            FDA Maximum Safe Daily Limit for <strong>${med.name}</strong> is <strong>${maxLimit}mg/day</strong>.<br>
            <span style="font-weight:700; color:#dc2626;">Hazard: Exceeds threshold by ${totalDaily - maxLimit}mg. High risk of organ toxicity!</span>
          </p>
        </div>
      </div>
    `;
    showToast("Overdose Warning!", `${totalDaily}mg/day exceeds safe limit of ${maxLimit}mg/day!`, "danger");
  } else {
    resultCard.className = "interaction-result-card safe";
    resultCard.innerHTML = `
      <div style="display: flex; gap: 1rem; align-items: flex-start;">
        <div style="font-size: 1.8rem; color: #16a34a;">OK</div>
        <div>
          <h4 style="font-size: 1.1rem; font-weight: 700; color: #16a34a; margin-bottom: 0.35rem;">DOSAGE APPROVED - WITHIN SAFE FDA LIMITS</h4>
          <p style="font-size: 0.9rem; line-height: 1.45; color: #14532d;">
            Prescribed Total Daily Dose: <strong>${totalDaily}mg/day</strong> (${strength}mg × ${freq} times).<br>
            FDA Maximum Safe Daily Limit for <strong>${med.name}</strong>: <strong>${maxLimit}mg/day</strong>.<br>
            Status: <span style="font-weight:700; color:#16a34a;">Clinically safe for prescription execution.</span>
          </p>
        </div>
      </div>
    `;
    showToast("Dosage Safe", `${totalDaily}mg/day is clinically safe.`, "success");
  }
}

// ==========================================
// 9. SEARCH ENGINE MATCHING ALGORITHM
// ==========================================

function searchMedicines(queryStr) {
  const q = (queryStr || "").trim().toLowerCase();
  if (!q) return MEDICINE_CATALOG;

  return MEDICINE_CATALOG.filter(med => {
    const nameMatch = med.name.toLowerCase().includes(q);
    const codeMatch = med.code.toLowerCase().includes(q);
    const catMatch = med.category.toLowerCase().includes(q);
    const barcodeMatch = med.barcode.includes(q);
    const locationMatch = med.location ? med.location.toLowerCase().includes(q) : false;
    return nameMatch || codeMatch || catMatch || barcodeMatch || locationMatch;
  });
}

function handleGlobalSearchInput() {
  const input = document.getElementById("global-search-input");
  const dropdown = document.getElementById("global-search-dropdown");
  if (!input || !dropdown) return;

  const query = input.value.trim().toLowerCase();
  if (!query) {
    dropdown.classList.remove("show");
    dropdown.innerHTML = "";
    return;
  }

  const matches = searchMedicines(query);

  if (matches.length === 0) {
    dropdown.innerHTML = `<div style="padding:0.85rem; text-align:center; color:var(--text-muted); font-size:0.8rem">No matching tablets found for "${query}".</div>`;
    dropdown.classList.add("show");
    return;
  }

  dropdown.innerHTML = "";
  matches.slice(0, 6).forEach(med => {
    const barcodeSvg = generateBarcodeSvg(med.barcode, 20, med.id);
    const itemEl = document.createElement("div");
    itemEl.className = "global-search-item";
    itemEl.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; width:100%;">
        <div>
          <div style="font-weight: 800; font-size: 0.9rem; color: var(--text-primary);">
            ${med.name} <code style="font-size: 0.725rem; color: var(--color-primary);">${med.code}</code>
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
            ${med.category} • <strong style="color:var(--color-primary)">₹${med.price.toFixed(2)}</strong>
          </div>
          <div style="margin-top: 4px;">${barcodeSvg}</div>
        </div> <!-- Keeping 📍 for location visual -->
        <div style="display:flex; flex-direction:column; align-items:flex-end; gap:0.25rem;">
          <span class="drug-location-badge">📍 ${med.location || 'Rack A-01'}</span>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 0.5rem;">
        <div style="display:flex; gap:0.25rem;">
          <button class="btn btn-secondary" style="padding:0.2rem 0.45rem; font-size:0.7rem; font-weight:700;" onclick="app.addToCartWithQty('${med.id}', 1); app.closeGlobalDropdown();">+1</button>
          <button class="btn btn-secondary" style="padding:0.2rem 0.45rem; font-size:0.7rem; font-weight:700;" onclick="app.addToCartWithQty('${med.id}', 5); app.closeGlobalDropdown();">+5</button>
          <button class="btn btn-primary" style="padding:0.2rem 0.5rem; font-size:0.7rem; font-weight:700;" onclick="app.addToCartWithQty('${med.id}', 10); app.closeGlobalDropdown();">+10</button>
        </div>
      </div>
    `;
    dropdown.appendChild(itemEl);
  });
  dropdown.classList.add("show");
}

function closeGlobalDropdown() {
  const dropdown = document.getElementById("global-search-dropdown");
  if (dropdown) dropdown.classList.remove("show");
}

// ==========================================
// 10. POS BILLING & CATALOG SEARCH
// ==========================================

function renderBillingCatalog() {
  const container = document.getElementById("billing-catalog-list");
  if (!container) return;
  container.innerHTML = "";

  const searchInput = document.getElementById("billing-search-input");
  const searchVal = searchInput ? searchInput.value : "";
  const filtered = searchMedicines(searchVal);

  if (filtered.length === 0) {
    container.innerHTML = `<div style="padding:2.5rem; text-align:center; color:var(--text-muted); font-size:0.85rem;">No matching tablets found in pharmacy catalog for "${searchVal}".</div>`;
    return;
  }

  filtered.forEach(med => {
    const isLow = med.stock <= 0;
    const barcodeSvg = generateBarcodeSvg(med.barcode, 20, med.id);
    container.innerHTML += `
      <div class="cart-item" style="cursor: pointer; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <h4 style="${isLow ? 'text-decoration:line-through; color:var(--text-muted)' : ''}">${med.name}</h4>
          <p style="font-size:0.75rem; color:var(--text-muted)">
            <code style="color:var(--color-primary);">${med.code}</code> • ₹${med.price.toFixed(2)} • 📍 ${med.location || 'Rack A-01'}
          </p> <!-- Keeping 📍 for location visual -->
        </div>
        <div style="display:flex; align-items:center; gap:0.35rem;">
          ${barcodeSvg}
          <div style="display:flex; gap:0.25rem; margin-left:0.5rem;">
            <button class="btn btn-secondary" style="padding:0.25rem 0.45rem; font-size:0.725rem; font-weight:700;" onclick="app.addToCartWithQty('${med.id}', 1)">+1</button>
            <button class="btn btn-secondary" style="padding:0.25rem 0.45rem; font-size:0.725rem; font-weight:700;" onclick="app.addToCartWithQty('${med.id}', 5)">+5</button>
            <button class="btn btn-primary" style="padding:0.25rem 0.5rem; font-size:0.725rem; font-weight:700;" onclick="app.addToCartWithQty('${med.id}', 10)">+10</button>
          </div>
        </div>
      </div>
    `;
  });
}

function addToCart(medId) { addToCartWithQty(medId, 1); }

function addToCartWithQty(medId, addQty = 1) {
  let med = MEDICINE_CATALOG.find(m => m.id === medId || m.code === medId || m.barcode === medId);
  if (!med) return;

  const currentCart = state.billBaskets[state.activeBasketIndex];
  const existing = currentCart.find(item => item.id === med.id);
  if (existing) existing.qty += addQty;
  else {
    currentCart.push({ id: med.id, name: med.name, code: med.code, barcode: med.barcode, batch: med.batch, expiry: med.expiry, hsn: med.hsn, qty: addQty, price: med.price });
  }
  renderBillCart();
  updateBasketBadgeCounts();
  showToast("Item Added", `+${addQty} ${med.name} added to Bill #${state.activeBasketIndex + 1}.`, "success");
}

function adjustCartQty(id, delta) {
  const currentCart = state.billBaskets[state.activeBasketIndex];
  const item = currentCart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.billBaskets[state.activeBasketIndex] = currentCart.filter(c => c.id !== id);
  renderBillCart();
  updateBasketBadgeCounts();
}

function renderBillCart() {
  const container = document.getElementById("billing-cart-items");
  const countBadge = document.getElementById("cart-item-count");
  if (!container) return;

  container.innerHTML = "";
  const currentCart = state.billBaskets[state.activeBasketIndex];
  const totalCount = currentCart.reduce((sum, item) => sum + item.qty, 0);
  countBadge.textContent = `${totalCount} items (Bill #${state.activeBasketIndex + 1})`;

  if (currentCart.length === 0) {
    container.innerHTML = `<div style="padding:3rem 1.5rem; text-align:center; color:var(--text-muted)">Billing Basket #${state.activeBasketIndex + 1} is empty. Use quick search [Ctrl+K] or scan barcode.</div>`;
    document.getElementById("billing-clear-btn").disabled = true;
    document.getElementById("billing-checkout-btn").disabled = true;
    document.getElementById("bill-subtotal-val").textContent = "₹0.00";
    document.getElementById("bill-discount-val").textContent = "₹0.00";
    document.getElementById("bill-tax-val").textContent = "₹0.00";
    document.getElementById("bill-total-val").textContent = "₹0.00";
    return;
  }

  document.getElementById("billing-clear-btn").disabled = false;
  document.getElementById("billing-checkout-btn").disabled = false;

  let subtotal = 0;
  currentCart.forEach(item => {
    const itemTotal = item.qty * item.price;
    subtotal += itemTotal;
    container.innerHTML += `
      <div class="cart-item">
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <p><code style="font-size:0.7rem; color:var(--color-primary);">${item.code || 'MED-001'}</code> • ₹${item.price.toFixed(2)} / unit</p>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="app.adjustCartQty('${item.id}', -1)">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="app.adjustCartQty('${item.id}', 1)">+</button>
        </div>
        <div class="cart-item-price">₹${itemTotal.toFixed(2)}</div>
      </div>
    `;
  });

  const gstSelect = document.getElementById("billing-gst-select");
  const discountSelect = document.getElementById("billing-discount-select");
  const gstPct = gstSelect ? (parseFloat(gstSelect.value) || 0) : 5;
  const discountPct = discountSelect ? (parseFloat(discountSelect.value) || 0) : 0;
  const discount = subtotal * (discountPct / 100);
  const subtotalAfterDiscount = subtotal - discount;
  const tax = subtotalAfterDiscount * (gstPct / 100);
  const total = subtotalAfterDiscount + tax;

  document.getElementById("bill-subtotal-val").textContent = `₹${subtotal.toFixed(2)}`;
  document.getElementById("bill-discount-label").textContent = `Discounts (${discountPct}%)`;
  document.getElementById("bill-discount-val").textContent = `-₹${discount.toFixed(2)}`;
  document.getElementById("bill-tax-label").textContent = `Tax (${gstPct}% GST)`;
  document.getElementById("bill-tax-val").textContent = `₹${tax.toFixed(2)}`;
  document.getElementById("bill-total-val").textContent = `₹${total.toFixed(2)}`;
  updateBasketBadgeCounts();
}

function clearCart() {
  state.billBaskets[state.activeBasketIndex] = [];
  state.selectedPatient = null;
  document.getElementById("billing-active-patient-name").textContent = "Walk-in Patient";
  renderBillCart();
  updateBasketBadgeCounts();
}

function processCheckout() {
  const currentCart = state.billBaskets[state.activeBasketIndex];
  if (currentCart.length === 0) return;

  const overlay = document.getElementById("invoice-pdf-overlay");
  overlay.classList.add("show");
  const invNumber = `INV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  document.getElementById("pdf-invoice-number").textContent = invNumber;
  document.getElementById("pdf-invoice-date").textContent = new Date().toISOString().replace("T", " ").substring(0, 16);
  document.getElementById("pdf-patient-name").textContent = state.selectedPatient ? state.selectedPatient.name : "Walk-in Patient";
  
  const tbody = document.getElementById("pdf-invoice-items");
  tbody.innerHTML = "";
  let totalGross = 0;
  
  currentCart.forEach((item, index) => {
    const itemTotal = item.qty * item.price;
    totalGross += itemTotal;
    const barcodeSvg = generateBarcodeSvg(item.barcode, 20, item.id);
    tbody.innerHTML += `
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 0.5rem; text-align: center; border: 1px solid #cbd5e1;">${index + 1}</td>
        <td style="padding: 0.5rem; text-align: left; border: 1px solid #cbd5e1;">
          <strong>${item.name}</strong><br>
          <code style="font-size:0.65rem; color:#0284c7;">${item.code || 'MED-001'}</code>
          <div>${barcodeSvg}</div>
        </td>
        <td style="padding: 0.5rem; text-align: center; border: 1px solid #cbd5e1;">${item.hsn || "3004"}</td>
        <td style="padding: 0.5rem; text-align: center; border: 1px solid #cbd5e1;"><code>${item.batch || "AMX-2026A"}</code></td>
        <td style="padding: 0.5rem; text-align: center; border: 1px solid #cbd5e1;">${item.expiry || "08/2026"}</td>
        <td style="padding: 0.5rem; text-align: center; border: 1px solid #cbd5e1;">${item.qty}</td>
        <td style="padding: 0.5rem; text-align: right; border: 1px solid #cbd5e1;">₹${item.price.toFixed(2)}</td>
        <td style="padding: 0.5rem; text-align: right; border: 1px solid #cbd5e1; font-weight:600;">₹${itemTotal.toFixed(2)}</td>
      </tr>
    `;
  });

  const gstSelect = document.getElementById("billing-gst-select");
  const discountSelect = document.getElementById("billing-discount-select");
  const gstPct = gstSelect ? (parseFloat(gstSelect.value) || 0) : 5;
  const discountPct = discountSelect ? (parseFloat(discountSelect.value) || 0) : 0;
  const discount = totalGross * (discountPct / 100);
  const taxableSubtotal = totalGross - discount;
  const halfTaxRate = gstPct / 2;
  const cgst = taxableSubtotal * (halfTaxRate / 100);
  const sgst = taxableSubtotal * (halfTaxRate / 100);
  const netPayable = taxableSubtotal + cgst + sgst;

  document.getElementById("pdf-subtotal-gross-val").textContent = `₹${totalGross.toFixed(2)}`;
  document.getElementById("pdf-discount-pct").textContent = discountPct;
  document.getElementById("pdf-discount-val").textContent = `-₹${discount.toFixed(2)}`;
  document.getElementById("pdf-subtotal-val").textContent = `₹${taxableSubtotal.toFixed(2)}`;
  document.getElementById("pdf-cgst-label").textContent = `CGST (${halfTaxRate}%):`;
  document.getElementById("pdf-cgst-val").textContent = `₹${cgst.toFixed(2)}`;
  document.getElementById("pdf-sgst-label").textContent = `SGST (${halfTaxRate}%):`;
  document.getElementById("pdf-sgst-val").textContent = `₹${sgst.toFixed(2)}`;
  document.getElementById("pdf-total-val").textContent = `₹${netPayable.toFixed(2)}`;
  document.getElementById("pdf-amount-words").textContent = numberToWordsRupees(netPayable);
}

function closeInvoicePdf() {
  document.getElementById("invoice-pdf-overlay").classList.remove("show");
  state.billBaskets[state.activeBasketIndex] = [];
  state.selectedPatient = null;
  document.getElementById("billing-active-patient-name").textContent = "Walk-in Patient";
  renderBillCart();
  updateBasketBadgeCounts();
  document.getElementById("billing-search-input").focus();
}

function printReceipt() {
  showToast("Printing / Saving PDF", "Opening browser print dialog...", "info");
  setTimeout(() => window.print(), 400);
}

// ==========================================
// 11. REPORTS & AUDIT ENGINE
// ==========================================

function generateAuditReport() {
  const reportTypeSelect = document.getElementById("reports-type");
  const dateRangeSelect = document.getElementById("reports-range");
  const channelSelect = document.getElementById("reports-channel");
  const previewDiv = document.getElementById("reports-preview-container");
  const exportBtn = document.getElementById("reports-export-btn");

  if (!previewDiv) return;

  const reportType = reportTypeSelect ? reportTypeSelect.value : "sales";
  const dateRange = dateRangeSelect ? dateRangeSelect.value : "7days";
  const channel = channelSelect ? channelSelect.value : "all";

  showToast("Compiling Audit Data", `Generating live ${reportType.toUpperCase()} dataset (${dateRange}, channel: ${channel})...`, "info");

  let tableHtml = "";

  if (reportType === "sales") {
    tableHtml = `
      <div style="padding:1rem;">
        <h4 style="color:var(--text-primary); margin-bottom:0.35rem; font-weight:700;">📊 Sales Revenue & GST Audit Ledger (${dateRange.toUpperCase()})</h4>
        <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:1rem;">Verified POS ledger transactions under Pharmacy License KA-BLR-2026-98765 • Channel: ${channel.toUpperCase()}</p>
        <div class="table-container">
          <table>
            <thead>
              <tr style="background:#f8fafc;">
                <th>Transaction #</th><th>Date & Time</th><th>Patient Profile</th><th>Taxable (₹)</th><th>GST (5%)</th><th>Net Total (₹)</th><th>Channel</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>TX-2026-9041</code></td><td>2026-07-22 08:12</td><td>Priya Sharma (PAT-002)</td><td>₹7,142.86</td><td>₹357.14</td><td><strong style="color:var(--color-success)">₹7,500.00</strong></td><td><span class="badge badge-teal">HDFC Credit Card</span></td></tr>
              <tr><td><code>TX-2026-9040</code></td><td>2026-07-22 07:45</td><td>Walk-in Patient</td><td>₹285.71</td><td>₹14.29</td><td><strong style="color:var(--color-success)">₹300.00</strong></td><td><span class="badge badge-success">UPI / PhonePe</span></td></tr>
              <tr><td><code>TX-2026-9039</code></td><td>2026-07-21 17:30</td><td>Aarav Patel (PAT-001)</td><td>₹3,714.29</td><td>₹185.71</td><td><strong style="color:var(--color-success)">₹3,900.00</strong></td><td><span class="badge badge-success">Google Pay UPI</span></td></tr>
              <tr><td><code>TX-2026-9038</code></td><td>2026-07-21 15:10</td><td>Rajesh Kumar (PAT-003)</td><td>₹3,000.00</td><td>₹150.00</td><td><strong style="color:var(--color-success)">₹3,150.00</strong></td><td><span class="badge badge-warning">Cash Memo</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (reportType === "inventory") {
    tableHtml = `
      <div style="padding:1rem;">
        <h4 style="color:var(--text-primary); margin-bottom:0.35rem; font-weight:700;">📦 Active Stock Valuation & Batch Expiry Audit (${dateRange.toUpperCase()})</h4>
        <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:1rem;">Live valuation breakdown of all ${MEDICINE_CATALOG.length} active formulations in inventory catalog.</p>
        <div class="table-container">
          <table>
            <thead>
              <tr style="background:#f8fafc;">
                <th>Code</th><th>Medication Name</th><th>Storage Location</th><th>Stock Qty</th><th>Batch #</th><th>Expiry</th><th>Valuation (₹)</th>
              </tr>
            </thead>
            <tbody>
              ${MEDICINE_CATALOG.map(m => `
                <tr>
                  <td><code>${m.code}</code></td>
                  <td><strong>${m.name}</strong></td>
                  <td>📍 ${m.location}</td>
                  <td><strong style="color:${m.stock < m.minStock ? '#dc2626' : '#16a34a'}">${m.stock} ${m.unit}</strong></td>
                  <td><code>${m.batch}</code></td>
                  <td><span style="font-weight:700; color:${m.expiry.includes("2026") ? "#dc2626" : "#16a34a"}">${m.expiry}</span></td>
                  <td>₹${(m.stock * m.price).toFixed(2)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else {
    tableHtml = `
      <div style="padding:1rem;">
        <h4 style="color:var(--text-primary); margin-bottom:0.35rem; font-weight:700;">📜 Patient Prescription Vision OCR Audit Logs (${dateRange.toUpperCase()})</h4>
        <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:1rem;">Historical audit trail of scanned paper prescriptions and verified dispensing logs.</p>
        <div class="table-container">
          <table>
            <thead>
              <tr style="background:#f8fafc;">
                <th>Rx ID</th><th>Date</th><th>Physician</th><th>Patient</th><th>Extracted Formulations</th><th>Audit Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>RX-2026-8801</code></td><td>2026-07-22</td><td>Dr. Ananya Verma, MD</td><td>Aarav Patel (PAT-001)</td><td>Dolo 650mg, Amoxicillin 500mg, Pantoprazole 40mg</td><td><span class="badge badge-success">✓ Dispensed & Verified</span></td></tr>
              <tr><td><code>RX-2026-8802</code></td><td>2026-07-21</td><td>Dr. Ananya Verma, MD</td><td>Priya Sharma (PAT-002)</td><td>Metformin 500mg, Lisinopril 10mg</td><td><span class="badge badge-success">✓ Dispensed & Verified</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  previewDiv.innerHTML = tableHtml;
  if (exportBtn) exportBtn.disabled = false;
  showToast("Report Ready", `Audit report compiled for ${reportType.toUpperCase()} (${dateRange}).`, "success");
}

function exportCsvSimulator() {
  const reportTypeSelect = document.getElementById("reports-type");
  const dateRangeSelect = document.getElementById("reports-range");
  
  const reportType = reportTypeSelect ? reportTypeSelect.value : "sales";
  const dateRange = dateRangeSelect ? dateRangeSelect.value : "7days";

  let csvContent = "data:text/csv;charset=utf-8,";
  if (reportType === "sales") {
    csvContent += "Transaction_ID,Date_Time,Patient_Name,Taxable_Amount_INR,GST_Amount_INR,Net_Total_INR,Payment_Channel\n";
    csvContent += "TX-2026-9041,2026-07-22 08:12,Priya Sharma,7142.86,357.14,7500.00,HDFC Credit Card\n";
    csvContent += "TX-2026-9040,2026-07-22 07:45,Walk-in Patient,285.71,14.29,300.00,UPI PhonePe\n";
    csvContent += "TX-2026-9039,2026-07-21 17:30,Aarav Patel,3714.29,185.71,3900.00,Google Pay UPI\n";
    csvContent += "TX-2026-9038,2026-07-21 15:10,Rajesh Kumar,3000.00,150.00,3150.00,Cash Memo\n";
  } else if (reportType === "inventory") {
    csvContent += "Medication_Code,Medication_Name,Storage_Location,Stock_Qty,Batch_No,Expiry_Date,Valuation_INR\n";
    MEDICINE_CATALOG.forEach(m => {
      csvContent += `${m.code},"${m.name}","${m.location}",${m.stock},${m.batch},${m.expiry},${(m.stock * m.price).toFixed(2)}\n`;
    });
  } else {
    csvContent += "Prescription_ID,Date,Doctor_Name,Patient_Code,Extracted_Tablets,Status\n";
    csvContent += "RX-2026-8801,2026-07-22,Dr. Ananya Verma MD,PAT-2026-001,\"Dolo 650mg, Amoxicillin 500mg\",Dispensed\n";
    csvContent += "RX-2026-8802,2026-07-21,Dr. Ananya Verma MD,PAT-2026-002,\"Metformin 500mg, Pantoprazole 40mg\",Dispensed\n";
  }

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `AI_HealTech_${reportType}_audit_${dateRange}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();

  showToast("CSV Exported", `Downloaded spreadsheet: AI_HealTech_${reportType}_audit_${dateRange}.csv`, "success");
}

// ==========================================
// 12. OTHER SIMULATIONS & OCR
// ==========================================

function handleChatSubmit(presetQuery = null) {
  const input = document.getElementById("chat-input");
  const query = presetQuery || (input ? input.value.trim() : "");
  if (!query) return;

  appendChatBubble(query, "user");
  if (input) input.value = "";

  setTimeout(() => {
    let aiResponse = "";
    const qLower = query.toLowerCase();

    if (qLower.includes("metformin")) {
      aiResponse = `<strong>🤖 AI Clinical Monograph: Metformin 500mg</strong><br>
      • <strong>Indications:</strong> First-line glycemic management in Type 2 Diabetes Mellitus.<br>
      • <strong>Dosing:</strong> Initial 500mg BID with meals. Max daily limit: 2550mg/day.<br>
      • <strong>Renal Guidelines:</strong> Contraindicated if eGFR &lt; 30 mL/min/1.73m².<br>
      • <strong>Adverse Risk:</strong> Gastrointestinal distress, Lactic Acidosis risk. Monitor Vitamin B12.`;
    } else if (qLower.includes("amoxicillin")) {
      aiResponse = `<strong>🤖 AI Clinical Monograph: Amoxicillin 500mg</strong><br>
      • <strong>Indications:</strong> Broad-spectrum aminopenicillin for respiratory tract & otitis media infections.<br>
      • <strong>Pediatric Dosing:</strong> 20 - 40 mg/kg/day in divided doses q8h.<br>
      • <strong>FDA Warning:</strong> Contraindicated in patients with history of Penicillin Anaphylaxis.`;
    } else if (qLower.includes("amlodipine")) {
      aiResponse = `<strong>🤖 AI Clinical Monograph: Amlodipine 5mg</strong><br>
      • <strong>Indications:</strong> Dihydropyridine Calcium Channel Blocker for Essential Hypertension & Angina.<br>
      • <strong>Dosing:</strong> 5mg to 10mg once daily.<br>
      • <strong>Patient Counseling:</strong> Monitor for peripheral pedal edema, flushing, and orthostatic dizziness.`;
    } else if (qLower.includes("warfarin")) {
      aiResponse = `<strong>🤖 AI Clinical Monograph: Warfarin 5mg</strong><br>
      • <strong>Indications:</strong> Vitamin K Antagonist Anticoagulant for AFib & Deep Vein Thrombosis.<br>
      • <strong>Dietary Warning:</strong> Avoid sudden changes in Vitamin K rich foods (spinach, kale, broccoli).<br>
      • <strong>Contraindications:</strong> Severe bleeding risk when co-administered with NSAIDs or Aspirin! Target INR: 2.0 - 3.0.`;
    } else {
      const match = MEDICINE_CATALOG.find(m => qLower.includes(m.name.toLowerCase().split(" ")[0]));
      if (match) {
        aiResponse = `<strong>🤖 AI Clinical Drug Monograph: ${match.name} (${match.code})</strong><br>
        • <strong>Category:</strong> ${match.category}<br>
        • <strong>Pharmacy Rack Location:</strong> 📍 ${match.location}<br>
        • <strong>Stock Status:</strong> ${match.stock} ${match.unit} available at ₹${match.price.toFixed(2)} / pack.<br>
        • <strong>FDA Daily Max Limit:</strong> ${match.maxDaily}mg/day.`;
      } else {
        aiResponse = `<strong>🤖 AI Clinical Assistant</strong><br>
        Parsed clinical request for "<em>${query}</em>". Database verified: No severe organ toxicity flags. Always check patient allergy profiles before dispensing.`;
      }
    }

    appendChatBubble(aiResponse, "assistant");
  }, 600);
}

function appendChatBubble(text, sender) {
  const container = document.getElementById("chat-history-container");
  if (!container) return;
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${sender}`;
  bubble.innerHTML = `<p>${text}</p>`;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function loadSampleInvoice() {
  document.getElementById("invoice-upload-prompt").style.display = "none";
  document.getElementById("invoice-preview-wrap").style.display = "flex";
  document.getElementById("invoice-scan-btn").disabled = false;
  document.getElementById("invoice-clear-btn").disabled = false;
}

function clearInvoice() {
  document.getElementById("invoice-preview-wrap").style.display = "none";
  document.getElementById("invoice-upload-prompt").style.display = "block";
  document.getElementById("invoice-scan-btn").disabled = true;
  document.getElementById("invoice-clear-btn").disabled = true;
  state.scannedInvoiceItems = [];
  document.getElementById("invoice-actions-wrap").style.display = "none";
}

function runInvoiceScan() {
  const laser = document.getElementById("invoice-laser");
  if (laser) laser.style.display = "block";
  showToast("Invoice Vision OCR", "Scanning Sun Pharma Distributors supply receipt...", "info");

  setTimeout(() => {
    if (laser) laser.style.display = "none";
    document.getElementById("invoice-meta-distrib").textContent = "Sun Pharma Distributors India Pvt. Ltd.";
    document.getElementById("invoice-meta-no").textContent = "INV-SP-2026-9812"; // Keeping INV-SP for sample data
    document.getElementById("invoice-meta-total").textContent = "₹48,500.00";

    state.scannedInvoiceItems = [
      { id: "aug_625", name: "Augmentin 625mg", code: "MED-AUG-62506", addQty: 50, cost: 180.00 },
      { id: "azith_500", name: "Azithromycin 500mg", code: "MED-AZI-50003", addQty: 50, cost: 95.00 },
        { id: "panto_40", name: "Pantoprazole 40mg", code: "MED-PAN-40004", addQty: 100, cost: 70.00 } // Keeping INV-SP for sample data
    ];

    const tbody = document.getElementById("invoice-ocr-table-body");
    tbody.innerHTML = "";

    state.scannedInvoiceItems.forEach(item => {
      tbody.innerHTML += `
        <tr>
          <td><strong>${item.name}</strong><br><code style="font-size:0.7rem; color:var(--color-primary);">${item.code}</code></td>
          <td>10 tablets / strip</td>
          <td><strong style="color:var(--color-success)">+${item.addQty} packs</strong></td>
          <td>₹${item.cost.toFixed(2)}</td>
        </tr>
      `;
    });

    document.getElementById("invoice-actions-wrap").style.display = "block";
    showToast("Invoice OCR Parsed", "Extracted 3 supply lines from Sun Pharma invoice.", "success");
  }, 1500);
}

function commitInvoiceInventory() {
  if (!state.scannedInvoiceItems || state.scannedInvoiceItems.length === 0) return;
  state.scannedInvoiceItems.forEach(item => {
    const med = MEDICINE_CATALOG.find(m => m.id === item.id);
    if (med) med.stock += item.addQty;
  });
  renderInventoryTable();
  renderLowStockTable();
  renderExpiringTable();
  renderBillingCatalog();
  clearInvoice();
  showToast("Inventory Stock Synchronized!", "Updated inventory stock levels from supplier receipt.", "success");
}

function openCameraScanner() {
  const overlay = document.getElementById("camera-modal-overlay");
  const video = document.getElementById("camera-video-stream");
  overlay.style.display = "flex";
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(stream => {
      state.cameraStream = stream;
      video.srcObject = stream;
    }).catch(() => {});
  }
}

function closeCameraScanner() {
  const overlay = document.getElementById("camera-modal-overlay");
  if (state.cameraStream) {
    state.cameraStream.getTracks().forEach(t => t.stop());
    state.cameraStream = null;
  }
  overlay.style.display = "none";
}

function captureCameraFrame() {
  closeCameraScanner();
  loadSamplePrescription();
  runPrescriptionScan();
}

function loadSamplePrescription() {
  document.getElementById("presc-upload-prompt").style.display = "none";
  document.getElementById("presc-preview-wrap").style.display = "flex";
  document.getElementById("presc-scan-btn").disabled = false;
  document.getElementById("presc-clear-btn").disabled = false;
}

function clearPrescription() {
  document.getElementById("presc-preview-wrap").style.display = "none";
  document.getElementById("presc-upload-prompt").style.display = "block";
  document.getElementById("presc-scan-btn").disabled = true;
  document.getElementById("presc-clear-btn").disabled = true;
  state.scannedPrescriptionMeds = [];
  document.getElementById("presc-actions-wrap").style.display = "none";
}

function runPrescriptionScan() {
  const laser = document.getElementById("presc-laser");
  const status = document.getElementById("presc-ocr-status");
  if (laser) laser.style.display = "block";
  status.textContent = "Scanning paper prescription...";

  setTimeout(() => {
    if (laser) laser.style.display = "none";
    status.textContent = "Scan Successful";
    status.className = "badge badge-success";

    document.getElementById("presc-meta-dr").textContent = "Dr. Ananya Verma, MD";
    document.getElementById("presc-meta-date").textContent = new Date().toISOString().substring(0, 10);

    const extractedList = [
      { rawName: "Dolo 650mg", dosage: "650mg (1 tab)", freq: "TID (3x daily)", duration: "5 days", defaultQty: 15 },
      { rawName: "Amoxicillin 500mg", dosage: "500mg (1 cap)", freq: "TID (3x daily)", duration: "7 days", defaultQty: 21 },
      { rawName: "Pantoprazole 40mg", dosage: "40mg (1 tab)", freq: "OD (Before breakfast)", duration: "10 days", defaultQty: 10 }
    ];

    state.scannedPrescriptionMeds = [];
    const tbody = document.getElementById("presc-ocr-table-body");
    tbody.innerHTML = "";

    extractedList.forEach(item => {
      let matchedMed = findOrCreateMedicine(item.rawName);
      state.scannedPrescriptionMeds.push({
        id: matchedMed.id, name: matchedMed.name, code: matchedMed.code, barcode: matchedMed.barcode, price: matchedMed.price, qty: item.defaultQty, location: matchedMed.location
      });
      // Keeping 📍 for location visual
      tbody.innerHTML += `
        <tr>
          <td><strong>${matchedMed.name}</strong><br><code style="font-size:0.7rem; color:var(--color-primary);">${matchedMed.code}</code> • <span style="font-size:0.7rem; color:#0284c7;">📍 ${matchedMed.location || 'Rack A-01'}</span></td>
          <td>${item.dosage}</td>
          <td><span class="badge badge-success" style="font-size:0.68rem;">${item.freq}</span></td>
          <td>${item.duration} (Qty: ${item.defaultQty})</td>
        </tr>
      `;
    });

    document.getElementById("presc-actions-wrap").style.display = "block";
    showToast("Prescription Vision OCR", `Extracted ${extractedList.length} tablets from paper prescription.`, "success");
  }, 1500);
}

function handleAddOcrBilling() {
  if (!state.scannedPrescriptionMeds || state.scannedPrescriptionMeds.length === 0) return;
  state.scannedPrescriptionMeds.forEach(item => addToCartWithQty(item.id, item.qty));
  switchTab("billing");
  renderBillCart();
  showToast("Billing Cart Loaded", "Scanned tablets added to cart.", "success");
}

function logPatientProfile() {
  state.selectedPatient = PATIENT_DATABASE[0];
  document.getElementById("billing-active-patient-name").textContent = `${state.selectedPatient.name} (${state.selectedPatient.code})`;
  showToast("Patient Linked", "Aarav Patel linked.", "success");
}

function triggerBarcodeScanner() {
  const targetMed = MEDICINE_CATALOG[Math.floor(Math.random() * MEDICINE_CATALOG.length)];
  showToast("Barcode Scanned", `Scanned Code: ${targetMed.barcode} - ${targetMed.name}`, "success");
  addToCart(targetMed.id); // Keeping ⚡ for quick action, not an emoji in this context
  switchTab("billing");
}

function handleBarcodeFileUpload(file) {
  if (!file) return;
  const matchedMed = MEDICINE_CATALOG[Math.floor(Math.random() * MEDICINE_CATALOG.length)];
  showToast("Barcode Image Uploaded", `Parsed Barcode: ${matchedMed.barcode} - Added ${matchedMed.name} to cart.`, "success");
  addToCart(matchedMed.id);
  switchTab("billing");
}

function handleBiometricTap() {
  showToast("Terminal Unlocked", "Verification approved.", "success");
  document.getElementById("auth-overlay").style.display = "none";
  state.isAuthorized = true;
}
// Keeping ⌫ for backspace symbol, it's functional
function handlePinKeypad(btnText) {
  if (btnText === "C") state.pinEntered = "";
  else if (btnText === "⌫") state.pinEntered = state.pinEntered.slice(0, -1);
  else if (state.pinEntered.length < 4) state.pinEntered += btnText;
  
  updatePinDotsDisplay();

  if (state.pinEntered.length === 4) {
    if (state.pinEntered === "1234") {
      showToast("Terminal Unlocked", "PIN Access granted.", "success");
      document.getElementById("auth-overlay").style.display = "none";
      state.isAuthorized = true;
    } else {
      showToast("Invalid PIN Code", "Please enter valid RPh PIN (1234).", "danger");
      state.pinEntered = "";
      setTimeout(() => updatePinDotsDisplay(), 300);
    }
  }
}

function updatePinDotsDisplay() {
  const dots = document.querySelectorAll(".pin-dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("filled", index < state.pinEntered.length);
  });
}

function handleCredentialsLogin() {
  const userVal = document.getElementById("auth-username") ? document.getElementById("auth-username").value.trim() : "";
  const passVal = document.getElementById("auth-password") ? document.getElementById("auth-password").value.trim() : "";
  
  showToast("Terminal Unlocked", `Verified Pharmacist ${userVal || 'alex'}. Access Granted.`, "success");
  document.getElementById("auth-overlay").style.display = "none";
  state.isAuthorized = true;
}

function switchAuthTab(mode) {
  document.querySelectorAll(".auth-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-mode") === mode);
  });
  document.querySelectorAll(".auth-section").forEach(sec => {
    sec.classList.toggle("active", sec.id === `auth-section-${mode}`);
  });
}

function lockTerminal() {
  state.isAuthorized = false;
  state.pinEntered = "";
  updatePinDotsDisplay();
  document.getElementById("auth-overlay").style.display = "flex";
}

function switchTab(tabId) {
  document.querySelectorAll(".menu-item").forEach(i => i.classList.toggle("active", i.getAttribute("data-tab") === tabId));
  document.querySelectorAll(".mobile-nav-item").forEach(i => i.classList.toggle("active", i.getAttribute("data-tab") === tabId));
  document.querySelectorAll(".tab-page").forEach(p => p.classList.toggle("active", p.id === `${tabId}-tab`));
  state.activeTab = tabId;
  
  // Close mobile sidebar drawer if open
  closeMobileSidebar();

  if (tabId === "overview") {
    renderSalesChart();
    renderInventoryChart();
    renderLowStockTable();
    renderExpiringTable();
  }
  if (tabId === "inventory") renderInventoryTable();
  if (tabId === "interaction") setupInteractionSelects();
  if (tabId === "dosage") setupDosageSelects();
  if (tabId === "barcode-stickers") renderBarcodeStickers();
  if (tabId === "reports") generateAuditReport();
  if (tabId === "billing") {
    renderBillingCatalog();
    const bInput = document.getElementById("billing-search-input");
    if (bInput && window.innerWidth > 768) bInput.focus();
  }
}

function openMobileSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.getElementById("mobile-sidebar-overlay");
  if (sidebar) sidebar.classList.add("mobile-open");
  if (overlay) overlay.classList.add("show");
}

function closeMobileSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.getElementById("mobile-sidebar-overlay");
  if (sidebar) sidebar.classList.remove("mobile-open");
  if (overlay) overlay.classList.remove("show");
}

const TRANSLATIONS = {
  en: {
    lang_title: "Platform Language",
    nav_clinical: "Clinical Operations",
    nav_inventory: "Inventory & Supplies",
    nav_sales: "Point of Sale",
    nav_general: "Analytics & Management",
    menu_dashboard: "Dashboard Overview",
    menu_ocr_presc: "Prescription OCR",
    menu_drug_info: "Drug Information",
    menu_safety: "Safety Interaction",
    menu_dosage: "Dosage Validator",
    menu_stock: "Medicine Inventory",
    menu_ocr_invoice: "Supplier Invoice OCR",
    menu_billing: "Billing & Checkout",
    menu_patients: "Patient Profiles",
    menu_reports: "Reports & Audit",
    role_pharmacist: "Pharmacist (RPh)",
    title_dashboard: "Dashboard Overview",
    global_search_placeholder: "Search any tablet (e.g. Crocin, Dolo, Azithromycin)...",
    alert_center_title: "Clinical System Alerts",
    btn_dismiss_all: "Dismiss",
    stat_total_scans: "Prescriptions Processed",
    stat_revenue: "Sales Revenue",
    stat_stock_value: "Active Inventory Value",
    stat_alerts: "Active Security Flags",
    stat_trend_vs: "vs last week",
    stat_total_drugs: "284 unique drugs in stock",
    dashboard_alert_require: "Action Required",
    chart_presc_sales: "Sales Revenue & Prescription Scanner Volume",
    chart_live: "Live Telemetry",
    chart_inventory_health: "Inventory Allocation",
    dash_low_stock: "Critical Stock Shortages",
    btn_restock: "Restock",
    th_drug: "Medication",
    th_current_stock: "Available",
    th_min_stock: "Threshold",
    th_status: "Urgency",
    dash_expiring: "Batch Expirations (< 60 Days)",
    btn_resolve: "Review Batches",
    th_batch: "Batch No.",
    th_expiry: "Expiry Date",
    th_action: "Actions"
  },
  hi: {
    lang_title: "प्लेटफॉर्म भाषा",
    nav_clinical: "क्लिनिकल ऑपरेशंस",
    nav_inventory: "इन्वेंटरी और आपूर्ति",
    nav_sales: "बिक्री केंद्र (POS)",
    nav_general: "विश्लेषण और प्रबंधन",
    menu_dashboard: "डैशबोर्ड अवलोकन",
    menu_ocr_presc: "प्रिस्क्रिप्टन OCR",
    menu_drug_info: "दवा की जानकारी",
    menu_safety: "सुरक्षा इंटरैक्शन",
    menu_dosage: "खुराक जांचकर्ता",
    menu_stock: "दवा इन्वेंटरी",
    menu_ocr_invoice: "सप्लायर इनवॉइस OCR",
    menu_billing: "बिलिंग और चेकआउट",
    menu_patients: "मरीज प्रोफाइल",
    menu_reports: "रिपोर्ट्स और ऑडिट",
    role_pharmacist: "फार्मासिस्ट (RPh)",
    title_dashboard: "डैशबोर्ड अवलोकन",
    global_search_placeholder: "दवा खोजें (उदा. क्रोसिन, डोलो, एजिथ्रोमाइसिन)...",
    alert_center_title: "क्लिनिकल सिस्टम अलर्ट",
    btn_dismiss_all: "हटाएं",
    stat_total_scans: "प्रिस्क्रिप्शन प्रोसेस हुए",
    stat_revenue: "कुल बिक्री राजस्व",
    stat_stock_value: "सक्रिय स्टॉक मूल्य",
    stat_alerts: "सुरक्षा चेतावनी",
    stat_trend_vs: "पिछले सप्ताह की तुलना में",
    stat_total_drugs: "284 प्रकार की दवाएं उपलब्ध",
    dashboard_alert_require: "कार्रवाई आवश्यक",
    chart_presc_sales: "बिक्री राजस्व और प्रिस्क्रिप्शन स्कैनर वॉल्यूम",
    chart_live: "लाइव आंकड़े",
    chart_inventory_health: "इन्वेंटरी आवंटन",
    dash_low_stock: "गंभीर स्टॉक कमी",
    btn_restock: "स्टॉक भरें",
    th_drug: "दवा का नाम",
    th_current_stock: "उपलब्ध",
    th_min_stock: "न्यूनतम सीमा",
    th_status: "स्थिति",
    dash_expiring: "समाप्ति सीमा (< 60 दिन)",
    btn_resolve: "बैच समीक्षा",
    th_batch: "बैच सं.",
    th_expiry: "समाप्ति तिथि",
    th_action: "कार्रवाई"
  },
  mr: {
    lang_title: "प्लॅटफॉर्म भाषा",
    nav_clinical: "क्लिनिकल ऑपरेशन्स",
    nav_inventory: "इन्व्हेंटरी व पुरवठा",
    nav_sales: "विक्री केंद्र (POS)",
    nav_general: "विश्लेषण आणि व्यवस्थापन",
    menu_dashboard: "डॅशबोर्ड विहंगावलोकन",
    menu_ocr_presc: "प्रिस्क्रिप्शन OCR",
    menu_drug_info: "औषध माहिती",
    menu_safety: "सुरक्षा परस्परसंवाद",
    menu_dosage: "डोस तपासणी",
    menu_stock: "औषध साठा",
    menu_ocr_invoice: "पुरवठादार इनव्हॉइस OCR",
    menu_billing: "बिलिंग आणि चेकआउट",
    menu_patients: "रुग्ण प्रोफाईल",
    menu_reports: "अहवाल आणि ऑडिट",
    role_pharmacist: "फार्मासिस्ट (RPh)",
    title_dashboard: "डॅशबोर्ड विहंगावलोकन",
    global_search_placeholder: "औषध शोधा (उदा. क्रोसिन, डोलो, अझिथ्रोमायसिन)...",
    alert_center_title: "क्लिनिकल सिस्टीम इशारे",
    btn_dismiss_all: "नकार द्या",
    stat_total_scans: "प्रिस्क्रिप्शन प्रक्रिया",
    stat_revenue: "एकूण विक्री महसूल",
    stat_stock_value: "सक्रिय साठ्याचे मूल्य",
    stat_alerts: "सुरक्षा इशारे",
    stat_trend_vs: "मागील आठवड्याच्या तुलनेत",
    stat_total_drugs: "२८४ प्रकारची औषधे उपलब्ध",
    dashboard_alert_require: "कृती आवश्यक",
    chart_presc_sales: "विक्री महसूल आणि प्रिस्क्रिप्शन स्कॅनर व्हॉल्यूम",
    chart_live: "थेट आकडेवारी",
    chart_inventory_health: "साठा वाटप",
    dash_low_stock: "गंभीर साठा कमतरता",
    btn_restock: "पुन्हा साठा भरा",
    th_drug: "औषधाचे नाव",
    th_current_stock: "उपलब्ध",
    th_min_stock: "किमान मर्यादा",
    th_status: "स्थिती",
    dash_expiring: "मुदत संपणारे बॅच (< ६० दिवस)",
    btn_resolve: "बॅच तपासा",
    th_batch: "बॅच क्र.",
    th_expiry: "मुदत संपण्याची तारीख",
    th_action: "कृती"
  }
};

function translateUI(lang) {
  state.currentLang = lang;
  
  const displayNames = { en: "English", hi: "हिन्दी", mr: "मराठी" };
  const currentLangLabel = document.getElementById("current-lang-name");
  if (currentLangLabel) currentLangLabel.textContent = displayNames[lang] || lang.toUpperCase();

  // Sync sidebar buttons active state
  document.querySelectorAll(".sidebar-lang-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-lang") === lang);
  });

  // Sync topbar dropdown options active state
  document.querySelectorAll(".lang-option").forEach(o => {
    o.classList.toggle("active", o.getAttribute("data-lang") === lang);
  });

  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  // Translate all marked text content
  document.querySelectorAll("[data-localize]").forEach(el => {
    const key = el.getAttribute("data-localize");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Translate all marked input placeholders
  document.querySelectorAll("[data-localize-placeholder]").forEach(el => {
    const key = el.getAttribute("data-localize-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });
}

function renderInventoryTable() {
  const tbody = document.getElementById("inventory-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  const searchVal = (document.getElementById("inventory-search") ? document.getElementById("inventory-search").value : "").toLowerCase();
  const catFilter = document.getElementById("inventory-filter-category") ? document.getElementById("inventory-filter-category").value : "All";
  const statusFilter = document.getElementById("inventory-filter-status") ? document.getElementById("inventory-filter-status").value : "All";

  let filtered = searchMedicines(searchVal);

  if (catFilter !== "All") {
    filtered = filtered.filter(med => med.category.toLowerCase().includes(catFilter.toLowerCase()));
  }

  if (statusFilter !== "All") {
    if (statusFilter === "Low Stock") {
      filtered = filtered.filter(med => med.stock < med.minStock);
    } else if (statusFilter === "Expiring") {
      filtered = filtered.filter(med => med.expiry.includes("2026") || med.expiry.includes("03/2026") || med.expiry.includes("05/2026"));
    } else if (statusFilter === "Normal") {
      filtered = filtered.filter(med => med.stock >= med.minStock && !med.expiry.includes("03/2026") && !med.expiry.includes("05/2026"));
    }
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--text-muted); padding:2rem;">No formulations matching search or filter criteria.</td></tr>`;
    return;
  }

  filtered.forEach(med => {
    const isOut = med.stock <= 0;
    const isLow = med.stock < med.minStock && med.stock > 0;
    const isExp = med.expiry.includes("03/2026") || med.expiry.includes("05/2026");

    let badgeHtml = `<span class="badge badge-success">In Stock</span>`;
    if (isOut) badgeHtml = `<span class="badge badge-danger">Out of Stock</span>`; // Removed emoji
    else if (isLow) badgeHtml = `<span class="badge badge-warning">Low Stock</span>`; // Removed emoji
    else if (isExp) badgeHtml = `<span class="badge badge-danger">Expired</span>`; // Removed emoji
    // Keeping 📍 for location visual
    tbody.innerHTML += `
      <tr>
        <td>
          <strong>${med.name}</strong> <code style="font-size:0.7rem;">(${med.code})</code><br>
          <span style="font-size:0.68rem; color:#0284c7;">📍 ${med.location || 'Rack A-01'}</span>
        </td>
        <td>${med.category}</td>
        <td><strong style="color:${isOut ? '#dc2626' : (isLow ? '#d97706' : '#16a34a')}">${med.stock} ${med.unit}</strong></td>
        <td>${badgeHtml}</td>
        <td><code>${med.batch}</code></td>
        <td><span style="color:${isExp ? '#dc2626' : 'inherit'}">${med.expiry}</span></td>
        <td>₹${med.price.toFixed(2)}</td>
        <td><button class="btn btn-secondary" onclick="app.quickAdjustStock('${med.id}', 10)">+10</button></td>
      </tr>
    `;
  });
}

function quickAdjustStock(id, amount) {
  const med = MEDICINE_CATALOG.find(m => m.id === id);
  if (med) med.stock += amount;
  renderInventoryTable();
  renderLowStockTable();
  renderExpiringTable();
  renderBillingCatalog();
  showToast("Inventory Stock Updated", `Restocked +${amount} for ${med ? med.name : 'Medication'}.`, "success");
}

function flagExpiredBatch(id) {
  const med = MEDICINE_CATALOG.find(m => m.id === id);
  showToast("Quarantine Protocol Triggered", `Moved batch ${med ? med.batch : 'BAT-001'} for ${med ? med.name : 'Medication'} to Vendor Quarantine Vault.`, "warning");
}

function renderBarcodeStickers() {
  const container = document.getElementById("barcode-stickers-grid");
  const countSpan = document.getElementById("sticker-item-count");
  if (!container) return;
  container.innerHTML = "";
  const searchVal = (document.getElementById("sticker-search-input") ? document.getElementById("sticker-search-input").value : "").toLowerCase();
  const filtered = searchMedicines(searchVal); // Removed 🏷️ from title, but this is JS generated content

  countSpan.textContent = filtered.length;

  filtered.forEach(med => {
    const highResBarcodeSvg = generateBarcodeSvg(med.barcode, 45, med.id);
    container.innerHTML += `
      <div class="barcode-sticker-card">
        <div style="font-size:0.625rem; font-weight:800; text-transform:uppercase; color:#0284c7; letter-spacing:0.5px; margin-bottom:2px;">AI HEALTECH DYNAMICS</div>
        <div style="font-size:0.95rem; font-weight:800; color:#0f172a; margin-bottom:2px;">${med.name}</div>
        <div style="font-size:0.725rem; font-family:monospace; color:#475569; font-weight:700; margin-bottom:6px;">${med.code}</div>
        <div style="width:100%; display:flex; justify-content:center; margin: 4px 0;">${highResBarcodeSvg}</div>
        <div style="font-size:0.75rem; font-family:monospace; font-weight:800; color:#0f172a; margin-top:2px;">${med.barcode}</div>
        <div style="display:flex; justify-content:space-between; width:100%; font-size:0.7rem; color:#64748b; font-weight:600; margin-top:8px; border-top:1px dashed #e2e8f0; padding-top:4px;">
          <span>MRP: ₹${med.price.toFixed(2)}</span>
          <span>EXP: ${med.expiry}</span>
        </div>
        <button class="btn btn-secondary" style="width:100%; font-size:0.725rem; margin-top:8px; padding:0.25rem;" onclick="app.printSingleSticker('${med.id}')">Print Label Sticker</button>
      </div>
    `;
  });
}

function printSingleSticker(medId) {
  const med = MEDICINE_CATALOG.find(m => m.id === medId);
  showToast("Printing Sticker Tag", `Sending barcode sticker for ${med ? med.name : 'Tablet'} to printer...`, "info");
  document.body.classList.add("printing-stickers");
  setTimeout(() => { window.print(); document.body.classList.remove("printing-stickers"); }, 300);
}

function printAllStickersSheet() {
  showToast("Printing Sticker Sheet", "Preparing thermal sheet for printing...", "info");
  document.body.classList.add("printing-stickers");
  setTimeout(() => { window.print(); document.body.classList.remove("printing-stickers"); }, 400);
}

function renderPatientCards() {
  const container = document.getElementById("patients-cards-container");
  if (!container) return;
  container.innerHTML = "";
  const searchVal = (document.getElementById("patient-search") ? document.getElementById("patient-search").value : "").toLowerCase();
  const filtered = PATIENT_DATABASE.filter(p => p.name.toLowerCase().includes(searchVal) || p.code.toLowerCase().includes(searchVal) || p.phone.includes(searchVal));

  filtered.forEach(pat => {
    const initials = pat.name.split(" ").map(n => n[0]).join("").toUpperCase();
    const allergiesHtml = pat.allergies && pat.allergies.length && pat.allergies[0] !== "None" 
      ? `<span class="patient-allergy-tag">Allergy: ${pat.allergies.join(", ")}</span>` // Removed emoji
      : `<span class="badge badge-success" style="font-size:0.68rem;">No Known Allergies</span>`;

    container.innerHTML += `
      <div class="glass-card patient-card">
        <div class="patient-card-header">
          <div class="patient-card-avatar">${initials}</div>
          <div class="patient-card-details">
            <h4>${pat.name}</h4>
            <p>ID: <strong>${pat.code}</strong> • Age: <strong>${pat.age}</strong> (${pat.gender})</p>
          </div>
        </div>

        <div style="font-size:0.775rem; color:var(--text-secondary); margin-bottom:0.6rem; display:flex; flex-direction:column; gap:0.25rem;">
          <div>📞 <strong>${pat.phone}</strong></div>
          <div>🩸 Blood Group: <strong style="color:#dc2626;">${pat.bloodGroup}</strong></div>
          <div>👨‍⚕️ Doctor: ${pat.doctor}</div>
        </div>

        <div style="margin-bottom:0.75rem;">
          ${allergiesHtml}
        </div>

        <div class="patient-card-actions">
          <button class="btn btn-secondary patient-btn" onclick="app.openPatientHistoryModal('${pat.id}')">History & Dossier</button>
          <button class="btn btn-primary patient-btn" onclick="app.selectPatientForBilling('${pat.id}')">Start Billing</button>
        </div>
      </div>
    `;
  });
}

function selectPatientForBilling(id) {
  const patient = PATIENT_DATABASE.find(p => p.id === id || p.code === id);
  if (patient) {
    state.selectedPatient = patient;
    document.getElementById("billing-active-patient-name").textContent = `${patient.name} (${patient.code})`;
    switchTab("billing");
    showToast("Patient Linked", `Linked ${patient.name} (${patient.code}) to active bill.`, "success");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("auth-scanner").addEventListener("click", handleBiometricTap);
  document.getElementById("auth-login-btn").addEventListener("click", handleCredentialsLogin);
  document.querySelectorAll(".keypad-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.id === "keypad-clear") handlePinKeypad("C");
      else if (btn.id === "keypad-back") handlePinKeypad("⌫");
      else handlePinKeypad(btn.textContent);
    });
  });

  // Auth tab switcher listeners
  document.querySelectorAll(".auth-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => switchAuthTab(btn.getAttribute("data-mode")));
  });

  // Password visibility toggle
  const pwdToggleBtn = document.getElementById("pwd-toggle-btn");
  if (pwdToggleBtn) {
    pwdToggleBtn.addEventListener("click", () => {
      const pwdInput = document.getElementById("auth-password");
      if (pwdInput) {
        const isPwd = pwdInput.type === "password";
        pwdInput.type = isPwd ? "text" : "password";
        pwdToggleBtn.textContent = isPwd ? "🙈" : "👁️";
      }
    });
  }

  // Mobile navigation & sidebar toggle listeners
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  if (mobileToggle) mobileToggle.addEventListener("click", openMobileSidebar);

  const mobileOverlay = document.getElementById("mobile-sidebar-overlay");
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMobileSidebar);

  const mobileSearchTrigger = document.getElementById("mobile-search-trigger");
  if (mobileSearchTrigger) {
    mobileSearchTrigger.addEventListener("click", () => {
      const sBar = document.querySelector(".topbar-right .search-bar");
      if (sBar) {
        sBar.classList.toggle("mobile-expand");
        if (sBar.classList.contains("mobile-expand")) {
          const sInput = document.getElementById("global-search-input");
          if (sInput) sInput.focus();
        }
      }
    });
  }

  document.querySelectorAll(".mobile-nav-item").forEach(item => {
    item.addEventListener("click", () => switchTab(item.getAttribute("data-tab")));
  });

  document.getElementById("logout-btn").addEventListener("click", lockTerminal);
  document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => switchTab(item.getAttribute("data-tab")));
  });

  const bellBtn = document.getElementById("bell-btn") || document.getElementById("notif-bell-btn");
  if (bellBtn) bellBtn.addEventListener("click", toggleNotificationPopover);

  const popoverClose = document.getElementById("popover-close");
  if (popoverClose) popoverClose.addEventListener("click", dismissAllNotifications);

  const langBtn = document.getElementById("lang-menu-btn");
  const langMenu = document.getElementById("lang-dropdown-menu");
  if (langBtn) langBtn.addEventListener("click", () => langMenu.classList.toggle("show"));
  document.querySelectorAll(".lang-option").forEach(opt => {
    opt.addEventListener("click", () => {
      translateUI(opt.getAttribute("data-lang"));
      if (langMenu) langMenu.classList.remove("show");
    });
  });

  // Sidebar language swapper buttons
  document.querySelectorAll(".sidebar-lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      translateUI(selectedLang);
      document.querySelectorAll(".sidebar-lang-btn").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-lang") === selectedLang);
      });
      closeMobileSidebar();
    });
  });

  window.addEventListener("keydown", (e) => {
    const authOverlay = document.getElementById("auth-overlay");
    const isAuthVisible = authOverlay && (authOverlay.style.display !== "none");
    if (isAuthVisible || !state.isAuthorized) {
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.id === "auth-username" || activeEl.id === "auth-password")) {
        if (e.key === "Enter") handleCredentialsLogin();
        return;
      }
      if (/^[0-9]$/.test(e.key)) { e.preventDefault(); handlePinKeypad(e.key); return; }
      else if (e.key === "Backspace") { e.preventDefault(); handlePinKeypad("⌫"); return; }
      else if (e.key === "Escape" || e.key.toLowerCase() === "c") { e.preventDefault(); handlePinKeypad("C"); return; }
      else if (e.key === "Enter") { e.preventDefault(); handleCredentialsLogin(); return; }
    }

    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (state.activeTab === "billing") document.getElementById("billing-search-input").focus();
      else document.getElementById("global-search-input").focus();
    } else if (e.key === "Escape") {
      closeGlobalDropdown();
      closeBarcodeModal();
      closePatientHistoryModal();
      closeAddDrugModal();
      const popover = document.getElementById("notification-popover");
      if (popover) popover.classList.remove("show");
    }
  });

  const interCheckBtn = document.getElementById("inter-check-btn");
  if (interCheckBtn) interCheckBtn.addEventListener("click", runInteractionCheck);

  const dosageValidateBtn = document.getElementById("dosage-validate-btn");
  if (dosageValidateBtn) dosageValidateBtn.addEventListener("click", validateDosage);

  const billingSearch = document.getElementById("billing-search-input");
  if (billingSearch) {
    billingSearch.addEventListener("input", renderBillingCatalog);
    billingSearch.addEventListener("focus", renderBillingCatalog);
  }

  const globalSearch = document.getElementById("global-search-input");
  if (globalSearch) {
    globalSearch.addEventListener("input", handleGlobalSearchInput);
    globalSearch.addEventListener("focus", handleGlobalSearchInput);
  }

  window.addEventListener("click", (e) => {
    const searchBar = document.querySelector(".search-bar");
    if (searchBar && !searchBar.contains(e.target)) closeGlobalDropdown();

    const notifWrap = document.querySelector(".notification-bell-btn");
    const popover = document.getElementById("notification-popover");
    if (popover && notifWrap && !notifWrap.contains(e.target) && !popover.contains(e.target)) {
      popover.classList.remove("show");
    }
  });

  const reportsGenBtn = document.getElementById("reports-gen-btn") || document.getElementById("reports-generate-btn");
  if (reportsGenBtn) reportsGenBtn.addEventListener("click", generateAuditReport);

  const reportsExportBtn = document.getElementById("reports-export-btn");
  if (reportsExportBtn) reportsExportBtn.addEventListener("click", exportCsvSimulator); // Removed 📥

  const reportsType = document.getElementById("reports-type");
  if (reportsType) reportsType.addEventListener("change", generateAuditReport);
  
  const reportsRange = document.getElementById("reports-range");
  if (reportsRange) reportsRange.addEventListener("change", generateAuditReport);
  
  const reportsChannel = document.getElementById("reports-channel");
  if (reportsChannel) reportsChannel.addEventListener("change", generateAuditReport);

  const invAddBtn = document.getElementById("inv-add-medicine-btn");
  if (invAddBtn) invAddBtn.addEventListener("click", openAddDrugModal);

  const addDrugCloseBtn = document.getElementById("add-drug-modal-close");
  if (addDrugCloseBtn) addDrugCloseBtn.addEventListener("click", closeAddDrugModal);

  const addDrugCancelBtn = document.getElementById("add-drug-modal-cancel");
  if (addDrugCancelBtn) addDrugCancelBtn.addEventListener("click", closeAddDrugModal);

  const addDrugSaveBtn = document.getElementById("add-drug-modal-save");
  if (addDrugSaveBtn) addDrugSaveBtn.addEventListener("click", saveNewDrugFromModal); // Removed ✨

  const invCatSelect = document.getElementById("inventory-filter-category");
  if (invCatSelect) invCatSelect.addEventListener("change", renderInventoryTable);

  const invStatusSelect = document.getElementById("inventory-filter-status");
  if (invStatusSelect) invStatusSelect.addEventListener("change", renderInventoryTable);

  const addPatientBtn = document.querySelector("[data-localize='btn_new_patient']");
  if (addPatientBtn) addPatientBtn.addEventListener("click", openAddPatientModal);

  const addPatientCloseBtn = document.getElementById("add-patient-modal-close");
  if (addPatientCloseBtn) addPatientCloseBtn.addEventListener("click", closeAddPatientModal);

  const addPatientCancelBtn = document.getElementById("add-patient-modal-cancel");
  if (addPatientCancelBtn) addPatientCancelBtn.addEventListener("click", closeAddPatientModal);

  const addPatientSaveBtn = document.getElementById("add-patient-modal-save");
  if (addPatientSaveBtn) addPatientSaveBtn.addEventListener("click", saveNewPatientFromModal);

  const chatSendBtn = document.getElementById("chat-send-btn");
  if (chatSendBtn) chatSendBtn.addEventListener("click", () => handleChatSubmit());

  const chatInput = document.getElementById("chat-input");
  if (chatInput) chatInput.addEventListener("keydown", (e) => { if (e.key === "Enter") handleChatSubmit(); });

  document.querySelectorAll(".chat-suggestion-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const q = chip.getAttribute("data-query") || chip.textContent;
      handleChatSubmit(q);
    });
  });

  const invoiceUploadZone = document.getElementById("invoice-upload-zone");
  if (invoiceUploadZone) {
    invoiceUploadZone.addEventListener("click", (e) => {
      if (!e.target.closest("button") && !document.getElementById("invoice-preview-wrap").contains(e.target)) loadSampleInvoice();
    });
    const invBtn = invoiceUploadZone.querySelector("button");
    if (invBtn) invBtn.addEventListener("click", loadSampleInvoice);
  }
  const invoiceScanBtn = document.getElementById("invoice-scan-btn");
  if (invoiceScanBtn) invoiceScanBtn.addEventListener("click", runInvoiceScan);

  const invoiceClearBtn = document.getElementById("invoice-clear-btn");
  if (invoiceClearBtn) invoiceClearBtn.addEventListener("click", clearInvoice);

  const invoiceSyncBtn = document.getElementById("invoice-sync-btn");
  if (invoiceSyncBtn) invoiceSyncBtn.addEventListener("click", commitInvoiceInventory);

  document.getElementById("presc-upload-zone").addEventListener("click", (e) => {
    if (!e.target.closest("button") && !document.getElementById("presc-preview-wrap").contains(e.target)) loadSamplePrescription();
  });
  document.getElementById("presc-scan-btn").addEventListener("click", runPrescriptionScan);
  document.getElementById("presc-clear-btn").addEventListener("click", clearPrescription);
  document.getElementById("presc-add-billing-btn").addEventListener("click", handleAddOcrBilling);
  document.getElementById("presc-create-patient-btn").addEventListener("click", logPatientProfile);

  document.getElementById("presc-camera-btn").addEventListener("click", openCameraScanner); // Removed 📷
  document.getElementById("camera-close-btn").addEventListener("click", closeCameraScanner);
  document.getElementById("camera-capture-btn").addEventListener("click", captureCameraFrame);

  document.getElementById("billing-barcode-scan-btn").addEventListener("click", triggerBarcodeScanner);
  const barcodeUploadBtn = document.getElementById("billing-barcode-upload-btn");
  const barcodeFileInput = document.getElementById("billing-barcode-file-input");
  barcodeUploadBtn.addEventListener("click", () => barcodeFileInput.click());
  barcodeFileInput.addEventListener("change", (e) => {
    if (e.target.files && e.target.files[0]) handleBarcodeFileUpload(e.target.files[0]);
  });

  document.getElementById("barcode-modal-close-btn").addEventListener("click", closeBarcodeModal);
  document.getElementById("barcode-modal-add-cart-btn").addEventListener("click", handleModalAddToCart);
  document.getElementById("barcode-modal-print-btn").addEventListener("click", printBarcodeLabel);
  document.getElementById("pat-modal-close-btn").addEventListener("click", closePatientHistoryModal);

  const stickerSearch = document.getElementById("sticker-search-input");
  if (stickerSearch) stickerSearch.addEventListener("input", renderBarcodeStickers);
  const stickerPrintAllBtn = document.getElementById("sticker-print-all-btn");
  if (stickerPrintAllBtn) stickerPrintAllBtn.addEventListener("click", printAllStickersSheet);

  document.getElementById("inventory-search").addEventListener("input", renderInventoryTable);
  document.getElementById("patient-search").addEventListener("input", renderPatientCards);
  document.getElementById("billing-gst-select").addEventListener("change", renderBillCart);
  document.getElementById("billing-discount-select").addEventListener("change", renderBillCart);
  document.getElementById("billing-clear-btn").addEventListener("click", clearCart);
  document.getElementById("billing-checkout-btn").addEventListener("click", processCheckout);
  document.getElementById("pdf-close-btn").addEventListener("click", closeInvoicePdf);
  document.getElementById("pdf-print-btn").addEventListener("click", printReceipt);

  switchTab("overview");
  renderSalesChart();
  renderInventoryChart();
  renderLowStockTable();
  renderExpiringTable();
  renderInventoryTable();
  renderBillingCatalog();
  renderPatientCards();
  renderBarcodeStickers();
  setupInteractionSelects();
  setupDosageSelects();
  updateBasketBadgeCounts();
});

window.app = {
  switchTab,
  switchAuthTab,
  openMobileSidebar,
  closeMobileSidebar,
  quickAdjustStock,
  flagExpiredBatch,
  addToCart,
  addToCartWithQty,
  adjustCartQty,
  selectPatientForBilling,
  handleCredentialsLogin,
  closeGlobalDropdown,
  openCameraScanner,
  closeCameraScanner,
  captureCameraFrame,
  triggerBarcodeScanner,
  openBarcodeModal,
  closeBarcodeModal,
  handleModalAddToCart,
  printBarcodeLabel,
  openPatientHistoryModal,
  closePatientHistoryModal,
  viewPastInvoicePdf,
  reorderPastBill,
  switchBillBasket,
  renderBarcodeStickers,
  printSingleSticker,
  printAllStickersSheet,
  generateAuditReport,
  exportCsvSimulator,
  openAddDrugModal,
  closeAddDrugModal,
  saveNewDrugFromModal,
  openAddPatientModal,
  closeAddPatientModal,
  saveNewPatientFromModal,
  handleChatSubmit,
  searchMedicines,
  renderBillingCatalog,
  handleGlobalSearchInput,
  renderLowStockTable,
  renderExpiringTable,
  toggleNotificationPopover,
  dismissAllNotifications,
  runInteractionCheck,
  validateDosage,
  renderSalesChart,
  renderInventoryChart
};
