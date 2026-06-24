# Fogyasztási Riport Generátor – Telepítési útmutató

## Első telepítés (csak egyszer kell)

### 1. Szükséges programok
- **Node.js** – https://nodejs.org (LTS verziót töltsd le)
- **Git** – https://git-scm.com/download/win

### 2. GitHub fiók létrehozása
- Menj a https://github.com oldalra
- Regisztrálj egy ingyenes fiókot
- Hozz létre egy új repository-t: "fogyasztasi-riport" névvel (legyen **Public**)

### 3. Projekt feltöltése GitHubra
Nyiss parancssort (cmd) és futtasd:
```
cd C:\Users\NEVED\Desktop\riport-app
git init
git add .
git commit -m "Első verzió"
git branch -M main
git remote add origin https://github.com/GITHUB_NEVED/fogyasztasi-riport.git
git push -u origin main
```

### 4. Build (exe készítése)
```
npm install
npm run build
```

Az exe a `dist` mappában jelenik meg.

---

## Frissítés kiadása (ha új termék kerül be)

1. Módosítsd a `src/index.html` fájlban a terméklistát
2. Növeld a verziószámot a `package.json`-ban (pl. 1.0.0 → 1.0.1)
3. Növeld a verziószámot a `src/index.html`-ben is (v1.0.0 → v1.0.1)
4. Futtasd:
```
git add .
git commit -m "v1.0.1 - új termékek hozzáadva"
git tag v1.0.1
git push origin main --tags
npm run build
```
5. A `dist` mappából töltsd fel az exe-t a GitHub Releases-be
6. A dolgozók gépén a program automatikusan értesít a frissítésről!

---

## Telepítés dolgozóknál
Csak add oda nekik a `dist` mappában lévő `.exe` fájlt – telepítő varázsló vezeti végig őket.
