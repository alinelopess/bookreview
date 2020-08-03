import styled from 'styled-components';

export const VideoCardGroupContainer = styled.section`
  color: var(--white);
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;

  background: red;
  padding: 20px;
  margin-bottom: 16px;
  border-radius: 4px;
  display: inline-block;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
  `;

export const ExtraLink = styled.p`
  display: inline-block;
  text-decoration: none;
  margin-left: 16px;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }

  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
  `;

export const VideoCardList = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;

  display: flex;
  overflow-x: auto;
  flex-direction: row;

  li {
    margin-right: 16px;
  }
`;
