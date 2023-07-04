const AbstractManager = require("./AbstractManager");

class PhotoReportManager extends AbstractManager {
  constructor() {
    super({ table: "photo_report" });
  }

  insert(photoReport) {
    return this.database.query(
      `insert into ${this.table} (name, date, description, place, artist_id) values (?, ?, ?, ?, ?)`,
      [
        photoReport.name,
        photoReport.date,
        photoReport.description,
        photoReport.place,
        photoReport.artist_id,
      ]
    );
  }

  update(photoReport) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      photoReport,
      photoReport.id,
    ]);
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = PhotoReportManager;
