import React from "react";
import { Notice, NoticeContent, Box, Spacer } from "react-neu";
import styled from "styled-components";

import useGovernance from 'hooks/useGovernance';

const RegisterNotice: React.FC = () => {
  const { isRegistered } = useGovernance();

  return (
    <Notice isHidden={isRegistered}>
      <StyledNoticeIcon>{isRegistered ? "✔️" : "🗣️"}</StyledNoticeIcon>
      <NoticeContent>
        <StyledNoticeContentInner>
          <span style={{ width: '100%', textAlign: 'center', fontSize: 20 }}>{isRegistered ? `You've successfuly registered to vote!` : `You must register to vote!`}</span>
          <Spacer size="sm" />
        </StyledNoticeContentInner>
      </NoticeContent>
    </Notice>
  );
};

const StyledNoticeContentInner = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: flex-start;
  }
`;

const StyledNoticeIcon = styled.span`
  height: 46px;
  font-size: 32px;
  display: flex;
  align-items: center;
`;

export default RegisterNotice;
