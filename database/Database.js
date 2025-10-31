import * as SQLite from 'expo-sqlite';

const tableEquip = "equipamento";
const tableStock = "estoque";

export class Database {
  static getConnection() {
    return SQLite.openDatabaseAsync("equipamentoapp.db");
  }

  static async initDb(syncDb) {
    if (syncDb || !(await this.isDbCreated())) {
      await this.dropDb();
      await this.createDb();
    }
  }

  static async ReinitDb(syncDb) {
    await this.dropDb();
    await this.createDb();
  }

  static async isDbCreated() {
    try {
      await this.runQuery(`SELECT 1 FROM ${tableEquip};`);
      await this.runQuery(`SELECT 1 FROM ${tableStock};`);
      return true;
    } catch (e) {
      return false;
    }
  }

  static async dropDb() {
    const db = this.getConnection();
    await (await db).runAsync(`DROP TABLE IF EXISTS ${tableEquip};`);
    await (await db).runAsync(`DROP TABLE IF EXISTS ${tableStock};`);
  }

  static async createDb() {
    const db = this.getConnection();


    await (await db).runAsync(`
      CREATE TABLE IF NOT EXISTS ${tableEquip} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        codigo TEXT,
        laboratorio TEXT
      );
    `);


    await (await db).runAsync(`
      CREATE TABLE IF NOT EXISTS ${tableStock} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        codigo TEXT,
        laboratorio TEXT
      );
    `);
  }

 
  static async runQuery(sql, args = []) {
    const db = this.getConnection();
    const result = await (await db).runAsync(sql, args);
    return result?.lastInsertRowId ?? null;
  }

  static async getAll() {
    const db = this.getConnection();
    const result = await (await db).getAllAsync(`SELECT * FROM ${tableEquip};`);
    return result;
  }


  static async runQueryEstoque(sql, args = []) {
    const db = this.getConnection();
    const result = await (await db).runAsync(sql, args);
    return result?.lastInsertRowId ?? null;
  }

  static async getAllEstoque() {
    const db = this.getConnection();
    const result = await (await db).getAllAsync(`SELECT * FROM ${tableStock};`);
    return result;
  }
}
