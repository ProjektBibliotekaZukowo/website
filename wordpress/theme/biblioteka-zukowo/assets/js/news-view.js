// Grid / list switch on the news list (.bz-view-switch). The choice is kept in
// localStorage and applied to <html data-bz-news-view> before the first paint by
// an inline script in <head> (functions.php), so this only wires up the buttons.
// Without JavaScript the switch stays hidden and the grid shows.
(function () {
	var root = document.documentElement;

	document.querySelectorAll('[data-bz-view-switch]').forEach(function (group) {
		var buttons = group.querySelectorAll('[data-bz-view]');

		function sync() {
			var current = root.getAttribute('data-bz-news-view') || 'grid';
			buttons.forEach(function (button) {
				button.setAttribute('aria-pressed', String(button.getAttribute('data-bz-view') === current));
			});
		}

		buttons.forEach(function (button) {
			button.addEventListener('click', function () {
				var view = button.getAttribute('data-bz-view');
				root.setAttribute('data-bz-news-view', view);
				try {
					localStorage.setItem('bz-news-view', view);
				} catch (e) {}
				sync();
			});
		});

		sync();
		group.hidden = false;
	});
})();
