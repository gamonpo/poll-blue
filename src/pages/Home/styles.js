import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const Field = styled.View`
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin-top: 200px;
`;

export const IView = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  background-color: #3F3F3F;
  margin: 20px;
  width: 300px;
  height: 48px;
  padding: 10px;
`;

export const Email = styled.TextInput`
  margin: 5px;
`;

export const Password = styled.TextInput`
  margin: 5px;
`;

export const Button = styled.TouchableOpacity`
  margin: 5px;
  width: 300px;
  height: 48px;
  background: #022273;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;