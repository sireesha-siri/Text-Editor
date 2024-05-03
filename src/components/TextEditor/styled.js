import styled from 'styled-components'

export const BoldButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.isBold ? '#faff00' : ' #f1f5f9')};
`

export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.isItalic ? '#faff00' : '#f1f5f9')};
`
export const UnderlineButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.isUnderLined ? '#faff00' : '#f1f5f9')};
`

export const TextArea = styled.textarea`
  background-color: transparent;
  color: #f1f5f9;
  margin: 10px;
  padding: 10px;
  border: none;
  min-height: 75vh;
  min-width: 38vw;
  font-size: 17px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderLined ? 'underline' : 'normal')};
`
