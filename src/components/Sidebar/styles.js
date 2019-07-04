import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  height: 100vh;
  width: 200px;
  border: none;
  background: #121212;
  color: #b3b3b3;
  flex-direction: column;
  justify-content: space-between;

  > div {
    padding: 25px;
  }
`;

export const NewPlayList = styled.button`
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  font-size: 13px;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  padding: 15px 15px;

  &:hover {
    color: #fff;
  }

  img {
    margin-right: 10px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;

  &:first-child {
    margin-top: 0;
  }

  li {
    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;
      font-weight: ${props => (props.main ? 'bold' : 'normal')};

      &:hover {
        color: #ffff;
      }
    }

    span {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }
  }
`;
