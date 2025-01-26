# Calculadora de IMC 

Este projeto é uma página dinâmica para cálculo do Índice de Massa Corporal (IMC), desenvolvida em React e TypeScript. A interface é responsiva e exibe o resultado de forma clara e interativa.

Projeto desenvolvido durante o curso em ReactJS B7Web.

## Funcionalidades 

- Permite calcular o IMC com base na altura e peso informados.

- Exibe informações detalhadas sobre a categoria do IMC (Magreza, Normal, Sobrepeso ou Obesidade).

- Mostra uma tabela visual com as categorias de IMC.

- Botão para reiniciar o cálculo.

## Tecnologias Utilizadas

- React: Biblioteca principal para construção da interface do usuário.

- TypeScript: Fornece tipagem estática para o JavaScript, aumentando a segurança do código.

- CSS Modules: Utilizado para estilizações locais e organização do CSS.

## Estrutura do Projeto

src/

├── assets/                # Imagens e recursos visuais

├── components/            # Componentes reutilizáveis

  └── GridItem/        # Componente de item da tabela

├── helpers/               # Funções auxiliares (cálculo do IMC)

├── App.module.css        # Estilizações principais

├── App.tsx                # Componente principal

└── index.tsx              # Ponto de entrada do React

## Instalação

```
npm install
```

## Para rodar

```
npm start
```

## Lógica do Cálculo de IMC

A função de cálculo está definida no arquivo helpers/imc.ts. Ela segue a seguinte lógica:

Recebe altura (em metros) e peso (em quilos) como parâmetros.

Calcula o IMC usando a fórmula:

```
const imc = weight / (height * height);
```

Verifica em qual faixa o IMC se encontra, com base nas categorias predefinidas no array levels.

Retorna o objeto correspondente à categoria encontrada.