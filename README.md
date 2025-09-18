Projeto com os seguintes testes com o testCafe
- login com dados vazios
- login com senha vazia
- login com email vazio
- login com senha invalida
- login com sucesso

Site utilizado: https://www.automationpratice.com.br/ 

#CONFIGURAÇÃO

Instalar o testcafe no pc:
npm install -g testcafe

Criar o projeto node (pastas)
npm init -y

Instalar o testcafe no projeto:
npm install --save-dev testcafe

Criar uma base de projeto no testcafe:
npx create-testcafe


#EXECUÇÃO

Executar um arquivo testccafe:
testcafe chrome test.js

Executar todos os testes de uma pasta no testccafe:
testcafe chrome tests/

Executar com debug
testcafe chrome tests/debug.js --debug-mode

Rodar teste por título: 
testcafe chrome tests/ --test-grep "Teste de login"

rodar todos os testes que contem login
testcafe chrome tests/ --test-grep "login"

rodar todos os testes que começam com login
testcafe chrome tests/ --test-grep "^Login"

rodar todos os testes que terminam com falha
testcafe chrome tests/ --test-grep "falha$"

Rodar testes que contêm "API" ou "mobile" no título
testcafe chrome tests/ --test-grep "API|mobile"

Rodar testes com um tempo limite específico
testcafe chrome tests/ --selector-timeout 5000 --assertion-timeout 3000

Rodar os testes em paralelo (aumentar velocidade)
testcafe chrome:headless --concurrency 3 tests/

Rodar múltiplos arquivos de teste
testcafe chrome tests/login-tests.js tests/cart-tests.js

Rodar modo live
testcafe --live chrome tests/login-tests.js

##OUTROS NAVEGADORES
testcafe --list-browsers
testcafe firefox tests/

#RELATORIOS
​Relatório detalhado em tabela
testcafe chrome tests/debug.js --reporter list

Relatório detalhado com status colorido
testcafe chrome tests/debug.js --reporter spec

Relatório resumido
testcafe chrome tests/debug.js --reporter minimal