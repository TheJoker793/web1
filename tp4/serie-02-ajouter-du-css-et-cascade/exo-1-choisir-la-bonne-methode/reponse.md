# Exercice 2.1 : Choisir la bonne méthode

## Énoncé

1. Écrire la balise qui relie le fichier `style.css` à une page HTML. Où la placer ?
2. Donner le style d'un seul titre en ligne : bleu et centré.

## Réponse

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 style="color:blue;text-align:center;">Titre</h1>
</body>
```

## Remarque

`<link>` se place dans le `<head>`. Le style en ligne utilise l'attribut `style` et a la priorité la plus forte.
