function findItemInArray(sourceArray, searchItem) {
  for (var i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] === searchItem) {
      alert(i);
    } else {
      continue;
    }
  }
}
