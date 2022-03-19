function calculate(e) {
  var t = e.querySelectorAll("input[type=text]"),
    a = t[0].value.replace(",", "."),
    c = t[1].value.replace(",", "."),
    n = 0, r = !1;

  if (
    t[0].style.background = "#fff", t[1].style.background = "#fff", t[2].value = "", isNumber(a) ||
    (t[0].style.background = "#fee", r = !0), isNumber(c) || (t[1].style.background = "#fee", r = !0), r
  ) return !1;

  switch (e.getAttribute("id")) {
    case "percentOfQuantity":
      n = a / 100 * c;

      break;
    case "percentageIsAofB":
      n = a / c * 100;

      break;
    case "percentChangeFromTo":
      n = (c - a) / a * 100;
  }

  t[2].value = n;
}