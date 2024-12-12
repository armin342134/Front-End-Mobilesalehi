// تابع تبدیل اعداد انگلیسی به فارسی
function toPersianDigits(input) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return input.toString().replace(/\d/g, (digit) => persianDigits[+digit]);
}

// تابع فرمت قیمت با جداکننده سه رقم
function formatPriceWithCommas(price) {
  const withCommas = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return toPersianDigits(withCommas);
}

// تابع اصلی برای استفاده در برنامه
export function formatPrice(price) {
  return formatPriceWithCommas(price);
}
