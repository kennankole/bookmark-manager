const closeList = () => {
  const suggestions = document.getElementById('suggestions');
  if (suggestions) {
    suggestions.parentNode.removeChild(suggestions);
  }
};
export default closeList;