import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding: 20px 16px;
  color: var(--grayMedium);
  text-align: center;

  img {
    width: 35px;
    margin-left: 5px;
    margin-bottom: -10px;
    opacity: 40%;
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
