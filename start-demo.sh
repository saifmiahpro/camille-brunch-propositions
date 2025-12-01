#!/bin/bash

# Script pour lancer les deux propositions de sites en local

echo "🚀 Démarrage des deux propositions de sites pour Camille's Brunch..."
echo ""

# Couleurs pour le terminal
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Vérifier si les dépendances sont installées pour le Site 1
cd "Brunch Website Camille"
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Installation des dépendances pour le Site 1...${NC}"
    npm install
fi
cd ..

# Vérifier si les dépendances sont installées pour le Site 2
cd "Brunch Website Camille (1)"
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Installation des dépendances pour le Site 2...${NC}"
    npm install
fi
cd ..

echo ""
echo -e "${GREEN}✅ Prêt à démarrer les serveurs !${NC}"
echo ""
echo -e "${BLUE}📍 Site 1 sera accessible sur: http://localhost:5173${NC}"
echo -e "${BLUE}📍 Site 2 sera accessible sur: http://localhost:5174${NC}"
echo -e "${BLUE}📍 Page de sélection: file://$(pwd)/selection.html${NC}"
echo ""
echo -e "${YELLOW}💡 Pour arrêter les serveurs, appuyez sur Ctrl+C${NC}"
echo ""

# Ouvrir la page de sélection dans le navigateur
open "selection.html"

# Lancer les deux serveurs en parallèle
cd "Brunch Website Camille" && npm run dev &
PID1=$!

cd "../Brunch Website Camille (1)" && npm run dev &
PID2=$!

# Attendre que l'utilisateur arrête les serveurs
wait $PID1 $PID2
