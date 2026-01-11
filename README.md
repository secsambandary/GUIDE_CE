# 🎓 Guide de Management des Lycées et Collèges du Sénégal

## 📖 À propos du projet

Site web interactif présentant le **Guide de Management des Lycées et Collèges**, élaboré par la Direction de l'Enseignement Moyen Secondaire Général (DEMSG) du Ministère de l'Éducation Nationale du Sénégal.

Ce guide complet est destiné aux chefs d'établissement, directeurs des études, censeurs, surveillants généraux et tous les acteurs de la communauté éducative.

### 🎯 Objectifs

- Fournir un accès facile et organisé à plus de 100 documents, outils et modèles de gestion
- Accompagner les chefs d'établissement dans leurs missions quotidiennes
- Promouvoir les bonnes pratiques de management éducatif
- Faciliter le téléchargement et l'utilisation des ressources

---

## ✨ Fonctionnalités actuelles

### 🏠 Page d'accueil
- **Présentation du guide** et de ses objectifs
- **Vue d'ensemble des 5 domaines** de gestion
- **Accès rapide** aux ressources essentielles
- **Informations sur les partenaires** (MEN, AFD)

### 📂 5 Sections principales

#### 1️⃣ **Gestion Administrative & Ressources Humaines** (45+ documents)
- Tableau de bord annuel du chef d'établissement
- Organigrammes des collèges et lycées
- Textes réglementaires (attributions, CGE, journée continue)
- Gestion du personnel (passation de service, évaluations, congés)
- Gestion des élèves (transferts, inscriptions, bourses)
- Heures supplémentaires et maxima de service
- Outils de suivi (journal d'activités, tableau de bord)

#### 2️⃣ **Gestion Pédagogique** (12+ documents)
- Horaires et coefficients par discipline
- Cellules pédagogiques (arrêtés et organisation)
- Orientation scolaire
- Grilles d'observation des enseignants
- Canevas de suivi des progressions
- Cours de vacances

#### 3️⃣ **Gestion Matérielle & Financière** (28+ documents)
- Textes réglementaires (mobilisation des ressources, frais d'inscription)
- Élaboration du budget prévisionnel
- Procédures d'exécution des dépenses (4 phases)
- Comptabilité (grand livre, certificats)
- Gestion des stocks (bons d'entrée/sortie, fiches de consommation)
- Inventaire et inspections

#### 4️⃣ **Environnement, Équité & Genre** (18+ documents)
- Grille de gestion durable de l'environnement scolaire
- Outils d'hygiène et de santé
- Grilles d'analyse des pratiques d'équité
- Dispositifs genre et éducation des filles
- OVDS - Observatoire de la Vulnérabilité à la Déperdition Scolaire
- Textes sur les mariages et grossesses précoces

#### 5️⃣ **Communication & Partenariat** (15+ documents)
- Canevas de plan de communication
- Forums sur les performances scolaires
- Calcul des taux de réussite
- Promotion du partenariat
- Projet d'établissement
- Conventions de financement

### 🎨 Design et expérience utilisateur
- **Interface moderne et professionnelle**
- **Navigation intuitive** avec menu sticky
- **Quick navigation** pour accéder rapidement aux sections
- **Cartes cliquables** pour chaque document
- **Responsive design** : compatible mobile, tablette et desktop
- **Animations fluides** au scroll
- **Bouton retour en haut** de page
- **Accordéons** pour les textes réglementaires
- **Encadrés d'information** pour les conseils pratiques

---

## 📁 Structure du projet

```
guide-management/
│
├── index.html                 # Page d'accueil
├── administration.html        # Gestion Administrative & RH
├── pedagogie.html            # Gestion Pédagogique
├── finances.html             # Gestion Matérielle & Financière
├── environnement.html        # Environnement, Équité & Genre
├── communication.html        # Communication & Partenariat
│
├── css/
│   └── style.css             # Styles CSS complets
│
├── js/
│   └── main.js               # JavaScript pour interactions
│
└── README.md                 # Documentation (ce fichier)
```

---

## 🚀 Déploiement

### Option 1 : Hébergement statique
Ce site peut être hébergé sur n'importe quelle plateforme d'hébergement statique :
- **GitHub Pages** (gratuit)
- **Netlify** (gratuit)
- **Vercel** (gratuit)
- **Firebase Hosting** (gratuit)

### Option 2 : Google Sites
Pour publier sur Google Sites :

1. **Exporter le contenu** : Le contenu HTML peut être adapté pour Google Sites
2. **Créer une structure similaire** avec les pages et sous-pages
3. **Copier-coller** le contenu section par section
4. **Ajouter les liens** vers le PDF complet du guide

> ⚠️ **Note importante** : Google Sites ne permet pas d'importer directement du HTML/CSS personnalisé. Il faudra recréer la structure et le contenu dans l'éditeur Google Sites.

### Option 3 : Serveur web traditionnel
- Télécharger tous les fichiers
- Déposer sur un serveur Apache/Nginx
- Configurer un nom de domaine si besoin

---

## 🎯 Utilisation

### Navigation principale
Le site propose 6 pages accessibles via le menu de navigation :
1. **Accueil** : Vue d'ensemble et introduction
2. **Administration & RH** : Documents administratifs et RH
3. **Pédagogie** : Ressources pédagogiques
4. **Finances** : Gestion budgétaire et matérielle
5. **Environnement & Équité** : Cadre de vie et équité
6. **Communication** : Communication et partenariat

### Navigation rapide
Chaque page de section dispose d'une **barre de navigation rapide** (quick nav) permettant de :
- Accéder directement à une sous-section
- Naviguer entre les catégories de documents
- Retrouver rapidement un type de document

### Téléchargement des documents
Actuellement, les boutons "Télécharger" affichent un message invitant à contacter la DEMSG pour obtenir le PDF complet.

**Pour activer les téléchargements** :
1. Obtenir le PDF officiel du guide complet
2. Extraire ou créer les documents individuels (en PDF)
3. Héberger les fichiers PDF sur un serveur ou cloud
4. Remplacer les `onclick="alert(...)"` par des liens directs :
   ```html
   <a href="documents/nom-du-document.pdf" download>
       <i class="fas fa-download"></i> Télécharger
   </a>
   ```

---

## 🔧 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `css/style.css` via les variables CSS :
```css
:root {
    --primary-color: #667eea;    /* Bleu violet */
    --secondary-color: #764ba2;  /* Violet */
    --success-color: #43e97b;    /* Vert */
    --warning-color: #fee140;    /* Jaune */
    --danger-color: #f5576c;     /* Rouge */
    --info-color: #4facfe;       /* Bleu clair */
}
```

### Ajout de nouveaux documents
Pour ajouter un document à une page :

1. **Identifier la section** appropriée dans le HTML
2. **Copier un bloc de document existant** (`.document-card` ou `.document-item`)
3. **Modifier le contenu** :
   - Titre du document
   - Description
   - Numéro de page
   - Icône (classes Font Awesome)
4. **Ajouter le lien** de téléchargement

Exemple :
```html
<div class="document-card">
    <div class="document-icon">
        <i class="fas fa-file-alt"></i>
    </div>
    <div class="document-content">
        <h3>Titre du nouveau document</h3>
        <p>Description du document</p>
        <div class="document-meta">
            <span class="doc-page"><i class="fas fa-file-pdf"></i> Page XX</span>
        </div>
    </div>
    <div class="document-actions">
        <button class="btn-download" onclick="...">
            <i class="fas fa-download"></i> Télécharger
        </button>
    </div>
</div>
```

### Modification du menu
Le menu se trouve dans chaque fichier HTML, dans la balise `<nav class="nav">`.

Pour ajouter/modifier des liens :
```html
<a href="nouvelle-page.html" class="nav-link">Nouvelle section</a>
```

---

## 📱 Compatibilité

### Navigateurs supportés
- ✅ Chrome / Edge (version récente)
- ✅ Firefox (version récente)
- ✅ Safari (version récente)
- ✅ Opera (version récente)

### Appareils
- ✅ Desktop (1200px+)
- ✅ Tablette (768px - 1199px)
- ✅ Mobile (< 768px)

### Fonctionnalités accessibles
- Navigation au clavier
- Compatibilité avec les lecteurs d'écran
- Contraste des couleurs conforme WCAG AA
- Textes lisibles et agrandissables

---

## 📚 Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec variables CSS, Flexbox et Grid
- **JavaScript (Vanilla)** : Interactions sans dépendances
- **Font Awesome 6** : Icônes (via CDN)
- **Google Fonts (Inter)** : Typographie (via CDN)

### Pas de dépendances lourdes
✅ Aucun framework JavaScript (React, Vue, etc.)  
✅ Aucune librairie CSS (Bootstrap, etc.)  
✅ Code léger et performant  
✅ Chargement rapide  

---

## 🎓 Source du contenu

Tout le contenu provient du **Guide de Management des Lycées et Collèges** officiel :
- **Publié en** : Septembre 2012
- **Éditeur** : Direction de l'Enseignement Moyen Secondaire Général (DEMSG)
- **Ministère** : Ministère de l'Éducation Nationale du Sénégal
- **Partenaire** : Agence Française de Développement (AFD)
- **Projet** : EDUFORM/APSE 2

Le guide original comprend 227 pages et couvre 5 domaines de gestion avec plus de 100 outils, modèles et textes réglementaires.

---

## 📋 Fonctionnalités non implémentées

Ces fonctionnalités pourraient être ajoutées dans le futur :

### 🔍 Recherche
- Barre de recherche pour trouver rapidement un document
- Filtres par catégorie, type de document, domaine

### 📥 Téléchargements
- Liens directs vers les PDF individuels
- Téléchargement groupé par domaine
- Téléchargement du guide complet

### 👤 Espace utilisateur
- Connexion pour les chefs d'établissement
- Favoris et documents récemment consultés
- Historique de téléchargements

### 📊 Statistiques
- Compteur de visites
- Documents les plus téléchargés
- Feedback et évaluations

### 🌐 Multilingue
- Version en langues nationales (Wolof, Pulaar, Serer, etc.)
- Sous-titres et descriptions

### 💬 Interaction
- Forum de discussion
- Questions-réponses
- Partage d'expériences

---

## 🤝 Contribution

Pour contribuer à l'amélioration de ce site :

1. **Signaler un problème** : Erreur de contenu, lien cassé, bug d'affichage
2. **Proposer une amélioration** : Nouvelle fonctionnalité, optimisation
3. **Mettre à jour le contenu** : Nouveaux documents, textes réglementaires

Contact : Direction de l'Enseignement Moyen Secondaire Général (DEMSG)

---

## 📄 Licence et droits d'auteur

© 2012-2024 Ministère de l'Éducation Nationale du Sénégal  
Direction de l'Enseignement Moyen Secondaire Général (DEMSG)

Tous droits réservés.

Ce guide et ce site web sont des ressources officielles destinées aux établissements d'enseignement du Sénégal.

---

## 📞 Contact et support

### Direction de l'Enseignement Moyen Secondaire Général (DEMSG)
**Ministère de l'Éducation Nationale du Sénégal**

Pour toute question ou besoin d'accompagnement :
- Contacter votre **Inspection d'Académie (IA)**
- Contacter votre **Inspection Départementale (IDEN)**
- Visiter le site de l'**IGEN** : http://igen.education.sn

### Ressources complémentaires
- **Programmes d'enseignement** : http://igen.education.sn
- **Textes officiels** : Disponibles auprès de la DEMSG
- **Formation** : Centres Régionaux de Formation des Personnels de l'Éducation (CRFPE)

---

## 🎉 Remerciements

Ce guide a pu être réalisé grâce à :
- L'**Agence Française de Développement (AFD)**
- Le projet **EDUFORM/APSE 2**
- Les équipes de **rédaction et validation** (voir pages 2-4 du guide)
- L'**Inspection Interne du MEN**
- Les **Inspecteurs d'Académie**
- Le **Collectif des Chefs d'Établissement**
- L'**Amicale des Chefs d'Établissement du Secondaire (ACES)**
- Les partenaires **USAID/PAEM**, **USAID/EDB** et **USAID/EPQ**

---

## 📝 Notes de version

### Version 1.0 (2024)
- ✅ Création du site web complet
- ✅ 6 pages HTML (accueil + 5 domaines)
- ✅ Design responsive moderne
- ✅ Navigation intuitive
- ✅ Référencement de tous les documents du guide
- ✅ Optimisation mobile
- ✅ Animations et interactions

### Prochaines étapes recommandées
- 🔄 Hébergement sur un serveur accessible
- 🔄 Ajout des liens de téléchargement réels
- 🔄 Mise en place d'un système de recherche
- 🔄 Intégration de statistiques de visite
- 🔄 Traduction en langues nationales

---

**Dernière mise à jour** : Décembre 2024  
**Développé pour** : Ministère de l'Éducation Nationale du Sénégal