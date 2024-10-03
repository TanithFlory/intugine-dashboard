export function generatePaginationItems(
  currentPage: number,
  totalCount: number,
  resultsPerPage: number
) {
  const totalPages = Math.ceil(totalCount / resultsPerPage);
  const paginationItems = [];
  const maxVisiblePages = 3;

  paginationItems.push(1);

  if (currentPage > maxVisiblePages + 1) {
    paginationItems.push("...");
  }

  const startPage = Math.max(2, currentPage - maxVisiblePages);
  const endPage = Math.min(totalPages - 1, currentPage + maxVisiblePages);

  for (let i = startPage; i <= endPage; i++) {
    paginationItems.push(i);
  }

  if (endPage < totalPages - 1) {
    paginationItems.push("...");
  }

  if (totalPages > 1) {
    paginationItems.push(totalPages);
  }

  return paginationItems;
}
