import React from "react";

import { Box, Button, Card, CardActions, CardContent, CardIcon, Spacer } from "react-neu";

import Label from "components/Label";
import ValueText from "components/ValueText";
import styled from "styled-components";
const UmbrellaCard: React.FC = () => {

  return (
    <Card>
      <StyledCard>
        <Spacer />
        <CardIcon>🌂</CardIcon>
        <CardContent>
          <Box alignItems="center" column>
            <ValueText value="Yam Protection" />
            <Label text="Yam Protection has the potential to become a critical lego block for the DeFi ecosystem." labelPosition="center"/>
          </Box>
        </CardContent>
        <CardActions>
          <Button full to="/umbrella" text="View" variant="secondary" />
        </CardActions>
      </StyledCard>
    </Card>
  );
};
const StyledCard = styled.div`
 height:320px;
`;

export default UmbrellaCard;
