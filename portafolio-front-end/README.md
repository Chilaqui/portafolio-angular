# PortafolioFrontEnd

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Comandos con los que se despliega la pagina 
ng build --configuration production --base-href "/portafolio-angular/"
npx angular-cli-ghpages --dir=dist/portafolio-front-end



1. Inicializa y compila el proyecto para producción

ng build --configuration production --base-href "/nombre-del-repo/"
📌 Asegúrate de que "outputPath": "dist/nombre-del-proyecto" esté bien en angular.json.

1. Moverte a la carpeta generada en dist/
bash
Copiar
Editar
cd dist/nombre-del-proyecto
1. Crear la rama gh-pages
bash
Copiar
Editar
git checkout -b gh-pages
1. Eliminar archivos viejos (si hay)
bash
Copiar
Editar
rm -rf *
1. Copiar los archivos de build
bash
Copiar
Editar
cp -r ../../dist/nombre-del-proyecto/* .
⚠️ Asegúrate de estar en la carpeta correcta, o este comando fallará.

1. Agregar, commitear y pushear a la rama gh-pages
bash
Copiar
Editar
git add .
git commit -m "Deploy Angular App to GitHub Pages"
git push origin gh-pages
1. En GitHub → Configurar GitHub Pages
Ve al repo en GitHub

En Settings → Pages

Elige:

Branch: gh-pages

Folder: / (root)

Guarda.



