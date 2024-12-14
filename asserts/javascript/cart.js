function fillcolor() {
    const nav = document.getElementById('nav');
    if (document.documentElement.scrollTop > 1) {
        nav.style.background = 'white';
        nav.style.color = 'black';
        // Update links inside navbar
        const links = nav.querySelectorAll('a');
        links.forEach(link => link.style.color = 'black');
    } else {
        nav.style.background = 'transparent';
        nav.style.color = '';

        // Reset links inside navbar
        const links = nav.querySelectorAll('a');
        links.forEach(link => link.style.color = '');

    }
}