# 🥐 Démonstration des Propositions - Camille's Brunch

Ce dossier contient deux propositions de sites web pour Camille's Brunch, prêtes à être présentées aux clients.

## 📁 Structure

```
site proposition camilles/
├── Brunch Website Camille/          # Proposition 1 (Design Classique)
├── Brunch Website Camille (1)/      # Proposition 2 (Design Premium)
├── selection.html                   # Page de sélection (Branding tekNa Studio)
├── tekna-logo.png                   # Logo tekNa Studio
├── Télécharger Instagram Vidéo.mp4  # Vidéo hero (utilisée sur les deux sites)
├── start-demo.sh                    # Script de démarrage automatique
└── README.md                        # Ce fichier
```

**✨ Nouveautés :**
- 🎥 Les deux sites utilisent une vidéo en arrière-plan de la section hero
- 🎨 La page de sélection utilise le design et logo tekNa Studio

## 🚀 Démarrage Rapide (EN LOCAL)

### Méthode 1 : Script automatique (Recommandé)

```bash
chmod +x start-demo.sh
./start-demo.sh
```

Ce script va :
1. ✅ Installer automatiquement les dépendances (si nécessaire)
2. 🚀 Lancer les deux sites en parallèle
3. 🌐 Ouvrir la page de sélection dans votre navigateur

### Méthode 2 : Manuelle

**Terminal 1 - Site 1:**
```bash
cd "Brunch Website Camille"
npm install  # Première fois uniquement
npm run dev
```

**Terminal 2 - Site 2:**
```bash
cd "Brunch Website Camille (1)"
npm install  # Première fois uniquement
npm run dev
```

**Ensuite, ouvrez `selection.html` dans votre navigateur**

## 🌐 URLs d'accès

Une fois les serveurs démarrés :

- **Page de sélection** : Ouvrir `selection.html` dans votre navigateur
- **Proposition 1** : http://localhost:5173
- **Proposition 2** : http://localhost:5174

## ❌ Arrêter les serveurs

Dans le terminal où les serveurs tournent, appuyez sur `Ctrl+C`

## 📤 Déploiement sur Vercel (Pour partager avec vos clients)

Pour mettre les sites en ligne et obtenir des liens partageables :

```bash
# Installer Vercel CLI (première fois uniquement)
npm install -g vercel

# Déployer le Site 1
cd "Brunch Website Camille"
vercel

# Déployer le Site 2
cd "../Brunch Website Camille (1)"
vercel
```

Vercel vous fournira des URLs du type :
- `https://brunch-camille-1.vercel.app`
- `https://brunch-camille-2.vercel.app`

### ⏱️ Durée de disponibilité des liens Vercel

- ✅ **Gratuit et illimité dans le temps**
- Les liens restent actifs tant que vous ne les supprimez pas
- Vous pouvez supprimer les déploiements à tout moment depuis https://vercel.com/dashboard

## 💡 Conseils

- La page de sélection vérifie automatiquement si les serveurs sont en ligne
- Vous pouvez comparer les deux sites côte à côte en les ouvrant dans des onglets séparés
- Les sites ne sont PAS modifiés, ils restent intacts dans leurs dossiers respectifs

## 🎯 Présentation aux clients

1. **En local** : Utilisez `./start-demo.sh` pour une démo rapide sur votre ordinateur
2. **À distance** : Déployez sur Vercel et partagez les liens par email

---

**Créé pour : Camille's Brunch** 🥐☕
