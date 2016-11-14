var view = {
	showNumber: function (n) {
		var el = document.getElementById("showResult");
		el.innerHTML = n;
	}
};

var model = {
	number: 0,

	calculate: function (x, y) {
		this.number = x * y;
	}
};

var controller = {
	handleClick: function () {
		model.calculate(3, 6);
		view.showNumber(model.number);
	}
};

(function() {
	var app = {
		init: function() {
			this.main();
			this.event();
		}, 

		main: function() {

		},

		event: function() {
			document.getElementById("calcTest").onclick = controller.handleClick;
		},
	};
	app.init();
}());