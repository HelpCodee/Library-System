const { Model, DataTypes } = require('sequelize')

class Book extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      volume: DataTypes.INTEGER,
      edition: DataTypes.INTEGER,
      year: DataTypes.INTEGER,
      synopsis: DataTypes.TEXT,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Author, {
      foreignKey: 'author_id', as: 'author'
    })
    this.belongsTo(models.Publisher, {
      foreignKey: 'publisher_id', as: 'publisher'
    })
    this.belongsToMany(models.Category, {
      foreignKey: 'book_id',
      through: 'book_categories',
      as: 'categories'
    })
  }
}

module.exports = Book