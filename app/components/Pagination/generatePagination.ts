export function generatePaginationItems(totalCount: number, resultsPerPage: number) {
  const totalPages = Math.ceil(totalCount / resultsPerPage);
  const items = [];

  for (let i = 1; i <= 4; i++) {
    if (i <= totalPages) {
      items.push(i);
    }
  }

  if (totalPages > 5) {
    items.push("...");
  }

  if (totalPages > 4) {
    items.push(totalPages);
  }

  return items;
}
