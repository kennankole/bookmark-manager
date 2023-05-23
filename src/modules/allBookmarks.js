const getAllBookmarks = (bookmakrs) => {
  const allBookmarks = [];
  bookmakrs.forEach((bookmark) => {
    if (bookmark.url) {
      allBookmarks.push({
        title: bookmark.title,
        url: bookmark.url,
      });
    } else if (bookmark.children) {
      const childBookmarks = getAllBookmarks(bookmark.children);
      allBookmarks.push(...childBookmarks);
    }
  });
  return allBookmarks;
};
export default getAllBookmarks;