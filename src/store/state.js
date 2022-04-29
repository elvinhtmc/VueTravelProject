let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {} // try catch 防止浏览器禁用cookie

export default {
  city: defaultCity
}
