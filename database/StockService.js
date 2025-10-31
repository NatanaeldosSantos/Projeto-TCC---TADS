import { Database } from "./Database";

export class StockService {
  static async addToStock(equip) {
    return Database.runQueryEstoque(
      `INSERT INTO estoque (nome, codigo, laboratorio) VALUES (?, ?, ?)`,
      [equip.nome, equip.codigo, equip.laboratorio]
    );
  }

  static async findAll() {
    return Database.getAllEstoque();
  }

static async delete(id) {
  const db = await Database.getConnection();
  return await db.runAsync(
    "DELETE FROM estoque WHERE id = ?",
    [id]
  );
}
}
