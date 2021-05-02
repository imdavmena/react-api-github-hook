import { Link } from "react-router-dom";
import { Table } from "react-super-responsive-table";
import styled from "styled-components";
import colors from "../utils/colors";
import { px2vw } from "../utils/constant";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${(props) => (props.margin ? props.margin : px2vw(32))};
  heigth: auto;
  max-width: 100%;
  padding-right: ${(props) => (props.pright ? props.prigh : "5.6rem")};
  padding-left: ${(props) => (props.pleft ? props.pleft : "5.6rem")};
  ${(props) => (props.marginTop ? { "margin-top": props.marginTop + ";" } : "")}
  @media (min-width: 1024px) {
    top: ${(props) => props.top && props.top} !important;
    flex-wrap: nowrap;
  }
  @media (max-width: 414px) {
    top: 8rem !important;
    padding-right: 0rem;
    padding-left: 0rem;
  }
  @media (max-width: 320px) {
    top: 5.5rem !important;
  }
`;
export const BoxRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-flow: row wrap;
  margin-right: 15px;
  margin-left: 15px;
  @media (max-width: 1024px) {
    margin: 0;
    min-width: 0;
  }
`;
export const Box = styled.div`
  width: ${(props) => (props.width ? props.width : px2vw(320, 320))};
  height: auto;
  display: flex;
  flex-direction: column;

  padding: ${(props) => (props.padding ? props.padding : px2vw(20))};
  margin: ${px2vw(20)};
  background-color: ${(props) => props.bgColor};
  @media (min-width: 768px) {
    height: auto;
  }
  @media (max-width: 1024px) {
    height: auto;
    width: ${px2vw(320, 320)};
  }
`;
export const BoxSection = styled.section`
  position: relative;
  height: ${(props) => (props.height ? props.height : "100vh")};
  padding-top: ${(props) => (props.pdtop ? props.pdtop : "5rem")};
  .custom-shape-divider-top-1619629676 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: -1;
    transform: rotate(180deg);
  }

  .custom-shape-divider-top-1619629676 svg {
    position: relative;
    display: block;
    width: calc(201% + 1.3px);
    height: 299px;
  }

  .custom-shape-divider-top-1619629676 .shape-fill {
    fill: #0a0a0ad4;
  }
`;
export const BoxTitleH1 = styled.h1`
  color: ${(props) => (props.color ? props.color : "#333")};
  font-size: ${(props) => (props.size ? props.size : "")};
  line-height: 1.1em;
  text-align: ${(props) => (props.align ? props.align : "center")};
  margin-top: ${(props) => (props.mgTop ? props.mgTop : "")};
  margin-bottom: ${(props) => (props.mgBottom ? props.mgBottom : "")};
  strong {
    background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const BoxTitleH2 = styled.h2`
  color: ${(props) => (props.color ? props.color : "#333")};
  line-height: 1.1em;
  text-align: ${(props) => (props.align ? props.align : "center")};
  margin-top: ${(props) => (props.mgTop ? props.mgTop : "")};
  margin-bottom: ${(props) => (props.mgBottom ? props.mgBottom : "")};
`;
export const BoxTitleH3 = styled.h3`
  color: ${(props) => (props.color ? props.color : "#333")};
  line-height: 1.2em;
  text-align: ${(props) => (props.align ? props.align : "center")};
  margin-top: ${(props) => (props.mgTop ? props.mgTop : "")};
  margin-bottom: ${(props) => (props.mgBottom ? props.mgBottom : "")};
`;
export const BoxTitleH4 = styled.h4`
  color: ${(props) => (props.color ? props.color : "#333")};
  line-height: 1.2em;
  text-align: ${(props) => (props.align ? props.align : "center")};
  margin-top: ${(props) => (props.mgTop ? props.mgTop : "")};
  margin-bottom: ${(props) => (props.mgBottom ? props.mgBottom : "")};
`;
export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: ${(props) => (props.color ? props.color : "#666")};
  font-size: 1.3rem;
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

export const BoxTable = styled(Table)`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
    font-size: 26px;
    font-weight: 100;
    text-transform: capitalize;
  }
  th,
  td {
    padding: 12px 15px;
  }
  tbody tr {
    border-bottom: 1px solid #dddddd;
  }
  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
  tbody td {
    font-size: 24px;
    font-weight: 100;
    text-transform: capitalize;
  }
  tbody tr.active-row {
    font-weight: bold;
    color: #009879;
  }
  img {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 1024px) {
    margin: 0;
    min-width: 0;
  }
`;

export const Ancord = styled(Link)`
  color: ${colors.capitalBlue.hexColor};
  text-decoration: none;

  :hover {
    color: #22214f;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    &::after {
      content: "";
      width: 80%;
      height: 2px;
      margin-top: 3.5px;
      display: flex;
      background-color: #330867;
      background-image: linear-gradient(to right, #30cfd0 0%, #330867 100%);
      transform: translateY(0);
      opacity: ${(props) => (props.opacity ? props.opacity : "1")};
    }
  }
`;

export const ButtonAncord = styled(Ancord)`
  padding: 10px 0;
  font-size: 14px;
  :hover {
    &::after {
      content: "";
      opacity: 0;
      height: 0;
      margin-top: 0px;
    }
  }
`;
