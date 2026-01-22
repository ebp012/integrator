/*
sum/product of

*/

function evaluate(x) {
  return eval(document.querySelector('#function').value.toString().trim());
}

function calcIntegral() {
  var a = 0;
  const min = Number(document.querySelector('#minvalue').value);
  const max = Number(document.querySelector('#maxvalue').value);
  const p = 10 ** Number(document.querySelector('#precision').value);
  
  const add = document.querySelector('#additive').checked;
  const mult = document.querySelector('#multiplicative').checked;
  const exp = document.querySelector('#exponential').checked;
  const doubleexp = document.querySelector('#doubleexponential').checked;
  const dhke = document.querySelector('#dhke').checked;
  const ncpoly = document.querySelector('#ncpoly').checked;
  const ycpoly = document.querySelector('#ycpoly').checked;
  for (var t = min; t <= max; t += p) {
    if (add) a += (p * evaluate(t));
    if (mult) a = a * (p * evaluate(t)) + 1;
    if (exp) a = (p * evaluate(t)) ** a;
    if (doubleexp) a = (p * evaluate(t)) ** ((p * evaluate(t)) ** a);
    if (dhke) a = a ** Math.log(p * evaluate(t)) + 1; // commutative; ln used
    if (ncpoly) a = ((t-2)*(evaluate(t)**2) - ((t*evaluate(t))-(4*evaluate(t))))/2;
    if (ycpoly) a = 1 + ((t-2)*(evaluate(t)**2) - ((t*evaluate(t))-(4*evaluate(t))))/2;
  }
  document.querySelector('#ansbox').innerHTML = a;
  return a;
}
