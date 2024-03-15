import styled from 'styled-components';


export const ButtonsWrapper = styled.div`
display:flex;
flex-direction:row ;
align-items: center;
justify-content:space-between;
margin-top:49px;
`

export const VolumeWrapper = styled.div`
  border: 1px solid rgba(205, 139, 101, 1);
  border-radius: 24px;
  display:flex;
  flex-direction:row;
  color:white;
span{
  padding: 24px;
  &:nth-of-type(2){
    overflow: hidden ;
    border-radius:0 24px 24px 0;
    background: linear-gradient(180deg, #CD8B65 0%, #BB6B3D 100%);

  }
}
`;