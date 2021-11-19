import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import Flex from "../../components/Box/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./components/Logo";
import Panel from "./components/Panel";
import Button from "../../components/Button/Button";
import { AutoRenewIcon } from "../../components/Svg";
import UserBlock from "./components/UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL, socials } from "./config";

import cronos from "../../assets/image/krypto.svg";
import celo from "../../assets/image/celo.svg";
import polygon from "../../assets/image/polygon.svg";
import PLV_ic_Discord from "../../assets/image/PLV_ic_Discord.svg";
import PLV_ic_Email from "../../assets/image/PLV_ic_Email.svg";
import PLV_ic_Medium from "../../assets/image/PLV_ic_Medium.svg";
import PLV_ic_Telegram from "../../assets/image/PLV_ic_Telegram.svg";
import PLV_ic_Twitter from "../../assets/image/PLV_ic_Twitter.svg";

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  .left-content {
    display: flex;
    align-items: center;

    .media {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 140px;

      padding-top: 5px;
      margin-left: 20px;

      @media screen and (max-width: 768px) {
        display: none;
      }

      img {
        cursor: pointer;

        width: 20px;
        height: 20px;
      }
    }
  }

  .right-content {
    height: 100%;
    display: flex;
    align-items: center;

    .chain-logo {
      height: 100%;

      display: flex;

      margin-right: 15px;

      .celo {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        height: 100%;

        .celo-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-end;

          height: 100%;
          width: 30px;

          border-radius: 0 0 12px 12px;

          background: #ff9d00;

          .img-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 28px;
            height: 28px;

            border-radius: 50%;

            img {
              width: 24px;
              height: 24px;
            }
          }
        }

        span {
          font-size: 10px;
          color: #fff;
        }
      }

      a {
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }

      .polygon-wrapper {
        display: flex;
        align-items: flex-end;

        margin-left: 5px;
        padding-bottom: 12px;

        img {
          width: 24px;
          height: 24px;

          border-radius: 50%;
        }
      }
    }
  }
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: #010b18;
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
  background: url("/images/background.svg");

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  profile,
  children,
  faucet,
  faucetLoading,
}) => {
  const { isXl, isXxl } = useMatchBreakpoints();
  const isMobile = !(isXl || isXxl);
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        // if (currentOffset < refPrevOffset.current) {
        //   // Has scroll up
        //   setShowMenu(false);
        // } else {
        //   // Has scroll down
        //   setShowMenu(false);
        // }
        setShowMenu(false);
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <div className="left-content">
          <Logo
            isPushed={isPushed}
            togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            isDark={isDark}
            href={homeLink?.href ?? "/"}
          />

          <div className="media">
            <a href="https://polydex.medium.com/" target="_blank">
              <img src={PLV_ic_Medium} alt={"PLV_ic_Medium"} />
            </a>
            <a href="https://twitter.com/KryptoDex" target="_blank">
              <img src={PLV_ic_Twitter} alt={"PLV_ic_Twitter"} />
            </a>

            <Dropdown key={"telegram"} position="bottom" target={<img src={PLV_ic_Telegram} alt={"PLV_ic_Telegram"} />}>
              {[
                {
                  label: "Announcements",
                  href: "https://t.me/polydexannouncement",
                },
                {
                  label: "English",
                  href: "https://t.me/polydexfi",
                },
              ].map((item: any) => (
                <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
                  {item.label}
                </Link>
              ))}
            </Dropdown>

            <a href="https://discord.com/invite/WtksUPQSRm" target="_blank">
              <img src={PLV_ic_Discord} alt={"PLV_ic_Discord"} />
            </a>
            <a href="mailto:contact@polydex.fi">
              <img src={PLV_ic_Email} alt={"PLV_ic_Email"} />
            </a>
          </div>
        </div>

        <div className="right-content">
          <div className="chain-logo">
            <div className="celo">
              <div className="celo-wrapper">
                <div className="img-wrapper">
                  <img src={cronos} alt="Cronos" />
                </div>
              </div>

              <span>Cronos</span>
            </div>

            <a href="https://www.celodex.org/">
              <div className="polygon-wrapper">
                <img src={celo} alt="celo" />
              </div>
            </a>

            <a href="https://www.polydex.fi/">
              <div className="polygon-wrapper">
                <img src={polygon} alt="polygon" />
              </div>
            </a>
          </div>

          <Flex>
            {faucet && account && (
              <div>
                <Button
                  marginRight="5px"
                  scale="sm"
                  variant="success"
                  onClick={faucet}
                  isLoading={faucetLoading}
                  endIcon={faucetLoading ? <AutoRenewIcon spin color="currentColor" /> : null}
                >
                  PolyFaucet
                </Button>
              </div>
            )}

            <UserBlock account={account} login={login} logout={logout} />
          </Flex>
        </div>
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
          pushNav={setIsPushed}
          links={links}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
