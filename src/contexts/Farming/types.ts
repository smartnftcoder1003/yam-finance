import BigNumber from 'bignumber.js'

export interface ContextValues {
  earnedBalance?: BigNumber,
  isApproved?: boolean,
  isApproving?: boolean,
  isHarvesting?: boolean,
  isRedeeming?: boolean,
  isStaking?: boolean,
  isUnstaking?: boolean,
  onApprove: () => void,
  onHarvest: () => void,
  onRedeem: () => void,
  onStake: (amount: string) => void,
  onUnstake: (amount: string) => void,
  stakedBalance?: BigNumber
}