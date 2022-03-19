// bài 1
var diemThiTong = 0;
var diemKhuVuc = 0;
var diemDoiTuong = 0;
var diemTongBaMon = 0;
const khuVucUuTien = (khuVuc) => {
  if (khuVuc == "A") return 2;
  else if (khuVuc == "B") return 1;
  else if (khuVuc == "C") return 0.5;
  else if (khuVuc == "X") return 0;
};
const doiTuongThi = (doiTuong) => {
  if (doiTuong == "1") return 2.5;
  else if (doiTuong == "2") return 1.5;
  else if (doiTuong == "3") return 1;
  else if (doiTuong == "0") return 0;
};
const tinhTongBaMon = (mon1, mon2, mon3) => {
  var ketQua = mon1 + mon2 + mon3;
  return ketQua;
};
const tinhDiemTong = (khuVuc, doiTuong, mon1, mon2, mon3) => {
  diemTongBaMon = tinhTongBaMon(mon1, mon2, mon3);
  diemKhuVuc = khuVucUuTien(khuVuc);
  diemDoiTuong = doiTuongThi(doiTuong);
  diemThiTong = diemTongBaMon + diemKhuVuc + diemDoiTuong;
  return diemThiTong;
};
document.getElementById("kq2").onclick = function () {
  var diemChuan = document.getElementById("diemChuan").value;
  var diem1 = document.getElementById("diem1").value * 1;
  var diem2 = document.getElementById("diem2").value * 1;
  var diem3 = document.getElementById("diem3").value * 1;
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = document.getElementById("doiTuong").value;
  var thongBao = document.querySelector(".footer1");
  diemThiTong = tinhDiemTong(khuVuc, doiTuong, diem1, diem2, diem3);
  if (diemChuan > diemThiTong) {
    thongBao.innerHTML = `Trượt gòi! Chúc bạn may mắn lần sau!!! <br/ > Tổng số điểm đạt được: ${diemThiTong}`;
  } else {
    thongBao.innerHTML = `Đậu gòi! Đi quẩy thôi!!! <br/ > Tổng số điểm đạt được: ${diemThiTong}`;
  }
};

// Bài 2
const KW_DAU = 500;
const KW_2 = 650;
const KW_3 = 850;
const KW_4 = 1100;
const KW_CUOI = 1300;

// var currentFormat = new Intl.NumberFormat("vn-VN");
const formatD9 = (money) =>
  money.toLocaleString("it-IT", { style: "currency", currency: "VND" });
var tongTien = 0;
var tienDien_1 = 0;
var tienDien_2 = 0;
var tienDien_3 = 0;
var tienDien_4 = 0;
var tienDien_5 = 0;
const tinhTienDienDau = (tienDien, soDien) => {
  var kq = soDien * tienDien;
  return kq;
};
const tinhTienDienHai = (tienDien, soDien) => {
  var kq = (soDien - 50) * tienDien;
  return kq;
};
const tinhTienDienBa = (tienDien, soDien) => {
  var kq = (soDien - 100) * tienDien;
  return kq;
};
const tinhTienDienBon = (tienDien, soDien) => {
  var kq = (soDien - 200) * tienDien;
  return kq;
};
const tinhTienDienCuoi = (tienDien, soDien) => {
  var kq = (soDien - 350) * tienDien;
  return kq;
};
const tinhTienChiTiet = (
  soDien,
  giaDien1,
  giaDien2,
  giaDien3,
  giaDien4,
  giaDien5
) => {
  if (soDien > 0 && soDien <= 50) {
    tienDien_1 = tinhTienDienDau(giaDien1, soDien);
    tongTien = tienDien_1;
  } else if (soDien > 50 && soDien <= 100) {
    tienDien_1 = tinhTienDienDau(giaDien1, 50);
    tienDien_2 = tinhTienDienHai(giaDien2, soDien);
    tongTien = tienDien_1 + tienDien_2;
  } else if (soDien > 100 && soDien <= 200) {
    tienDien_1 = tinhTienDienDau(giaDien1, 50);
    tienDien_2 = tinhTienDienHai(giaDien2, 100);
    tienDien_3 = tinhTienDienBa(giaDien3, soDien);
    tongTien = tienDien_1 + tienDien_2 + tienDien_3;
  } else if (soDien > 200 && soDien <= 350) {
    tienDien_1 = tinhTienDienDau(giaDien1, 50);
    tienDien_2 = tinhTienDienHai(giaDien2, 100);
    tienDien_3 = tinhTienDienBa(giaDien3, 200);
    tienDien_4 = tinhTienDienBon(giaDien4, soDien);
    tongTien = tienDien_1 + tienDien_2 + tienDien_3 + tienDien_4;
  } else if (soDien > 350) {
    tienDien_1 = tinhTienDienDau(giaDien1, 50);
    tienDien_2 = tinhTienDienHai(giaDien2, 100);
    tienDien_3 = tinhTienDienBa(giaDien3, 200);
    tienDien_4 = tinhTienDienBon(giaDien4, 350);
    tienDien_5 = tinhTienDienCuoi(giaDien5, soDien);
    tongTien = tienDien_1 + tienDien_2 + tienDien_3 + tienDien_4 + tienDien_5;
  } else tongTien = "Nhập lại số kw";
  return tongTien;
};
document.getElementById("kq3").onclick = function () {
  var soDien = document.getElementById("soDien").value * 1;
  var thongBao = document.querySelector(".footer2");
  if (soDien > 0 && soDien <= 50) {
    tongTien = tinhTienChiTiet(soDien, KW_DAU, KW_2, KW_3, KW_4, KW_CUOI);
  } else if (soDien > 50 && soDien <= 100) {
    tongTien = tinhTienChiTiet(soDien, KW_DAU, KW_2, KW_3, KW_4, KW_CUOI);
  } else if (soDien > 100 && soDien <= 200) {
    tongTien = tinhTienChiTiet(soDien, KW_DAU, KW_2, KW_3, KW_4, KW_CUOI);
  } else if (soDien > 200 && soDien <= 350) {
    tongTien = tinhTienChiTiet(soDien, KW_DAU, KW_2, KW_3, KW_4, KW_CUOI);
  } else if (soDien > 350) {
    tongTien = tinhTienChiTiet(soDien, KW_DAU, KW_2, KW_3, KW_4, KW_CUOI);
  } else tongTien = tinhTienChiTiet(soDien, KW_DAU, KW_2, KW_3, KW_4, KW_CUOI);
  thongBao.innerHTML = `Số tiền phải trả:  ${formatD9(tongTien)} `;
};

// --------------------------------------- Cách 2
// Viết chương trình tiêu thụ điện
// Nơi định nghĩa các mệnh giá để khi thay đổi mệnh giá còn biết nó ở đâu
// const KW = 500; // tức là 0 tới 50
// const KW_50 = 650; // tức là 51 tới 100
// const KW_100 = 850; // tức là 101 tới 200
// const KW_200 = 1100; // tức là 201 tới 350
// const KW_PLUS = 1300; // tức là từ 351 trở đi
// const BILL_50 = 50 * KW; // Tổng tiền khi 50
// const BILL_100 = BILL_50 + 50 * KW_50; // Tổng tiền khi 100
// const BILL_200 = BILL_100 + 100 * KW_100; // Tổng tiền khi 200
// const BILL_PLUS = BILL_200 + 150 * KW_200; // Tổng tiền khi 350

// let tongTien = 0;
// // Định dạng tiền tệ
// const formatD9 = (money) =>
//   money.toLocaleString("it-IT", { style: "currency", currency: "VND" });
// const donGiaPhaiTra = (kw) => {
//   let result;
//   if (kw > 0 && kw < 51) result = kw * KW;
//   else if (kw > 50 && kw < 101) result = (kw - 50) * KW_50 + BILL_50;
//   else if (kw > 100 && kw < 201) result = (kw - 100) * KW_100 + BILL_100;
//   else if (kw > 200 && kw < 351) result = (kw - 200) * KW_200 + BILL_200;
//   else if (kw > 350) result = (kw - 350) * KW_PLUS + BILL_PLUS;
//   else result = "đơn lỗi. Vui lòng nhập đúng số kw đã xài nhé!!!";
//   return result;
// };
// document.getElementById("kq3").onclick = function () {
//   var soDien = document.getElementById("soDien").value * 1;
//   var thongBao = document.querySelector(".footer2");
//   if (soDien > 0 && soDien <= 50) {
//     tongTien = donGiaPhaiTra(soDien);
//   } else if (soDien > 50 && soDien <= 100) {
//     tongTien = donGiaPhaiTra(soDien);
//   } else if (soDien > 100 && soDien <= 200) {
//     tongTien = donGiaPhaiTra(soDien);
//   } else if (soDien > 200 && soDien <= 350) {
//     tongTien = donGiaPhaiTra(soDien);
//   } else if (soDien > 350) {
//     tongTien = donGiaPhaiTra(soDien);
//   } else tongTien = donGiaPhaiTra(soDien);
//   thongBao.innerHTML = `Số tiền phải trả:  ${formatD9(tongTien)} `;
// };
