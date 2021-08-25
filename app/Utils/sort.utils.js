// Ascending sort based on field
const sortAsc = (data, field) => {
  let arr = [...data];
  return arr.sort((a, b) => {
    if (a[field] > b[field]) {
      return 1;
    }
    if (b[field] > a[field]) {
      return -1;
    }
    return 0;
  });
};

// Descending sort based on field
const sortDesc = (data, field) => {
  let arr = [...data];
  return arr.sort((a, b) => {
    if (a[field] > b[field]) {
      return -1;
    }
    if (b[field] > a[field]) {
      return 1;
    }
    return 0;
  });
};

// Sort data based on the sorting method function
export const sort = (data, method) => {
  switch (method) {
    case 'sortByNameAsc':
      return sortAsc(data, 'beneficiary_name');
    case 'sortByNameDesc':
      return sortDesc(data, 'beneficiary_name');
    case 'sortByNewest':
      return sortAsc(data, 'created_at');
    case 'sortByOldest':
      return sortDesc(data, 'created_at');
    default:
      return data;
  }
};
