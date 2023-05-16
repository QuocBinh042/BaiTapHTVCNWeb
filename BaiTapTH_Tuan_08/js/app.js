var index = 2;

function app() {
    let maBN = document.getElementById('maBenhNhan').value
    if (maBN.trim() == '') {
        $("#tbMaBenhNhan").html("Không được để trống")
        return false
    }
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
    if (l2.checked == true) {
        sum += 500000;
    }
    let l3 = document.getElementById('loaiDichVu3');
    if (l3.checked == true) {
        sum += 500000;
    }

    let chuyenKhoa = $('#chuyenKhoa').find(":selected").text()
    var row = "<tr><td>" + index + "</td><td>" + maBN + "</td><td>" + mk + "</td><td>" + dateString + "</td><td>" + sum + "</td><td>" + chuyenKhoa + "</td></tr>"
    $("tbody").append(row)
        // $("#myModal").modal("hide")
    alert('Thêm thành công');
    index++;
}