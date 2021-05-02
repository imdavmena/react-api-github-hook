import React, { Fragment } from "react";
import Table from "../../components/Tablet";

import { Box, BoxRow, Container } from "../../styles/components";

const DefaultPage = () => {
  return (
    <Fragment>
      <Container>
        <BoxRow>
          <Box>
            <Table />
          </Box>
        </BoxRow>
      </Container>
    </Fragment>
  );
};

export default DefaultPage;
