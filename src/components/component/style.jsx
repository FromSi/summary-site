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
  font-weight: 500;
`;

/* Макет для компонента языка программирования. */
export const LanguageLayout = styled.div`
  display: flex;
  width: min-content;
  margin-top: 0;
  margin-bottom: 0;
`;

/* Иконка для форка. */
export const LanguageIcon = styled(Icon)`
  height: 14px;
  margin: auto;
`;

/* Логотип организации. */
export const RepositoryNameOrg = styled(Avatar)`
  position: absolute;
  left: -14px;
`;

/* Макет для логотипов. */
export const RepositoryNameLayout = styled.div`
  display: inline-flex;
  white-space: nowrap;

  h1 {
    margin-bottom: 0;
  }
`;

/* Заголовок для логотипов. */
export const RepositoryNameTitle = styled.h1`
  position: relative;
  left: ${props => `${-props.left}px`};
  margin-left: 8px;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
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
