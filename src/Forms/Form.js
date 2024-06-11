import { useState } from "react";
import axios from "axios";
import "./Form.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import vi from "date-fns/locale/vi"; // Import locale tiếng Việt

const Form = () => {
  const [tinhThanhData] = useState({
    "Hà Nội": [
      "Quận Ba Đình",
      "Quận Hoàn Kiếm",
      "Quận Tây Hồ",
      "Quận Long Biên",
      "Quận Cầu Giấy",
      "Quận Đống Đa",
      "Quận Hai Bà Trưng",
      "Quận Hoàng Mai",
      "Quận Thanh Xuân",
      "Huyện Sóc Sơn",
      "Huyện Đông Anh",
      "Huyện Gia Lâm",
      "Quận Nam Từ Liêm",
      "Huyện Thanh Trì",
      "Quận Bắc Từ Liêm",
      "Huyện Mê Linh",
      "Quận Hà Đông",
      "Thị xã Sơn Tây",
      "Huyện Ba Vì",
      "Huyện Phúc Thọ",
      "Huyện Đan Phượng",
      "Huyện Hoài Đức",
      "Huyện Quốc Oai",
      "Huyện Thạch Thất",
      "Huyện Chương Mỹ",
      "Huyện Thanh Oai",
      "Huyện Thường Tín",
      "Huyện Phú Xuyên",
      "Huyện Ứng Hòa",
      "Huyện Mỹ Đức",
    ],
    "Thành phố Hồ Chí Minh (TP.HCM)": [
      "Quận 1",
      "Quận 12",
      "Quận Gò Vấp",
      "Quận Bình Thạnh",
      "Quận Tân Bình",
      "Quận Tân Phú",
      "Quận Phú Nhuận",
      "Thành phố Thủ Đức",
      "Quận 3",
      "Quận 10",
      "Quận 11",
      "Quận 4",
      "Quận 5",
      "Quận 6",
      "Quận 8",
      "Quận Bình Tân",
      "Quận 7",
      "Huyện Củ Chi",
      "Huyện Hóc Môn",
      "Huyện Bình Chánh",
      "Huyện Nhà Bè",
      "Huyện Cần Giờ",
    ],
    "Hải Phòng": [
      "Quận Hồng Bàng",
      "Quận Ngô Quyền",
      "Quận Lê Chân",
      "Quận Hải An",
      "Quận Kiến An",
      "Quận Đồ Sơn",
      "Quận Dương Kinh",
      "Huyện Thuỷ Nguyên",
      "Huyện An Dương",
      "Huyện An Lão",
      "Huyện Kiến Thuỵ",
      "Huyện Tiên Lãng",
      "Huyện Vĩnh Bảo",
      "Huyện Cát Hải",
      "Huyện Bạch Long Vĩ",
    ],
    "Đà Nẵng": [
      "Quận Liên Chiểu",
      "Quận Thanh Khê",
      "Quận Hải Châu",
      "Quận Sơn Trà",
      "Quận Ngũ Hành Sơn",
      "Quận Cẩm Lệ",
      "Huyện Hòa Vang",
      "Huyện Hoàng Sa",
    ],
    "Cần Thơ": [
      "Quận Ninh Kiều",
      "Quận Ô Môn",
      "Quận Bình Thuỷ",
      "Quận Cái Răng",
      "Quận Thốt Nốt",
      "Huyện Cờ Đỏ",
      "Huyện Thới Lai",
    ],
    "An Giang": [
      "Thành phố Long Xuyên",
      "Thành phố Châu Đốc",
      "Huyện An Phú",
      "Thị xã Tân Châu",
      "Huyện Phú Tân",
      "Huyện Châu Phú",
      "Huyện Tịnh Biên",
      "Huyện Tri",
      "Tôn Huyện Thoại Sơn",
    ],
    "Bà Rịa - Vũng Tàu": [
      "Thành phố Vũng Tàu",
      "Thành phố Bà Rịa",
      "Huyện Châu Đức",
      "Huyện Xuyên Mộc",
      "Huyện Long Điền",
      "Huyện Đất Đỏ",
      "Thị xã Phú Mỹ",
      "Huyện Côn Đảo",
    ],
    "Bạc Liêu": [
      "Thành phố Bạc Liêu",
      "Huyện Hồng Dân",
      "Huyện Phước Long",
      "Huyện Vĩnh Lợi",
      "Thị xã Giá Rai",
      "Huyện Đông Hải",
      "Huyện Hoà Bình",
    ],
    "Bắc Giang": [
      "Thành phố Bắc Giang",
      " Huyện Yên Thế",
      "Huyện Tân Yên",
      "Huyện Lạng Giang",
      "Huyện Lục Nam",
      "Huyện Lục Ngạn",
      "Huyện Sơn Động",
      "Huyện Yên Dũng",
      "Huyện Việt Yên",
      "Huyện Hiệp Hòa",
    ],
    "Bắc Kạn": [
      "Thành Phố Bắc Kạn",
      "Huyện Pác Nặm",
      "Huyện Ba Bể",
      "Huyện Ngân Sơn",
      "Huyện Bạch Thông",
      "Huyện Chợ Đồn",
      "Huyện Chợ Mới",
      "Huyện Na Rì",
    ],
    "Bắc Ninh": [
      "Thành phố Bắc Ninh",
      "Huyện Yên Phong",
      "Huyện Quế Võ",
      "Huyện Tiên Du",
      "Thành phố Từ Sơn",
      "Huyện Thuận Thành",
      "Huyện Gia Bình",
      "Huyện Lương Tài",
    ],
    "Bến Tre": [
      "Thành phố Bến Tre",
      "Huyện Chợ Lách",
      "Huyện Mỏ Cày Nam",
      "Huyện Giồng Trôm",
      "Huyện Bình Đại",
      "Huyện Ba Tri",
      "Huyện Thạnh Phú",
      "Huyện Mỏ Cày Bắc",
    ],
    "Bình Dương": [
      "Thành phố Thủ Dầu Một",
      "Huyện Bàu Bàng",
      "Huyện Dầu Tiếng",
      "Thị xã Bến Cát",
      "Huyện Phú Giáo",
      "Thị xã Tân Uyên",
      "Thành phố Dĩ An",
      "Thành phố Thuận An",
      "Huyện Bắc Tân Uyên",
    ],
    "Bình Định": [
      "Thành phố Quy Nhơn",
      "Thị xã Hoài Nhơn",
      "Huyện Hoài Ân",
      "Huyện Phù Mỹ",
      "Huyện Vĩnh Thạnh",
      "Huyện Tây Sơn",
      "Huyện Phù Cát",
      "Thị xã An Nhơn",
      "Huyện Tuy Phước",
      "Huyện Vân Canh",
    ],
    "Bình Phước": [
      "Thị xã Phước Long",
      "Thành phố Đồng Xoài",
      "Thị xã Bình Long",
      "Huyện Bù Gia Mập",
      "Huyện Lộc Ninh",
      "Huyện Bù Đốp",
      "Huyện Hớn Quản",
      "Huyện Đồng Phú",
      "Huyện Bù Đăng",
      "Thị xã Chơn Thành",
      "Huyện Phú Riềng",
    ],
    "Bình Thuận": [
      "Thành phố Phan Thiết",
      "Thị xã La Gi",
      "Huyện Tuy Phong",
      "Huyện Bắc Bình",
      "Huyện Hàm Thuận Bắc",
      "Huyện Hàm Thuận Nam",
      "Huyện Tánh Linh",
      "Huyện Đức Linh",
      "Huyện Hàm Tân",
      "Huyện Phú Quí",
    ],
    "Cà Mau": [
      "Thành phố Cà Mau",
      "Huyện U Minh",
      "Huyện Thới Bình",
      "Huyện Trần Văn Thời",
      "Huyện Cái Nước",
      "Huyện Đầm Dơi",
      "Huyện Năm Căn",
      "Huyện Ngọc Hiển",
    ],
    "Cao Bằng": [
      "Thành phố Cao Bằng",
      "Huyện Bảo Lâm",
      "Huyện Bảo Lạc",
      "Huyện Hà Quảng",
      "Huyện Trùng Khánh",
      "Huyện Hạ Lang",
      "Huyện Quảng Hòa",
      "Huyện Hoà An",
      "Huyện Nguyên Bình",
      "Huyện Thạch An",
    ],
    "Đắk Lắk": [
      "Thành phố Buôn Ma Thuột",
      "Thị Xã Buôn Hồ",
      "Huyện Ea H'leo",
      "Huyện Ea Súp",
      "Huyện Buôn Đôn",
      " Huyện Cư M'gar",
      "Huyện Krông Búk",
      "Huyện Krông Năng",
      "Huyện Ea Kar",
      "Huyện M'Đrắk",
      "Huyện Krông Bông",
      "Huyện Krông Pắc",
      "Huyện Krông A Na",
      "Huyện Lắk",
      "Huyện Cư Kuin",
    ],
    "Đắk Nông": [
      "Thành phố Gia Nghĩa",
      "Huyện Đăk Glong",
      "Huyện Cư Jút",
      "Huyện Đắk Mil",
      "Huyện Krông Nô",
      "Huyện Đắk Song",
      "Huyện Đắk R'Lấp",
      "Huyện Tuy Đức",
    ],
    "Đồng Nai": [
      "Thành phố Biên Hòa",
      "Thành phố Long Khánh",
      "Huyện Tân Phú",
      "Huyện Vĩnh Cửu",
      "Huyện Định Quán",
      "Huyện Trảng Bom",
      "Huyện Thống Nhất",
      "Huyện Cẩm Mỹ",
      "Huyện Long Thành",
      "Huyện Xuân Lộc",
      "Huyện Nhơn Trạch",
    ],
    "Đồng Tháp": [
      "Thành phố Cao Lãnh",
      "Thành phố Sa Đéc",
      "Thành phố Hồng Ngự",
      "Huyện Tân Hồng",
      "Huyện Hồng Ngự",
      "Huyện Tháp Mười",
      "Huyện Cao Lãnh",
      "Huyện Thanh Bình",
      "Huyện Lấp Vò",
      "Huyện Lai Vung",
    ],
    "Gia Lai": [
      "Thành phố Pleiku",
      "Thị xã An Khê",
      "Thị xã Ayun Pa",
      "Huyện KBang",
      "Huyện Đăk Đoa",
      "Huyện Chư Păh",
      "Huyện Ia Grai",
      "Huyện Mang Yang",
      "Huyện Kông Chro",
      "Huyện Đức Cơ",
      "Huyện Chư Prông",
      "Huyện Chư Sê",
      "Huyện Đăk Pơ",
      "Huyện Ia Pa",
      " Huyện Krông Pa",
      "Huyện Phú Thiện",
      "Huyện Chư Pưh",
    ],
    "Hà Giang": [
      "Thành phố Hà Giang",
      "Huyện Đồng Văn",
      "Huyện Mèo Vạc",
      "Huyện Yên Minh",
      "Huyện Quản Bạ",
      " Huyện Vị Xuyên",
      "Huyện Bắc Mê",
      "Huyện Hoàng Su Phì",
      "Huyện Xín Mần",
      "Huyện Bắc Quang",
      "Huyện Quang Bình",
    ],
    "Hà Nam": [
      "Thành phố Phủ Lý",
      "Thị xã Duy Tiên",
      "Huyện Kim Bảng",
      "Huyện Thanh Liêm",
      "Huyện Bình Lục",
      "Huyện Lý Nhân",
    ],
    "Hà Tĩnh": [
      "Thành phố Hà Tĩnh",
      "Thị xã Hồng Lĩnh",
      "Huyện Hương Sơn",
      "Huyện Đức Thọ",
      "Huyện Vũ Quang",
      "Huyện Nghi Xuân",
      "Huyện Can Lộc",
      "Huyện Hương Khê",
      "Huyện Thạch Hà",
      "Huyện Cẩm Xuyên",
      "Huyện Kỳ Anh",
      "Huyện Lộc Hà",
      "Thị xã Kỳ Anh",
    ],
    "Hải Dương": [
      "Thành phố Hải Dương",
      "Thành phố Chí Linh",
      "Huyện Nam Sách",
      "Thị xã Kinh Môn",
      "Huyện Kim Thành",
      "Huyện Thanh Hà",
      "Huyện Cẩm Giàng",
      "Huyện Bình Giang",
      "Huyện Gia Lộc",
      "Huyện Tứ Kỳ",
      "Huyện Ninh Giang",
      "Huyện Thanh Miện",
    ],
    "Hậu Giang": [
      "Thành phố Vị Thanh",
      "Thành phố Ngã Bảy",
      "Huyện Châu Thành A",
      "Huyện Phụng Hiệp",
      "Huyện Vị Thuỷ",
      "Huyện Long Mỹ",
      "Thị xã Long Mỹ",
    ],
    "Hòa Bình": [
      "Thành phố Hòa Bình",
      "Huyện Đà Bắc",
      "Huyện Lương Sơn",
      "Huyện Kim Bôi",
      "Huyện Cao Phong",
      "Huyện Tân Lạc",
      "Huyện Mai Châu",
      "Huyện Lạc Sơn",
      "Huyện Yên Thủy",
      "Huyện Lạc Thủy",
    ],
    "Hưng Yên": [
      "Thành phố Hưng Yên",
      "Huyện Văn Lâm",
      "Huyện Văn Giang",
      "Huyện Yên Mỹ",
      "Thị xã Mỹ Hào",
      "Huyện Ân Thi",
      "Huyện Khoái Châu",
      "Huyện Kim Động",
      "Huyện Tiên Lữ",
      "Huyện Phù Cừ",
    ],
    "Khánh Hòa": [
      "Thành phố Nha Trang",
      "Thành phố Cam Ranh",
      "Huyện Cam Lâm",
      "Huyện Vạn Ninh",
      "Thị xã Ninh Hòa",
      "Huyện Khánh Vĩnh",
      "Huyện Diên Khánh",
      "Huyện Khánh Sơn",
      "Huyện Trường Sa",
    ],
    "Tuyên Quang": [
      "Thành phố Tuyên Quang",
      "Huyện Lâm Bình",
      "Huyện Na Hang",
      "Huyện Chiêm Hóa",
      "Huyện Hàm Yên",
      "Huyện Yên Sơn",
      "Huyện Sơn Dương",
    ],
    "Lào Cai": [
      "Thành phố Lào Cai",
      "Huyện Bát Xát",
      "Huyện Mường Khương",
      "Huyện Si Ma Cai",
      "Huyện Bắc Hà",
      "Huyện Bảo Thắng",
      "Huyện Bảo Yên",
      "Thị xã Sa Pa",
      "Huyện Văn Bàn",
    ],
    "Điện Biên": [
      "Thành phố Điện Biên Phủ",
      "Thị Xã Mường Lay",
      "Huyện Mường Nhé",
      "Huyện Mường Chà",
      "Huyện Tủa Chùa",
      "Huyện Tuần Giáo",
      "Huyện Điện Biên",
      "Huyện Điện Biên Đông",
      "Huyện Mường Ảng",
      "Huyện Nậm Pồ",
    ],
    "Lai Châu": [
      "Thành phố Lai Châu",
      "Huyện Tam Đường",
      "Huyện Mường Tè",
      "Huyện Sìn Hồ",
      "Huyện Phong Thổ",
      "Huyện Than Uyên",
      "Huyện Tân Uyên",
      "Huyện Nậm Nhùn",
    ],
    "Sơn La": [
      "Thành phố Sơn La",
      "Huyện Quỳnh Nhai",
      "Huyện Thuận Châu",
      "Huyện Mường La",
      "Huyện Bắc Yên",
      "Huyện Phù Yên",
      "Huyện Mộc Châu",
      "Huyện Yên Châu",
      "Huyện Mai Sơn",
      "Huyện Sông Mã",
      "Huyện Sốp Cộp",
      "Huyện Vân Hồ",
    ],
    "Yên Bái": [
      "Thành phố Yên Bái",
      "Thị xã Nghĩa Lộ",
      "Huyện Lục Yên",
      "Huyện Văn Yên",
      "Huyện Mù Căng Chải",
      "Huyện Trấn Yên",
      "Huyện Trạm Tấu",
      "Huyện Văn Chấn",
      "Huyện Yên Bình",
    ],
    "Thái Nguyên": [
      "Thành phố Thái Nguyên",
      "Thành phố Sông Công",
      "Huyện Định Hóa",
      "Huyện Phú Lương",
      "Huyện Đồng Hỷ",
      "Huyện Võ Nhai",
      "Huyện Đại Từ",
      "Thành phố Phổ Yên",
      "Huyện Phú Bình",
    ],
    "Lạng Sơn": [
      "Thành phố Lạng Sơn",
      "Huyện Tràng Định",
      "Huyện Bình Gia",
      "Huyện Văn Lãng",
      "Huyện Cao Lộc",
      "Huyện Văn Quan",
      "Huyện Bắc Sơn",
      "Huyện Hữu Lũng",
      "Huyện Chi Lăng",
      "Huyện Lộc Bình",
      "Huyện Đình Lập",
    ],
    "Quảng Ninh": [
      "Thành phố Hạ Long",
      "Thành phố Móng Cái",
      "Thành phố Cẩm Phả",
      "Thành phố Uông Bí",
      "Huyện Bình Liêu",
      "Huyện Tiên Yên",
      "Huyện Đầm Hà",
      "Huyện Hải Hà",
      "Huyện Ba Chẽ",
      "Huyện Vân Đồn",
      "Thị xã Đông Triều",
      "Thị xã Quảng Yên",
      "Huyện Cô Tô",
    ],
    "Phú Thọ": [
      "Thành phố Việt Trì",
      "Thị xã Phú Thọ",
      "Huyện Đoan Hùng",
      "Huyện Hạ Hoà",
      "Huyện Thanh Ba",
      "Huyện Phù Ninh",
      "Huyện Yên Lập",
      "Huyện Cẩm Khê",
      "Huyện Tam Nông",
      "Huyện Lâm Thao",
      "Huyện Thanh Sơn",
      "Huyện Thanh Thuỷ",
      "Huyện Tân Sơn",
    ],
    "Vĩnh Phúc": [
      "Thành phố Vĩnh Yên",
      "Thành phố Phúc Yên",
      "Huyện Lập Thạch",
      "Huyện Tam Dương",
      "Huyện Tam Đảo",
      "Huyện Bình Xuyên",
      "Huyện Yên Lạc",
      "Huyện Vĩnh Tường",
      " Huyện Sông Lô",
    ],
    "Thái Bình": [
      "Thành phố Thái Bình",
      "Huyện Quỳnh Phụ",
      "Huyện Hưng Hà",
      "Huyện Đông Hưng",
      "Huyện Thái Thụy",
      "Huyện Tiền Hải",
      "Huyện Kiến Xương",
      "Huyện Vũ Thư",
    ],
    "Nam Định": [
      "Thành phố Nam Định",
      "Huyện Mỹ Lộc",
      "Huyện Vụ Bản",
      "Huyện Ý Yên",
      "Huyện Nghĩa Hưng",
      "Huyện Nam Trực",
      "Huyện Trực Ninh",
      "Huyện Xuân Trường",
      "Huyện Giao Thủy",
      "Huyện Hải Hậu",
    ],
    "Ninh Bình": [
      "Thành phố Ninh Bình",
      "Thành phố Tam Điệp",
      "Huyện Nho Quan",
      "Huyện Gia Viễn",
      "Huyện Hoa Lư",
      "Huyện Yên Khánh",
      "Huyện Kim Sơn",
      "Huyện Yên Mô",
    ],
    "Thanh Hóa": [
      "Thành phố Thanh Hóa",
      "Thị xã Bỉm Sơn",
      "Thành phố Sầm Sơn",
      "Huyện Mường Lát",
      "Huyện Quan Hóa",
      "Huyện Bá Thước",
      "Huyện Quan Sơn",
      "Huyện Lang Chánh",
      "Huyện Ngọc Lặc",
      "Huyện Cẩm Thủy",
      "HuyệnThạch Thành",
      "Huyện Hà Trung",
      "Huyện Vĩnh Lộc",
      "Huyện Yên Định",
      "Huyện Thọ Xuân",
      "Huyện Thường Xuân",
      "Huyện Triệu Sơn",
      "Huyện Thiệu Hóa",
      "Huyện Hoằng Hóa",
      "Huyện Hậu Lộc",
      "Huyện Nga Sơn",
      "Huyện Như Xuân",
      "Huyện Như Thanh",
      "Huyện Nông Cống",
      "Huyện Đông Sơn",
      "Huyện Quảng Xương",
      "Thị xã Nghi Sơn",
    ],
    "Nghệ An": [
      "Thành phố Vinh",
      "Thị xã Cửa Lò",
      "Thị xã Thái Hoà",
      "Huyện Quế Phong",
      "Huyện Quỳ Châu",
      "Huyện Kỳ Sơn",
      "Huyện Tương Dương",
      "Huyện Nghĩa Đàn",
      "Huyện Quỳ Hợp",
      "Huyện Quỳnh Lưu",
      "Huyện Con Cuông",
      "Huyện Tân Kỳ",
      "Huyện Anh Sơn",
      "Huyện Diễn Châu",
      "Huyện Yên Thành",
      "Huyện Đô Lương",
      "Huyện Thanh Chương",
      "Huyện Nghi Lộc",
      "Huyện Nam Đàn",
      "Huyện Hưng Nguyên",
      "Thị xã Hoàng Mai",
    ],
    "Quảng Bình": [
      "Thành Phố Đồng Hới",
      "Huyện Minh Hóa",
      "Huyện Tuyên Hóa",
      "Huyện Quảng Trạch",
      "Huyện Bố Trạch",
      "Huyện Quảng Ninh",
      "Huyện Lệ Thủy",
      "Thị xã Ba Đồn",
    ],
    "Quảng Trị": [
      "Thành phố Đông Hà",
      "Thị xã Quảng Trị",
      "Huyện Vĩnh Linh",
      "Huyện Hướng Hóa",
      "Huyện Gio Linh",
      "Huyện Đa Krông",
      "Huyện Cam Lộ",
      "Huyện Triệu Phong",
      "Huyện Hải Lăng",
      "Huyện Cồn Cỏ",
    ],
    "Thừa Thiên Huế": [
      "Thành phố Huế",
      "Huyện Phong Điền",
      "Huyện Quảng Điền",
      "Huyện Phú Vang",
      "Thị xã Hương Thủy",
      "Thị xã Hương Trà",
      "Huyện A Lưới",
      "Huyện Phú Lộc",
      "Huyện Nam Đông ",
    ],
    "Quảng Nam": [
      "Thành phố Tam Kỳ",
      "Thành phố Hội An",
      " Huyện Tây Giang",
      "Huyện Đông Giang",
      "Huyện Đại Lộc",
      "Thị xã Điện Bàn",
      "Huyện Duy Xuyên",
      "Huyện Quế Sơn",
      "Huyện Nam Giang",
      "Huyện Phước Sơn",
      "Huyện Hiệp Đức",
      "Huyện Thăng Bình",
      "Huyện Tiên Phước",
      "Huyện Bắc Trà My",
      "Huyện Nam Trà My",
      "Huyện Núi Thành",
      "Huyện Phú Ninh",
      "Huyện Nông Sơn",
    ],
    "Quảng Ngãi": [
      "Thành phố Quảng Ngãi",
      "Huyện Bình Sơn",
      "Huyện Trà Bồng",
      "Huyện Sơn Tịnh",
      "Huyện Tư Nghĩa",
      "Huyện Sơn Hà",
      "Huyện Sơn Tây",
      "Huyện Minh Long",
      "Huyện Nghĩa Hành",
      "Huyện Mộ Đức",
      "Thị xã Đức Phổ",
      "Huyện Ba Tơ",
      "Huyện Lý Sơn",
    ],
    "Phú Yên": [
      "Thành phố Tuy Hoà",
      "Thị xã Sông Cầu",
      "Huyện Đồng Xuân",
      "Huyện Tuy An",
      "Huyện Sơn Hòa",
      "Huyện Sông Hinh",
      "Huyện Tây Hoà",
      "Huyện Phú Hoà",
      "Thị xã Đông Hòa",
    ],
    "Ninh Thuận": [
      "Thành phố Phan Rang-Tháp Chàm",
      "Huyện Bác Ái",
      "Huyện Ninh Sơn",
      "Huyện Ninh Hải",
      "Huyện Ninh Phước",
      "Huyện Thuận Bắc",
      "Huyện Thuận Nam",
    ],
    "Kon Tum": [
      "Thành phố Kon Tum",
      "Huyện Đắk Glei",
      "Huyện Ngọc Hồi",
      "Huyện Đắk Tô",
      "Huyện Kon Plông",
      "Huyện Kon Rẫy",
      "Huyện Đắk Hà",
      "Huyện Sa Thầy",
      "Huyện Tu Mơ Rông",
      "Huyện Ia H' Drai",
    ],
    "Lâm Đồng": [
      "Thành phố Đà Lạt",
      "Thành phố Bảo Lộc",
      "Huyện Đam Rông",
      "Huyện Lạc Dương",
      "Huyện Lâm Hà",
      "Huyện Đơn Dương",
      "Huyện Đức Trọng",
      "Huyện Di Linh",
      "Huyện Đạ Huoai",
      "Huyện Đạ Tẻh",
      "Huyện Cát Tiên",
    ],
    "Tây Ninh": [
      "Thành phố Tây Ninh",
      "Huyện Tân Biên",
      "Huyện Tân Châu",
      "Huyện Dương Minh Châu",
      " Huyện Châu Thành",
      "Thị xã Hòa Thành",
      "Huyện Gò Dầu",
      "Huyện Bến Cầu",
      "Thị xã Trảng Bàng",
    ],
    "Long An": [
      "Thành phố Tân An",
      "Thị xã Kiến Tường",
      "Huyện Tân Hưng",
      "Huyện Vĩnh Hưng",
      "Huyện Mộc Hóa",
      "Huyện Tân Thạnh",
      "Huyện Thạnh Hóa",
      " Huyện Đức Huệ",
      "Huyện Đức Hòa",
      "Huyện Bến Lức",
      "Huyện Thủ Thừa",
      "Huyện Tân Trụ",
      "Huyện Cần Đước",
      "Huyện Cần Giuộc",
    ],
    "Tiền Giang": [
      "Thành phố Mỹ Tho",
      "Thành phố Gò Công",
      "Huyện Châu Thành",
      "Thị xã Cai Lậy",
      "Huyện Tân Phước",
      "Huyện Cái Bè",
      "Huyện Cai Lậy",
      "Huyện Chợ Gạo",
      "Huyện Gò Công Tây",
      "Huyện Gò Công Đông",
      "Huyện Tân Phú Đông",
    ],
    "Trà Vinh": [
      "Thành phố Trà Vinh",
      "Huyện Càng Long",
      "Huyện Cầu Kè",
      "Huyện Tiểu Cần",
      "Huyện Cầu Ngang",
      "Huyện Trà Cú",
      "Huyện Duyên Hải",
      "Thị xã Duyên Hải",
    ],
    "Vĩnh Long": [
      "Thành phố Vĩnh Long",
      "Huyện Long Hồ",
      "Huyện Mang Thít",
      "Huyện Vũng Liêm",
      "Huyện Tam Bình",
      "Thị xã Bình Minh",
      "Huyện Trà Ôn",
      "Huyện Bình Tân",
    ],
    "Kiên Giang": [
      "Thành phố Rạch Giá",
      "Thành phố Hà Tiên",
      "Huyện Kiên Lương",
      "Huyện Hòn Đất",
      "Huyện Tân Hiệp",
      "Huyện Giồng Riềng",
      "Huyện Gò Quao",
      "Huyện An Biên",
      "Huyện An Minh",
      "Huyện Vĩnh Thuận",
      "Thành phố Phú Quốc",
      "Huyện Kiên Hải",
      "Huyện U Minh Thượng",
      "Huyện Giang Thành",
    ],
  });
  const [xaData] = useState({
    "Thành phố Mỹ Tho": [
      "Phường 1",
      "Phường 2",
      "Phường 3",
      "Phường 4",
      "Phường 5",
      "Phường 6",
      "Phường 7",
      "Phường 8",
      "Phường 9",
      "Phường 10",
      "Phường Tân Long",
      "Đạo Thạnh",
      "Trung An",
      "Mỹ Phong",
      "Tân Mỹ Chánh",
      "Thời Sơn",
      "Phước Thạnh",
    ],
    "Thành phố Gò Công": [
      "Phường 1",
      "Phường 2",
      "Phường 5",
      "Phường Long Chánh",
      "Phường Long Hòa",
      "Phường Long Hưng",
      "Phường Long Thuận",
      "Bình Đông",
      "Bình Xuân",
      "Tân Trung",
    ],
    "Huyện Châu Thành": [
      "Bàn Long",
      "Bình Đức",
      "Bình Trưng",
      "Dưỡng Điềm",
      "Điềm Hy",
      "Đông Hòa",
      "Hữu Đạo",
      "Kim Sơn",
      "Long An",
      "Long Định",
      "Long Hưng",
      "Nhị Bình",
      "Phú Phong",
      "Song Thuận",
      "Tam Hiệp",
      "Tân Hội Đông",
      "Tân Hương",
      "Tân Lý Đông",
      "Tân Lý Đông",
      "Tân Lý Tây",
      "Thạnh Phú",
      "Thân Cửu Nghĩa",
      "Vĩnh Kim",
    ],
    "Thị xã Cai Lậy": [
      "Long Khánh",
      "Mỹ Hạnh Đông",
      "Mỹ Hạnh Trung",
      "Mỹ Hạnh Tây",
      "Nhị Quý",
      "Phú Quý",
      "Tân Bình",
      "Tân Hội",
      "Tân Phú",
      "Thanh Hòa",
    ],
    "Huyện Tân Phước": [
      "Hưng Thạnh",
      "Phú Mỹ",
      "Phước Lập",
      "Tâ Hòa Đông",
      "Tân Hòa Tây",
      "Tân Hòa Thành",
      "Tân Lập 1",
      "Tân Lập 2",
      "Thạnh Hòa",
      "Thạnh Mỹ",
      "Thạnh Tân",
    ],
    "Huyện Cái Bè": [
      "An Cư",
      "An Hữu",
      "An Thái Đông",
      "An Thái Trung",
      "Đông Hòa Hiệp",
      "Hậu Mỹ Bắc A",
      "Hậu Mỹ Bắc B",
      "Hậu Mỹ Phú",
      "Hậu Mỹ Trinh",
      "Hậu Thành",
      "Hòa Hưng",
      "Hòa Hánh",
      "Mỹ Đức Đông",
      "Mỹ Đức Tây",
      "Mỹ Hội",
      "Mỹ Lợi A",
      "Mỹ Lợi B",
      "Mỹ Lương",
      "Mỹ Tân",
      "Mỹ Trung",
      "Tân Hương",
      "Tân Thanh",
      "Thiện Trí",
      "Thiện Trung",
    ],
    "Huyện Cai Lậy": [
      "Cấm Sơn",
      "Hiệp Đức",
      "Hội Xuân",
      "Long Tiên",
      "Long Trung",
      "Mỹ Long",
      "Mỹ Thanh Bắc",
      "Mỹ Thành Nam",
      "Ngũ Hiệp",
      "Phú An",
      "Phú Cường",
      "Phú Nhuận",
      "Tam Bình",
      "Tân Phong",
      "Thạnh Lộc",
    ],
    "Huyện Chợ Gạo": [
      "An Thạnh Thủy",
      "Bình Ninh",
      "Bình Phan",
      "Bình Phục Nhứt",
      "Đăng Hưng Phước",
      "Hòa Đình",
      "Hòa Tịnh",
      "Long Binh Điền",
      "Lương Hòa Lạc",
      "Mỹ Tịnh An",
      "Phú Kiệt",
      "Quơn Long",
      "Song Bình",
      "Tân Bình Thạnh",
      "Tân Thuận Bình",
      "Thanh Bình",
      "Trung Hòa",
      "Xuân Đông",
    ],
    "Huyện Gò Công Tây": [
      "Bình Nhi",
      "Bình Phú",
      "Bình Tân",
      "Đồng Sơn",
      "Đồng Thạnh",
      "Long Bình",
      "Long Vĩnh",
      "Thành Công",
      "Thạnh Nhựt",
      "Thạnh Trị",
      "Vĩnh Hự",
      "Yêu Luông",
    ],
    "Huyện Gò Công Đông": [
      "Bình Ân",
      "Bình Nghị",
      "Gia Thuận",
      "Kiểng Phước",
      "Phước Trung",
      "Tăng Hòa",
      "Tân Điền",
      "Tân Đông",
      "Tân Phước",
      "Tân Tây",
      "Tân Thành",
    ],
    "Huyện Tân Phú Đông": [
      "Phú Đông",
      "Phú Tân",
      "Phú Thạnh",
      "Tân Phú",
      "Tân Thạnh",
      "Tân Thới",
    ],
  });
  const [formData, setFormData] = useState({
    ngaycapcccd: null,
    namsinhcv: null,
    namsinhc1: null,
    namsinhc2: null,
    namsinhc3: null,
    namsinhc4: null,
    namsinhc5: null,
  });

  registerLocale("vi", vi); // Đăng ký ngôn ngữ tiếng Việt
  setDefaultLocale("vi"); // Đặt ngôn ngữ mặc định là tiếng Việt

  const [answer, setAnswer] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: date,
    });
  };

  // State để lưu trữ lựa chọn của người dùng
  const [selectedTinh, setSelectedTinh] = useState("");
  const [selectedHuyen, setSelectedHuyen] = useState("");
  const [selectedXa, setSelectedXa] = useState("");
  const [selectedNoisinh, setSelectedNoisinh] = useState("");

  const [selectedTongiao, setSelectedTongiao] = useState("");
  const [selectedNoiCapCCCD, setSelectedNoiCapCCCD] = useState("");
  const [selectedMoiquanhech, setSelectedMoiquanhech] = useState("");
  const [idVLH, setIdVLH] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Xử lý sự kiện thay đổi lựa chọn Tỉnh
  const handleTinhChange = (event) => {
    setSelectedTinh(event.target.value);
    setSelectedHuyen("");
  };

  // Xử lý sự kiện thay đổi lựa chọn Huyện
  const handleHuyenChange = (event) => {
    setSelectedHuyen(event.target.value);
  };

  const handleTongiaoChange = (event) => {
    setSelectedTongiao(event.target.value);
  };

  const handleXaChange = (event) => {
    setSelectedXa(event.target.value);
  };
  const handleNoisinhChange = (event) => {
    setSelectedNoisinh(event.target.value);
  };
  const handleChangeNoiCapCCCD = (event) => {
    setSelectedNoiCapCCCD(event.target.value);
  };

  const handlemoiquanhech = (event) => {
    setSelectedMoiquanhech(event.target.value);
  };

  const [tamtruTinh, setTamtruTinh] = useState("");
  const handleTamtruTinhChange = (e) => {
    setTamtruTinh(e.target.value);
  };
  const [tamtruXa, setTamtruXa] = useState("");
  const handleTamtruXaChange = (e) => {
    setTamtruXa(e.target.value);
  };
  const [tamtruHuyen, setTamtruHuyen] = useState("");
  const handleTamtruHuyenChange = (e) => {
    setTamtruHuyen(e.target.value);
  };
  const [cccd, setCccd] = useState("");
  const [dataForm, setDataForm] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setCccd(e.target.value);
  };
  const [qhnt1, setQhnt1] = useState("");
  const handleQhnt1Change = (e) => {
    setQhnt1(e.target.value);
  };
  const [qhnt2, setQhnt2] = useState("");
  const handleQhnt2Change = (e) => {
    setQhnt2(e.target.value);
  };
  const [qhnt3, setQhnt3] = useState("");
  const handleQhnt3Change = (e) => {
    setQhnt3(e.target.value);
  };

  const handleSubmit = async () => {
    const _formData = {
      ...formData,
      ngaycapcccd: formData.ngaycapcccd
        ? format(formData.ngaycapcccd, "dd/MM/yyyy")
        : "",
      namsinhcv: formData.namsinhcv
        ? format(formData.namsinhcv, "dd/MM/yyyy")
        : "",
      namsinhc1: formData.namsinhc1
        ? format(formData.namsinhc1, "dd/MM/yyyy")
        : "",
      namsinhc2: formData.namsinhc2
        ? format(formData.namsinhc2, "dd/MM/yyyy")
        : "",
      namsinhc3: formData.namsinhc3
        ? format(formData.namsinhc3, "dd/MM/yyyy")
        : "",
      namsinhc4: formData.namsinhc4
        ? format(formData.namsinhc4, "dd/MM/yyyy")
        : "",
      namsinhc5: formData.namsinhc5
        ? format(formData.namsinhc5, "dd/MM/yyyy")
        : "",
    };
    const data = {
      formData: _formData,
      noicapcccd: selectedNoiCapCCCD,
      moiquanhech: selectedMoiquanhech,
      answer: answer,
      tamtruHuyen: tamtruHuyen,
      tamtruTinh: tamtruTinh,
      tamtruXa: tamtruXa,
      noisinh: selectedNoisinh,
      xa: selectedXa,
      tinh: selectedTinh,
      huyen: selectedHuyen,
      tongiao: selectedTongiao,
      qhnt1: qhnt1,
      qhnt2: qhnt2,
      qhnt3: qhnt3,
    };
    if (answer === "Đồng ý") {
      try {
        await axios.put(
          // `https://tuyendung-vlh.onrender.com/api/updata/${cccd}`,
          `http://171.244.39.87:30002/api/updata/${cccd}`,
          data
        );

        console.log(data);
        alert("Updata chi tiết thành công");
        // Thực hiện các hành động sau khi cập nhật thành công (nếu cần)
        setError("");
      } catch (error) {
        setError("Lỗi khi cập nhật thông tin.");
      }
    } else {
      alert("Bạn Không đồng ý");
      // return;
    }
  };

  const handleSearch = async (e) => {
    console.log(cccd);
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://171.244.39.87:30002/api/search/${cccd}`
      );
      // const response = await axios.get(
      //   `http://localhost:7573/api/search/${cccd}`
      // );
      // const response = await axios.get(
      //   `https://tuyendung-vlh.onrender.com/api/search/${cccd}`
      // );
      setDataForm(response.data);
      setIsLoading(true);
      setError("");
    } catch (error) {
      setError("Không tìm thấy thông tin đăng ký của Căn cước công dân này.");
      setDataForm(null);
    } finally {
      setIsLoading(false); // Kết thúc tìm kiếm
    }
  };

  return (
    <div className="App">
      <div className="registration-form-container">
        <h2>Tìm Kiếm Theo Căn cước công nhân</h2>
        <form className="registration-form" onSubmit={handleSearch}>
          <label htmlFor="cccd">Nhập Căn cước công nhân:</label>
          <br />
          <input
            className="input-field"
            type="text"
            id="cccd"
            value={cccd}
            onChange={handleInputChange}
          />
          <br />
          <button type="submit" className="submit-button">
            Tìm Kiếm
          </button>
        </form>
      </div>
      {isLoading && (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      )}
      {error && <p className="error">{error}</p>}
      {dataForm && !isLoading && (
        <div className="registration-form-container">
          <h2>Phiếu Đăng Ký Dự Tuyển Lao Động</h2>
          <form className="registration-form">
            <label>Họ và Tên</label>
            <input
              type="text"
              name="fullname"
              disabled
              value={dataForm.fullname}
              onChange={handleChange}
              placeholder="Họ và Tên"
              className="input-field"
            />
            <label>Giới tính</label>
            <input
              type="text"
              name="gender"
              disabled
              value={dataForm.gender}
              onChange={handleChange}
              placeholder="Giới Tính"
              className="input-field"
            />
            <label>Ngày sinh</label>
            <input
              type="text"
              name="date"
              disabled
              value={dataForm.date}
              onChange={handleChange}
              placeholder="Ngày Sinh"
              className="input-field"
            />
            <label>Nơi sinh</label>
            <select value={selectedNoisinh} onChange={handleNoisinhChange}>
              <option value="">Chọn Nơi sinh</option>
              {Object.keys(tinhThanhData).map((noisinh, index) => (
                <option
                  name="noisinh"
                  key={index}
                  value={selectedNoisinh.noisinh}
                >
                  {noisinh}
                </option>
              ))}
            </select>
            <label>Căn cước công dân / Chứng minh nhân dân</label>
            <input
              type="number"
              name="cccd"
              disabled
              value={dataForm.cccd}
              onChange={handleChange}
              placeholder="Căn cước công dân/ Chứng minh nhân dân"
              className="input-field"
            />
            <label>Ngày cấp Căn cước công dân/ Chứng minh nhân dân</label>

            <DatePicker
              selected={formData.ngaycapcccd}
              onChange={(date) => handleDateChange(date, "ngaycapcccd")}
              dateFormat="dd/MM/yyyy"
              className="input-field"
              placeholderText="Ngày sinh"
              showYearDropdown
              locale="vi"
              scrollableYearDropdown
              yearDropdownItemNumber={100}
            />
            <label>Nơi cấp Căn cước công dân/ Chứng minh nhân dân</label>
            <select
              value={selectedNoiCapCCCD}
              onChange={handleChangeNoiCapCCCD}
            >
              <option value="">Chọn nơi cấp CCCD</option>
              <option value="Cục cảnh sát quản lý hành chính về trật tự xã hội">
                Cục cảnh sát quản lý hành chính về trật tự xã hội
              </option>
              <option value="Công An Tỉnh An Giang">
                Công An Tỉnh An Giang
              </option>
              <option value="Công An Tỉnh Bà Rịa - Vũng Tàu">
                Công An Tỉnh Bà Rịa - Vũng Tàu
              </option>
              <option value="Công An Tỉnh Bắc Giang">
                Công An Tỉnh Bắc Giang
              </option>
              <option value="Công An Tỉnh Bắc Cạn">Công An Tỉnh Bắc Cạn</option>
              <option value="Công An Tỉnh Bạc Liêu">
                Công An Tỉnh Bạc Liêu
              </option>
              <option value="Công An Tỉnh Bắc Ninh">
                Công An Tỉnh Bắc Ninh
              </option>
              <option value="Công An Tỉnh Bến Tre">Công An Tỉnh Bến Tre</option>
              <option value="Công An Tỉnh Bình Định">
                Công An Tỉnh Bình Định
              </option>
              <option value="Công An Tỉnh Bình Dương">
                Công An Tỉnh Bình Dương
              </option>
              <option value="Công An Tỉnh Bình Thuận">
                Công An Tỉnh Bình Thuận
              </option>
              <option value="Công An Tỉnh Bình Phước">
                Công An Tỉnh Bình Phước
              </option>
              <option value="Công An Tỉnh Cà Mau">Công An Tỉnh Cà Mau</option>
              <option value="Công An Tỉnh Cao Bằng">
                Công An Tỉnh Cao Bằng
              </option>
              <option value="Công An Tỉnh Đăk Lăk">Công An Tỉnh Đăk Lăk</option>
              <option value="Công An Tỉnh Đăk Nông">
                Công An Tỉnh Đăk Nông
              </option>
              <option value="Công An Tỉnh Điện Biên">
                Công An Tỉnh Điện Biên
              </option>
              <option value="Công An Tỉnh Đồng Nai">
                Công An Tỉnh Đồng Nai
              </option>
              <option value="Công An Tỉnh Đồng Tháp">
                Công An Tỉnh Đồng Tháp
              </option>
              <option value="Công An Tỉnh Gia Lai">Công An Tỉnh Gia Lai</option>
              <option value="Công An Tỉnh Hà Giang">
                Công An Tỉnh Hà Giang
              </option>
              <option value="Công An Tỉnh Hà Nam">Công An Tỉnh Hà Nam</option>
              <option value="Công An Tỉnh Hà Tĩnh">Công An Tỉnh Hà Tĩnh</option>
              <option value="Công An Tỉnh Hải Dương">
                Công An Tỉnh Hải Dương
              </option>
              <option value="Công An Tỉnh Hậu Giang">
                Công An Tỉnh Hậu Giang
              </option>
              <option value="Công An Tỉnh Hòa Bình">
                Công An Tỉnh Hòa Bình
              </option>
              <option value="Công An Tỉnh Hưng Yên">
                Công An Tỉnh Hưng Yên
              </option>
              <option value="Công An Tỉnh Khánh Hòa">
                Công An Tỉnh Khánh Hòa
              </option>
              <option value="Công An Tỉnh Kiên Giang">
                Công An Tỉnh Kiên Giang
              </option>
              <option value="Công An Tỉnh Kon Tum">Công An Tỉnh Kon Tum</option>
              <option value="Công An Tỉnh Lai Châu">
                Công An Tỉnh Lai Châu
              </option>
              <option value="Công An Tỉnh Lâm Đồng">
                Công An Tỉnh Lâm Đồng
              </option>
              <option value="Công An Tỉnh Lạng Sơn">
                Công An Tỉnh Lạng Sơn
              </option>
              <option value="Công An Tỉnh Lào Cai">Công An Tỉnh Lào Cai</option>
              <option value="Công An Tỉnh Long An">Công An Tỉnh Long An</option>
              <option value="Công An Tỉnh Nam Định">
                Công An Tỉnh Nam Định
              </option>
              <option value="Công An Tỉnh Ninh Bình">
                Công An Tỉnh Ninh Bình
              </option>
              <option value="Công An Tỉnh Ninh Thuận">
                Công An Tỉnh Ninh Thuận
              </option>
              <option value="Công An Tỉnh Nghệ An">Công An Tỉnh Nghệ An</option>
              <option value="Công An Tỉnh Phú Thọ">Công An Tỉnh Phú Thọ</option>
              <option value="Công An Tỉnh Quảng Bình">
                Công An Tỉnh Quảng Bình
              </option>
              <option value="Công An Tỉnh Quảng Nam">
                Công An Tỉnh Quảng Nam
              </option>
              <option value="Công An Tỉnh Quảng Ngãi">
                Công An Tỉnh Quảng Ngãi
              </option>
              <option value="Công An Tỉnh Quảng Ninh">
                Công An Tỉnh Quảng Ninh
              </option>
              <option value="Công An Tỉnh Quảng Trị">
                Công An Tỉnh Quảng Trị
              </option>
              <option value="Công An Tỉnh Sóc Trăng">
                Công An Tỉnh Sóc Trăng
              </option>
              <option value="Công An Tỉnh Sơn La">Công An Tỉnh Sơn La</option>
              <option value="Công An Tỉnh Tây Ninh">
                Công An Tỉnh Tây Ninh
              </option>
              <option value="Công An Tỉnh Thái Bình">
                Công An Tỉnh Thái Bình
              </option>
              <option value="Công An Tỉnh Thái Nguyên">
                Công An Tỉnh Thái Nguyên
              </option>
              <option value="Công An Tỉnh Thanh Hóa">
                Công An Tỉnh Thanh Hóa
              </option>
              <option value="Công An Tỉnh Thừa Thiên Huế">
                Công An Tỉnh Thừa Thiên Huế
              </option>
              <option value="Công An Tỉnh Tiền Giang">
                Công An Tỉnh Tiền Giang
              </option>
              <option value="Công An Tỉnh Trà Vinh">
                Công An Tỉnh Trà Vinh
              </option>
              <option value="Công An Tỉnh Tuyên Quang">
                Công An Tỉnh Tuyên Quang
              </option>
              <option value="Công An Tỉnh Vĩnh Long">
                Công An Tỉnh Vĩnh Long
              </option>
              <option value="Công An Tỉnh Vĩnh Phúc">
                Công An Tỉnh Vĩnh Phúc
              </option>
              <option value="Công An Tỉnh Yên Bái">Công An Tỉnh Yên Bái</option>
              <option value="Công An Tỉnh Phú Yên">Công An Tỉnh Phú Yên</option>
            </select>
            <label>Dân tộc</label>
            <input
              type="text"
              name="dantoc"
              value={formData.dantoc}
              onChange={handleChange}
              placeholder="Dân tộc"
              className="input-field"
            />
            <label>Tôn giáo</label>
            <select value={selectedTongiao} onChange={handleTongiaoChange}>
              <option value="Phật giáo">Phật giáo</option>
              <option value="Thiên chúa giáo">Thiên chúa giáo</option>
              <option value="Không">Không</option>
            </select>

            <label>Trình độ học vấn VD: 12/12</label>
            <input
              type="text"
              name="tdhv"
              disabled
              value={dataForm.tdhv}
              onChange={handleChange}
              placeholder="Trình độ học vấn"
              className="input-field"
            />
            <label>Trình độ chuyên môn</label>
            <span>
              Chuyên ngành đã được đào tạo Ví dụ: Đại học - Ngành Quản trị kinh
              doanh
            </span>
            <input
              type="text"
              name="chuyenmon"
              required
              disabled
              value={dataForm.chuyenmon}
              onChange={handleChange}
              placeholder="Trình độ chuyên môn"
              className="input-field"
            />
            <label>Ngoại ngữ (Nếu có)</label>
            <span>Ví dụ: Tiếng Anh/ Tiếng Pháp/ Tiếng Trung</span>
            <input
              type="text"
              name="ngoaingu"
              required="required"
              value={formData.ngoaingu}
              onChange={handleChange}
              placeholder="Ngoại ngữ"
              className="input-field"
            />
            <label>Số điện thoại (Vui lòng nhập đủ 10 chữ số)</label>
            <input
              type="number"
              name="numberPhone"
              required
              disabled
              value={dataForm.numberPhone}
              onChange={handleChange}
              placeholder="Số điện thoại"
              className="input-field"
            />
            <label>Email</label>
            <span>Ví dụ: abc123@gmail.com (Không có thì ghi không)</span>
            <input
              type="email"
              name="email"
              disabled
              value={dataForm.email}
              onChange={handleChange}
              placeholder="Email"
              className="input-field"
            />
            <label>Bạn biết thông tin tuyển dụng qua đâu?</label>
            <input
              type="text"
              name="fullname"
              disabled
              value={dataForm.tttd}
              onChange={handleChange}
              placeholder="Bạn biết thông tin tuyển dụng qua đâu?"
              className="input-field"
            />
            {dataForm.tttd === "Người thân giới thiệu" && (
              <>
                <label>
                  Nếu người thân Anh/Chị làm tại Việt Long Hưng vui lòng điền số
                  thẻ công nhân viên của người thân.
                  <br />
                  Nếu không có vui lòng điền KHÔNG CÓ.
                </label>
                <input
                  type="text"
                  value={formData.sothe}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Mã nhân viên của người thân"
                />
              </>
            )}
            <label>Địa chỉ thường trú - Tỉnh</label>
            <select value={selectedTinh} onChange={handleTinhChange}>
              <option value="">Chọn Tỉnh</option>
              {Object.keys(tinhThanhData).map((tinh, index) => (
                <option name="tinh" key={index} value={selectedTinh.tinh}>
                  {tinh}
                </option>
              ))}
            </select>
            {/* Hiển thị danh sách huyện nếu Tỉnh được chọn */}
            {selectedTinh && (
              <div>
                <label>Địa chỉ thường trú - Quận/Huyện</label>
                <select value={selectedHuyen} onChange={handleHuyenChange}>
                  <option value="">Chọn Huyện</option>
                  {tinhThanhData[selectedTinh].map((huyen, index) => (
                    <option
                      name="huyen"
                      key={index}
                      value={selectedHuyen.huyen}
                    >
                      {huyen}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <label>Địa chỉ thường trú - Phường/Xã</label>
            {selectedTinh === "Tiền Giang" ? (
              <select value={selectedXa} onChange={handleXaChange}>
                <option value="">Chọn Xã</option>
                {xaData[selectedHuyen] &&
                  xaData[selectedHuyen].map((xa, index) => (
                    <option name="xa" key={index} value={selectedXa.xa}>
                      {xa}
                    </option>
                  ))}
              </select>
            ) : (
              <input
                type="text"
                name="xa"
                required
                value={selectedXa}
                onChange={handleXaChange}
                placeholder="Địa chỉ thường trú"
                className="input-field"
              />
            )}

            <label>Địa chỉ thường trú - Ấp/Khu phố</label>
            <input
              type="text"
              name="sonha"
              required
              value={formData.sonha}
              onChange={handleChange}
              placeholder="Địa chỉ thường trú"
              className="input-field"
            />

            <label>Địa chỉ tạm trú - Tỉnh</label>
            <select value={tamtruTinh} onChange={handleTamtruTinhChange}>
              <option value="">Chọn Tỉnh</option>
              {Object.keys(tinhThanhData).map((tinh, index) => (
                <option name="tamtrutinh" key={index} value={tamtruTinh.tinh}>
                  {tinh}
                </option>
              ))}
            </select>
            {/* Hiển thị danh sách huyện nếu Tỉnh được chọn */}
            {tamtruTinh && (
              <div>
                <label>Địa chỉ tạm trú - Quận/Huyện</label>
                <select value={tamtruHuyen} onChange={handleTamtruHuyenChange}>
                  <option value="">Chọn Huyện</option>
                  {tinhThanhData[tamtruTinh].map((huyen, index) => (
                    <option
                      name="tamtruhuyen"
                      key={index}
                      value={tamtruHuyen.huyen}
                    >
                      {huyen}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <label>Địa chỉ tạm trú - Phường/Xã</label>
            {tamtruTinh === "Tiền Giang" ? (
              <select value={tamtruXa} onChange={handleTamtruXaChange}>
                <option value="">Chọn Xã</option>
                {xaData[tamtruHuyen] &&
                  xaData[tamtruHuyen].map((xa, index) => (
                    <option name="tamtruXa" key={index} value={tamtruXa.xa}>
                      {xa}
                    </option>
                  ))}
              </select>
            ) : (
              <input
                type="text"
                name="tamtruxa"
                required
                value={tamtruXa}
                onChange={handleTamtruXaChange}
                placeholder="Địa chỉ tạm trú"
                className="input-field"
              />
            )}

            <label>Họ và Tên chủ hộ trong hộ khẩu </label>
            <span>Người đứng tên trong sổ hộ khẩu của Anh/Chị</span>
            <input
              type="text"
              name="hotench"
              required
              value={formData.hotench}
              onChange={handleChange}
              placeholder="Họ và Tên chủ hộ trong hộ khẩu "
              className="input-field"
            />
            <label>Ngày tháng năm sinh của chủ hộ</label>
            <span>Ví dụ: 01/01/1945</span>
            <input
              type="text"
              name="ngaysinhch"
              required
              value={formData.ngaysinhch}
              onChange={handleChange}
              placeholder="Ngày tháng năm sinh của chủ hộ"
              className="input-field"
            />
            <label>Mối quan hệ của chủ hộ với ứng viên</label>
            <select value={selectedMoiquanhech} onChange={handlemoiquanhech}>
              <option value="">Mối quan hệ của chủ hộ với ứng viên</option>
              <option value="Ông">Ông</option>
              <option value="Bà">Bà</option>
              <option value="Bố">Bố</option>
              <option value="Mẹ">Mẹ</option>
              <option value="Anh">Anh</option>
              <option value="Chị">Chị</option>
              <option value="Em">Em</option>
            </select>
            <label>Số tài khoản Thẻ ATM Vietcombank (Nếu có)</label>
            <span>
              Nếu có số tài khoản vui lòng điền vào. <br />
              Nếu có mà gặp vấn đề vui lòng điền: Đã có nhưng bị Khóa hoặc mất
              <br />
              Nếu không có có vui lòng điền KHÔNG CÓ
            </span>
            <input
              type="text"
              name="stk"
              required
              value={formData.stk}
              onChange={handleChange}
              placeholder="Số tài khoản Thẻ ATM Vietcombank"
              className="input-field"
            />
            <label>Ứng viên đã có tay nghề chưa?</label>
            <span>Ví dụ: Biết may / Không biết may </span>
            <input
              type="text"
              name="taynghe"
              required
              disabled
              value={dataForm.taynghe}
              onChange={handleChange}
              placeholder="Ứng viên đã có tay nghề chưa"
              className="input-field"
            />
            <label>
              Sau khi nghiên cứu nội dung thông báo tuyển lao động, tôi đăng ký
              dự tuyển vào vị trí
            </label>
            <input
              type="text"
              name="vtut"
              required
              disabled
              value={dataForm.vtut}
              onChange={handleChange}
              placeholder="Vị trí ứng tuyển"
              className="input-field"
            />
          </form>
          <h2>Khỏa Sát Thông Tin Tuyển Dụng</h2>
          <form className="registration-form">
            <label>
              Quá trình bản thân (Tóm tắt đầy đủ lúc 12 tuổi đến nay)
            </label>
            <span>
              Thời gian nào? Làm gì? Ở đâu? <br />
              Ví dụ: Năm 2013-2017 - Sinh viên - Trường Đại học A - TPHCM <br />
              Năm 2017-2018 - Công Nhân - Công ty B - Tiền Giang
            </span>
            <textarea
              name="tomtacbt"
              required
              value={formData.tomtacbt}
              onChange={handleChange}
              placeholder="Quá trình bản thân"
            />
            <label>
              Anh/Chị vui lòng điền số điện thoại người thân: (liệt kê thông tin
              của 2 đến 3 người thân)
            </label>
            <label>Số điện thoại người thân 1</label>
            <input
              type="number"
              name="sdtnt1"
              required
              value={formData.sdtnt1}
              onChange={handleChange}
              placeholder="Số điện thoại người thân 1"
              className="input-field"
            />
            <label>Mối quan hệ của số điện thoại trên với bạn</label>
            <select value={qhnt1} onChange={handleQhnt1Change}>
              <option value="">
                Mối quan hệ của số điện thoại trên với bạn
              </option>
              <option value="Ông">Ông</option>
              <option value="Bà">Bà</option>
              <option value="Bố">Bố</option>
              <option value="Mẹ">Mẹ</option>
              <option value="Anh">Anh</option>
              <option value="Chị">Chị</option>
              <option value="Em">Em</option>
            </select>
            <label>Họ và tên Số điện thoại người thân 1 </label>
            <span>Ví dụ: Nguyễn Văn B</span>
            <input
              type="text"
              name="ttnt1"
              required
              value={formData.ttnt1}
              onChange={handleChange}
              placeholder="Họ và tên Số điện thoại người thân 1 "
              className="input-field"
            />
            <label>Số điện thoại người thân 2</label>
            <input
              type="text"
              name="sdtnt2"
              required
              value={formData.sdtnt2}
              onChange={handleChange}
              placeholder="Số điện thoại người thân 2"
              className="input-field"
            />
            <label>Mối quan hệ của số điện thoại trên với bạn</label>
            <select value={qhnt2} onChange={handleQhnt2Change}>
              <option value="">
                Mối quan hệ của số điện thoại trên với bạn
              </option>
              <option value="Ông">Ông</option>
              <option value="Bà">Bà</option>
              <option value="Bố">Bố</option>
              <option value="Mẹ">Mẹ</option>
              <option value="Anh">Anh</option>
              <option value="Chị">Chị</option>
              <option value="Em">Em</option>
              <option value="Bạn">Bạn</option>
            </select>
            <label>Họ và tên Số điện thoại người thân 2</label>
            <span>Ví dụ: Nguyễn Văn B </span>
            <input
              type="text"
              name="ttnt2"
              required
              value={formData.ttnt2}
              onChange={handleChange}
              placeholder="Họ và tên Số điện thoại người thân 2"
              className="input-field"
            />
            <label>Số điện thoại người thân 3</label>
            <input
              type="text"
              name="sdtnt3"
              required
              value={formData.sdtnt3}
              onChange={handleChange}
              placeholder="Số điện thoại người thân 3"
              className="input-field"
            />
            <label>Mối quan hệ của số điện thoại trên với bạn</label>
            <select value={qhnt3} onChange={handleQhnt3Change}>
              <option value="">
                Mối quan hệ của số điện thoại trên với bạn
              </option>
              <option value="Ông">Ông</option>
              <option value="Bà">Bà</option>
              <option value="Bố">Bố</option>
              <option value="Mẹ">Mẹ</option>
              <option value="Anh">Anh</option>
              <option value="Chị">Chị</option>
              <option value="Em">Em</option>
              <option value="Bạn">Bạn</option>
            </select>
            <label>Họ và tên Số điện thoại người thân 3</label>
            <span>Nguyễn Văn C</span>
            <input
              type="text"
              name="ttnt3"
              required
              value={formData.ttnt3}
              onChange={handleChange}
              placeholder="Họ và tên Số điện thoại người thân 3"
              className="input-field"
            />
          </form>
          <h2>Quan Hệ Gia Đình</h2>
          <form className="registration-form">
            <label>Họ và tên Bố ruột</label>
            <input
              type="text"
              name="hotenbr"
              required
              value={formData.hotenbr}
              onChange={handleChange}
              placeholder="Họ và tên Bố ruột"
              className="input-field"
            />
            <label>Năm sinh bố ruột</label>
            <input
              type="text"
              name="namsinhbr"
              required
              value={formData.namsinhbr}
              onChange={handleChange}
              placeholder="Năm sinh bố ruột"
              className="input-field"
            />
            <label>Nghề nghiệp bố ruột</label>
            <input
              type="text"
              name="nghenghiepbr"
              required
              value={formData.nghenghiepbr}
              onChange={handleChange}
              placeholder="Nghề nghiệp bố ruột"
              className="input-field"
            />
            <label>Chỗ ở hiện tại của bố ruột</label>
            <input
              type="text"
              name="choohtbr"
              required
              value={formData.choohtbr}
              onChange={handleChange}
              placeholder="Chỗ ở hiện tại của bố ruột"
              className="input-field"
            />
            <label>Họ và tên mẹ ruột</label>
            <input
              type="text"
              name="hotenmr"
              required
              value={formData.hotenmr}
              onChange={handleChange}
              placeholder="Họ và tên mẹ ruột"
              className="input-field"
            />
            <label>Năm sinh mẹ ruột</label>
            <input
              type="text"
              name="namsinhmr"
              required
              value={formData.namsinhmr}
              onChange={handleChange}
              placeholder="Năm sinh mẹ ruột"
              className="input-field"
            />
            <label>Nghề nghiệp mẹ ruột</label>
            <input
              type="text"
              name="nghenghiepmr"
              required
              value={formData.nghenghiepmr}
              onChange={handleChange}
              placeholder="Nghề nghiệp mẹ ruột"
              className="input-field"
            />
            <label>Chỗ ở hiện tại của mẹ ruột</label>
            <input
              type="text"
              name="choohtmr"
              required
              value={formData.choohtmr}
              onChange={handleChange}
              placeholder="Chỗ ở hiện tại của mẹ ruột"
              className="input-field"
            />
          </form>
          <h2>Chồng / Vợ </h2>
          <span>Nếu chưa có chồng/vợ, Ứng viên vui lòng bỏ qua</span>
          <form className="registration-form">
            <label>Họ và tên chồng/vợ</label>
            <input
              type="text"
              name="hotencv"
              required
              value={formData.hotencv}
              onChange={handleChange}
              placeholder="Họ và tên chồng/vợ"
              className="input-field"
            />
            <label>Năm sinh chồng/vợ</label>
            {/* <input
              type="date"
              name="namsinhcv"
              required
              value={formData.namsinhcv}
              onChange={handleChange}
              placeholder="Năm sinh chồng/vợ"
              className="input-field"
            /> */}
            <DatePicker
              selected={formData.namsinhcv}
              onChange={(date) => handleDateChange(date, "namsinhcv")}
              dateFormat="dd/MM/yyyy"
              className="input-field"
              placeholderText="Ngày sinh"
              showYearDropdown
              locale="vi"
              scrollableYearDropdown
              yearDropdownItemNumber={100}
            />
            <label>Nghề nghiệp chồng/vợ</label>
            <input
              type="text"
              name="nghenghiepcv"
              required
              value={formData.nghenghiepcv}
              onChange={handleChange}
              placeholder="Nghề nghiệp chồng/vợ"
              className="input-field"
            />
            <label>Chỗ ở hiện tại của chồng/vợ</label>
            <input
              type="text"
              name="choohtcv"
              required
              value={formData.choohtcv}
              onChange={handleChange}
              placeholder="Chỗ ở hiện tại của chồng/vợ"
              className="input-field"
            />
          </form>
          <h2>Con</h2>
          <span>Nếu chưa có con, Ứng viên vui lòng bỏ qua</span>
          <form className="registration-form">
            <label>Họ và tên con thứ 1</label>
            <input
              type="text"
              name="hotenc1"
              required
              value={formData.hotenc1}
              onChange={handleChange}
              placeholder="Họ và tên con thứ 1"
              className="input-field"
            />
            <label>Ngày tháng năm sinh con 1</label>
            {/* <input
              type="date"
              name="namsinhc1"
              required
              value={formData.namsinhc1}
              onChange={handleChange}
              placeholder="Ngày tháng năm sinh con 1"
              className="input-field"
            /> */}
            <DatePicker
              selected={formData.namsinhc1}
              onChange={(date) => handleDateChange(date, "namsinhc1")}
              dateFormat="dd/MM/yyyy"
              className="input-field"
              placeholderText="Ngày sinh"
              showYearDropdown
              locale="vi"
              scrollableYearDropdown
              yearDropdownItemNumber={100}
            />

            <label>Nghề nghiệp con thứ 1</label>
            <input
              type="text"
              name="nghenghiepc1"
              required
              value={formData.nghenghiepc1}
              onChange={handleChange}
              placeholder="Nghề nghiệp con thứ 1"
              className="input-field"
            />
            <label>Chỗ ở hiện tại của con thứ 1</label>
            <input
              type="text"
              name="chooc1"
              required
              value={formData.chooc1}
              onChange={handleChange}
              placeholder="Chỗ ở hiện tại của con thứ 1"
              className="input-field"
            />
            <label>Họ và tên con thứ 2</label>
            <input
              type="text"
              name="hotenc2"
              required
              value={formData.hotenc2}
              onChange={handleChange}
              placeholder="Họ và tên con thứ 2"
              className="input-field"
            />
            <label>Ngày tháng năm sinh con 2</label>
            {/* <input
              type="date"
              name="namsinhc2"
              required
              value={formData.namsinhc2}
              onChange={handleChange}
              placeholder="Ngày tháng năm sinh con 2"
              className="input-field"
            /> */}
            <DatePicker
              selected={formData.namsinhc2}
              onChange={(date) => handleDateChange(date, "namsinhc2")}
              dateFormat="dd/MM/yyyy"
              className="input-field"
              placeholderText="Ngày sinh"
              showYearDropdown
              locale="vi"
              scrollableYearDropdown
              yearDropdownItemNumber={100}
            />
            <label>Nghề nghiệp con thứ 2</label>
            <input
              type="text"
              name="nghenghiepc2"
              required
              value={formData.nghenghiepc2}
              onChange={handleChange}
              placeholder="Nghề nghiệp con thứ 2"
              className="input-field"
            />
            <label>Chỗ ở hiện tại của con thứ 2</label>
            <input
              type="text"
              name="chooc2"
              required
              value={formData.chooc2}
              onChange={handleChange}
              placeholder="Chỗ ở hiện tại của con thứ 2"
              className="input-field"
            />
            <label>Họ và tên con thứ 3</label>
            <input
              type="text"
              name="hotenc3"
              required
              value={formData.hotenc3}
              onChange={handleChange}
              placeholder="Họ và tên con thứ 3"
              className="input-field"
            />
            <label>Ngày tháng năm sinh con 3</label>
            {/* <input
              type="date"
              name="namsinhc3"
              required
              value={formData.namsinhc3}
              onChange={handleChange}
              placeholder="Ngày tháng năm sinh con 3"
              className="input-field"
            /> */}
            <DatePicker
              selected={formData.namsinhc3}
              onChange={(date) => handleDateChange(date, "namsinhc3")}
              dateFormat="dd/MM/yyyy"
              className="input-field"
              placeholderText="Ngày sinh"
              showYearDropdown
              locale="vi"
              scrollableYearDropdown
              yearDropdownItemNumber={100}
            />
            <label>Nghề nghiệp con thứ 3</label>
            <input
              type="text"
              name="nghenghiepc3"
              required
              value={formData.nghenghiepc3}
              onChange={handleChange}
              placeholder="Nghề nghiệp con thứ 3"
              className="input-field"
            />
            <label>Chỗ ở hiện tại của con thứ 3</label>
            <input
              type="text"
              name="chooc3"
              required
              value={formData.chooc3}
              onChange={handleChange}
              placeholder="Chỗ ở hiện tại của con thứ 3"
              className="input-field"
            />
            <label>Họ và tên con thứ 4</label>
            <input
              type="text"
              name="hotenc4"
              required
              value={formData.hotenc4}
              onChange={handleChange}
              placeholder="Họ và tên con thứ 4"
              className="input-field"
            />
            <label>Ngày tháng năm sinh con 4</label>
            {/* <input
              type="date"
              name="namsinhc4"
              required
              value={formData.namsinhc4}
              onChange={handleChange}
              placeholder="Ngày tháng năm sinh con 4"
              className="input-field"
            /> */}
            <DatePicker
              selected={formData.namsinhc4}
              onChange={(date) => handleDateChange(date, "namsinhc4")}
              dateFormat="dd/MM/yyyy"
              className="input-field"
              placeholderText="Ngày sinh"
              showYearDropdown
              locale="vi"
              scrollableYearDropdown
              yearDropdownItemNumber={100}
            />
            <label>Nghề nghiệp con thứ 4</label>
            <input
              type="text"
              name="nghenghiepc4"
              required
              value={formData.nghenghiepc4}
              onChange={handleChange}
              placeholder="Nghề nghiệp con thứ 4"
              className="input-field"
            />
            <label>Chỗ ở hiện tại của con thứ 4</label>
            <input
              type="text"
              name="chooc4"
              required
              value={formData.chooc4}
              onChange={handleChange}
              placeholder="Chỗ ở hiện tại của con thứ 4"
              className="input-field"
            />
            <label>Họ và tên con thứ 5</label>
            <input
              type="text"
              name="hotenc5"
              required
              value={formData.hotenc5}
              onChange={handleChange}
              placeholder="Họ và tên con thứ 5"
              className="input-field"
            />
            <label>Ngày tháng năm sinh con 5</label>
            {/* <input
              type="date"
              name="namsinhc5"
              required
              value={formData.namsinhc5}
              onChange={handleChange}
              placeholder="Ngày tháng năm sinh con 5"
              className="input-field"
            /> */}
            <DatePicker
              selected={formData.namsinhc5}
              onChange={(date) => handleDateChange(date, "namsinhc5")}
              dateFormat="dd/MM/yyyy"
              className="input-field"
              placeholderText="Ngày sinh"
              showYearDropdown
              locale="vi"
              scrollableYearDropdown
              yearDropdownItemNumber={100}
            />
            <label>Nghề nghiệp con thứ 5</label>
            <input
              type="text"
              name="nghenghiepc5"
              required
              value={formData.nghenghiepc5}
              onChange={handleChange}
              placeholder="Nghề nghiệp con thứ 5"
              className="input-field"
            />
            <label>Chỗ ở hiện tại của con thứ 5</label>
            <input
              type="text"
              name="chooc5"
              required
              value={formData.chooc5}
              onChange={handleChange}
              placeholder="Chỗ ở hiện tại của con thứ 5"
              className="input-field"
            />
          </form>
          <h2>Quan Hệ Thân Nhân Chồng/Vợ</h2>
          <span>Câu nào không có thông tin, Ứng viên có thể bỏ qua</span>
          <form className="registration-form">
            <label>Họ và tên Bố chồng/vợ</label>
            <input
              type="text"
              name="hotenbocv"
              required
              value={formData.hotenbocv}
              onChange={handleChange}
              placeholder="Họ và tên Bố chồng/vợ"
              className="input-field"
            />
            <label>Năm sinh bố chồng/vợ</label>
            <input
              type="text"
              name="namsinhbcv"
              required
              value={formData.namsinhbcv}
              onChange={handleChange}
              placeholder="Năm sinh bố chồng/vợ"
              className="input-field"
            />
            <label>Nghề nghiệp bố chồng/vợ</label>
            <input
              type="text"
              name="nghenghiepbocv"
              required
              value={formData.nghenghiepbocv}
              onChange={handleChange}
              placeholder="Nghề nghiệp bố chồng/vợ"
              className="input-field"
            />
            <label>Chỗ ở hiện tại của bố chồng/vợ</label>
            <input
              type="text"
              name="choobocv"
              required
              value={formData.choobocv}
              onChange={handleChange}
              placeholder="Chỗ ở hiện tại của bố chồng/vợ"
              className="input-field"
            />
            <label>Họ và tên mẹ chồng/vợ</label>
            <input
              type="text"
              name="hotenmecv"
              required
              value={formData.hotenmecv}
              onChange={handleChange}
              placeholder="Họ và tên mẹ chồng/vợ"
              className="input-field"
            />
            <label>Năm sinh mẹ chồng/vợ</label>
            <input
              type="text"
              name="namsinhmecv"
              required
              value={formData.namsinhmecv}
              onChange={handleChange}
              placeholder="Năm sinh mẹ chồng/vợ"
              className="input-field"
            />
            <label>Nghề nghiệp mẹ chồng/vợ</label>
            <input
              type="text"
              name="nghenghiepmecv"
              required
              value={formData.nghenghiepmecv}
              onChange={handleChange}
              placeholder="Nghề nghiệp mẹ chồng/vợ"
              className="input-field"
            />
            <label>Chỗ ở hiện tại của mẹ chồng/vợ</label>
            <input
              type="text"
              name="choomecv"
              required
              value={formData.choomecv}
              onChange={handleChange}
              placeholder="Chỗ ở hiện tại của mẹ chồng/vợ"
              className="input-field"
            />
            <label>Họ và tên anh/chị/em của chồng/vợ thứ 1</label>
            <input
              type="text"
              name="hotenacecv1"
              required
              value={formData.hotenacecv1}
              onChange={handleChange}
              placeholder="Họ và tên anh/chị/em của chồng/vợ thứ 1"
              className="input-field"
            />
            <label>Năm sinh anh/chị/em của chồng/vợ thứ 1</label>
            <input
              type="text"
              name="namsinhacecv1"
              required
              value={formData.namsinhacecv1}
              onChange={handleChange}
              placeholder="Năm sinh anh/chị/em của chồng/vợ thứ 1"
              className="input-field"
            />
            <label>Nghề nghiệp anh/chị/em của chồng/vợ thứ 1</label>
            <input
              type="text"
              name="nghenghiepacecv1"
              required
              value={formData.nghenghiepacecv1}
              onChange={handleChange}
              placeholder="Nghề nghiệp anh/chị/em của chồng/vợ thứ 1"
              className="input-field"
            />
            <label>Chỗ ở hiện tại của anh/chị/em của chồng/vợ thứ 1</label>
            <input
              type="text"
              name="chooacecv1"
              required
              value={formData.chooacecv1}
              onChange={handleChange}
              placeholder="Chỗ ở hiện tại của anh/chị/em của chồng/vợ thứ 1"
              className="input-field"
            />
            <label>Họ và tên anh/chị/em của chồng/vợ thứ 2</label>
            <input
              type="text"
              name="hotenacecv2"
              required
              value={formData.hotenacecv2}
              onChange={handleChange}
              placeholder="Họ và tên anh/chị/em của chồng/vợ thứ 2"
              className="input-field"
            />
            <label>Năm sinh anh/chị/em của chồng/vợ thứ 2</label>
            <input
              type="text"
              name="namsinhacecv2"
              required
              value={formData.namsinhacecv2}
              onChange={handleChange}
              placeholder="Năm sinh anh/chị/em của chồng/vợ thứ 2"
              className="input-field"
            />
            <label>Nghề nghiệp anh/chị/em của chồng/vợ thứ 2</label>
            <input
              type="text"
              name="nghenghiepacecv2"
              required
              value={formData.nghenghiepacecv2}
              onChange={handleChange}
              placeholder="Nghề nghiệp anh/chị/em của chồng/vợ thứ 2"
              className="input-field"
            />
            <label>Chỗ ở hiện tại của anh/chị/em của chồng/vợ thứ 2</label>
            <input
              type="text"
              name="chooacecv2"
              required
              value={formData.chooacecv2}
              onChange={handleChange}
              placeholder="Chỗ ở hiện tại của anh/chị/em của chồng/vợ thứ 2"
              className="input-field"
            />
          </form>
          <h2>Anh/ Chị/ Em ruột</h2>
          <form className="registration-form">
            <label>Họ và tên anh/chị/em ruột 1</label>
            <input
              type="text"
              name="hotenace1"
              required
              value={formData.hotenace1}
              onChange={handleChange}
              placeholder="Họ và tên anh/chị/em ruột 1"
              className="input-field"
            />
            <label>Năm sinh anh/chị/em ruột 1</label>
            <input
              type="text"
              name="namsinhace1"
              required
              value={formData.namsinhace1}
              onChange={handleChange}
              placeholder="Năm sinh anh/chị/em ruột 1"
              className="input-field"
            />
            <label>Nghề nghiệp anh/chị/em ruột 1</label>
            <input
              type="text"
              name="nghenghiepace1"
              required
              value={formData.nghenghiepace1}
              onChange={handleChange}
              placeholder="Nghề nghiệp anh/chị/em ruột 1"
              className="input-field"
            />
            <label>Chỗ ở hiện tại của anh/chị/em ruột 1</label>
            <input
              type="text"
              name="chooace1"
              required
              value={formData.chooace1}
              onChange={handleChange}
              placeholder="Chỗ ở hiện tại của anh/chị/em ruột 1"
              className="input-field"
            />
            <label>Họ và tên anh/chị/em ruột 2</label>
            <input
              type="text"
              name="hotenace2"
              required
              value={formData.hotenace2}
              onChange={handleChange}
              placeholder="Họ và tên anh/chị/em ruột 2"
              className="input-field"
            />
            <label>Năm sinh anh/chị/em ruột 2</label>
            <input
              type="text"
              name="namsinhace2"
              required
              value={formData.namsinhace2}
              onChange={handleChange}
              placeholder="Năm sinh anh/chị/em ruột 2"
              className="input-field"
            />
            <label>Nghề nghiệp anh/chị/em ruột 2</label>
            <input
              type="text"
              name="nghenghiepace2"
              required
              value={formData.nghenghiepace2}
              onChange={handleChange}
              placeholder="Nghề nghiệp anh/chị/em ruột 2"
              className="input-field"
            />
            <label>Chỗ ở hiện tại của anh/chị/em ruột 2</label>
            <input
              type="text"
              name="chooace2"
              required
              value={formData.chooace2}
              onChange={handleChange}
              placeholder="Chỗ ở hiện tại của anh/chị/em ruột 2"
              className="input-field"
            />
          </form>

          <h2>
            Tôi xin cam đoan lời khai trên là đúng với sự thật và thực hiện đúng
            các quy định tuyển dụng lao động.
            <br />
            Các thông tin cá nhân trên để Công ty liên lạc với tôi khi cần
            thiết. Nếu có thay đổi thông tin cá nhân(kể cả số điện thoại), tôi
            sẽ báo cáo lại với Bộ phận Nhân sự của Đơn vị để cập nhật, thay
            đổi./.
          </h2>
          <form className="registration-form">
            <div>
              <input
                type="radio"
                name="answer"
                onChange={() => setAnswer("Đồng ý")}
                id="yes"
                value="Đồng ý"
              />
              <label className="_value" for="yes">
                Đồng ý
              </label>
              <br />
              <input
                type="radio"
                name="answer"
                id="no"
                value="Không đồng ý"
                onChange={() => setAnswer("Không đồng ý")}
              />
              <label className="_value" for="no">
                Không đồng ý
              </label>
            </div>
          </form>
          <button
            onClick={handleSubmit}
            type="submit"
            className="submit-button"
          >
            Đăng ký
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
