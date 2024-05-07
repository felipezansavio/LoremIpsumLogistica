export class Endereco {
    cep: string;
    logradouro: string;
    numero: string;
    complemento?: string;
    bairro?: string;
    cidade: string;
    uf: string;
  
    constructor(
      cep: string,
      logradouro: string,
      numero: string,
      cidade: string,
      uf: string,
      complemento?: string,
      bairro?: string
    ) {
      this.cep = cep;
      this.logradouro = logradouro;
      this.numero = numero;
      this.cidade = cidade;
      this.uf = uf;
      this.complemento = complemento;
      this.bairro = bairro;
    }
  }