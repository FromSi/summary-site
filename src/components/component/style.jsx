import styled from "styled-components";
import {Avatar, Icon} from "antd";

/* Круг для компонента языка программирования. */
export const LanguageColor = styled.span`
  margin: auto;
  border-radius: 50%;
  display: inline-block;
  height: 12px;
  width: 12px;
  background-color: ${props => props.background};
`;

/* Текс для компонента языка программирования. */
export const LanguageText = styled.p`
  margin: auto;
  padding-right: 3px;
  font-size: 12px;
`;

/* Макет для компонента языка программирования. */
export const LanguageLayout = styled.div`
  display: flex;
  width: min-content;
`;

/* Логотип организации. */
export const LogoOrg = styled(Avatar)`
  position: absolute;
  left: -30%;
`;

/* Макет для логотипов. */
export const LogoLayout = styled.div`
  display: inline-flex;
  width: min-content;
`;

/* Макет для компонента ЧИП. */
export const ChipLayout = styled.div`
  display: inline-flex;
  padding: 3px;
  border: 1px;
  border-style: solid;
  border-color: ${props => props.color};
  border-radius: 32px;
  margin-left: 8px;
  height: 20px;
  margin-top: auto;
  margin-bottom: auto;

  p {
    color: ${props => props.color};
    font-size: 10px;
    padding-left: 3px;
    padding-right: 3px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0px;
  }
`;
