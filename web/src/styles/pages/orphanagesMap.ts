import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  display: flex;

  aside {
    width: 44rem;
    background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
    padding: 8rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 4rem;
      font-weight: 800;
      line-height: 4.2rem;
      margin-top: 6.4rem;
    }

    p {
      line-height: 2.8rem;
      margin-top: 2.4rem;
    }

    footer {
      display: flex;
      flex-direction: column;

      line-height: 2.4rem;

      strong {
        font-weight: 800;
      }
    }
  }

  leaflet-container {
    z-index: 1;
  }

  .map-popup {
    .leaflet-popup-content-wrapper {
      background: rgba(255, 255, 255, 0.8);
      border-radius: 2rem;
    }

    .leaflet-popup-content {
      color: #0089a5;
      font-size: 2rem;
      font-weight: bold;
      margin: 0.8rem 1.2rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        width: 4rem;
        height: 4rem;
        background: #15c3d6;
        box-shadow: 1.72868rem 2.76589rem 4.14884 rgba(23, 142, 166, 0.16);
        border-radius: 1.2rem;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .leaflet-popup-tip-container {
      display: none;
    }
  }
`;

export const CreateOrphanage = styled(Link)`
  position: absolute;

  right: 4rem;
  bottom: 4rem;

  z-index: 50;

  width: 6.4rem;
  height: 6.4rem;
  background: #15c3d6;
  border-radius: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.3s;

  &:hover {
    background: #17d6eb;
  }
`;
