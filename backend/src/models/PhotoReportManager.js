const AbstractManager = require("./AbstractManager");

class PhotoReportManager extends AbstractManager {
  constructor() {
    super({ table: "photo_report" });
  }

  insert(photoReport) {
    return this.database.query(
      `insert into ${this.table} (report_name, report_date, report_description, place, artist_id) values (?, ?, ?, ?, ?)`,
      [
        photoReport.report_name,
        photoReport.report_date,
        photoReport.report_description,
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
