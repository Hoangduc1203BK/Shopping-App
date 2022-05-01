import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export const FORMAT_PRICE = (number) => {
  return new Intl.NumberFormat("de-DE").format(number);
};
export const checkInterger = (str) => {
  const check = str.split("").every((el) => {
    return parseInt(el) >= 0;
  });
  return check;
};

export const reverseBirthday = (str) => {
  return str.split("-").reverse().join("-");
};
export const strTrim = (str) => {
  return str.trim().length;
};
export const CheckDate = (comp) => {
  let d = parseInt(comp[0], 10);
  let m = parseInt(comp[1], 10);
  let y = parseInt(comp[2], 10);
  let date = new Date(y, m - 1, d);
  if (
    date.getFullYear() === y &&
    date.getMonth() + 1 === m &&
    date.getDate() === d &&
    comp[0].trim().length === 2 &&
    comp[1].trim().length === 2 &&
    comp[2].trim().length === 4
  ) {
    return true;
  }
  return false;
};

export const convertDate = (num) => {
  return new Date(num).toLocaleDateString("en-GB");
};
export const SORT = [
  {
    label: "mới nhất",
    value: 0,
  },
  {
    label: "từ thấp đến cao",
    value: 1,
  },
  {
    label: "từ cao đến thấp",
    value: 2,
  },
];

export const STATUS = [
  {
    label: "hoàn thành",
    value: "done",
  },
  {
    label: "đang chờ xử lý",
    value: "await",
  },
  {
    label: "đã hủy",
    value: "cancel",
  },
];

export const GENDER = [
  {
    label: "Nam",
    value: "men",
  },
  {
    label: "Nữ",
    value: "women",
  },
  {
    label: "Trẻ em",
    value: "child",
  },
];
export const ROLE = [
  {
    label: "Người quản trị",
    value: "admin",
  },
  {
    label: "người dùng",
    value: "customer",
  },
];
export const converseStr = (str) => {
  const arrString = str.split(" ").map((el) => {
    return el.charAt(0).toUpperCase() + el.slice(1);
  });
  return arrString.join(" ");
};

export const reduceTotal = (arr) => {
  return arr.reduce((result, prod) => {
    return result + prod.total;
  }, 0);
};
export const reduceAmount = (arr) => {
  return arr.reduce((result, prod) => {
    return result + prod.items[0].amount;
  }, 0);
};



export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const minDistance = 10;
export const options = [
  { value: "", label: "Tất cả" },
  { value: "women", label: "Nữ" },
  { value: "men", label: "Nam" },
  { value: "children", label: "Trẻ em" },
];

export const headerUser = [
  "STT",
  "NGƯỜI DÙNG",
  "CCCD",
  "SĐT",
  "NGÀY SINH",
];

export const headerProduct = [
  "STT",
  "SẢN PHẨM",
  "CHẤT LIỆU",
  "GIỚI TÍNH",
  "MÀU SẮC",
  "GIÁ",
  "SỐ LƯỢNG",
  "CHỨC NĂNG",
];
export const headerOrder = [
  "STT",
  "MÃ ĐƠN HÀNG",
  "SẢN PHẨM",
  "MÀU SẮC",
  "SỐ LƯỢNG",
  "ĐỊA CHỈ",
  "TỔNG",
  "CHỨC NĂNG",
];
export const dataProduct = (el, index) => {
  return {
    id: el.id,
    stt: index + 1,
    name: converseStr(el.name),
    material: converseStr(el.material),
    gender:
      el.gender === GENDER[0].value
        ? "Nam"
        : el.gender === GENDER[1].value
        ? "Nữ"
        : "Trẻ em",
    color: converseStr(el.color),
    price: FORMAT_PRICE(el.price) + `đ`,
    quantity: el.amount,
    function: "",
  };
};
export const updateProduct = (data) => {
  return [
    {
      placeHolder: "Tên sản phẩm",
      value: data.name ? data.name : "",
    },
    {
      placeHolder: "Giá",
      value: data.origin_price ? data.origin_price : "",
    },
    {
      placeHolder: "Giá giảm",
      value: data.price ? data.price : "",
    },
    {
      placeHolder: "Số lượng",
      value: data.amount ? data.amount : "",
    },
    {
      placeHolder: "Chất liệu",
      value: data.material ? data.material : "",
    },
    {
      placeHolder: "Màu sắc",
      value: data.color ? data.color : "",
    },
    {
      placeHolder: "Giới tính",
      value: data.gender ? options.find((el) => el.value === data.gender) : "",
      option: options,
      class: "inputLink2",
    },
    {
      placeHolder: "Hình ảnh",
      value: data.image ? data.image : "",
      file: "file",
      class: "inputLink2",
    },
  ];
};

export const dataBodyOrder = (el, index) => {
  return {
    id: el.id,
    stt: index + 1,
    code: el.code,
    name: converseStr(el.items[0].product.name),
    color: converseStr(el.items[0].product.color),
    amount: el.items[0].amount,
    adress: converseStr(el.info ? el.info.address : ""),
    total: FORMAT_PRICE(el.total) + "đ",
    function: "",
  };
};

