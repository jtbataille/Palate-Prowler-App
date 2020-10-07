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
				name: "Adam's Appetizing Eats",
				datefrom: "10/31/2020",
				dateto: "11/01/2020",
				address: "123 Main St.",
				city: "Wilmington",
				state: "North Carolina",
				zip: "28410",
				about: "Here at 'Adam's Appetizing Eats' we strive to provide the best possible meal for you while keeping the pandemic in mind. Come eat with us as we make a safe dining experience with good food and safe company!",
				picture: "/assets/images/adam-demo.jpg",
				value: false,
				UserId: 1,
			}).then(() => {
				db.Example.create({
					name: "Uma's Unearthly Cuisine",
					datefrom: "09/22/2020",
					dateto: "11/27/2020",
					address: "329 Phillips Hall",
					city: "Chapel Hill",
					state: "North Carolina",
					zip: "27599",
					about: "Uma's Truck is fabulous with its array of cuisine to meet any of your various needs--all with a vegan twist! She will make you wonder if you're even able to tell that her ragù or filet is 100% animal-free--not to mention her tantalizing desserts! Come check us out!",
					picture: "/assets/images/uma-demo.jpg",
					value: false,
					UserId: 2,
				});
			});
		});
	});
};
