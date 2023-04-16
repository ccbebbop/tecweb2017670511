function getNums() {
  const num1 = Number(document.getElementById("number1").value);
  const num2 = Number(document.getElementById("number2").value);
  return [num1, num2];
}
function updateLabel(id) {
  const label = document.getElementById(id);
  label.style.borderColor = "rgb(165, 215, 232)";
  label.style.color = "rgb(165, 215, 232)";
  return label;
}
const btnAdd = document.getElementById("btn-add");
const btnSub = document.getElementById("btn-sub");
const btnProduct = document.getElementById("btn-product");
const btnDivision = document.getElementById("btn-division");
btnAdd.addEventListener("click", () => {
  const labelANS = updateLabel("label-ans");
  const nums = getNums();
  labelANS.textContent = String(nums[0] + nums[1]);
});
btnSub.addEventListener("click", () => {
  const labelANS = updateLabel("label-ans");
  const nums = getNums();
  labelANS.textContent = String(nums[0] - nums[1]);
});
btnProduct.addEventListener("click", () => {
  const labelANS = updateLabel("label-ans");
  const nums = getNums();
  labelANS.textContent = String(nums[0] * nums[1]);
});
btnDivision.addEventListener("click", () => {
  const labelANS = updateLabel("label-ans");
  const nums = getNums();
  labelANS.textContent = String(nums[0] / nums[1]);
});
