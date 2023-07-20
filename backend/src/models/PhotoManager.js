const AbstractManager = require("./AbstractManager");

class PhotoManager extends AbstractManager {
  constructor() {
    super({ table: "photo" });
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  findAllByPhotoReport(id) {
    return this.database.query(
      `select * from ${this.table} WHERE photo_report_id = ?`,
      [id]
    );
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
