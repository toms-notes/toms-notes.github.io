function AddQeds() {
  var qedElems = document.getElementsByTagName('qed');
  for (var i = 0; i < qedElems.length; ++i) {
    var item = qedElems[i];
    item.insertAdjacentHTML('afterBegin', "❖");
  }
}
