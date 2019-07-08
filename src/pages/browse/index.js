import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg"
          alt="Playlist"
        />
        <strong>Melhores do Rock</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores do rock mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg"
          alt="Playlist"
        />
        <strong>Melhores do Rock</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores do rock mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg"
          alt="Playlist"
        />
        <strong>Melhores do Rock</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores do rock mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg"
          alt="Playlist"
        />
        <strong>Melhores do Rock</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores do rock mundial!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
