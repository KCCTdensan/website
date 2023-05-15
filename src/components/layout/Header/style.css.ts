import { style } from "@vanilla-extract/css";
import { styled } from "styled-vanilla-extract/qwik";

import { mqDownto, mqUpto } from "~/styles/responsive";
import { vars } from "~/styles/variables.css";

export const headerGamingClass = style({});

export const headerBgZClass = style({
  backgroundColor: vars.color.headerBgZ,
});

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${vars.color.headerBg};
  color: ${vars.color.headerText};

  @media ${mqDownto("md")} {
    border-radius: 8px 8px 0 0;
  }
`;

export const HeaderLogoArea = styled.div`
  display: flex;
  height: 4rem;
  margin: 0.5rem 0;
  justify-content: space-between;
  user-select: none;

  @media ${mqUpto("md")} {
    height: 3.5rem;
  }

  @media ${mqUpto("xs")} {
    height: 100%;
  }
`;

export const HeaderLogoLink = styled.a`
  display: flex;
  height: 100%;
  position: relative;
  align-items: center;

  @media ${mqDownto("md")} {
    margin-left: 0.25rem;
  }
`;

export const HeaderLogoIcon = styled.img`
  height: 3.5rem; // .headerLogo's height
  margin: 0 0.5rem;
`;

export const HeaderTextItems = styled.span`
  display: inline-block;
  color: ${vars.color.logoText};
  font-size: 2em;
  font-weight: 900;
  line-height: 1.1;
`;

export const HeaderTextItem = styled.span`
  display: inline-block;

  ${HeaderTextItems} &.z:first-child {
    color: ${vars.color.logoStar};
  }
`;

export const PackageInfo = styled.div`
  display: flex;
  height: 100%;
  margin: 0 0.5rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  color: ${vars.color.headerDimText};
  font-weight: bolder;

  @media ${mqUpto("md")} {
    display: none;
  }
`;
