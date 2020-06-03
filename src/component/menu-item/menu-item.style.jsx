import styled from 'styled-components'

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: ${({size}) => (size ? '380px' : '240px' )};
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:hover {
      & .background-image {
        transform: scale(1.1);
        transition: all 4s ease-out;
      }

      & .content {
          background-color:#fff;
          transition: all 1s;
        }
    }
  
    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
        margin-left: 7.5px;
      }
`;


export const BckgrndContainer = styled.div`
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`


export const ContentContainer = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid none;
    background-color: rgba(255,255,255, .8);
    position: absolute
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;