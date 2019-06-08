import styled from "styled-components";
import {List, Icon} from "antd";

/* Макет для заголовка информации. */
export const TitleInfoLayout = styled.div`
  * {
    font-family: "Roboto", sans-serif;
  }

  h1 {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 0px;
  }

  p {
    font-weight: 300;
    font-size: 12px;
    margin-bottom: 0px;
  }
`;

/* Макет для заголовка работы. */
export const TitleJobLayout = styled.div`
  display: inline-flex;

  * {
    font-family: "Roboto", sans-serif;
  }

  h1 {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 0px;
  }
`;

/* Список для информации. */
export const ContentInfoLayout = styled(List)`
  * {
    font-family: "Roboto", sans-serif;
  }

  p {
    margin-bottom: 0px;
  }

  strong {
    font-weight: 700;
    margin-bottom: 0px;
  }

  i {
    margin-right: 16px;
  }
`;

/* Список для работы. */
export const ContentJobLayout = styled(List)`
  * {
    font-family: "Roboto", sans-serif;
  }

  p {
    margin-bottom: 0px;
  }

  i {
    margin-right: 16px;
  }
`;

/* Иконка для работы. */
export const IconJob = styled(Icon)`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`;
