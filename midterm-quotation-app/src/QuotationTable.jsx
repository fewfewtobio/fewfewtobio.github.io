import { Container, Button, Table } from "react-bootstrap";
import { CiShoppingCart } from "react-icons/ci";
import { MdClear } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import style from "./mystyle.module.css";

function QuotationTable({ data, deleteByIndex, clearItems }) {
  if (!data || data.length === 0) {
    return (
      <Container>
        <h1>Quotation</h1>
        <p>
          <CiShoppingCart /> No items
        </p>
      </Container>
    );
  }

  const total = data.reduce((acc, v) => acc + v.qty * v.ppu, 0);
  const totalDiscount = data.reduce((acc, v) => acc + (isNaN(v.discount) ? 0 : v.discount), 0);
  const netTotal = total - totalDiscount;

  const handleDelete = (index) => {
    deleteByIndex(index);
  };

  return (
    <Container>
      <h1>Quotation</h1>
      <Button variant="outline-dark" onClick={clearItems}>
        <MdClear /> Clear
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className={style.textCenter}>-</th>
            <th className={style.textCenter}>Qty</th>
            <th className={style.textCenter}>Item</th>
            <th className={style.textCenter}>Price/Unit</th>
            <th className={style.textCenter}>Discount</th>
            <th className={style.textCenter}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            let amount = v.qty * v.ppu - (isNaN(v.discount) ? 0 : v.discount);
            return (
              <tr key={i}>
                <td className={style.textCenter}>
                  <BsFillTrashFill onClick={() => handleDelete(i)} />
                </td>
                <td className={style.textCenter}>{v.qty}</td>
                <td>{v.item}</td>
                <td className={style.textCenter}>{v.ppu}</td>
                <td className={style.textCenter}>{isNaN(v.discount) ? 0 : v.discount}</td>
                <td className={style.textRight}>{amount}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} className={style.textRight}>
              Total
            </td>
            <td className={style.textRight}>{total}</td>
          </tr>
          <tr>
            <td colSpan={4} className={style.textRight}>
              Total Discount
            </td>
            <td className={style.textRight}>{totalDiscount}</td>
          </tr>
          <tr>
            <td colSpan={4} className={style.textRight}>
              Net Total
            </td>
            <td className={style.textRight}>{netTotal}</td>
          </tr>
        </tfoot>
      </Table>
    </Container>
  );
}

export default QuotationTable;