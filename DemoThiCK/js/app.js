function app() {
    let maBN = document.getElementById('maBenhNhan').value
    let resultMaBN = maBN.match(/(BN-)\d{5}/g);
    if (!resultMaBN) {
        alert('Mã bệnh nhân không hợp lệ');
        return;
    }

}