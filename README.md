# Membre-association-API

> Aller dans la branche **dev** et installer tous les dépendances avec `npm install`, puis lancer la commande  `npm run start:dev`
>
> L'URL de base pour accéder à l'API est  http://localhost:3000/member

## **Pour les fonctionnalités:**

- Pour créer un nouveau membre:
    > Faites une requête **Post** à l'URL http://localhost:3000/member/create
    > 
    > en envoyant comme **Body** un objet de type: 
    >`{ nom: string, prenom: string, age: number, adresse: string, mdp: string }` 

- Pour modifier un membre:
    > Faites une requête **Post** à l'URL http://localhost:3000/member/update
    >
    > en envoyant comme **Body** le membre à modifier

- Pour lire un membre:
    > Faites une requpete **Get** à l'URL http://localhost:3000/member/see/:id

- Pour supprimer un membre:
    > Faites une requête **Delete** à l'URL http://localhost:3000/member/:id