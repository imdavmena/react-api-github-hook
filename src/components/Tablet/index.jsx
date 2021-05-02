import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import React, { useEffect, useState } from "react";
import { Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import styled from "styled-components";

import { Ancord, BoxTable, BoxTitleH1 } from "../../styles/components";
import { transalate } from "../../utils/constant";
import TableLoader from "./Skeleton";
import { GET } from "../../services";

const ButtonAncord = styled(Ancord)`
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

const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  h1{
    flex: 4;
}
select{
  background: transparent;
     border: none;
     font-size: 14px;
     height: 30px;
     padding: 5px;
  flex: 1;
}
  }
`;

const TableContent = ({ data }) => {
  const [isSort, setIsSort] = useState(false);
  const [dataUser, setDataUser] = useState();
  const [, setValue] = useState({});
  const [displayData, setDisplayData] = useState("25");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    GET(`users?per_page=${displayData}`)
      .then((res) => {
        setIsLoading(false);
        const body = () => {
          return res?.map((items) => ({
            userName: items.login,
            userAvatar: items.avatar_url,
            button: (
              <ButtonAncord to={`/details/${items.login}`}>
                👁 Detalles
              </ButtonAncord>
            ),
          }));
        };
        setDataUser(body);
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayData]);

  const titles = dataUser && Object.keys(dataUser[0]);

  const sortAsdAndDesc = () => {
    if (isSort) {
      setIsSort(false);
      return setDataUser(dataUser.reverse());
    } else {
      setIsSort(true);
      return setDataUser(dataUser.reverse());
    }
  };

  const onChange = (event) => {
    setValue({ name: event.target.name, value: event.target.value });
    if (event.target.name === "itemsSelect") {
      setDisplayData(event.target.value);
    }
  };

  return (
    <React.Fragment>
      <ContentDiv>
        <BoxTitleH1 align="left">Lista de usuarios 👥</BoxTitleH1>
        <select onChange={onChange} name="itemsSelect">
          <option value="25" defaultValue={displayData}>
            25 usuarios
          </option>
          <option value="50">50 usuarios</option>
          <option value="100">100 usuarios</option>
        </select>
      </ContentDiv>
      <div>
        {isLoading ? (
          <TableLoader />
        ) : (
          <BoxTable>
            <Thead>
              <Tr>
                {titles?.map((item, id) => (
                  <Th key={id} onClick={() => sortAsdAndDesc()}>
                    {isSort ? <span>⬆️</span> : <span> ⬇️</span>}{" "}
                    {transalate(item)}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {dataUser?.map((item, idx) => (
                <Tr key={idx} className={idx === 5 ? "active-row" : ""}>
                  {titles.map((title, index) => {
                    if (title === "userAvatar") {
                      return (
                        <Td key={index}>
                          <img src={item[title]} alt={title} />
                        </Td>
                      );
                    } else {
                      return <Td key={index}>{item[title]}</Td>;
                    }
                  })}
                </Tr>
              ))}
            </Tbody>
          </BoxTable>
        )}
      </div>
    </React.Fragment>
  );
};

export default TableContent;
