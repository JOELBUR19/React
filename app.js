const form = document.querySelector('.barrabusqueda');
const select = document.querySelector('.categoria');
const input = document.querySelector('.barrabusqueda input');
const items = document.querySelectorAll('.features article'); 

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const categoria = select.value.toLowerCase();
    const texto = input.value.toLowerCase();

    items.forEach(item => {
        const coincideCategoria = categoria === "" || item.classList.contains(categoria);
        const coincideTexto = item.querySelector('h3').textContent.toLowerCase().includes(texto);

        if (coincideCategoria && coincideTexto) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});
