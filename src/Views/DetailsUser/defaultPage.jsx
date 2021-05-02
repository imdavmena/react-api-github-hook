import "react-simple-hook-modal/dist/styles.css";
import React, { Fragment, useEffect, useState } from "react";
import { Route, useHistory } from "react-router";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { ModalProvider, useModal } from "react-simple-hook-modal";
import styled from "styled-components";

import { GET } from "../../services";
import { randomRGB, transalate } from "../../utils/constant";
import ModalProps from "../../components/Modal";
import {
  Ancord,
  Box,
  BoxRow,
  BoxTitleH1,
  BoxTitleH2,
  BoxTitleH4,
  Container,
} from "../../styles/components";

const FrontSideProps = styled(FrontSide)`
  padding-top: 2.5rem !important;
  a {
    margin-bottom: 1rem;
    font-size: 100%;
    word-break: break-all;
  }
  p {
    margin-bottom: 1rem;
    font-size: 100%;
    word-break: break-all;
    span {
      background: ${(props) => (props.bg ? props.bg : "white")};
      color: white;
      word-break: break-all;
    }
  }
`;
const BackSideProps = styled(BackSide)`
  padding-top: 2.5rem !important;
  p {
    margin-bottom: 1rem;
    font-size: 100%;
    word-break: break-all;
  }
`;

const ButtonModalClose = styled.button`
  position: absolute;
  right: 0;
  top: 0px;
  padding: 12px;
  font-size: 15px;
  border-radius: 30% 0% 0% 30%;
  background: ${(props) => props.background && props.background};
  color: white;
`;
const ButtonAncord = styled(Ancord)`
  :hover {
    &::after {
      content: "";
      opacity: 0;
      height: 0;
      margin-top: 0px;
    }
  }
`;

const DefaultPage = (props) => {
  const history = useHistory();
  const userName = history.location.pathname.split("/")[2];
  const [userData, setUserData] = useState();
  const [userRepoData, setUserRepoData] = useState();
  const { isModalOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    const fetchData = async () => {
      GET(`users/${userName}`)
        .then((res) => {
          setUserData(res);
        })
        .catch((err) => console.error(err));

      GET(`users/${userName}/repos`)
        .then((res) => {
          setUserRepoData(res);
        })
        .catch((err) => console.error(err));

      return await (userData, userRepoData);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Container>
        <BoxRow>
          <Box>
            <BoxTitleH1 align="left">Datos Generales del usuario</BoxTitleH1>
          </Box>
          <Box width="33%">
            <BoxTitleH4 align="left">{transalate("login")}</BoxTitleH4>
            {userData?.login === null ? (
              <p>Este usuario no posee nombre de {transalate("login")} 🥵</p>
            ) : (
              <p>{userData?.login}</p>
            )}
            <br />
            <strong>{transalate("bio")}: </strong>
            {userData?.bio === null ? (
              <p>Este usuario no posee {transalate("bio")} 😨</p>
            ) : (
              <p>{userData?.bio}</p>
            )}
          </Box>
          <Box width="33%">
            <BoxTitleH4 align="left">{transalate("email")}</BoxTitleH4>
            {userData?.email === null ? (
              <p>Este usuario no posee {transalate("email")} 😅</p>
            ) : (
              <p>{userData?.email}</p>
            )}
          </Box>
          <Box width="33%">
            <BoxTitleH4 align="left">{transalate("location")}</BoxTitleH4>
            {userData?.location === null ? (
              <p>Este usuario no posee {transalate("location")} 🧐</p>
            ) : (
              <p>{userData?.location}</p>
            )}
          </Box>
          <Box width="33%">
            <BoxTitleH4 align="left">{transalate("name")}</BoxTitleH4>
            {userData?.name === null ? (
              <p>Este usuario no posee {transalate("name")} 😹</p>
            ) : (
              <ButtonAncord
                to={`/details/${userData?.login}/extra/${userData?.id}`}
                opacity="0"
                onClick={openModal}
              >
                {userData?.name} 👁
              </ButtonAncord>
            )}
          </Box>
          <Box width="33%">
            <BoxTitleH4 align="left">{transalate("url")}</BoxTitleH4>
            {userData?.url === null ? (
              <p>Este usuario no posee {transalate("url")} 🚀</p>
            ) : (
              <p>{userData?.url}</p>
            )}
          </Box>
          <Box>
            <BoxTitleH1 align="left">Datos Generales del Repo</BoxTitleH1>
          </Box>
          <Box width="33%">
            <BoxTitleH4 align="left">{transalate("repositories")}</BoxTitleH4>
            <p>{userData?.public_repos}</p>
          </Box>
          <Box width="33%">
            <BoxTitleH4 align="left">{transalate("followers")}</BoxTitleH4>
            <p>{userData?.followers}</p>
          </Box>
          <Box width="33%">
            <BoxTitleH4 align="left">{transalate("following")}</BoxTitleH4>
            <p>{userData?.following}</p>
          </Box>
        </BoxRow>
      </Container>
      <Route
        path="/details/:username/extra/:id"
        render={() => {
          const color = randomRGB();
          return (
            <ModalProvider>
              <ModalProps isModalOpen={isModalOpen}>
                <ButtonModalClose
                  background={color}
                  onClick={() => (
                    // eslint-disable-next-line
                    closeModal, history.push(`/details/${userData.login}`)
                  )}
                >
                  X
                </ButtonModalClose>
                <Container pright="0rem" pleft="0rem" margin="0">
                  <BoxRow>
                    <Box padding="0">
                      <BoxTitleH2
                        style={{ position: "relative", left: "-25px" }}
                      >
                        Repositorios
                      </BoxTitleH2>
                    </Box>
                    {userRepoData?.map((items, idx) => {
                      const color = randomRGB();
                      return (
                        <Box width="40%" padding="0">
                          <Flippy
                            flipOnHover={false}
                            flipOnClick={true}
                            id={idx}
                            flipDirection="horizontal"
                            style={{
                              width: "100%",
                              height: "300px",
                              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                              transition: "0.3s",
                            }}
                          >
                            <FrontSideProps bg={color}>
                              <BoxTitleH4 align="left">
                                {transalate("name")}
                              </BoxTitleH4>
                              <p>{items.name}</p>
                              <BoxTitleH4 align="left">
                                {transalate("language")}
                              </BoxTitleH4>
                              <p>
                                {items.language === null ? (
                                  `No esta definido el ${transalate(
                                    "language"
                                  )} ❌`
                                ) : (
                                  <span>{items.language}</span>
                                )}
                              </p>
                              <BoxTitleH4 align="left">
                                {transalate("urlProject")}
                              </BoxTitleH4>
                              <a
                                href={items.svn_url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {items.svn_url}
                              </a>
                              <br />
                              <br />
                              <BoxTitleH4 align="center">
                                Hazme click 🖱
                              </BoxTitleH4>
                            </FrontSideProps>
                            <BackSideProps>
                              {items.description === null ? (
                                <p>
                                  Este usuario no posee{" "}
                                  {transalate("description")} 😅
                                </p>
                              ) : (
                                <Fragment>
                                  <BoxTitleH4 align="left">
                                    {transalate("description")}
                                  </BoxTitleH4>
                                  <p>{items.description}</p>
                                </Fragment>
                              )}
                            </BackSideProps>
                          </Flippy>
                        </Box>
                      );
                    })}
                    <Box width="33%">
                      <BoxTitleH4 align="left">
                        {transalate("repoName")}
                      </BoxTitleH4>
                    </Box>
                  </BoxRow>
                </Container>
              </ModalProps>
            </ModalProvider>
          );
        }}
      />
    </Fragment>
  );
};

export default DefaultPage;
