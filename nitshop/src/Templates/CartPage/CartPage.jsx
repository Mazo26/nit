import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { colors } from "../../util/theme";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { generateId } from "../../util/helpers";
import Text from "../../components/Text/Text";
import img1 from "../../assets/images/cart/one.png";
import img2 from "../../assets/images/cart/two.png";
import img3 from "../../assets/images/cart/three.png";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: colors.accentColor,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: colors.white,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const style = {
  mainHolder: {
    padding: "50px 10%",
  },
  mainTable: {
    border: `1px solid ${colors.lightGray}`,
  },
  itemNameHolder: {
    display: "flex",
  },
  nameHolder: {
    transform: "translateX(50%)",
    transform: "translateY(30%)",
  },
};

const items = [
  {
    id: generateId(5),
    image: img1,
    name: "Colorblock Scuba1",
    price: 59,
    qty: 1,
  },
  {
    id: generateId(5),
    image: img2,
    name: "Colorblock Scuba2",
    price: 59,
    qty: 1,
  },
  {
    id: generateId(5),
    image: img3,
    name: "Colorblock Scuba3",
    price: 68,
    qty: 1,
  },
];

const CartPage = () => {
  return (
    <SimplifiedDiv style={style.mainHolder}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell align='left'>Item</StyledTableCell>
              <StyledTableCell align='left'>Price</StyledTableCell>
              <StyledTableCell align='left'>Quantity</StyledTableCell>
              <StyledTableCell align='left'>Total</StyledTableCell>
              <StyledTableCell align='left '></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <StyledTableRow key={generateId(3)}>
                <StyledTableCell component='td' scope='row' align='left'>
                  <SimplifiedDiv style={style.itemNameHolder}>
                    <img src={item.image} alt={`Image for ${item.id}`} />
                    <SimplifiedDiv style={style.nameHolder}>
                      <Text>{item.name}</Text>
                      <Text>{"WebID: " + item.id}</Text>
                    </SimplifiedDiv>
                  </SimplifiedDiv>
                </StyledTableCell>
                <StyledTableCell align='left'>
                  {item.price + "$"}
                </StyledTableCell>
                <StyledTableCell align='left'>{item.qty}</StyledTableCell>
                <StyledTableCell align='left'>{"Total"}</StyledTableCell>
                <StyledTableCell align='left'>{"Cancel"}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </SimplifiedDiv>
  );
};

export default CartPage;
