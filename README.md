# Calculateur de fraisage CNC

Outil web de calcul de paramètres d'usinage pour petite fraiseuse CNC amateur.

## Fonctionnement

L'utilisateur renseigne en 3 étapes :

1. **Matériau** — bois massif, bois exotique, CTP, MDF, PVC, PMMA, aluminium, cuivre/laiton
2. **Fraise** — diamètre (1 à 8 mm), nombre de dents, avance par dent (fz) et profondeur de passe (ap) calculées automatiquement ou saisies manuellement
3. **Limites machine** — vitesse de broche max, avance max en XY et en Z

Le calculateur produit :
- **n** — vitesse de rotation retenue (tr/min)
- **vf** — vitesse d'avance XY retenue (mm/min)
- **ap** — profondeur de passe (mm)
- Un tableau détaillé avec les valeurs cibles (sans limite machine) et effectives
- Des alertes diagnostics si les conditions de coupe sont dégradées (broche trop limitante, risque de frottement, double limitation…)

## Formules

```
n  = (1000 × vc) / (π × D)
vf = n × fz × Z
ap = k × D   (k issu de l'abaque selon matériau et diamètre)
```

## Pages

| Fichier | Contenu |
|---|---|
| `index.html` | Feuille de calcul principale |
| `abaque.html` | Tables de référence Fz et coefficients ap |
| `aide.html` | Formules détaillées et exemples chiffrés |

## Export JSON

Un export au format Fusion 360 / CAM est disponible en bas de la feuille de calcul (données outil + paramètres de coupe).

## Sources

Valeurs Fz et ap issues de [cncfraises.fr](https://www.cncfraises.fr/), adaptées pour une approche prudente sur machine amateur.
