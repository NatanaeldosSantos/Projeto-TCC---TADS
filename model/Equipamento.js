export class Equipamento {
  constructor(obj) {
    if (obj) {
      this.id = obj.id;
      this.nome = obj.nome;
      this.codigo = obj.codigo;
      this.laboratorio = obj.laboratorio;
    }
  }

  toObjeto() {
    return {
      id: this.id,
      nome: this.nome,
      codigo: this.codigo,
      laboratorio: this.laboratorio,
    };
  }

  toString() {
    const atributos = Object.values(this).join(',');
    return `Equipamento [${atributos}]`;
  }
}
