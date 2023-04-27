import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  align-items: center;
  text-align: center;
  background-color: #ebd8ff;
`;
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  gap: 24px;
  min-height: calc(100vh - 174px);
`;
export const Text = styled.p`
  margin: 0;
  color: #ebd8ff;
  font-size: 20px;
`;
export const Button = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;
  width: 196px;
  padding: 14px 28px;
  margin-bottom: 0;
  background: #ebd8ff;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #5cd3a8;
  }
`;
