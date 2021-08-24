export const searchData = (transactions, text) => {
  let result = [];
  transactions.filter((item) => {
    // Look for objects with the received text in their ‘name’, ‘beneficiaryBank’, ‘senderBank’, or ‘amount’ fields
    const name = item.beneficiary_name.toLowerCase();
    const beneficiaryBank = item.beneficiary_bank.toLowerCase();
    const senderBank = item.sender_bank.toLowerCase();
    const amount = item.amount.toString();
    const query = text.toLowerCase();
    const isDataFound =
      name.includes(query) ||
      beneficiaryBank.includes(query) ||
      senderBank.includes(query) ||
      amount.includes(query);

    if (isDataFound) {
      result.push(item);
    }
  });

  return result;
};
