import styled from 'styled-components/native';

export const Header = styled.View`
  background: #FFFFFF;
`;

export const Info = styled.View`
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin: 5px 20px;
`;

export const Welcome = styled.Text`
  font-size: 24px;
`;

export const ListTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextTitle = styled.Text`
  font-size: 24px;
  margin: 10px;
  flex-grow: 0;
`;

export const ShortLine = styled.View`
  background: #3F3F3F;
  height: 5px;
  flex-grow: 0.3;
`;

export const LongLine = styled.View`
  background: #3F3F3F;
  height: 5px;
  flex-grow: 3;
`;


export const Image = styled.ImageBackground`
  margin: 0px 0px 2px;
  height: 400px;
`;

export const Bar = styled.View`
  background: #4D3F3F3F;
  margin-top: 360px;
  height: 200px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.Text`
  color: #FFFFFF;
  font-size: 24px;
  padding-top: 3px;
  padding-left: 10px;
`;

export const Icon = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  padding-top: 10px;
`;