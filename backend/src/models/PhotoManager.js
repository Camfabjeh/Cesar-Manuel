const AbstractManager = require("./AbstractManager");

class PhotoManager extends AbstractManager {
  constructor() {
    super({ table: "photo" });
  }

  insert(photo) {
    return this.database.query(
      `insert into ${this.table} (photo_report_id, src, alt) values (?, ?, ?)`,
      [photo.photo_report_id, photo.src, photo.alt]
    );
  }

  update(photo) {
    return this.database.query(
      `update ${this.table} set photo_report_id = ?, src = ?, alt = ? where id = ?`,
      [photo.photo_report_id, photo.src, photo.alt, photo.id]
    );
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = PhotoManager;
