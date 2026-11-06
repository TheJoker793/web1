# Exercice 8.6 : Choisir la bonne méthode

## Énoncé

1. Quelle technique pour : un bloc de largeur fixe ? du texte dans un bloc ? un élément au centre exact d'un conteneur (2 axes) ? un élément de taille inconnue ?

## Réponse

```
Bloc de largeur fixe        : margin: auto (avec width)
Texte dans un bloc          : text-align: center
Centre exact (2 axes)       : display:flex + justify-content/align-items:center
                              ou display:grid + place-items:center
Élément de taille inconnue  : position:absolute + top/left:50% + transform:translate(-50%,-50%)
```
