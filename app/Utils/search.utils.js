// Search for input in their ‘name’, ‘beneficiaryBank’, ‘senderBank’, or ‘amount’ fields
export const searchData = (transactions, text) => {
  let result = [];
  transactions.filter((item) => {
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
