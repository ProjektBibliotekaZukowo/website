// Marks today's row in every opening-hours table (.bz-hours) and fills the
// "Dziś jesteśmy otwarci" bar from it. Runs in the visitor's browser so cached
// pages never show a stale day. Without JavaScript the bar keeps its fallback link.
(function () {
	var days = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
	var weekday = new Intl.DateTimeFormat('pl-PL', { weekday: 'long', timeZone: 'Europe/Warsaw' })
		.format(new Date())
		.toLowerCase();
	if (days.indexOf(weekday) === -1) return;

	function normalise(text) {
		return text.toLowerCase().replace(/[:\s]+$/, '').trim();
	}

	var todayHours = null;
	document.querySelectorAll('.bz-hours tr').forEach(function (row) {
		var cells = row.querySelectorAll('td, th');
		if (cells.length < 2 || normalise(cells[0].textContent) !== weekday) return;
		row.classList.add('is-today');
		if (todayHours === null) todayHours = cells[1].textContent.trim();
	});

	document.querySelectorAll('.bz-today').forEach(function (bar) {
		var value = bar.querySelector('.bz-today__value');
		if (!value) return;
		var open = todayHours !== null && /\d/.test(todayHours);
		value.textContent = todayHours !== null ? todayHours : 'nieczynne';
		value.classList.toggle('is-closed', !open);
		bar.querySelector('.bz-today__label').textContent = open
			? 'Dziś (' + weekday + ') jesteśmy otwarci:'
			: 'Dziś (' + weekday + '):';
	});
})();
