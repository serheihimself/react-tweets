import styled from 'styled-components';

export const Card = styled.li`
position: relative;
  width: 380px;
  height: 460px;
  background-color: #5736a3;
  border-radius: 20px;
  text-align: center;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  row-gap: 26px;
  z-index: 1000:
`;
export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const BgImg = styled.img`
  position: absolute;
  top: 28px;
`;
export const Img = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  top: 178px;
  border-radius: 50%;
  border 10px solid rgba(235, 216, 255, 1);
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 1000;
`;
export const BorderImg = styled.span`
  position: absolute;
  top: 212px;
  width: 380px;
  height: 8px;
  background: rgba(235, 216, 255, 1);
`;
export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
export const CardBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  margin-bottom: 36px;
  width: 196px;
  height: 50px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
  background-color: ${props => (props.followed ? ' #5CD3A8' : ' #ebd8ff')};
  &:hover {
    background: #5cd3a8;
  }
`;
