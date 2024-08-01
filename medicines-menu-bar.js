const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((menuItem) => {
	menuItem.addEventListener('click', (e) => {
		e.preventDefault();
		const targetId = menuItem.getAttribute('href');
		const content = document.querySelector(targetId);
		const allContent = document.querySelectorAll('.content');

		allContent.forEach((c) => {
			c.style.display = 'none';
		});

		content.style.display = 'block';
	});
});