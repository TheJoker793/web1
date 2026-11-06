# Exercice 7.5 : Questions de cours

## Énoncé

1. Quelles sont les valeurs de `clear` ?
2. Pourquoi la hauteur d'un parent ne contenant que des flottants est-elle nulle ?
3. Quelle différence entre `inline`, `inline-block` et `block` ?

## Réponse

```
1) none, left, right, both, inherit.
2) Les éléments flottants sortent du flux normal : le parent ne les compte pas dans sa hauteur (solution : clearfix).
3) inline : pas de largeur/hauteur, reste sur la ligne.
   inline-block : reste sur la ligne ET accepte largeur/hauteur/marges.
   block : nouvelle ligne et pleine largeur.
```
