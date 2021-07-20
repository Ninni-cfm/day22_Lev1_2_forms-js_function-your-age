function calculateAge() {
    let currentDate = new Date();
    let year = document.getElementById('year').value;
    document.getElementById('result').innerHTML = currentDate.getFullYear() - year;
}