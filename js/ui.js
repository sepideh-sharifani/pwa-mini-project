// DOMContentLoaded is used in order to wait for all the DOM content get loaded before further ado
document.addEventListener('DOMContentLoaded', function () {
	// nav menu
	const menus = document.querySelectorAll('.side-menu');
	M.Sidenav.init(menus, { edge: 'right' });
	// add task
	const forms = document.querySelectorAll('.side-form');
	M.Sidenav.init(forms, { edge: 'left' });
});
