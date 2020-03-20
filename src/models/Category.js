const { Model, DataTypes } = require('sequelize')

class Category extends Model {
	static init(sequelize) {
		super.init({
			name: DataTypes.STRING,
		}, {
			sequelize,
			tableName: 'categories'
		})
	}

	static associate(models) {
		this.belongsToMany(models.Book, {
			foreignKey: 'category_id',
			through: 'book_categories',
			as: 'books'
		})
	}
}

module.exports = Category