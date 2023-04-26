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
