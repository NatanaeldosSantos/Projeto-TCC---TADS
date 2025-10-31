import { Database } from "./Database";
import { Equipamento } from "../model/Equipamento";

export class EquipamentoService {
  static TABLE = "equipamento";

  static async create(obj) {
    const resultado = await Database.runQuery(
      `INSERT INTO ${this.TABLE} (nome, codigo, laboratorio) VALUES (?, ?, ?)`,
      [obj.nome, obj.codigo, obj.laboratorio]
    );

    obj.id = resultado;
    console.log("Criado:", obj);
    return obj;
  }

  static async update(obj) {
    const resultado = await Database.runQuery(
      `UPDATE ${this.TABLE} SET nome=?, codigo=?, laboratorio=? WHERE id=?`,
      [obj.nome, obj.codigo, obj.laboratorio, obj.id]
    );

    return resultado !== null;
  }

  static async delete(obj) {
    const resultado = await Database.runQuery(
      `DELETE FROM ${this.TABLE} WHERE id=?`,
      [obj.id]
    );

    return resultado !== null;
  }

  static async findAll() {
    const allRows = await Database.getAll();
    return allRows.map(row => new Equipamento(row));
  }
}
