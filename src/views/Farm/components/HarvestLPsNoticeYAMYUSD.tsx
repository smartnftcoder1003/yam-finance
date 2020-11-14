import BigNumber from "bignumber.js";
import useFarming from "hooks/useFarming";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Box, Button, Notice, NoticeContent, NoticeIcon, Spacer } from "react-neu";
import styled from "styled-components";
import { useWallet } from "use-wallet";
import { bnToDec } from "utils";

const HarvestLPsNoticeYAMYUSD: React.FC = () => {
  const [stakedBalanceYUSDLP, setStakedBalanceYUSDLP] = useState<number>(0);
  const [earnedBalanceYUSDLP, setEarnedBalanceYUSDLP] = useState<number>(0);
  const { stakedBalanceYAMYUSD, earnedBalanceYAMYUSD, onRedeemYAMYUSD } = useFarming();
  const { status } = useWallet();

  const checkOldStakedEarned = useCallback(() => {
    if (status !== "connected") {
      return;
    }

    if (stakedBalanceYAMYUSD) {
      setStakedBalanceYUSDLP(bnToDec(stakedBalanceYAMYUSD));
    }
    if (earnedBalanceYAMYUSD) {
      setEarnedBalanceYUSDLP(bnToDec(earnedBalanceYAMYUSD));
    }
  }, [stakedBalanceYAMYUSD, setStakedBalanceYUSDLP, setEarnedBalanceYUSDLP]);

  useEffect(() => {
    checkOldStakedEarned();
    let refreshInterval = setInterval(() => checkOldStakedEarned(), 100000);
    return () => clearInterval(refreshInterval);
  }, [checkOldStakedEarned]);

  const HarvestNotice = useMemo(() => {
    if (status === "connected" && (stakedBalanceYUSDLP > 0 || earnedBalanceYUSDLP > 0)) {
      return (
        <>
          <Notice>
            <NoticeIcon>❗</NoticeIcon>
            <NoticeContent>
              <StyledNoticeContentInner>
                <span>You was farming on the old pool with {(stakedBalanceYUSDLP ? stakedBalanceYUSDLP + " LP tokens" : "") + (stakedBalanceYUSDLP && earnedBalanceYUSDLP ? " and you have " : ".") + (earnedBalanceYUSDLP ? earnedBalanceYUSDLP + " Yam to harvest!" : "")} </span>
                <Box flex={1} />
                <Spacer size="sm" />
                <span>
                  <Button size="sm" text="Harvest &amp; Unstake YAM/yUSD" onClick={onRedeemYAMYUSD} variant="secondary" />
                </span>
              </StyledNoticeContentInner>
            </NoticeContent>
          </Notice>
          <Spacer />
        </>
      );
    }
  }, [status, stakedBalanceYAMYUSD, stakedBalanceYUSDLP]);

  return <>{HarvestNotice}</>;
};

const StyledNoticeContentInner = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: flex-start;
  }
`;

export default HarvestLPsNoticeYAMYUSD;
