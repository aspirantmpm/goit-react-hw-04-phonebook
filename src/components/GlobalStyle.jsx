import styled from 'styled-components';
import { Form, Field } from 'formik';

export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
`;

export const Input = styled(Field)`
  outline: 0;
  width: 365px;
  margin-bottom: 10px;
  padding: 5px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
`;
export const List = styled.ul`
  border-radius: 5px;
  padding: 20px;
`;

export const Find = styled.div`
  width: 240px;
  margin-bottom: 20px;
  padding-left: 20px;
`;

export const FindInput = styled.input`
  outline: 0;
  width: 350px;
  padding: 5px;
`;
export const Section = styled.section`
  padding: 20px 20px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
