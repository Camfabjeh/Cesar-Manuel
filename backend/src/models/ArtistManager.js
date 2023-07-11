const AbstractManager = require("./AbstractManager");

class ArtistManager extends AbstractManager {
  constructor() {
    super({ table: "artist" });
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  insert(artist) {
    return this.database.query(
      `insert into ${this.table} (artist_name, website) values (?, ?)`,
      [artist.artist_name, artist.website]
    );
  }

  update(artist) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      artist,
      artist.id,
    ]);
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = ArtistManager;
