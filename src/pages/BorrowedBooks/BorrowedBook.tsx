/* eslint-disable @typescript-eslint/no-explicit-any */
const BorrowedBook = ({
  borrowedBook,
  index,
}: {
  borrowedBook: any;
  index: number;
}) => {
  const { book, totalQuantity } = borrowedBook;

  return (
    <tr className="hover:bg-gray-100">
      <td>{index + 1}</td>
      <td className="p-3  whitespace-nowrap">{book[0]?.title}</td>
      <td className="p-3 whitespace-nowrap text-center">{book[0]?.isbn}</td>
      <td className="p-3 pr-0 not-odd:whitespace-nowrap text-center">
        {totalQuantity}
      </td>
    </tr>
  );
};

export default BorrowedBook;
