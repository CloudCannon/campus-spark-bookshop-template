document.addEventListener('DOMContentLoaded', function () {
	Array.from(document.querySelectorAll('.dropdown button')).forEach(function (dropdownButton) {
		dropdownButton.addEventListener('click', function (e) {
			// Toggle the 'is-active' class on the dropdown
			dropdownButton.parentNode.classList.toggle('is-active');
		
			// Optionally, remove 'is-active' from all other dropdowns if needed
			document.querySelectorAll('.dropdown.is-active').forEach(function (active) {
				if (active !== dropdownButton.parentNode) {
					active.classList.remove('is-active');
				}
			});
		});
	});
}, false);