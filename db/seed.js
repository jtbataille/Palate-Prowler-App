module.exports = (db) => {
	db.User.create({
		firstName: "Adam",
		lastName: "Gates",
		email: "adam@gates.com",
		password: process.env.ADMIN_USER_PWD,
		isAdmin: true,
	}).then(() => {
		db.User.create({
			firstName: "Uma",
			lastName: "Pearson",
			email: "uma@pearson.com",
			password: process.env.USER_PWD,
			isAdmin: false,
		}).then(() => {
			db.Example.create({
				name: "Adam's Truck",
				datefrom: "10/31/2020",
				dateto: "11/01/2020",
				address: "123 Main St.",
				city: "Wilmington",
				state: "North Carolina",
				zip: "28410",
				about: "Adam's Truck is awesome!",
				picture: "/assets/images/adam-demo.jpg",
				value: false,
				UserId: 1,
			}).then(() => {
				db.Example.create({
					name: "Uma's Truck",
					datefrom: "11/25/2020",
					dateto: "11/27/2020",
					address: "329 Phillips Hall",
					city: "Chapel Hill",
					state: "North Carolina",
					zip: "27599",
					about: "Uma's Truck is fabulous!",
					picture: "/assets/images/uma-demo.jpg",
					value: false,
					UserId: 2,
				});
			});
		});
	});
};
