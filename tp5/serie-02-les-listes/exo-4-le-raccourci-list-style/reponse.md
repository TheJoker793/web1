# Exercice 2.4 : Le raccourci list-style

## Énoncé

1. Écrire `list-style: square inside url('puce.svg');` avec les trois propriétés séparées.
2. Dans quel ordre s'écrivent les valeurs du raccourci ?

## Réponse

```
ul {
  list-style-type: square;
  list-style-position: inside;
  list-style-image: url('puce.svg');
}

/* Ordre du raccourci : type, position, image */
```

## Remarque

Une valeur omise prend sa valeur par défaut.
