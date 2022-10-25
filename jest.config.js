module.exports = {
  bail: true, // para que se der um erro em algum teste, a execução dos proximos testes seja pausada
  coverageProvider: "v8",

  testMatch: [
    "<rootDir>/src/**/*.spec.js" 
    // <partindo da raiz do projeto>/olhar somente dentro da pasta src/ e dentro dela, terá uma ou mais pastas com 
    // qualquer nome / terá uma ou mais arquivos com qualquer nome inicial e que termina como spec.js (rodar o teste)
  ]
 }