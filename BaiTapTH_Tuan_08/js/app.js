var index = 2;

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
    var dateString = ngay.getUTCDate() + "/" + (ngay.getUTCMonth() + 1) + "/" + ngay.getUTCFullYear();

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


    let table = document.getElementById("table_model")
    let row = table.insertRow(index)
    let c1 = row.insertCell(0)
    let c2 = row.insertCell(1)
    let c3 = row.insertCell(2)
    let c4 = row.insertCell(3)
    let c5 = row.insertCell(4)
    let c6 = row.insertCell(5)

    c1.innerHTML = index
    c2.innerHTML = maBN
    c3.innerHTML = mk
    c4.innerHTML = dateString
    c5.innerHTML = sum
    c6.innerHTML = chuyenKhoa

    alert('Thêm thành công');
    index++;
}