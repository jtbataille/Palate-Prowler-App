module.exports = function (db) {
	return {
		// Get all examples
		getExamples: function (req, res) {
			db.Example.findAll({}).then(function (dbExamples) {
				console.log(dbExamples);
				res.json(dbExamples);
			});
		},
		// Create a new example
		createExample: function (req, res) {
			console.log(req.body);
			db.Example.create(req.body).then(function (dbExample) {
				console.log(dbExample);
				res.json(dbExample);
			});
		},
		// updale an example by id
		updateValue: (req, res) => {
			db.Example.update(
				{ value: req.body.value },
				{ where: { id: req.params.id } },
			)
				.then(function (dbExample) {
					res.json({ success: true });
				})
				.catch(() => {
					res.json({ success: false });
				});
		},
		// Delete an example by id
		deleteExample: function (req, res) {
			db.Example.destroy({ where: { id: req.params.id } }).then(function (
				dbExample,
			) {
				res.json(dbExample);
			});
		},
	};
};
