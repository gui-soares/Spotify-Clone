import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  margin-top: 110px;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const Playlist = styled.a`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-left: 20px;
  text-decoration: none;

  img {
    height: 250px;
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #ffff;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }

  &:hover img {
    opacity: 0.4;
  }

  &:first-child {
    margin: 0;
  }
`;
