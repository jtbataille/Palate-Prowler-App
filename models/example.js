module.exports = function (sequelize, DataTypes) {
	const Example = sequelize.define("Example", {
		name: DataTypes.STRING,
		address: DataTypes.STRING,
		city: DataTypes.STRING,
		state: DataTypes.STRING,
		zip: DataTypes.STRING,
		about: DataTypes.TEXT,
		option1: DataTypes.STRING,
		option2: DataTypes.STRING,
		option3: DataTypes.STRING,
		option4: DataTypes.STRING,
		option5: DataTypes.STRING,
		option6: DataTypes.STRING,
		option7: DataTypes.STRING,
		option8: DataTypes.STRING,
		option9: DataTypes.STRING,
		option10: DataTypes.STRING,
		option11: DataTypes.STRING,
		option12: DataTypes.STRING,
		option13: DataTypes.STRING,
		option14: DataTypes.STRING,
		/* Need to figure out picture capture and datatype */
		picture: DataTypes.STRING,
	});

	Example.associate = function (models) {
		Example.belongsTo(models.User, {
			foreignKey: {
				allowNull: false,
			},
		});
	};

	return Example;
};
