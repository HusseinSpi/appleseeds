function filter_list(l) {
  const newList = [];
  for (const item of l) {
    if (typeof item == "number") {
      newList.push(item);
    }
  }
}
