function toggleBulb() {
    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');

    //bulb off 
    if (img1.style.display !== 'none') {
        // Switch on" bulb
        img1.style.display = 'none';
        img2.style.display = 'block';
    } else {
        // Switch tpff bulb
        img1.style.display = 'block';
        img2.style.display = 'none';
    }
}