# Ashutosh Mishra — Developer & Robotics Engineer Portfolio

A modern, high-performance portfolio website built for **Ashutosh Mishra** — Robotics Engineer, Hardware Specialist (ESP32, Arduino, Raspberry Pi), Full-Stack Developer (C, Python, React, HTML/CSS, Figma), and **3x Hackathon Champion** from Vrindavan, Mathura.

---

## ⚡ Features Included

- **Futuristic Cyber-Glassmorphism UI**: High-contrast, dark-mode engineering aesthetic with neon accents (Cyan `#00f0ff`, Emerald `#00ff88`, Amber `#fbbf24`).
- **Interactive Terminal Simulator**: Run commands (`about`, `skills`, `hardware`, `hackathons`, `prime`, `contact`) or view Arduino C firmware.
- **Embedded Hardware & Robotics Showcase**: Detailed breakdown of ESP32 (WROOM/BLE/WiFi), Arduino UNO/Nano, and Raspberry Pi 4.
- **Hackathon Trophy Case**: Highlights 7 hackathons participated with spotlight on the **3 Championship Wins**.
- **Interactive QR Code Hub**:
  - Direct WhatsApp QR code (`assets/qr-code.svg` and `assets/qr-code.png`) linking to `+91 7505397095`.
  - Scannable vCard QR code (`assets/qr-vcard.svg`) for saving Ashutosh's contact directly to any smartphone.
- **1-Click Mobile Connect**: Floating buttons for WhatsApp and Direct Call.
- **Vercel Serverless Function (`api/contact.js`)**: Edge-ready backend handler configured to route portfolio leads to `primeliquidpvtlmt@gmail.com`.

---

## 🚀 How to Run Locally

You can run and test the website locally immediately:

```bash
cd C:\Users\ashut\.gemini\antigravity\scratch\ashutosh-coder-portfolio
npm start
```

Then open your browser and navigate to:
👉 **`http://localhost:3000`**

---

## ▲ How to Host on Vercel (with `primeliquidpvtlmt@gmail.com`)

Vercel provides world-class, 100% free hosting with global Edge CDN speeds, custom domain support (e.g. `ashutoshmishra.dev`), automatic SSL certificates, and zero server maintenance.

### Method 1: Deploy with 1 Command via Terminal (Fastest)

1. Open PowerShell in this project folder:
   ```bash
   cd C:\Users\ashut\.gemini\antigravity\scratch\ashutosh-coder-portfolio
   ```

2. Run the deployment command:
   ```bash
   npm run deploy
   ```
   *(Or run: `npx.cmd -y vercel --prod`)*

3. **First-time Login Prompt**:
   - Vercel CLI will ask you to log in.
   - Choose **Continue with Email** and enter: **`primeliquidpvtlmt@gmail.com`**.
   - Check your Gmail inbox, click the verification link, and the CLI will automatically authenticate.

4. **Confirm the Settings**:
   - `Set up and deploy?` -> Type `y` and press Enter.
   - `Which scope do you want to deploy to?` -> Select your account (Ashutosh / Prime Liquid).
   - `Link to existing project?` -> Type `n`.
   - `What's your project's name?` -> Press Enter (accepts `ashutosh-mishra-portfolio` or type a custom name).
   - `In which directory is your code located?` -> Press Enter (accepts `./`).

5. **Done!**
   Your website is immediately live worldwide at:
   👉 **`https://ashutosh-mishra-portfolio.vercel.app`** (or custom domain).

---

### Method 2: Deploy via Vercel Web Dashboard & GitHub

1. Push this project to your GitHub account (e.g. repository `ashutosh-portfolio`).
2. Go to [https://vercel.com](https://vercel.com) and click **Sign Up / Log In** using your email **`primeliquidpvtlmt@gmail.com`** or GitHub.
3. Click **Add New... -> Project**.
4. Import your `ashutosh-portfolio` GitHub repository.
5. Keep default settings (Vercel automatically recognizes `vercel.json` and the `assets/` folder).
6. Click **Deploy**.
7. Every time you push a git commit in the future, Vercel will automatically redeploy your site in seconds!

---

## 📱 QR Code Assets Included

- **`assets/qr-code.svg`**: High-resolution vector QR code linking to WhatsApp (`+91 7505397095`).
- **`assets/qr-vcard.svg`**: Vector QR code for adding Ashutosh Mishra to smartphone contacts.
- **`assets/qr-code.png`**: Standard PNG image ready for resumes, posters, stickers, and business cards.

To regenerate fresh QR codes at any time:
```bash
npm run generate:qr
```
