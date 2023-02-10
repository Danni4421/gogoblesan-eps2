// seleksi select option
const getSelectionIndex = document.getElementById('selection');
const value = document.getElementById('inputValue');

const update = () => {

 const bgObj1 = document.getElementById('targetObject1');
 const txtObj2 = document.getElementById('targetObject2');

 switch (getSelectionIndex.options.selectedIndex) {
  case 1:
   bgObj1.style.backgroundColor = value.value;
   break;
  case 2:
   txtObj2.style.color = value.value;
   break;
  case 3:
   if (value.value.charAt(value.value.length - 1) == 'x' || value.value.charAt(value.value.length - 1) == 'm') {
    txtObj2.style.fontSize = value.value;
   } else {
    alert("Harap memberikan satuan ukuran seperti Pixel(px) atau satuan relative seperti em, rem")
   }
   break;
  case 4:
   txtObj2.style.fontFamily = value.value;
   break;
  case 5:
   if (value.value.charAt(value.value.length - 1) == 'x' || value.value.charAt(value.value.length - 1) == 'w' ||
    value.value.charAt(value.value.length - 1) == '%') {
    bgObj1.style.width = value.value;
   } else {
    alert("Harap memberikan satuan ukuran seperti Pixel(px) atau satuan relative seperti %, vw")
   }
   break;
  case 6:
   if (value.value.charAt(value.value.length - 1) == 'x' || value.value.charAt(value.value.length - 1) == 'w' ||
    value.value.charAt(value.value.length - 1) == '%') {
    bgObj1.style.height = value.value;
   } else {
    alert("Harap memberikan satuan ukuran seperti Pixel(px) atau satuan relative seperti %, vh")
   }
   break;
 }
}