# Exercice 6.1 : Calculer la largeur totale

## Énoncé

1. Un `div` a `width:300px; padding:20px; border:5px solid; margin:10px`.
2. Calculer sa largeur occupée (marges incluses) en `content-box`, puis en `border-box`.

## Réponse

```
content-box :
  contenu 300 + padding 2×20 + bordure 2×5 = 350px (boîte)
  + marges 2×10 = 370px d'espace occupé

border-box :
  la boîte fait 300px (padding et bordure inclus)
  + marges 2×10 = 320px d'espace occupé
```

## Remarque

Avec `border-box`, la largeur annoncée reste celle de la boîte.
