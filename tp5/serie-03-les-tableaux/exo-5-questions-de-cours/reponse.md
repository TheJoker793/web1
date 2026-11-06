# Exercice 3.5 : Questions de cours

## Énoncé

1. Pourquoi voit-on des doubles bordures avec `border:1px solid` sur `table`, `th` et `td` ? Comment les supprimer ?
2. À quelle condition `border-spacing` est-il pris en compte ?
3. Quelle est l'astuce pour rendre un tableau responsive ?

## Réponse

```
1) Chaque élément (table, th, td) dessine sa propre bordure.
   Solution : table { border-collapse: collapse; }
2) border-spacing ne fonctionne que si border-collapse vaut separate.
3) Entourer le tableau d'un <div> avec overflow-x: auto.
   div.tablecontainer { overflow-x: auto; }
```
