# 🔍 Google Search Scraper – Praktický test

Jednoduchá a efektivní webová aplikace pro vyhledávání organických výsledků na Google s možností exportu dat do strukturovaného formátu JSON.

## ✨ Hlavní funkce
- **Vyhledávání v reálném čase:** Načítá výsledky přímo z Google přes SerpApi.
- **Pouze organické výsledky:** Filtruje placené reklamy a zobrazuje pouze přirozené vyhledávání.
- **Moderní UI:** Čistý a responzivní design postavený na Tailwind CSS.
- **Export do JSON:** Možnost stáhnout výsledky v strojově čitelném formátu pro další zpracování.
- **Unit Testy:** Automatizované testy pro ověření stability API a správnosti výstupu.

## 🛠 Použité technologie
- **Frontend:** HTML5, JavaScript (Vanilla), Tailwind CSS (přes CDN).
- **Backend:** Node.js, Express.js.
- **Integrace API:** SerpApi (Google Search Engine).
- **Testování:** Jest, Supertest.

## 🚀 Instalace a spuštění (Lokální vývoj)

Pro spuštění projektu na vašem počítači postupujte podle následujících kroků:

1. **Klonování repozitáře:**
   ```bash
   git clone https://github.com/kofronadam/projekt-in
   cd NAZEV_REPOZITARE

2. **Instalace závislostí:**
   ```bash
   npm install

3. **Nastavení prostředí (API klíč):**
V kořenovém adresáři vytvořte soubor .env a vložte do něj svůj klíč pro SerpApi:
SERP_API_KEY=79f4e3c64bf1adb397098bdd8a6f01ed84cac2eaae758c471afd7b3be372fe3e

4. **Spuštění aplikace:**
   ```bash
   npm start

Aplikace bude dostupná na adrese http://localhost:3000.

5. **🧪 Spuštění testů**
Pro ověření funkčnosti backendu a správnosti formátu dat spusťte:
   ```bash
   npm test
