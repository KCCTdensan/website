import { styled } from "styled-vanilla-extract/qwik";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  background-color: $c-headerBg;
  color: $c-headerText;

  &.gaming {
    @include gaming;
  }

  &.z {
    background-color: $c-headerBgZ;
  }

  @include mqDown(md) {
    border-radius: 8px 8px 0 0;
  }
`;

export const HeaderLogoArea = styled.div`
  display: flex;
  height: 4rem;
  margin: 0.5rem 0;
  justify-content: space-between;
  user-select: none;

  @include mqUp(md) {
    height: 3.5rem;
  }
  @include mqUp(xs) {
    height: 100%;
  }
`;

export const HeaderLogoLink = styled.a`
  display: flex;
  height: 100%;
  position: relative;
  align-items: center;

  @include mqDown(md) {
    margin-left: 0.25rem;
  }
`;

export const HeaderLogoIcon = styled.img`
  height: 3.5rem; // .headerLogo's height
  margin: 0 0.5rem;
`;

export const HeaderTextItems = styled.span`
  display: inline-block;
  color: $c-logoText;
  font-size: 2em;
  font-weight: 900;
  line-height: 1.1;
`;

export const HeaderTextItem = styled.span`
  display: inline-block;

  ${HeaderTextItems} &.z:first-child {
    color: red;
  }
`;

export const PackageInfo = styled.div`
  display: flex;
  height: 100%;
  margin: 0 0.5rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  color: $c-headerDimText;
  font-weight: bolder;

  @include mqUp(md) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  padding: 0.5em;
  flex-direction: column;
  background-color: $c-headerNavBg;
  color: $c-headerNavText;
  font: 1rem/1.8 $f-mono;
  cursor: text;
`;
