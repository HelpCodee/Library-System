const { Model, DataTypes } = require('sequelize')

class Book extends Model {
  static init(sequelize) {
    super.init({
      loan_date: DataTypes.DATE,
      devolution_date: DataTypes.DATE,
      penalty: DataTypes.INTEGER,
    }, {
      sequelize,
      tableName: 'loans'
    })
  }

  static associate(models) {
    this.belongsTo(models.Book, {
      foreignKey: 'book_id', as: 'book'
    })
    this.belongsTo(models.User, {
      foreignKey: 'user_id', as: 'user'
    })
  }
}

module.exports = Book