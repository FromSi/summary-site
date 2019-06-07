import styled from "styled-components";

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

/* Текст для компонента ЧИП */
export const ChipText = styled.p`
         font-size: 12px;
         padding-left: 3px;
         padding-right: 3px;
         margin: auto;
         line-height: 0px;
       `;

/* Макет для компонента ЧИП */
export const ChipLayout = styled.div`
         display: inline-flex;
         padding: 3px;
         border: 1px;
         border-style: solid;
         background-color: ${props => props.background};
         border-color: ${props => props.border};
         border-radius: 32px;
       `;