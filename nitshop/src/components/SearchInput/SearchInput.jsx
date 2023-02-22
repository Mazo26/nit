import styled from "styled-components";

const SearchInput = styled.input`
  border-bottom: ${(props) =>
    props.borderBottom ? props.borderBottom : "0px"};
  border-top: ${(props) => (props.borderTop ? props.borderTop : "0px")};
  border-left: ${(props) => (props.borderLeft ? props.borderLeft : "0px")};
  border-right: ${(props) => (props.borderRight ? props.borderRight : "0px")};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  border-color: ${(props) => (props.borderColor ? props.borderColor : "black")};
  width: ${(props) => (props.width ? props.width : "50px")};
  height: ${(props) => (props.height ? props.height : "20px")};
`;

export default SearchInput;
