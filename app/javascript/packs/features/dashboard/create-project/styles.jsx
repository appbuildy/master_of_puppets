import styled from 'styled-components';

export const Title = styled.div`
  font-size: 36px;
  margin-bottom: 5px;
`;

export const Error = styled.div`
  color: #f03838;
  font-weight: 400;
  margin-top: 10px;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 15px;
`;

export const Secured = styled.div`
  margin-top: 15px;
  cursor: pointer;
  color: #007aff;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const GifContainer = styled.img`
  margin-top: 15px;
  margin-bottom: 20px;
  border-radius: 6px;
  width: 458px;
`;

export const ActiveZone = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 25px 20px 25px 40px;
  flex: 1;
  background: #fff;
`;

export const InfoZone = styled.div`
  width: 500px;
  box-sizing: border-box;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 25px 20px 25px 20px;
  flex: 1;
  background-image: linear-gradient(
    to bottom,
    rgba(97, 228, 255, 0.3),
    rgba(0, 160, 255, 0.35)
  );
`;
