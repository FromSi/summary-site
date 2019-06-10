import styled from "styled-components";
import {Card, List} from "antd";

/* Макет для персонального фрагмента. */
export const PersonalInfoLayout = styled(Card)`
  width: fit-content;

  * {
    font-family: "Roboto", sans-serif;
  }

  h1,
  p {
    margin-bottom: 0px;
  }

  main {
    display: inline-flex;

    .info {
      margin-left: 24px;

      .pop {
        display: inline-flex;
      }

      hr {
        border: 0;
        height: 0;
        border-top: 1px solid #ebedf0;
        margin-top: 1em;
        margin-bottom: 1em;
      }

      div {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;

/* Макет для карточки. */
export const CardLayout = styled(Card)`
  width: min-content;
`;

/* Макет для списка. */
export const ListLayout = styled(List)`
  height: 500px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar { 
    width: 0;
    height: 0;
  }
`;

/* Макет для основы */
export const HistoryLayout = styled.div`
  display: flex;
  position: relative;
  width: 400px;
  margin-bottom: 8px;

  * {
    font-family: "Roboto", sans-serif;
  }

  h1 {
    margin-top: auto;
    margin-bottom: auto;
    font-weight: 500;
    font-size: 18px;
  }

  div {
    display: flex;
    height: min-content;
    margin-top: auto;
    margin-bottom: auto;

    div {
      margin-left: 8px;
    }

    * {
      margin-bottom: 0;
      height: min-content;
    }

    p {
      font-weight: 500;
      font-size: 14px;
      height: 16px;
    }
  }

  .statistic {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
  }
`;
