import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
  align-items: center;
`;

export const Title = styled.Text`
  color: #3F3F3F;
  font-size: 24px;
  margin: 0px 100px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const Image = styled.Image`
  margin: 30px;
  align-self: center;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #3F3F3F;
  margin: 10px;
`;

export const Vote = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  background: #3F3F3F;
  align-self: center;
  border-radius: 6px;
  justify-content: center;
`;

export const VoteTitle = styled.Text`
  color: #FFFFFF;
  font-size: 20px;
  text-align: center;
`;