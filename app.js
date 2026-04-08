import express from "express"

app.get('/', (request, response) => {
    response.render('index', { title: 'Marmiton' })
})

/*SELECT 
    article.id_article, 
    article.Titre AS titre_article, 
    article.Corps_content AS contenu, 
    article.Date_creation, 
    auteur.Nom AS nom_auteur, 
    categories.Titre AS nom_categorie
FROM article
INNER JOIN auteur 
    ON article.id_user = auteur.id_user 
INNER JOIN categories 
    ON article.id_categories = categories.id_categories;*/