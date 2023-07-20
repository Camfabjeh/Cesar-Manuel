const AbstractManager = require("./AbstractManager");

class PhotoReportManager extends AbstractManager {
  constructor() {
    super({ table: "photo_report" });
  }

  find(id) {
    return this.database.query(
      `select pr.report_name, pr.report_date, pr.report_description, pr.photo_preview, pr.photo_preview_alt, pr.place, a.artist_name as artist, a.website as website from ${this.table} as pr 
      inner join artist as a on a.id = pr.artist_id
      where pr.id = ?`,
      [id]
    );
  }

  insert(photoReport) {
    return this.database.query(
      `insert into ${this.table} (report_name, report_date, report_description, photo_preview, photo_preview_alt, place, artist_id) values (?, ?, ?, ?, ?)`,
      [
        photoReport.report_name,
        photoReport.report_date,
        photoReport.report_description,
        photoReport.photo_preview,
        photoReport.photo_preview_alt,
        photoReport.place,
        photoReport.artist_id,
      ]
    );
  }

  update(photoReport) {
    return this.database.query(
      `update ${this.table} set report_name = ?, report_date = ?, report_description = ?, photo_preview = ?, photo_preview_alt = ?, place = ?, artist_id = ? where id = ?`,
      [
        photoReport.report_name,
        photoReport.report_date,
        photoReport.report_description,
        photoReport.photo_preview,
        photoReport.photo_preview_alt,
        photoReport.place,
        photoReport.artist_id,
        photoReport.id,
      ]
    );
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = PhotoReportManager;
