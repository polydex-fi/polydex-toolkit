import React from "react";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";

import styled from "styled-components";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <Wrapper>
      {account ? (
        <div className="btn-account" onClick={onPresentAccountModal}>
          {accountEllipsis}
        </div>
      ) : (
        <div className="btn-account" onClick={onPresentConnectModal}>
          Connect
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .btn-account {
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #03d178;
    border-radius: 10px;
    color: #fff;
    width: 130px;
    height: 35px;
  }
`;

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
