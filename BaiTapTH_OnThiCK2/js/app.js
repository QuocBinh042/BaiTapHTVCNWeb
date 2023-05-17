let i = 1

function app() {
    let maBN = document.getElementById("maBenhNhan").value
    let gioiTinh;
    let ngayKhamBenh = new Date(document.getElementById("ngayKhamBenh").value)
    let matKhau = document.getElementById("matKhau").value
    let chuyenKhoa = $('#chuyenKhoa').find(":selected").text()
    let hinh = document.getElementById("hinhAnh").value
    let regex = /^(BN)-[0-9]{5}$/
    let regexMK = /.{6,}/g
    if (maBN.trim() == '') {
        $("#tbMaBN").html("Nhập lại mã bệnh nhân")
        alert("Mã bệnh nhân không được để trống")
        return
    }
    if (!regex.test(maBN)) {
        $("#tbMaBN").html("Nhập lại mã bệnh nhân")
        alert("sai mã bệnh nhân")
        return
    }

    if (matKhau.trim() == '') {
        $("#tbMatKhau").html("Nhập lại mật khẩu")
        alert("Mật khẩu sai")
        return
    }

    if (!regexMK.test(matKhau)) {
        $("#tbMatKhau").html("Nhập lại mật khẩu")
        alert("Mật khẩu sa")
        return
    }

    if ($("#nam").is(":checked")) {
        gioiTinh = "Nam"
    } else {
        gioiTinh = "Nữ"
    }

    if (ngayKhamBenh < new Date()) {
        alert('Ngày không hợp lệ');
        return;
    }
    let dateString = ngayKhamBenh.getUTCDate() + "/" + (ngayKhamBenh.getUTCMonth() + 1) + "/" + ngayKhamBenh.getFullYear()

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
    i++;
    var row = "<tr><td>" + i + "</td><td>" + maBN + "</td><td>" + gioiTinh + "</td><td>" + matKhau + "</td><td>" + dateString + "</td><td>" + sum + "</td><td>" + chuyenKhoa + "</td><td>" + hinh + "</td><tr>"
    $("tbody").append(row)
    alert("Thêm thành công")
}