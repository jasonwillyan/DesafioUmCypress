# Desafio #01 do curso Agilizei 

Teste de automação web usando Cypress

### Pré-requisitos 

Visual Studio Code

Node.js

### Instalando 

Uma série de exemplos passo a passo que mostram como colocar um ambiente de desenvolvimento em execução 

``` 
npm init --yes
``` 

``` 
npm install -D cypress
``` 

``` 
npm install -D chance
```

``` 
npm install -D mocha mochawesome mochawesome-report-generator mochawesome-merge cypress-multi-reporters
```

## Executando os testes 

``` 
npm run cy:open
```
-> Abre o cypress 

ou

``` 
npm run cy:run
``` 
-> Executa os testes e cria a pasta mochawesome-report com um arquivo .json para cada spec (mochawesome-report\mochawesome.json)

``` 
npm run report:merge
``` 
-> Pega os dados de todos os arquivos do mochawesome e gera apenas um arquivo unificado (full_report.json)

``` 
npm run report:mocha
``` 
-> Gera um arquivo de relatório em HTML (full_report.html)

``` 
npm run report:clean
```
-> Limpa todos os dados do relatórios 

-> Utilize isso se estiver no Unix ou macOS

      "report:clean": "rm -rf mochawesome-report full_report.json"
      
-> Utilize isso se estiver no windows

      "report:clean": "rmdir /s /q mochawesome-report && del /f /s /q full_report.json"


## Author

<a target="_blank" href="https://github.com/jasonwillyan">👤 Jason Willyan </a>


