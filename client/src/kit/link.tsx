import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";

export const Anchor = styled("a")`
  color: var(--fg-b);
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  display: inline-block;
  padding: 0 0 11px;
  margin-top: 17px;
  transition: 0.3s;
  
  &:hover {
    text-decoration: underline;
  }
  
  &.createNewEvent {
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    border-radius: 4px;
    color: var(--bg-m);
    background: #00B5A1;

    &:hover {
      text-decoration: none;
      box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
    }
  }
  
  &.confirmAnotherEmail {
    margin: 0;
    padding: 0;
  }
`;



export const Link = Anchor.withComponent(RouterLink);
