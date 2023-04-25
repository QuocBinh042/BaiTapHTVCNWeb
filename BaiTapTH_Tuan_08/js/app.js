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
    alert('Thêm thành công');

    let index = 2
    var table = document.getElementById(table_model)

    var result = $(maBN) + $(mk) + $(ngay) + $(sum) + $(chuyenKhoa)
    table.insertAdjacentText(1, result)
        // var result = "<td>" + $(maBN) + "</td>";
        // result = "<td>" + $(mk) + "</td>";
        // result = "<td>" + $(ngay) + "</td>";
        // result = "<td>" + $(sum) + "</td>";
        // result = "<td>" + $(chuyenKhoa) + "</td>";
        // table.innerHTML = result
}