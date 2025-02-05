function showForm() {
    document.getElementById('numberForm').classList.remove('hidden');
    document.querySelector('.heart').style.display = 'none';
}

document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber) {
        document.getElementById('message').textContent = "Gracias linda :)";
        setTimeout(() => {
            event.target.submit(); // Envía el formulario después de mostrar el mensaje
        }, 1500);
    } else {
        alert('Por favor, escribe tu número.');
    }
});