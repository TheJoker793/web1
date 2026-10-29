# Exercice 8.2 : Unités de taille

## Énoncé

1. Avec `html{font-size:16px}`, un parent à `20px` contient un enfant. Donner la taille de l'enfant s'il vaut : `1.5em`, `1.5rem`, `150%`, `24px`.

## Réponse

```
1.5em  → 1.5 × 20 = 30px  (relatif au parent)
1.5rem → 1.5 × 16 = 24px  (relatif à la racine html)
150%   → 1.5 × 20 = 30px  (relatif au parent)
24px   → 24px            (absolu)
```

## Remarque

`em` et `%` dépendent du parent, `rem` de la racine, `px` est fixe.
