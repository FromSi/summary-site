import styled from "styled-components";

/**
 * Макет для карточки репозитория.
 */
export const CardRepositoryLayout = styled.div`
  display: inline-flex;
  width: 400px;
  position: relative;

  * {
    font-family: "Roboto", sans-serif;
  }

  .description {
    margin-bottom: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 300px;
    font-size: 12px;
    text-overflow: ellipsis;
    font-weight: 500;
  }

  .meta {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    height: 32px;

    div{
      margin-left: auto;
    }

    .date{
      font-weight: 500;
      font-size: 12px;
      margin-bottom: 0;
    }
  }
`;
