# CONFIGURADO
Além de baixar os repositórios, será preciso instalar as dependências a seguir.

## Instalando typescript:
sudo npm install -g typescript --save-dev

## Typescript definitivo com jquery
sudo npm install @types/jquery --save-dev

## instalando server com o loader
sudo npm install lite-server@2.3.0 --save-dev

## instalando o responsável pela inicialização do server junto do compiler do Typescript
sudo npm install concurrently@3.4.0 --save-deV





## Após as instalações, adicionar as configurações no arquivo package.json como mostrado abaixo: 

{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc",
    "watch": "tsc -w",
    "server": "lite-server --baseDir=app",
    "start": "concurrently \"npm run watch\" \"npm run server\""
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jquery": "^2.0.42",
    "concurrently": "^3.4.0",
    "lite-server": "^2.3.0",
    "typescript": "^2.9.2"
  }
}


## Após as configurações do package.json, verificar se o arquivo tsconfig.json existe no diretório "./typescript", se não existir, adicionar como mostra abaixo:
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js",
        "noEmitOnError": true, 
        "noImplicitAny": true,
        "removeComments": true,
        "module": "system",
        "strictNullChecks": true        
    },
    "include": [
        "app/ts/**/*"
    ]
}
