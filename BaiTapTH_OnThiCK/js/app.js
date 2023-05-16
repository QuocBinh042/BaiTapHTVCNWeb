let i = 3;

function myFunction() {
    let moTa = document.getElementById("moTa").value
    let soSerial = document.getElementById("soSerial").value
    let trongLuong = document.getElementById("trongLuong").value
    let hinh = document.getElementById("hinhAnh").value
    let regexSoSerial = /^[0-9a-zA-Z]{6,}$/

    if (moTa.trim() == '') {
        $("#LoiMoTa").html("Mô tả không được để trống")
        return
    }
    if (trongLuong.trim() == '') {
        $("LoiTrongLuong").html("Trọng lượng không được để trống")
    }
    if (!regexSoSerial.test(soSerial) && soSerial.trim() != '') {
        $("#LoiSoSerial").html("Số serial không đúng yêu cầu")
        return
    }
    if (trongLuong < 0) {
        $("#LoiTrongLuong").html("Trọng lượng phải lớn hơn 0")
        return
    }
    let ChiPhiVanChuyen;
    if (trongLuong >= 1 && trongLuong <= 20) {
        ChiPhiVanChuyen = trongLuong * 35000;
    } else if (trongLuong > 21 && trongLuong <= 50) {
        ChiPhiVanChuyen = trongLuong * 30000;
    } else {
        ChiPhiVanChuyen = trongLuong * 15000;
    }
    document.getElementById("chiPhi").value = ChiPhiVanChuyen
    i++;
    var row = "<tr><td>" + i + "</td><td>" + soSerial + "</td><td>" + moTa + "</td><td>" + hinh + "</td><td>" + trongLuong + "</td><td>" + ChiPhiVanChuyen + "</td></tr>"
    $("tbody").append(row)
    $("#myModal").modal("hide")

}