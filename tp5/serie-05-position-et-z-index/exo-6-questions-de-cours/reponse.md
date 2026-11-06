# Exercice 5.6 : Questions de cours

## Énoncé

1. Quelle valeur de `position` : ne laisse pas d'espace vide et reste dans la fenêtre au défilement ? se « colle » après un seuil de défilement ? est décalée de sa place d'origine sans déplacer les autres éléments ?
2. Pourquoi un élément `absolute` se place-t-il parfois par rapport au `body` ?

## Réponse

```
1) fixed    : relatif à la fenêtre, pas d'espace laissé.
   sticky   : relative puis fixe après un seuil.
   relative : décalé, l'espace d'origine est conservé.
2) Sans ancêtre positionné (position autre que static),
   absolute se réfère au document (body) et défile avec la page.
```
