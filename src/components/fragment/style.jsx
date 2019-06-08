import styled from "styled-components";
import {Card} from "antd";

/* Макет для персонального фрагмента. */
export const PersonalInfoLayout = styled(Card)`
  width: fit-content;

  *{
    font-family: 'Roboto', sans-serif;
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
