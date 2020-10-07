// Get references to page elements
const $exampleName = $("#modal-form-name");
const $exampleDateFrom = $("#modal-form-datefrom");
const $exampleDateTo = $("#modal-form-dateto");
const $exampleAddress = $("#modal-form-address");
const $exampleCity = $("#modal-form-city");
const $exampleState = $("#modal-form-state");
const $exampleZip = $("#modal-form-zip");
const $exampleAbout = $("#modal-form-about");
const $exampleOption1 = $("#checkbox1");
const $exampleOption2 = $("#checkbox2");
const $exampleOption3 = $("#checkbox3");
const $exampleOption4 = $("#checkbox4");
const $exampleOption5 = $("#checkbox5");
const $exampleOption6 = $("#checkbox6");
const $exampleOption7 = $("#checkbox7");
const $exampleOption8 = $("#checkbox8");
const $exampleOption9 = $("#checkbox9");
const $exampleOption10 = $("#checkbox10");
const $exampleOption11 = $("#checkbox11");
const $exampleOption12 = $("#checkbox12");
const $exampleOption13 = $("#checkbox13");
const $exampleOption14 = $("#checkbox14");
const $examplePicture = $("#modal-form-picture");
const $submitBtn = $("#modal-submit");
const $exampleList = $("#example-list");
const $exampleValue = $(".eventButton");

// The API object contains methods for each kind of request we'll make
const API = {
	saveExample: function (example) {
		return $.ajax({
			headers: {
				"Content-Type": "application/json",
			},
			type: "POST",
			url: "api/examples",
			data: JSON.stringify(example),
		});
	},
	getExamples: function () {
		return $.ajax({
			url: "api/examples",
			type: "GET",
		});
	},
	deleteExample: function (id) {
		return $.ajax({
			url: "api/examples/" + id,
			type: "DELETE",
		});
	},
};

// refreshExamples gets new examples from the db and repopulates the list
const refreshExamples = function () {
	API.getExamples().then(function (data) {
		const $examples = data.map(function (example) {
			const $a = $("<a>")
				.text(example.name)
				.attr("href", "/example/" + example.id);

			const $li = $("<li>")
				.attr({
					class: "list-group-item",
					"data-id": example.id,
				})
				.append($a);

			const $button = $("<button>")
				.addClass("btn btn-danger float-right delete")
				.text("ｘ");

			$li.append($button);

			return $li;
		});

		$exampleList.empty();
		$exampleList.append($examples);
	});
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
const handleFormSubmit = function (event) {
	event.preventDefault();
	console.log("Form Submit");
	const example = {
		name: $exampleName.val().trim(),
		datefrom: $exampleDateFrom.val().trim(),
		dateto: $exampleDateTo.val().trim(),
		address: $exampleAddress.val().trim(),
		city: $exampleCity.val().trim(),
		state: $exampleState.val().trim(),
		zip: $exampleZip.val().trim(),
		about: $exampleAbout.val().trim(),
		option1: $exampleOption1.val().trim(),
		option2: $exampleOption2.val().trim(),
		option3: $exampleOption3.val().trim(),
		option4: $exampleOption4.val().trim(),
		option5: $exampleOption5.val().trim(),
		option6: $exampleOption6.val().trim(),
		option7: $exampleOption7.val().trim(),
		option8: $exampleOption8.val().trim(),
		option9: $exampleOption9.val().trim(),
		option10: $exampleOption10.val().trim(),
		option11: $exampleOption11.val().trim(),
		option12: $exampleOption12.val().trim(),
		option13: $exampleOption13.val().trim(),
		option14: $exampleOption14.val().trim(),
		picture: $examplePicture.val().trim(),
		UserId: window.userId,
	};

	if (
		!(example.name && example.address && example.datefrom && example.dateto)
	) {
		alert("You must enter a name, date, and address!");
		return;
	}

	console.log("Event Made: ", example);

	API.saveExample(example).then(function () {
		refreshExamples();
		window.location.reload();
	});

	$exampleName.val("");
	$exampleDateFrom.val("");
	$exampleDateTo.val("");
	$exampleAddress.val("");
	$exampleCity.val("");
	$exampleState.val("");
	$exampleZip.val("");
	$exampleAbout.val("");
	$exampleOption1.val("");
	$exampleOption2.val("");
	$exampleOption3.val("");
	$exampleOption4.val("");
	$exampleOption5.val("");
	$exampleOption6.val("");
	$exampleOption7.val("");
	$exampleOption8.val("");
	$exampleOption9.val("");
	$exampleOption10.val("");
	$exampleOption11.val("");
	$exampleOption12.val("");
	$exampleOption13.val("");
	$exampleOption14.val("");
	$examplePicture.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
const handleDeleteBtnClick = function () {
	const idToDelete = $(this).parent().attr("data-id");

	API.deleteExample(idToDelete).then(function () {
		refreshExamples();
		window.location.reload();
	});
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
