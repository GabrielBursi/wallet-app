# Boilerplate de Projetos com React Native e TypeScript

Este é um boilerplate de projetos para iniciar rapidamente o desenvolvimento de aplicativos com React Native.

## Pré-requisitos

Esse boilerplate leva em consideração que você já tenha seguidos todos os passos corretamente para configurar o ambiente de desenvolvimento do React Native:

- [Environment Setup](https://reactnative.dev/docs/environment-setup)

## Quais pacotes vem com esse boilerplate

* react-native-community/hooks
* react-navigation
* redux
* react-query
* axios
* react-hook-form
* react-native-config
* react-native-gesture-handler
* react-native-mmkv
* react-native-reanimated
* styled-components
* zod
* jest
* detox
* testing-library
* msw
* plop
* husky
* storybook
* reactotron
* react-devtools
* prettier
* eslint

## Configuração inicial

Siga as etapas abaixo para configurar  o uso do boilerplate:

1. Entre no terminal da onde você quer criar seu projeto
2. Digite o seguindo comando:

   `git clone https://github.com/GabrielBursi/BoilerplateRN.git`
3. Renomeie a pasta para o nome da qual você deseja
4. Entre na pasta do projeto criado:

   `cd <nome_projeto>`
5. Instale as dependências do projeto usando o seguinte comando:

   `npm install`
6. Altere as propriedades que deseja no arquivo **package.json**
7. Altere todos os nomes de arquivos/pastas de **BoilerplateRN** para **<nome_projeto>**

   * Lembrando que alguns lugares está escrito o nome do projeto em CamelCase e em outros está escrito tudo minúsculo
   * Procure na sua IDE por arquivos BoilerplateRN e substitua para o <nome_projeto> em CamelCase
   * Procure na sua IDE por arquivos boilerplatern e substitua para o <nome_projeto> tudo minúsculo
8. Altere todos os arquivos que contem o nome do projeto como **BoilerplateRN** para **nome_projeto**
9. Copie e cole o arquivo **.env.example** na raiz do projeto e renomeie para **.env**

   Finalmente ! Estamos prontos para começar.

## Iniciando o projeto

Siga as etapas abaixo para inicar  o projeto do boilerplate:

1. Inicie o Metro:
   `npm start`
2. Inicie o emulador Android: `npm run android`
   * Você tambem pode iniciar o emulador assim em abimente de desenvolvimento: `npm run dev`
   * Esse comando vai fazer apenas o build de uma ABI (Application Binary Interfaces)

## Comandos Específicos

- `npm run test`: Executa os testes utilizando o Jest, com a opção de passar mesmo sem testes e com até 50% dos workers.
- `npm run test:watch`: Executa os testes em modo de observação utilizando o Jest, com até 25% dos workers.
- `npm run e2e:build`: Constrói a configuração de teste end-to-end (e2e) usando Detox para um emulador Android em modo de depuração.
- `npm run e2e:test`: Executa os testes e2e utilizando Detox em um emulador Android em modo de depuração, com nível de log definido como aviso e captura de screenshots em caso de falha.
- `npm run generate:c`: Executa a ferramenta de geração de componentes usando Plop e formatação do código após a geração.
- `npm run generate:s`: Executa a ferramenta de geração de telas (screens) usando Plop e formatação do código após a geração.
- `npm run generate:e2e`: Executa a ferramenta de geração de testes end-to-end (e2e) usando Plop e formatação do código após a geração.
- `npm run sb`: Inicia o servidor do Storybook para desenvolvimento.
- `npm run get-sb`: Executa o comando para obter histórias (stories) do Storybook.
- `npm run storybook-watcher`: Executa o comando para observar alterações no Storybook.
- `npm run rdt`: Inicia o React DevTools.
- `npm run lint`: Executa o ESLint para verificar e corrigir problemas de linting no código-fonte.
- `npm run prettier:write`: Executa o Prettier para formatar automaticamente o código-fonte.
- `npm run prettier:format`: Executa o Prettier para verificar a formatação do código-fonte sem fazer alterações.
- `npm run format`: Executa o Prettier para formatar automaticamente o código-fonte e em seguida executa o ESLint para verificar e corrigir problemas de linting.
