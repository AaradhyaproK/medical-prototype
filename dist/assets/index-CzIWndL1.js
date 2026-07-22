(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const g=[{id:"dolo_650",name:"Dolo 650mg",code:"MED-DOL-65001",barcode:"890123456701",category:"Analgesic / Antipyretic",stock:350,minStock:50,price:30,batch:"DOL-650A",expiry:"11/2027",hsn:"3004",unit:"tablets",maxDaily:4e3,location:"Rack A, Shelf 2 (A-02)"},{id:"croc_650",name:"Crocin 650mg",code:"MED-CRO-65002",barcode:"890123456702",category:"Analgesic / Antipyretic",stock:280,minStock:50,price:28,batch:"CRO-901B",expiry:"09/2027",hsn:"3004",unit:"tablets",maxDaily:4e3,location:"Rack A, Shelf 2 (A-03)"},{id:"azith_500",name:"Azithromycin 500mg",code:"MED-AZI-50003",barcode:"890123456703",category:"Antibiotic",stock:4,minStock:30,price:115,batch:"AZI-500X",expiry:"10/2026",hsn:"3004",unit:"tablets",maxDaily:500,location:"Rack B, Drawer 04 (B-04)"},{id:"panto_40",name:"Pantoprazole 40mg",code:"MED-PAN-40004",barcode:"890123456704",category:"Antacid / PPI",stock:220,minStock:40,price:85,batch:"PAN-4040",expiry:"12/2027",hsn:"3004",unit:"tablets",maxDaily:80,location:"Rack C, Shelf 1 (C-01)"},{id:"combi_400",name:"Combiflam Tablet",code:"MED-CMB-40005",barcode:"890123456705",category:"NSAID Analgesic",stock:190,minStock:40,price:42,batch:"CMB-8812",expiry:"05/2027",hsn:"3004",unit:"tablets",maxDaily:1200,location:"Rack A, Shelf 3 (A-05)"},{id:"aug_625",name:"Augmentin 625mg",code:"MED-AUG-62506",barcode:"890123456706",category:"Antibiotic",stock:0,minStock:30,price:210,batch:"AUG-625K",expiry:"07/2026",hsn:"3004",unit:"tablets",maxDaily:2e3,location:"Rack B, Drawer 06 (B-06)"},{id:"telmi_40",name:"Telmisartan 40mg",code:"MED-TEL-40007",barcode:"890123456707",category:"Antihypertensive",stock:140,minStock:35,price:75,batch:"TEL-4011",expiry:"02/2028",hsn:"3004",unit:"tablets",maxDaily:80,location:"Rack D, Shelf 4 (D-04)"},{id:"mont_10",name:"Montelukast 10mg",code:"MED-MNT-10008",barcode:"890123456708",category:"Anti-asthmatic",stock:15,minStock:40,price:95,batch:"MNT-1099",expiry:"04/2027",hsn:"3004",unit:"tablets",maxDaily:10,location:"Rack E, Drawer 02 (E-02)"},{id:"amox_500",name:"Amoxicillin 500mg",code:"MED-AMX-50009",barcode:"890123456709",category:"Antibiotic",stock:8,minStock:30,price:125,batch:"AMX-2025X",expiry:"03/2026",hsn:"3004",unit:"capsules",maxDaily:3e3,location:"Rack B, Drawer 05 (B-05)"},{id:"lisin_10",name:"Lisinopril 10mg",code:"MED-LIS-10010",barcode:"890123456710",category:"Antihypertensive",stock:110,minStock:40,price:45,batch:"LIS-8849B",expiry:"04/2027",hsn:"3004",unit:"tablets",maxDaily:40,location:"Rack D, Shelf 3 (D-03)"},{id:"atorv_20",name:"Atorvastatin 20mg",code:"MED-ATV-20011",barcode:"890123456711",category:"Statin",stock:0,minStock:25,price:180,batch:"ATV-4011C",expiry:"05/2026",hsn:"3004",unit:"tablets",maxDaily:80,location:"Rack F, Shelf 1 (F-01)"},{id:"metf_500",name:"Metformin 500mg",code:"MED-MET-50012",barcode:"890123456712",category:"Antidiabetic",stock:12,minStock:50,price:35,batch:"MET-1920X",expiry:"08/2026",hsn:"3004",unit:"tablets",maxDaily:2550,location:"Rack C, Shelf 3 (C-03)"},{id:"para_500",name:"Paracetamol 500mg",code:"MED-PAR-50013",barcode:"890123456713",category:"Analgesic",stock:450,minStock:100,price:15,batch:"PAR-9048P",expiry:"11/2028",hsn:"3004",unit:"tablets",maxDaily:4e3,location:"Rack A, Shelf 1 (A-01)"},{id:"aspir_100",name:"Aspirin 100mg",code:"MED-ASP-10014",barcode:"890123456714",category:"Analgesic",stock:120,minStock:30,price:25,batch:"ASP-3022K",expiry:"06/2027",hsn:"3004",unit:"tablets",maxDaily:4e3,location:"Rack F, Shelf 2 (F-02)"},{id:"warf_5",name:"Warfarin 5mg",code:"MED-WRF-50015",barcode:"890123456715",category:"Anticoagulant",stock:65,minStock:20,price:210,batch:"WRF-0599Z",expiry:"08/2026",hsn:"3004",unit:"tablets",maxDaily:10,location:"Lock Cabinet G (G-01)"},{id:"ibup_400",name:"Ibuprofen 400mg",code:"MED-IBU-40017",barcode:"890123456717",category:"Analgesic",stock:260,minStock:50,price:30,batch:"IBU-2041D",expiry:"03/2028",hsn:"3004",unit:"tablets",maxDaily:3200,location:"Rack A, Shelf 4 (A-04)"}],C=[{id:"pat_1",code:"PAT-2026-001",name:"Aarav Patel",age:48,gender:"Male",phone:"+91 98765-43210",email:"aarav.patel@gmail.com",address:"Indiranagar, Bengaluru",bloodGroup:"O+",doctor:"Dr. Ananya Verma, MD",allergies:["Penicillin Anaphylaxis"],activeMeds:["Lisinopril 10mg"]},{id:"pat_2",code:"PAT-2026-002",name:"Priya Sharma",age:62,gender:"Female",phone:"+91 98123-45678",email:"priya.sharma@yahoo.com",address:"Koramangala, Bengaluru",bloodGroup:"B+",doctor:"Dr. Ananya Verma, MD",allergies:["None"],activeMeds:["Metformin 500mg"]}],ae={"warf_5+aspir_100":{severity:"CRITICAL",en:"CRITICAL CONTRAINDICATION: Severe internal hemorrhage risk. Warfarin and Aspirin synergistically inhibit coagulation factors.",hi:"गंभीर चेतावनी: आंतरिक रक्तस्राव का उच्च जोखिम। वॉरफेरिन और एस्पिरिन जमावट को गंभीर रूप से रोकते हैं।",mr:"गंभीर इशारा: अंतर्गत रक्तस्त्रावाचा मोठा धोका."},"lisin_10+ibup_400":{severity:"WARNING",en:"WARNING / MODERATE RISK: Acute renal function impairment. NSAIDs reduce antihypertensive efficacy of ACE Inhibitors.",hi:"चेतावनी: गुर्दे के कार्य में बाधा।",mr:"इशारा: मूत्राशयाच्या कार्यात अडथळा."},"para_500+ibup_400":{severity:"SAFE",en:"SAFE COMBINATION: Complementary analgesic mechanism. Paracetamol & Ibuprofen dual therapy is clinically safe.",hi:"सुरक्षित संयोजन: पैरासिटामोल और इबूप्रोफेन को एक साथ लेना सुरक्षित है।",mr:"सुरक्षित वापर."}};function X(){const e=document.getElementById("sales-chart-container");if(!e)return;const t=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],n=[18500,22400,19800,26500,31200,28900,34600],a=[142,185,160,210,245,230,310],o=480,i=210,c=35,s=Math.max(...n)*1.15,m=Math.max(...a)*1.15;let u="",f="",y="";t.forEach((x,p)=>{const v=c+p*(o-c*2)/(t.length-1),b=i-c-n[p]/s*(i-c*2),w=i-c-a[p]/m*(i-c*2);u+=`${v},${b} `,f+=`${v},${w} `,y+=`
      <text x="${v}" y="${i-10}" font-size="10" font-weight="600" text-anchor="middle" fill="#64748b">${x}</text>
      <circle cx="${v}" cy="${b}" r="4" fill="#0284c7" stroke="#ffffff" stroke-width="2"/>
      <circle cx="${v}" cy="${w}" r="4" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
    `}),e.innerHTML=`
    <svg viewBox="0 0 ${o} ${i}" style="width: 100%; height: 100%; overflow: visible;">
      <line x1="${c}" y1="${c}" x2="${o-c}" y2="${c}" stroke="#e2e8f0" stroke-dasharray="3,3"/>
      <line x1="${c}" y1="${i/2}" x2="${o-c}" y2="${i/2}" stroke="#e2e8f0" stroke-dasharray="3,3"/>
      <line x1="${c}" y1="${i-c}" x2="${o-c}" y2="${i-c}" stroke="#cbd5e1"/>

      <polyline fill="none" stroke="#0284c7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="${u}"/>
      <polyline fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="${f}"/>

      ${y}

      <g transform="translate(${o/2-110}, 15)">
        <rect x="0" y="0" width="10" height="10" rx="2" fill="#0284c7"/>
        <text x="16" y="9" font-size="10" font-weight="700" fill="#334155">Sales Revenue (₹)</text>
        <rect x="130" y="0" width="10" height="10" rx="2" fill="#10b981"/>
        <text x="146" y="9" font-size="10" font-weight="700" fill="#334155">Rx Vision Scans</text>
      </g>
    </svg>
  `}function Z(){const e=document.getElementById("inventory-chart-container");e&&(e.innerHTML=`
    <svg viewBox="0 0 200 200" style="width: 100%; height: 100%;">
      <circle cx="100" cy="100" r="70" fill="none" stroke="#0284c7" stroke-width="28" stroke-dasharray="150 300" stroke-dashoffset="0"/>
      <circle cx="100" cy="100" r="70" fill="none" stroke="#10b981" stroke-width="28" stroke-dasharray="110 300" stroke-dashoffset="-155"/>
      <circle cx="100" cy="100" r="70" fill="none" stroke="#f59e0b" stroke-width="28" stroke-dasharray="90 300" stroke-dashoffset="-270"/>
      <circle cx="100" cy="100" r="70" fill="none" stroke="#8b5cf6" stroke-width="28" stroke-dasharray="90 300" stroke-dashoffset="-365"/>

      <text x="100" y="94" font-size="14" font-weight="800" text-anchor="middle" fill="#0f172a">284</text>
      <text x="100" y="112" font-size="9" font-weight="700" text-anchor="middle" fill="#64748b">Total Drugs</text>
    </svg>
  `)}function N(e,t=24,n="dolo_650"){const a=e||"890123456701";let o="",i=0;for(let c=0;c<a.length;c++){const s=parseInt(a[c],10)||1,m=s%2===0?2:1,u=s%3===0?3:1.5;o+=`<rect x="${i}" y="0" width="${m}" height="${t}" fill="#0f172a"/>`,i+=m+1.5,o+=`<rect x="${i}" y="0" width="${u}" height="${t}" fill="#0f172a"/>`,i+=u+1}return`
    <svg viewBox="0 0 ${i+2} ${t+8}" 
         style="height: ${t}px; max-width: ${t>30?"280px":"120px"}; cursor: pointer;" 
         onclick="event.stopPropagation(); app.openBarcodeModal('${n}');"
         title="Click to Enlarge Barcode in High Resolution">
      ${o}
      <text x="${i/2}" y="${t+7}" font-family="monospace" font-size="${t>30?10:6}" font-weight="700" text-anchor="middle" fill="#475569">${a}</text>
    </svg>
  `}let U=null;function Ae(e){let t=g.find(n=>n.id===e||n.code===e||n.barcode===e)||g[0];U=t.id,document.getElementById("barcode-modal-title").textContent=`${t.name} (${t.code})`,document.getElementById("barcode-modal-subtitle").textContent=`${t.category} • Unit Retail: ₹${t.price.toFixed(2)}`,document.getElementById("barcode-modal-svg-container").innerHTML=N(t.barcode,64,t.id),document.getElementById("barcode-modal-code-num").textContent=t.barcode,document.getElementById("barcode-modal-location").textContent=`📍 Storage: ${t.location||"Rack A-01"}`,document.getElementById("barcode-modal-overlay").style.display="flex"}function _(){document.getElementById("barcode-modal-overlay").style.display="none"}function de(){U&&(V(U),_())}function se(){l("Printing Barcode Label","Sent Code 128 barcode label to thermal printer spool.","info")}function Se(e){const t=C.find(n=>n.id===e||n.code===e)||C[0];document.getElementById("pat-modal-name").textContent=`${t.name} (${t.code})`,document.getElementById("patient-modal-overlay").style.display="flex"}function z(){document.getElementById("patient-modal-overlay").style.display="none"}function Me(){z(),l("PDF Invoice Export","Opened past patient invoice PDF.","info")}function Te(){z(),R("dolo_650",15),R("panto_40",10),$("billing"),l("Reorder Executed","Loaded past bill items into current checkout basket.","success")}function le(){const e=prompt("Enter Patient Full Name:","Sneha Kulkarni");if(!e)return;const t=prompt("Enter Patient Age:","34"),n=prompt("Enter Contact Phone Number:","+91 98234-56789"),a=prompt("Enter Blood Group (e.g. O+, A+, B+):","AB+"),o=`PAT-2026-00${C.length+1}`,i={id:`pat_${Date.now()}`,code:o,name:e,age:parseInt(t,10)||30,gender:"Female",phone:n,email:`${e.toLowerCase().replace(/\s+/g,".")}@gmail.com`,address:"Bengaluru, Karnataka",bloodGroup:a||"O+",doctor:"Dr. Ananya Verma, MD",allergies:["None"],activeMeds:["Pantoprazole 40mg"]};C.push(i),j(),l("New Patient Registered",`Added ${e} (${o}) to clinic database.`,"success")}function me(){document.getElementById("new-drug-name").value="",document.getElementById("new-drug-category").value="Antibiotic",document.getElementById("new-drug-price").value="145.00",document.getElementById("new-drug-stock").value="100",document.getElementById("new-drug-minstock").value="25",document.getElementById("new-drug-batch").value=`BAT-${Math.floor(1e3+Math.random()*9e3)}`,document.getElementById("new-drug-expiry").value="12/2028",document.getElementById("new-drug-location").value="Rack B, Shelf 3 (B-03)",document.getElementById("add-drug-modal-overlay").style.display="flex"}function P(){document.getElementById("add-drug-modal-overlay").style.display="none"}function ue(){const e=document.getElementById("new-drug-name").value.trim();if(!e){l("Input Required","Please enter the medication trade name.","warning");return}const t=document.getElementById("new-drug-category").value,n=parseFloat(document.getElementById("new-drug-price").value)||145,a=parseInt(document.getElementById("new-drug-stock").value,10)||100,o=parseInt(document.getElementById("new-drug-minstock").value,10)||25,i=document.getElementById("new-drug-batch").value||"BAT-9000",c=document.getElementById("new-drug-expiry").value||"12/2028",s=document.getElementById("new-drug-location").value||"Rack B, Shelf 3 (B-03)",m=e.toLowerCase().replace(/[^a-z0-9]/g,"_"),u=Math.floor(1e4+Math.random()*9e4),y={id:`med_${m}_${Date.now().toString().slice(-4)}`,name:e,code:`MED-${e.substring(0,3).toUpperCase()}-${u}`,barcode:`890${u}67${Math.floor(10+Math.random()*89)}`,category:t,stock:a,minStock:o,price:n,batch:i,expiry:c,hsn:"3004",unit:"tablets",maxDaily:2e3,location:s};g.unshift(y),P(),I(),L(),A(),B(),M(),l("Drug Registered Successfully!",`Added ${y.name} (${y.code}) under ${y.category}. Barcode generated!`,"success")}function De(e){const t=e.trim();if(!t)return null;const n=g.find(s=>s.name.toLowerCase().includes(t.toLowerCase())||s.code.toLowerCase().includes(t.toLowerCase())||s.barcode.includes(t));if(n)return n;const a=`dyn_${t.toLowerCase().replace(/[^a-z0-9]/g,"_")}_${Date.now().toString().slice(-4)}`,o=t.charAt(0).toUpperCase()+t.slice(1),i=Math.floor(1e4+Math.random()*9e4),c={id:a,name:o.includes("mg")?o:`${o} Tablet`,code:`MED-${t.substring(0,3).toUpperCase()}-${i}`,barcode:`890${i}67${Math.floor(10+Math.random()*89)}`,category:"General Formulation",stock:100,minStock:20,price:45,batch:`BAT-${Math.floor(1e3+Math.random()*9e3)}`,expiry:"12/2027",hsn:"3004",unit:"tablets",maxDaily:2e3,location:"Rack H, Shelf 1 (H-01)"};return g.push(c),I(),L(),A(),B(),M(),c}function Pe(e){const t=Math.round(e);if(t===0)return"Rupees Zero Only";const n=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],a=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];function o(i){return i<20?n[i]:i<100?a[Math.floor(i/10)]+(i%10?" "+n[i%10]:""):i<1e3?n[Math.floor(i/100)]+" Hundred"+(i%100?" "+o(i%100):""):o(Math.floor(i/1e3))+" Thousand"}return"Rupees "+o(t)+" Only"}const r={isAuthorized:!1,activeTab:"overview",currentLang:"en",pinEntered:"",cameraStream:null,activeBasketIndex:0,billBaskets:[[],[],[]],selectedPatient:null,scannedPrescriptionMeds:[],scannedInvoiceItems:[]};function ge(){const e=document.getElementById("notification-popover");if(!e)return;e.classList.contains("show")?e.classList.remove("show"):(ze(),e.classList.add("show"))}function ze(){const e=document.getElementById("popover-alerts-list");e&&(e.innerHTML=`
    <div class="notification-item unread" style="padding:0.75rem 1rem; border-bottom:1px solid #f1f5f9; display:flex; gap:0.75rem; align-items:flex-start; cursor:pointer;" onclick="app.switchTab('inventory'); app.toggleNotificationPopover();">
      <div style="font-size:1.2rem;">🚨</div>
      <div>
        <div style="font-weight:700; font-size:0.85rem; color:#dc2626;">Critical Out of Stock Alert</div>
        <div style="font-size:0.775rem; color:#475569; margin-top:2px;">Augmentin 625mg & Atorvastatin 20mg have 0 stock available.</div>
        <div style="font-size:0.68rem; color:#0284c7; margin-top:4px; font-weight:600;">⚡ Click to Restock</div>
      </div>
    </div>

    <div class="notification-item unread" style="padding:0.75rem 1rem; border-bottom:1px solid #f1f5f9; display:flex; gap:0.75rem; align-items:flex-start; cursor:pointer;" onclick="app.switchTab('overview'); app.toggleNotificationPopover();">
      <div style="font-size:1.2rem;">⛔</div>
      <div>
        <div style="font-weight:700; font-size:0.85rem; color:#dc2626;">Expired Batch Quarantine</div>
        <div style="font-size:0.775rem; color:#475569; margin-top:2px;">Amoxicillin 500mg (Batch AMX-2025X) expired in March 2026.</div>
        <div style="font-size:0.68rem; color:#0284c7; margin-top:4px; font-weight:600;">🚫 Quarantine Batch</div>
      </div>
    </div>

    <div class="notification-item" style="padding:0.75rem 1rem; border-bottom:1px solid #f1f5f9; display:flex; gap:0.75rem; align-items:flex-start;">
      <div style="font-size:1.2rem;">⚠️</div>
      <div>
        <div style="font-weight:700; font-size:0.85rem; color:#d97706;">Low Stock Warning</div>
        <div style="font-size:0.775rem; color:#475569; margin-top:2px;">Azithromycin 500mg is below threshold (4 packs left).</div>
        <div style="font-size:0.68rem; color:#94a3b8; margin-top:4px;">1 hour ago</div>
      </div>
    </div>

    <div class="notification-item" style="padding:0.75rem 1rem; display:flex; gap:0.75rem; align-items:flex-start;">
      <div style="font-size:1.2rem;">📦</div>
      <div>
        <div style="font-weight:700; font-size:0.85rem; color:#0284c7;">Supplier Receipt Verified</div>
        <div style="font-size:0.775rem; color:#475569; margin-top:2px;">Sun Pharma Invoice INV-SP-2026-9812 committed to stock.</div>
        <div style="font-size:0.68rem; color:#94a3b8; margin-top:4px;">2 hours ago</div>
      </div>
    </div>
  `)}function ye(){const e=document.getElementById("notification-popover"),t=document.getElementById("bell-badge");e&&e.classList.remove("show"),t&&(t.style.display="none"),l("Notifications Cleared","All clinical system alerts dismissed.","success")}function Re(e){r.activeBasketIndex=e;for(let t=0;t<3;t++){const n=document.getElementById(`bill-draft-tab-${t+1}`);n&&(n.style.background=t===e?"#0284c7":"#ffffff",n.style.color=t===e?"#ffffff":"#334155")}k()}function T(){for(let e=0;e<3;e++){const t=document.getElementById(`bill-draft-count-${e+1}`);t&&(t.textContent=r.billBaskets[e].reduce((n,a)=>n+a.qty,0))}}function l(e,t,n="info"){const a=document.getElementById("toast-stack"),o=document.createElement("div");o.className=`toast-alert ${n}`,o.innerHTML=`
    <div class="toast-alert-content">
      <div class="toast-alert-title">${e}</div>
      <div class="toast-alert-desc">${t}</div>
    </div>
    <button class="toast-close-btn">&times;</button>
  `,a.appendChild(o),o.querySelector(".toast-close-btn").addEventListener("click",()=>o.remove()),setTimeout(()=>o.remove(),4e3)}function L(){const e=document.getElementById("dash-low-stock-body");if(!e)return;e.innerHTML="";const t=g.filter(n=>n.stock<n.minStock);if(t.length===0){e.innerHTML='<tr><td colspan="4" style="text-align:center; color:var(--text-muted); padding:1rem;">All inventory levels are fully stocked.</td></tr>';return}t.forEach(n=>{const a=n.stock<=0,o=a?"badge-danger":"badge-warning",i=a?"🚨 OUT OF STOCK":"⚠️ CRITICAL LOW";e.innerHTML+=`
      <tr>
        <td>
          <strong>${n.name}</strong><br>
          <code style="font-size:0.68rem; color:var(--color-primary);">${n.code}</code> • <span style="font-size:0.68rem; color:#0284c7;">📍 ${n.location}</span>
        </td>
        <td><strong style="color:${a?"#dc2626":"#d97706"}">${n.stock} ${n.unit}</strong></td>
        <td>${n.minStock} ${n.unit}</td>
        <td>
          <div style="display:flex; flex-direction:column; gap:0.25rem; align-items:flex-start;">
            <span class="badge ${o}" style="font-size:0.65rem;">${i}</span>
            <button class="btn btn-secondary" style="padding:0.15rem 0.4rem; font-size:0.68rem; margin-top:2px;" onclick="app.quickAdjustStock('${n.id}', 50)">⚡ +50 Restock</button>
          </div>
        </td>
      </tr>
    `})}function A(){const e=document.getElementById("dash-expiring-body");if(!e)return;e.innerHTML="";const t=g.filter(n=>n.expiry.includes("2026")||n.expiry.includes("03/2026")||n.expiry.includes("05/2026"));if(t.length===0){e.innerHTML='<tr><td colspan="4" style="text-align:center; color:var(--text-muted); padding:1rem;">No expired or near-expiry batches detected.</td></tr>';return}t.forEach(n=>{const a=n.expiry.includes("03/2026")||n.expiry.includes("05/2026"),o=a?"badge-danger":"badge-warning",i=a?"⛔ EXPIRED QUARANTINE":"⏳ EXPIRING &lt; 60 DAYS";e.innerHTML+=`
      <tr>
        <td>
          <strong>${n.name}</strong><br>
          <code style="font-size:0.68rem; color:var(--color-primary);">${n.code}</code>
        </td>
        <td><code>${n.batch}</code></td>
        <td><span style="font-weight:700; color:${a?"#dc2626":"#d97706"}">${n.expiry}</span></td>
        <td>
          <div style="display:flex; flex-direction:column; gap:0.25rem; align-items:flex-start;">
            <span class="badge ${o}" style="font-size:0.65rem;">${i}</span>
            <button class="btn btn-secondary" style="padding:0.15rem 0.4rem; font-size:0.68rem; margin-top:2px;" onclick="app.flagExpiredBatch('${n.id}')">🚫 Quarantine Batch</button>
          </div>
        </td>
      </tr>
    `})}function pe(){const e=document.getElementById("inter-select-1"),t=document.getElementById("inter-select-2");!e||!t||(e.innerHTML="",t.innerHTML="",g.forEach((n,a)=>{e.innerHTML+=`<option value="${n.id}" ${a===14?"selected":""}>${n.name} (${n.code})</option>`,t.innerHTML+=`<option value="${n.id}" ${a===13?"selected":""}>${n.name} (${n.code})</option>`}))}function fe(){const e=document.getElementById("inter-select-1").value,t=document.getElementById("inter-select-2").value,n=document.getElementById("interaction-result"),a=document.getElementById("inter-result-title"),o=document.getElementById("inter-result-desc"),i=document.getElementById("inter-result-icon"),c=`${e}+${t}`,s=`${t}+${e}`,m=ae[c]||ae[s];if(n.style.display="block",m)m.severity==="CRITICAL"?(n.className="interaction-result-card critical",i.style.backgroundColor="#fee2e2",i.innerHTML='<span style="font-size: 1.5rem; color: #dc2626;">🚨</span>',a.textContent="Critical Contraindication Detected",o.textContent=m.en,l("Clinical Alert","Critical Drug Interaction Detected!","danger")):(n.className="interaction-result-card warning",i.style.backgroundColor="#fef3c7",i.innerHTML='<span style="font-size: 1.5rem; color: #d97706;">⚠️</span>',a.textContent="Moderate Interaction Warning",o.textContent=m.en,l("Clinical Warning","Moderate Drug Interaction Warning.","warning"));else{const u=g.find(y=>y.id===e),f=g.find(y=>y.id===t);n.className="interaction-result-card safe",i.style.backgroundColor="#dcfce7",i.innerHTML='<span style="font-size: 1.5rem; color: #16a34a;">✓</span>',a.textContent="Safe Combination Verified",o.textContent=`No adverse interaction between ${u?u.name:e} and ${f?f.name:t}. Safe for co-administration.`,l("Safety Checked","No adverse interaction detected.","success")}}function be(){const e=document.getElementById("dosage-select-drug");e&&(e.innerHTML="",g.forEach(t=>{e.innerHTML+=`<option value="${t.id}">${t.name} (${t.code})</option>`}))}function ve(){const e=document.getElementById("dosage-select-drug").value,t=document.getElementById("dosage-input-strength").value,n=document.getElementById("dosage-select-freq").value,a=document.getElementById("dosage-result"),o=g.find(u=>u.id===e)||g[0],i=parseFloat(t)||(o.name.match(/\d+/)?parseFloat(o.name.match(/\d+/)[0]):500),c=parseInt(n,10)||1,s=i*c,m=o.maxDaily||4e3;a.style.display="block",s>m?(a.className="interaction-result-card critical",a.innerHTML=`
      <div style="display: flex; gap: 1rem; align-items: flex-start;">
        <div style="font-size: 1.8rem;">🚨</div>
        <div>
          <h4 style="font-size: 1.1rem; font-weight: 700; color: #dc2626; margin-bottom: 0.35rem;">CRITICAL OVERDOSE HAZARD DETECTED</h4>
          <p style="font-size: 0.9rem; line-height: 1.45; color: #7f1d1d;">
            Prescribed Total Daily Dose: <strong>${s}mg/day</strong> (${i}mg × ${c} times).<br>
            FDA Maximum Safe Daily Limit for <strong>${o.name}</strong> is <strong>${m}mg/day</strong>.<br>
            <span style="font-weight:700; color:#dc2626;">Hazard: Exceeds threshold by ${s-m}mg. High risk of organ toxicity!</span>
          </p>
        </div>
      </div>
    `,l("Overdose Warning!",`${s}mg/day exceeds safe limit of ${m}mg/day!`,"danger")):(a.className="interaction-result-card safe",a.innerHTML=`
      <div style="display: flex; gap: 1rem; align-items: flex-start;">
        <div style="font-size: 1.8rem; color: #16a34a;">✓</div>
        <div>
          <h4 style="font-size: 1.1rem; font-weight: 700; color: #16a34a; margin-bottom: 0.35rem;">DOSAGE APPROVED - WITHIN SAFE FDA LIMITS</h4>
          <p style="font-size: 0.9rem; line-height: 1.45; color: #14532d;">
            Prescribed Total Daily Dose: <strong>${s}mg/day</strong> (${i}mg × ${c} times).<br>
            FDA Maximum Safe Daily Limit for <strong>${o.name}</strong>: <strong>${m}mg/day</strong>.<br>
            Status: <span style="font-weight:700; color:#16a34a;">Clinically safe for prescription execution.</span>
          </p>
        </div>
      </div>
    `,l("Dosage Safe",`${s}mg/day is clinically safe.`,"success"))}function F(e){const t=(e||"").trim().toLowerCase();return t?g.filter(n=>{const a=n.name.toLowerCase().includes(t),o=n.code.toLowerCase().includes(t),i=n.category.toLowerCase().includes(t),c=n.barcode.includes(t),s=n.location?n.location.toLowerCase().includes(t):!1;return a||o||i||c||s}):g}function Q(){const e=document.getElementById("global-search-input"),t=document.getElementById("global-search-dropdown");if(!e||!t)return;const n=e.value.trim().toLowerCase();if(!n){t.classList.remove("show"),t.innerHTML="";return}const a=F(n);if(a.length===0){t.innerHTML=`<div style="padding:0.85rem; text-align:center; color:var(--text-muted); font-size:0.8rem">No matching tablets found for "${n}".</div>`,t.classList.add("show");return}t.innerHTML="",a.slice(0,6).forEach(o=>{const i=N(o.barcode,20,o.id),c=document.createElement("div");c.className="global-search-item",c.innerHTML=`
      <div style="display:flex; justify-content:space-between; align-items:flex-start; width:100%;">
        <div>
          <div style="font-weight: 800; font-size: 0.9rem; color: var(--text-primary);">
            ${o.name} <code style="font-size: 0.725rem; color: var(--color-primary);">${o.code}</code>
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">
            ${o.category} • <strong style="color:var(--color-primary)">₹${o.price.toFixed(2)}</strong>
          </div>
          <div style="margin-top: 4px;">${i}</div>
        </div>
        <div style="display:flex; flex-direction:column; align-items:flex-end; gap:0.25rem;">
          <span class="drug-location-badge">📍 ${o.location||"Rack A-01"}</span>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 0.5rem;">
        <div style="display:flex; gap:0.25rem;">
          <button class="btn btn-secondary" style="padding:0.2rem 0.45rem; font-size:0.7rem; font-weight:700;" onclick="app.addToCartWithQty('${o.id}', 1); app.closeGlobalDropdown();">+1</button>
          <button class="btn btn-secondary" style="padding:0.2rem 0.45rem; font-size:0.7rem; font-weight:700;" onclick="app.addToCartWithQty('${o.id}', 5); app.closeGlobalDropdown();">+5</button>
          <button class="btn btn-primary" style="padding:0.2rem 0.5rem; font-size:0.7rem; font-weight:700;" onclick="app.addToCartWithQty('${o.id}', 10); app.closeGlobalDropdown();">+10</button>
        </div>
      </div>
    `,t.appendChild(c)}),t.classList.add("show")}function K(){const e=document.getElementById("global-search-dropdown");e&&e.classList.remove("show")}function B(){const e=document.getElementById("billing-catalog-list");if(!e)return;e.innerHTML="";const t=document.getElementById("billing-search-input"),n=t?t.value:"",a=F(n);if(a.length===0){e.innerHTML=`<div style="padding:2.5rem; text-align:center; color:var(--text-muted); font-size:0.85rem;">No matching tablets found in pharmacy catalog for "${n}".</div>`;return}a.forEach(o=>{const i=o.stock<=0,c=N(o.barcode,20,o.id);e.innerHTML+=`
      <div class="cart-item" style="cursor: pointer; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <h4 style="${i?"text-decoration:line-through; color:var(--text-muted)":""}">${o.name}</h4>
          <p style="font-size:0.75rem; color:var(--text-muted)">
            <code style="color:var(--color-primary);">${o.code}</code> • ₹${o.price.toFixed(2)} • 📍 ${o.location||"Rack A-01"}
          </p>
        </div>
        <div style="display:flex; align-items:center; gap:0.35rem;">
          ${c}
          <div style="display:flex; gap:0.25rem; margin-left:0.5rem;">
            <button class="btn btn-secondary" style="padding:0.25rem 0.45rem; font-size:0.725rem; font-weight:700;" onclick="app.addToCartWithQty('${o.id}', 1)">+1</button>
            <button class="btn btn-secondary" style="padding:0.25rem 0.45rem; font-size:0.725rem; font-weight:700;" onclick="app.addToCartWithQty('${o.id}', 5)">+5</button>
            <button class="btn btn-primary" style="padding:0.25rem 0.5rem; font-size:0.725rem; font-weight:700;" onclick="app.addToCartWithQty('${o.id}', 10)">+10</button>
          </div>
        </div>
      </div>
    `})}function V(e){R(e,1)}function R(e,t=1){let n=g.find(i=>i.id===e||i.code===e||i.barcode===e);if(!n)return;const a=r.billBaskets[r.activeBasketIndex],o=a.find(i=>i.id===n.id);o?o.qty+=t:a.push({id:n.id,name:n.name,code:n.code,barcode:n.barcode,batch:n.batch,expiry:n.expiry,hsn:n.hsn,qty:t,price:n.price}),k(),T(),l("Item Added",`+${t} ${n.name} added to Bill #${r.activeBasketIndex+1}.`,"success")}function Ne(e,t){const n=r.billBaskets[r.activeBasketIndex],a=n.find(o=>o.id===e);a&&(a.qty+=t,a.qty<=0&&(r.billBaskets[r.activeBasketIndex]=n.filter(o=>o.id!==e)),k(),T())}function k(){const e=document.getElementById("billing-cart-items"),t=document.getElementById("cart-item-count");if(!e)return;e.innerHTML="";const n=r.billBaskets[r.activeBasketIndex],a=n.reduce((p,v)=>p+v.qty,0);if(t.textContent=`${a} items (Bill #${r.activeBasketIndex+1})`,n.length===0){e.innerHTML=`<div style="padding:3rem 1.5rem; text-align:center; color:var(--text-muted)">Billing Basket #${r.activeBasketIndex+1} is empty. Use quick search [Ctrl+K] or scan barcode.</div>`,document.getElementById("billing-clear-btn").disabled=!0,document.getElementById("billing-checkout-btn").disabled=!0,document.getElementById("bill-subtotal-val").textContent="₹0.00",document.getElementById("bill-discount-val").textContent="₹0.00",document.getElementById("bill-tax-val").textContent="₹0.00",document.getElementById("bill-total-val").textContent="₹0.00";return}document.getElementById("billing-clear-btn").disabled=!1,document.getElementById("billing-checkout-btn").disabled=!1;let o=0;n.forEach(p=>{const v=p.qty*p.price;o+=v,e.innerHTML+=`
      <div class="cart-item">
        <div class="cart-item-details">
          <h4>${p.name}</h4>
          <p><code style="font-size:0.7rem; color:var(--color-primary);">${p.code||"MED-001"}</code> • ₹${p.price.toFixed(2)} / unit</p>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="app.adjustCartQty('${p.id}', -1)">-</button>
          <span class="qty-val">${p.qty}</span>
          <button class="qty-btn" onclick="app.adjustCartQty('${p.id}', 1)">+</button>
        </div>
        <div class="cart-item-price">₹${v.toFixed(2)}</div>
      </div>
    `});const i=document.getElementById("billing-gst-select"),c=document.getElementById("billing-discount-select"),s=i?parseFloat(i.value)||0:5,m=c&&parseFloat(c.value)||0,u=o*(m/100),f=o-u,y=f*(s/100),x=f+y;document.getElementById("bill-subtotal-val").textContent=`₹${o.toFixed(2)}`,document.getElementById("bill-discount-label").textContent=`Discounts (${m}%)`,document.getElementById("bill-discount-val").textContent=`-₹${u.toFixed(2)}`,document.getElementById("bill-tax-label").textContent=`Tax (${s}% GST)`,document.getElementById("bill-tax-val").textContent=`₹${y.toFixed(2)}`,document.getElementById("bill-total-val").textContent=`₹${x.toFixed(2)}`,T()}function Fe(){r.billBaskets[r.activeBasketIndex]=[],r.selectedPatient=null,document.getElementById("billing-active-patient-name").textContent="Walk-in Patient",k(),T()}function He(){const e=r.billBaskets[r.activeBasketIndex];if(e.length===0)return;document.getElementById("invoice-pdf-overlay").classList.add("show");const n=`INV-2026-${Math.floor(1e3+Math.random()*9e3)}`;document.getElementById("pdf-invoice-number").textContent=n,document.getElementById("pdf-invoice-date").textContent=new Date().toISOString().replace("T"," ").substring(0,16),document.getElementById("pdf-patient-name").textContent=r.selectedPatient?r.selectedPatient.name:"Walk-in Patient";const a=document.getElementById("pdf-invoice-items");a.innerHTML="";let o=0;e.forEach((b,w)=>{const D=b.qty*b.price;o+=D;const H=N(b.barcode,20,b.id);a.innerHTML+=`
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 0.5rem; text-align: center; border: 1px solid #cbd5e1;">${w+1}</td>
        <td style="padding: 0.5rem; text-align: left; border: 1px solid #cbd5e1;">
          <strong>${b.name}</strong><br>
          <code style="font-size:0.65rem; color:#0284c7;">${b.code||"MED-001"}</code>
          <div>${H}</div>
        </td>
        <td style="padding: 0.5rem; text-align: center; border: 1px solid #cbd5e1;">${b.hsn||"3004"}</td>
        <td style="padding: 0.5rem; text-align: center; border: 1px solid #cbd5e1;"><code>${b.batch||"AMX-2026A"}</code></td>
        <td style="padding: 0.5rem; text-align: center; border: 1px solid #cbd5e1;">${b.expiry||"08/2026"}</td>
        <td style="padding: 0.5rem; text-align: center; border: 1px solid #cbd5e1;">${b.qty}</td>
        <td style="padding: 0.5rem; text-align: right; border: 1px solid #cbd5e1;">₹${b.price.toFixed(2)}</td>
        <td style="padding: 0.5rem; text-align: right; border: 1px solid #cbd5e1; font-weight:600;">₹${D.toFixed(2)}</td>
      </tr>
    `});const i=document.getElementById("billing-gst-select"),c=document.getElementById("billing-discount-select"),s=i?parseFloat(i.value)||0:5,m=c&&parseFloat(c.value)||0,u=o*(m/100),f=o-u,y=s/2,x=f*(y/100),p=f*(y/100),v=f+x+p;document.getElementById("pdf-subtotal-gross-val").textContent=`₹${o.toFixed(2)}`,document.getElementById("pdf-discount-pct").textContent=m,document.getElementById("pdf-discount-val").textContent=`-₹${u.toFixed(2)}`,document.getElementById("pdf-subtotal-val").textContent=`₹${f.toFixed(2)}`,document.getElementById("pdf-cgst-label").textContent=`CGST (${y}%):`,document.getElementById("pdf-cgst-val").textContent=`₹${x.toFixed(2)}`,document.getElementById("pdf-sgst-label").textContent=`SGST (${y}%):`,document.getElementById("pdf-sgst-val").textContent=`₹${p.toFixed(2)}`,document.getElementById("pdf-total-val").textContent=`₹${v.toFixed(2)}`,document.getElementById("pdf-amount-words").textContent=Pe(v)}function Oe(){document.getElementById("invoice-pdf-overlay").classList.remove("show"),r.billBaskets[r.activeBasketIndex]=[],r.selectedPatient=null,document.getElementById("billing-active-patient-name").textContent="Walk-in Patient",k(),T(),document.getElementById("billing-search-input").focus()}function qe(){l("Printing / Saving PDF","Opening browser print dialog...","info"),setTimeout(()=>window.print(),400)}function he(){const e=document.getElementById("reports-type").value,t=document.getElementById("reports-range").value,n=document.getElementById("reports-preview-container");if(!n)return;l("Compiling Audit Data",`Generating live ${e.toUpperCase()} dataset for ${t}...`,"info");let a="";e==="sales"?a=`
      <div style="padding:1rem;">
        <h4 style="color:var(--text-primary); margin-bottom:0.5rem;">📊 Sales Revenue & GST Audit Ledger (${t})</h4>
        <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:1rem;">Verified POS ledger transactions under Pharmacy License KA-BLR-2026-98765.</p>
        <div class="table-container">
          <table>
            <thead>
              <tr style="background:#f8fafc;">
                <th>Transaction #</th><th>Date & Time</th><th>Patient Profile</th><th>Taxable (₹)</th><th>GST (₹)</th><th>Net Total (₹)</th><th>Channel</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>TX-2026-9041</code></td><td>2026-07-22 08:12</td><td>Priya Sharma (PAT-002)</td><td>₹7,142.86</td><td>₹357.14</td><td><strong style="color:var(--color-success)">₹7,500.00</strong></td><td>HDFC Credit Card</td></tr>
              <tr><td><code>TX-2026-9040</code></td><td>2026-07-22 07:45</td><td>Walk-in Patient</td><td>₹285.71</td><td>₹14.29</td><td><strong style="color:var(--color-success)">₹300.00</strong></td><td>UPI / PhonePe</td></tr>
              <tr><td><code>TX-2026-9039</code></td><td>2026-07-21 17:30</td><td>Aarav Patel (PAT-001)</td><td>₹3,714.29</td><td>₹185.71</td><td><strong style="color:var(--color-success)">₹3,900.00</strong></td><td>Google Pay UPI</td></tr>
              <tr><td><code>TX-2026-9038</code></td><td>2026-07-21 15:10</td><td>Rajesh Kumar (PAT-003)</td><td>₹3,000.00</td><td>₹150.00</td><td><strong style="color:var(--color-success)">₹3,150.00</strong></td><td>Cash Memo</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `:a=`
      <div style="padding:1rem;">
        <h4 style="color:var(--text-primary); margin-bottom:0.5rem;">📦 Active Stock Valuation & Batch Expiry Audit</h4>
        <div class="table-container">
          <table>
            <thead>
              <tr style="background:#f8fafc;">
                <th>Code</th><th>Medication Name</th><th>Storage Location</th><th>Stock Qty</th><th>Batch #</th><th>Expiry</th><th>Valuation (₹)</th>
              </tr>
            </thead>
            <tbody>
              ${g.map(o=>`
                <tr>
                  <td><code>${o.code}</code></td>
                  <td><strong>${o.name}</strong></td>
                  <td>📍 ${o.location}</td>
                  <td>${o.stock} ${o.unit}</td>
                  <td><code>${o.batch}</code></td>
                  <td><span style="color:${o.expiry.includes("2026")?"#dc2626":"#16a34a"}">${o.expiry}</span></td>
                  <td>₹${(o.stock*o.price).toFixed(2)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,n.innerHTML=a,l("Report Ready",`Audit report compiled with ${e.toUpperCase()} records.`,"success")}function Ee(){l("Downloading CSV File","Generating audit export spreadsheet...","success")}function O(e=null){const t=document.getElementById("chat-input"),n=e||(t?t.value.trim():"");n&&(ce(n,"user"),t&&(t.value=""),setTimeout(()=>{let a="";const o=n.toLowerCase();if(o.includes("metformin"))a=`<strong>🤖 AI Clinical Monograph: Metformin 500mg</strong><br>
      • <strong>Indications:</strong> First-line glycemic management in Type 2 Diabetes Mellitus.<br>
      • <strong>Dosing:</strong> Initial 500mg BID with meals. Max daily limit: 2550mg/day.<br>
      • <strong>Renal Guidelines:</strong> Contraindicated if eGFR &lt; 30 mL/min/1.73m².<br>
      • <strong>Adverse Risk:</strong> Gastrointestinal distress, Lactic Acidosis risk. Monitor Vitamin B12.`;else if(o.includes("amoxicillin"))a=`<strong>🤖 AI Clinical Monograph: Amoxicillin 500mg</strong><br>
      • <strong>Indications:</strong> Broad-spectrum aminopenicillin for respiratory tract & otitis media infections.<br>
      • <strong>Pediatric Dosing:</strong> 20 - 40 mg/kg/day in divided doses q8h.<br>
      • <strong>FDA Warning:</strong> Contraindicated in patients with history of Penicillin Anaphylaxis.`;else if(o.includes("amlodipine"))a=`<strong>🤖 AI Clinical Monograph: Amlodipine 5mg</strong><br>
      • <strong>Indications:</strong> Dihydropyridine Calcium Channel Blocker for Essential Hypertension & Angina.<br>
      • <strong>Dosing:</strong> 5mg to 10mg once daily.<br>
      • <strong>Patient Counseling:</strong> Monitor for peripheral pedal edema, flushing, and orthostatic dizziness.`;else if(o.includes("warfarin"))a=`<strong>🤖 AI Clinical Monograph: Warfarin 5mg</strong><br>
      • <strong>Indications:</strong> Vitamin K Antagonist Anticoagulant for AFib & Deep Vein Thrombosis.<br>
      • <strong>Dietary Warning:</strong> Avoid sudden changes in Vitamin K rich foods (spinach, kale, broccoli).<br>
      • <strong>Contraindications:</strong> Severe bleeding risk when co-administered with NSAIDs or Aspirin! Target INR: 2.0 - 3.0.`;else{const i=g.find(c=>o.includes(c.name.toLowerCase().split(" ")[0]));i?a=`<strong>🤖 AI Clinical Drug Monograph: ${i.name} (${i.code})</strong><br>
        • <strong>Category:</strong> ${i.category}<br>
        • <strong>Pharmacy Rack Location:</strong> 📍 ${i.location}<br>
        • <strong>Stock Status:</strong> ${i.stock} ${i.unit} available at ₹${i.price.toFixed(2)} / pack.<br>
        • <strong>FDA Daily Max Limit:</strong> ${i.maxDaily}mg/day.`:a=`<strong>🤖 AI Clinical Assistant</strong><br>
        Parsed clinical request for "<em>${n}</em>". Database verified: No severe organ toxicity flags. Always check patient allergy profiles before dispensing.`}ce(a,"assistant")},600))}function ce(e,t){const n=document.getElementById("chat-history-container");if(!n)return;const a=document.createElement("div");a.className=`chat-bubble ${t}`,a.innerHTML=`<p>${e}</p>`,n.appendChild(a),n.scrollTop=n.scrollHeight}function re(){document.getElementById("invoice-upload-prompt").style.display="none",document.getElementById("invoice-preview-wrap").style.display="flex",document.getElementById("invoice-scan-btn").disabled=!1,document.getElementById("invoice-clear-btn").disabled=!1}function xe(){document.getElementById("invoice-preview-wrap").style.display="none",document.getElementById("invoice-upload-prompt").style.display="block",document.getElementById("invoice-scan-btn").disabled=!0,document.getElementById("invoice-clear-btn").disabled=!0,r.scannedInvoiceItems=[],document.getElementById("invoice-actions-wrap").style.display="none"}function _e(){const e=document.getElementById("invoice-laser");e&&(e.style.display="block"),l("Invoice Vision OCR","Scanning Sun Pharma Distributors supply receipt...","info"),setTimeout(()=>{e&&(e.style.display="none"),document.getElementById("invoice-meta-distrib").textContent="Sun Pharma Distributors India Pvt. Ltd.",document.getElementById("invoice-meta-no").textContent="INV-SP-2026-9812",document.getElementById("invoice-meta-total").textContent="₹48,500.00",r.scannedInvoiceItems=[{id:"aug_625",name:"Augmentin 625mg",code:"MED-AUG-62506",addQty:50,cost:180},{id:"azith_500",name:"Azithromycin 500mg",code:"MED-AZI-50003",addQty:50,cost:95},{id:"panto_40",name:"Pantoprazole 40mg",code:"MED-PAN-40004",addQty:100,cost:70}];const t=document.getElementById("invoice-ocr-table-body");t.innerHTML="",r.scannedInvoiceItems.forEach(n=>{t.innerHTML+=`
        <tr>
          <td><strong>${n.name}</strong><br><code style="font-size:0.7rem; color:var(--color-primary);">${n.code}</code></td>
          <td>10 tablets / strip</td>
          <td><strong style="color:var(--color-success)">+${n.addQty} packs</strong></td>
          <td>₹${n.cost.toFixed(2)}</td>
        </tr>
      `}),document.getElementById("invoice-actions-wrap").style.display="block",l("Invoice OCR Parsed","Extracted 3 supply lines from Sun Pharma invoice.","success")},1500)}function Ve(){!r.scannedInvoiceItems||r.scannedInvoiceItems.length===0||(r.scannedInvoiceItems.forEach(e=>{const t=g.find(n=>n.id===e.id);t&&(t.stock+=e.addQty)}),I(),L(),A(),B(),xe(),l("Inventory Stock Synchronized!","Updated inventory stock levels from supplier receipt.","success"))}function Ie(){const e=document.getElementById("camera-modal-overlay"),t=document.getElementById("camera-video-stream");e.style.display="flex",navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then(n=>{r.cameraStream=n,t.srcObject=n}).catch(()=>{})}function Y(){const e=document.getElementById("camera-modal-overlay");r.cameraStream&&(r.cameraStream.getTracks().forEach(t=>t.stop()),r.cameraStream=null),e.style.display="none"}function Be(){Y(),ke(),$e()}function ke(){document.getElementById("presc-upload-prompt").style.display="none",document.getElementById("presc-preview-wrap").style.display="flex",document.getElementById("presc-scan-btn").disabled=!1,document.getElementById("presc-clear-btn").disabled=!1}function Ge(){document.getElementById("presc-preview-wrap").style.display="none",document.getElementById("presc-upload-prompt").style.display="block",document.getElementById("presc-scan-btn").disabled=!0,document.getElementById("presc-clear-btn").disabled=!0,r.scannedPrescriptionMeds=[],document.getElementById("presc-actions-wrap").style.display="none"}function $e(){const e=document.getElementById("presc-laser"),t=document.getElementById("presc-ocr-status");e&&(e.style.display="block"),t.textContent="Scanning paper prescription...",setTimeout(()=>{e&&(e.style.display="none"),t.textContent="Scan Successful",t.className="badge badge-success",document.getElementById("presc-meta-dr").textContent="Dr. Ananya Verma, MD",document.getElementById("presc-meta-date").textContent=new Date().toISOString().substring(0,10);const n=[{rawName:"Dolo 650mg",dosage:"650mg (1 tab)",freq:"TID (3x daily)",duration:"5 days",defaultQty:15},{rawName:"Amoxicillin 500mg",dosage:"500mg (1 cap)",freq:"TID (3x daily)",duration:"7 days",defaultQty:21},{rawName:"Pantoprazole 40mg",dosage:"40mg (1 tab)",freq:"OD (Before breakfast)",duration:"10 days",defaultQty:10}];r.scannedPrescriptionMeds=[];const a=document.getElementById("presc-ocr-table-body");a.innerHTML="",n.forEach(o=>{let i=De(o.rawName);r.scannedPrescriptionMeds.push({id:i.id,name:i.name,code:i.code,barcode:i.barcode,price:i.price,qty:o.defaultQty,location:i.location}),a.innerHTML+=`
        <tr>
          <td><strong>${i.name}</strong><br><code style="font-size:0.7rem; color:var(--color-primary);">${i.code}</code> • <span style="font-size:0.7rem; color:#0284c7;">📍 ${i.location||"Rack A-01"}</span></td>
          <td>${o.dosage}</td>
          <td><span class="badge badge-success" style="font-size:0.68rem;">${o.freq}</span></td>
          <td>${o.duration} (Qty: ${o.defaultQty})</td>
        </tr>
      `}),document.getElementById("presc-actions-wrap").style.display="block",l("Prescription Vision OCR",`Extracted ${n.length} tablets from paper prescription.`,"success")},1500)}function We(){!r.scannedPrescriptionMeds||r.scannedPrescriptionMeds.length===0||(r.scannedPrescriptionMeds.forEach(e=>R(e.id,e.qty)),$("billing"),k(),l("Billing Cart Loaded","Scanned tablets added to cart.","success"))}function Ue(){r.selectedPatient=C[0],document.getElementById("billing-active-patient-name").textContent=`${r.selectedPatient.name} (${r.selectedPatient.code})`,l("Patient Linked","Aarav Patel linked.","success")}function we(){const e=g[Math.floor(Math.random()*g.length)];l("⚡ Barcode Scanned",`Scanned Code: ${e.barcode} - ${e.name}`,"success"),V(e.id),$("billing")}function Qe(e){if(!e)return;const t=g[Math.floor(Math.random()*g.length)];l("Barcode Image Uploaded",`Parsed Barcode: ${t.barcode} - Added ${t.name} to cart.`,"success"),V(t.id),$("billing")}function Ke(){l("Terminal Unlocked","Verification approved.","success"),document.getElementById("auth-overlay").style.display="none",r.isAuthorized=!0}function S(e){e==="C"?r.pinEntered="":e==="⌫"?r.pinEntered=r.pinEntered.slice(0,-1):r.pinEntered.length<4&&(r.pinEntered+=e),r.pinEntered.length===4&&r.pinEntered==="1234"&&(l("Terminal Unlocked","Access granted.","success"),document.getElementById("auth-overlay").style.display="none",r.isAuthorized=!0)}function q(){document.getElementById("auth-overlay").style.display="none",r.isAuthorized=!0}function je(){r.isAuthorized=!1,document.getElementById("auth-overlay").style.display="flex"}function $(e){document.querySelectorAll(".menu-item").forEach(t=>t.classList.toggle("active",t.getAttribute("data-tab")===e)),document.querySelectorAll(".tab-page").forEach(t=>t.classList.toggle("active",t.id===`${e}-tab`)),r.activeTab=e,e==="overview"&&(X(),Z(),L(),A()),e==="inventory"&&I(),e==="interaction"&&pe(),e==="dosage"&&be(),e==="barcode-stickers"&&M(),e==="billing"&&(B(),document.getElementById("billing-search-input").focus())}function Xe(e){r.currentLang=e,document.getElementById("current-lang-name").textContent=e.toUpperCase()}function I(){const e=document.getElementById("inventory-table-body");if(!e)return;e.innerHTML="";const t=(document.getElementById("inventory-search")?document.getElementById("inventory-search").value:"").toLowerCase(),n=document.getElementById("inventory-filter-category")?document.getElementById("inventory-filter-category").value:"All",a=document.getElementById("inventory-filter-status")?document.getElementById("inventory-filter-status").value:"All";let o=F(t);if(n!=="All"&&(o=o.filter(i=>i.category.toLowerCase().includes(n.toLowerCase()))),a!=="All"&&(a==="Low Stock"?o=o.filter(i=>i.stock<i.minStock):a==="Expiring"?o=o.filter(i=>i.expiry.includes("2026")||i.expiry.includes("03/2026")||i.expiry.includes("05/2026")):a==="Normal"&&(o=o.filter(i=>i.stock>=i.minStock&&!i.expiry.includes("03/2026")&&!i.expiry.includes("05/2026")))),o.length===0){e.innerHTML='<tr><td colspan="8" style="text-align:center; color:var(--text-muted); padding:2rem;">No formulations matching search or filter criteria.</td></tr>';return}o.forEach(i=>{const c=i.stock<=0,s=i.stock<i.minStock&&i.stock>0,m=i.expiry.includes("03/2026")||i.expiry.includes("05/2026");let u='<span class="badge badge-success">In Stock</span>';c?u='<span class="badge badge-danger">🚨 Out of Stock</span>':s?u='<span class="badge badge-warning">⚠️ Low Stock</span>':m&&(u='<span class="badge badge-danger">⛔ Expired</span>'),e.innerHTML+=`
      <tr>
        <td>
          <strong>${i.name}</strong> <code style="font-size:0.7rem;">(${i.code})</code><br>
          <span style="font-size:0.68rem; color:#0284c7;">📍 ${i.location||"Rack A-01"}</span>
        </td>
        <td>${i.category}</td>
        <td><strong style="color:${c?"#dc2626":s?"#d97706":"#16a34a"}">${i.stock} ${i.unit}</strong></td>
        <td>${u}</td>
        <td><code>${i.batch}</code></td>
        <td><span style="color:${m?"#dc2626":"inherit"}">${i.expiry}</span></td>
        <td>₹${i.price.toFixed(2)}</td>
        <td><button class="btn btn-secondary" onclick="app.quickAdjustStock('${i.id}', 10)">+10</button></td>
      </tr>
    `})}function Ze(e,t){const n=g.find(a=>a.id===e);n&&(n.stock+=t),I(),L(),A(),B(),l("Inventory Stock Updated",`Restocked +${t} for ${n?n.name:"Medication"}.`,"success")}function Ye(e){const t=g.find(n=>n.id===e);l("Quarantine Protocol Triggered",`Moved batch ${t?t.batch:"BAT-001"} for ${t?t.name:"Medication"} to Vendor Quarantine Vault.`,"warning")}function M(){const e=document.getElementById("barcode-stickers-grid"),t=document.getElementById("sticker-item-count");if(!e)return;e.innerHTML="";const n=(document.getElementById("sticker-search-input")?document.getElementById("sticker-search-input").value:"").toLowerCase(),a=F(n);t.textContent=a.length,a.forEach(o=>{const i=N(o.barcode,45,o.id);e.innerHTML+=`
      <div class="barcode-sticker-card">
        <div style="font-size:0.625rem; font-weight:800; text-transform:uppercase; color:#0284c7; letter-spacing:0.5px; margin-bottom:2px;">AI HEALTECH DYNAMICS</div>
        <div style="font-size:0.95rem; font-weight:800; color:#0f172a; margin-bottom:2px;">${o.name}</div>
        <div style="font-size:0.725rem; font-family:monospace; color:#475569; font-weight:700; margin-bottom:6px;">${o.code}</div>
        <div style="width:100%; display:flex; justify-content:center; margin: 4px 0;">${i}</div>
        <div style="font-size:0.75rem; font-family:monospace; font-weight:800; color:#0f172a; margin-top:2px;">${o.barcode}</div>
        <div style="display:flex; justify-content:space-between; width:100%; font-size:0.7rem; color:#64748b; font-weight:600; margin-top:8px; border-top:1px dashed #e2e8f0; padding-top:4px;">
          <span>MRP: ₹${o.price.toFixed(2)}</span>
          <span>EXP: ${o.expiry}</span>
        </div>
        <button class="btn btn-secondary" style="width:100%; font-size:0.725rem; margin-top:8px; padding:0.25rem;" onclick="app.printSingleSticker('${o.id}')">🖨️ Print Label Sticker</button>
      </div>
    `})}function Je(e){const t=g.find(n=>n.id===e);l("Printing Sticker Tag",`Sending barcode sticker for ${t?t.name:"Tablet"} to printer...`,"info"),document.body.classList.add("printing-stickers"),setTimeout(()=>{window.print(),document.body.classList.remove("printing-stickers")},300)}function Ce(){l("Printing Sticker Sheet","Preparing thermal sheet for printing...","info"),document.body.classList.add("printing-stickers"),setTimeout(()=>{window.print(),document.body.classList.remove("printing-stickers")},400)}function j(){const e=document.getElementById("patients-cards-container");if(!e)return;e.innerHTML="";const t=(document.getElementById("patient-search")?document.getElementById("patient-search").value:"").toLowerCase();C.filter(a=>a.name.toLowerCase().includes(t)||a.code.toLowerCase().includes(t)||a.phone.includes(t)).forEach(a=>{e.innerHTML+=`
      <div class="glass-card patient-card">
        <h4>${a.name} (${a.code})</h4>
        <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:0.5rem;">${a.phone} • Blood: <strong style="color:#dc2626;">${a.bloodGroup}</strong></p>
        <div style="display:flex; gap:0.5rem; margin-top:0.75rem;">
          <button class="btn btn-secondary" style="font-size:0.75rem;" onclick="app.openPatientHistoryModal('${a.id}')">📜 History & Dossier</button>
          <button class="btn btn-primary" style="font-size:0.75rem;" onclick="app.selectPatientForBilling('${a.id}')">🛒 Start Billing</button>
        </div>
      </div>
    `})}function et(e){const t=C.find(n=>n.id===e||n.code===e);t&&(r.selectedPatient=t,document.getElementById("billing-active-patient-name").textContent=`${t.name} (${t.code})`,$("billing"),l("Patient Linked",`Linked ${t.name} (${t.code}) to active bill.`,"success"))}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("auth-scanner").addEventListener("click",Ke),document.getElementById("auth-login-btn").addEventListener("click",q),document.querySelectorAll(".keypad-btn").forEach(d=>{d.addEventListener("click",()=>{d.id==="keypad-clear"?S("C"):d.id==="keypad-back"?S("⌫"):S(d.textContent)})}),document.getElementById("logout-btn").addEventListener("click",je),document.querySelectorAll(".menu-item").forEach(d=>{d.addEventListener("click",()=>$(d.getAttribute("data-tab")))});const e=document.getElementById("bell-btn")||document.getElementById("notif-bell-btn");e&&e.addEventListener("click",ge);const t=document.getElementById("popover-close");t&&t.addEventListener("click",ye);const n=document.getElementById("lang-menu-btn"),a=document.getElementById("lang-dropdown-menu");n.addEventListener("click",()=>a.classList.toggle("show")),document.querySelectorAll(".lang-option").forEach(d=>{d.addEventListener("click",()=>{Xe(d.getAttribute("data-lang")),a.classList.remove("show")})}),window.addEventListener("keydown",d=>{const h=document.getElementById("auth-overlay");if(h&&h.style.display!=="none"||!r.isAuthorized){const E=document.activeElement;if(E&&(E.id==="auth-username"||E.id==="auth-password")){d.key==="Enter"&&q();return}if(/^[0-9]$/.test(d.key)){d.preventDefault(),S(d.key);return}else if(d.key==="Backspace"){d.preventDefault(),S("⌫");return}else if(d.key==="Escape"||d.key.toLowerCase()==="c"){d.preventDefault(),S("C");return}else if(d.key==="Enter"){d.preventDefault(),q();return}}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="k")d.preventDefault(),r.activeTab==="billing"?document.getElementById("billing-search-input").focus():document.getElementById("global-search-input").focus();else if(d.key==="Escape"){K(),_(),z(),P();const E=document.getElementById("notification-popover");E&&E.classList.remove("show")}});const o=document.getElementById("inter-check-btn");o&&o.addEventListener("click",fe);const i=document.getElementById("dosage-validate-btn");i&&i.addEventListener("click",ve);const c=document.getElementById("billing-search-input");c&&(c.addEventListener("input",B),c.addEventListener("focus",B));const s=document.getElementById("global-search-input");s&&(s.addEventListener("input",Q),s.addEventListener("focus",Q)),window.addEventListener("click",d=>{const h=document.querySelector(".search-bar");h&&!h.contains(d.target)&&K();const W=document.querySelector(".notification-bell-btn"),E=document.getElementById("notification-popover");E&&W&&!W.contains(d.target)&&!E.contains(d.target)&&E.classList.remove("show")});const m=document.getElementById("reports-gen-btn");m&&m.addEventListener("click",he);const u=document.getElementById("reports-export-btn");u&&u.addEventListener("click",Ee);const f=document.getElementById("inv-add-medicine-btn");f&&f.addEventListener("click",me);const y=document.getElementById("add-drug-modal-close");y&&y.addEventListener("click",P);const x=document.getElementById("add-drug-modal-cancel");x&&x.addEventListener("click",P);const p=document.getElementById("add-drug-modal-save");p&&p.addEventListener("click",ue);const v=document.getElementById("inventory-filter-category");v&&v.addEventListener("change",I);const b=document.getElementById("inventory-filter-status");b&&b.addEventListener("change",I);const w=document.querySelector("[data-localize='btn_new_patient']");w&&w.addEventListener("click",le);const D=document.getElementById("chat-send-btn");D&&D.addEventListener("click",()=>O());const H=document.getElementById("chat-input");H&&H.addEventListener("keydown",d=>{d.key==="Enter"&&O()}),document.querySelectorAll(".chat-suggestion-chip").forEach(d=>{d.addEventListener("click",()=>{const h=d.getAttribute("data-query")||d.textContent;O(h)})});const G=document.getElementById("invoice-upload-zone");if(G){G.addEventListener("click",h=>{!h.target.closest("button")&&!document.getElementById("invoice-preview-wrap").contains(h.target)&&re()});const d=G.querySelector("button");d&&d.addEventListener("click",re)}const J=document.getElementById("invoice-scan-btn");J&&J.addEventListener("click",_e);const ee=document.getElementById("invoice-clear-btn");ee&&ee.addEventListener("click",xe);const te=document.getElementById("invoice-sync-btn");te&&te.addEventListener("click",Ve),document.getElementById("presc-upload-zone").addEventListener("click",d=>{!d.target.closest("button")&&!document.getElementById("presc-preview-wrap").contains(d.target)&&ke()}),document.getElementById("presc-scan-btn").addEventListener("click",$e),document.getElementById("presc-clear-btn").addEventListener("click",Ge),document.getElementById("presc-add-billing-btn").addEventListener("click",We),document.getElementById("presc-create-patient-btn").addEventListener("click",Ue),document.getElementById("presc-camera-btn").addEventListener("click",Ie),document.getElementById("camera-close-btn").addEventListener("click",Y),document.getElementById("camera-capture-btn").addEventListener("click",Be),document.getElementById("billing-barcode-scan-btn").addEventListener("click",we);const Le=document.getElementById("billing-barcode-upload-btn"),ne=document.getElementById("billing-barcode-file-input");Le.addEventListener("click",()=>ne.click()),ne.addEventListener("change",d=>{d.target.files&&d.target.files[0]&&Qe(d.target.files[0])}),document.getElementById("barcode-modal-close-btn").addEventListener("click",_),document.getElementById("barcode-modal-add-cart-btn").addEventListener("click",de),document.getElementById("barcode-modal-print-btn").addEventListener("click",se),document.getElementById("pat-modal-close-btn").addEventListener("click",z);const oe=document.getElementById("sticker-search-input");oe&&oe.addEventListener("input",M);const ie=document.getElementById("sticker-print-all-btn");ie&&ie.addEventListener("click",Ce),document.getElementById("inventory-search").addEventListener("input",I),document.getElementById("patient-search").addEventListener("input",j),document.getElementById("billing-gst-select").addEventListener("change",k),document.getElementById("billing-discount-select").addEventListener("change",k),document.getElementById("billing-clear-btn").addEventListener("click",Fe),document.getElementById("billing-checkout-btn").addEventListener("click",He),document.getElementById("pdf-close-btn").addEventListener("click",Oe),document.getElementById("pdf-print-btn").addEventListener("click",qe),$("overview"),X(),Z(),L(),A(),I(),B(),j(),M(),pe(),be(),T()});window.app={switchTab:$,quickAdjustStock:Ze,flagExpiredBatch:Ye,addToCart:V,addToCartWithQty:R,adjustCartQty:Ne,selectPatientForBilling:et,handleCredentialsLogin:q,closeGlobalDropdown:K,openCameraScanner:Ie,closeCameraScanner:Y,captureCameraFrame:Be,triggerBarcodeScanner:we,openBarcodeModal:Ae,closeBarcodeModal:_,handleModalAddToCart:de,printBarcodeLabel:se,openPatientHistoryModal:Se,closePatientHistoryModal:z,viewPastInvoicePdf:Me,reorderPastBill:Te,switchBillBasket:Re,renderBarcodeStickers:M,printSingleSticker:Je,printAllStickersSheet:Ce,generateAuditReport:he,exportCsvSimulator:Ee,openAddDrugModal:me,closeAddDrugModal:P,saveNewDrugFromModal:ue,addNewPatientPrompt:le,handleChatSubmit:O,searchMedicines:F,renderBillingCatalog:B,handleGlobalSearchInput:Q,renderLowStockTable:L,renderExpiringTable:A,toggleNotificationPopover:ge,dismissAllNotifications:ye,runInteractionCheck:fe,validateDosage:ve,renderSalesChart:X,renderInventoryChart:Z};
