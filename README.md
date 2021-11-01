
# World Of Marvel

Ce projet était un test technique "blanc" proposé pendant ma formation au [Reacteur](https://www.lereacteur.io/).

Une API nous était fournie mais nous devions réaliser un backend pour effectuer nos requêtes et y accéder.


Les consignes étaient de proposer un accès à une page contenant tous les comics et une autre contenant tous les personnages. Sur cette dernière il devait être possible d'accéder à la page d'un personnage avec les comics dans lesquels il apparait.

Le visiteur devait pouvoir naviguer grâce à une pagination et accéder à une barre de recherche sur chaque page.

Enfin nous devions donner la possibilité au visiteur de mettre en favori ses comics et/ou personnages grâce à un système de cookie.


## Demo

Lien du projet : <a href="https://worldofmarvel.netlify.app/" target="_blank">World Of Marvel</a>



https://user-images.githubusercontent.com/81259152/139523399-911fb3ed-df74-4b65-b822-f3ff9bf45980.mp4



Frontend 👉🏼   [par là](https://github.com/kevintersigni/marvel-frontend)

## Routes

##### /characters (GET)
Get all the characters

##### /comics (GET)
Get all the comics

##### /comics/:id (GET)
Get a specific comic with id param.


## Skills & packages
Node, Express.

Cors, axios, qs.


## Installation

Install my-project with npm 👇🏼

#### Clone this repository:

`git clone https://github.com/kevintersigni/marvel-backend.git`

#### Install packages:

`npm install`

#### Get an API KEY

Go get yours here : [https://lereacteur-marvel-api.netlify.app/](https://lereacteur-marvel-api.netlify.app/)

#### Create a .env file at the root of the project and store the following environment variables:

`PORT= the one your server is listening`
`REACTEUR_API_KEY= the one your just got`

#### When installation is complete, launch the project:

`npm start`
## Roadmap

Pour améliorer ce projet voici ce que je prévois :

- mise en place d'une BDD user avec système login/signup
- gestion des favoris via la BDD


