function app() {
    let maBN = document.getElementById('maBenhNhan').value
    let resultMaBN = maBN.match(/(BN-)\d{5}/g);
    if (!resultMaBN) {
        alert('Mã bệnh nhân không hợp lệ');
        return;
    }

    let mk = document.getElementById('matKhau').value
    let resultMatKhau = mk.match(/.{6,}/g);
    if (!resultMatKhau) {
        alert('Mật khẩu không hợp lệ');
        return;
    }

    let ngay = new Date(document.getElementById('ngayKham').value)
    if (ngay < new Date()) {
        alert('Ngày không hợp lệ');
        return;
    }

    let sum = 0;
    let l1 = document.getElementById('loaiDichVu1');
    if (l1.checked == true) {
        sum += 500000;
    }
    let l2 = document.getElementById('loaiDichVu2');
    if (l1.checked == true) {
        sum += 500000;
    }
    let l3 = document.getElementById('loaiDichVu3');
    if (l1.checked == true) {
        sum += 500000;
    }

    let chuyenKhoa = $('#chuyenKhoa').find(":selected").text()
    let index = 2
    var table = document.getElementById(table_model)
    table.insertAdjacentHTML(0, index)
    table.insertAdjacentHTML(1, maBN)
    table.insertAdjacentHTML(2, mk)
    table.insertAdjacentHTML(3, ngay)
    table.insertAdjacentHTML(4, sum)
    table.insertAdjacentHTML(5, chuyenKhoa)
    alert('Thêm thành công');
}