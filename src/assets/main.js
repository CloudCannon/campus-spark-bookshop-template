document.addEventListener('DOMContentLoaded', function() {
	const dropdowns = document.querySelectorAll('.dropdown');
	const dropdownButtons = document.querySelectorAll('.dropdown > button');

	function toggleDropdown() {
		const currentButton = this;
		const currentDropdown = currentButton.parentNode;
		const isExpanded = currentButton.getAttribute('aria-expanded') === 'true';
		const parentDropdown = currentDropdown.parentNode.closest('.dropdown');

		closeDropdowns(parentDropdown);

		if (!isExpanded) {
			currentButton.setAttribute('aria-expanded', 'true');
			currentDropdown.classList.add('is-active');
		}
	}

	function closeDropdowns(element) {
		let buttons = dropdownButtons;

		if (element) {
			buttons = element.querySelectorAll('& .dropdown > button');
		}

		buttons.forEach(button => {
			button.setAttribute('aria-expanded', 'false');
			button.parentNode.classList.remove('is-active');
		});
	}

	dropdowns.forEach(dropdown => {
		dropdown.classList.add('dropdown-js');
	});

	dropdownButtons.forEach(button => {
		button.addEventListener('click', toggleDropdown);
	});

	document.addEventListener('keydown', function(event) {
		if (event.key === "Escape") {
			closeDropdowns();
		}
	});

	document.addEventListener('click', function(event) {
        const isClickInside = event.target.closest('.dropdown');

        if (!isClickInside) {
            closeDropdowns();
        }
    });
});