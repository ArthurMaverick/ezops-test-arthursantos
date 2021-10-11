import styled from 'styled-components'

export const HeaderElement = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;
  background-image: linear-gradient(to right, silver , #20202020);
  box-shadow: 1px 1px 4px -1px;

  h1 {
    cursor:none;
    &:hover {
          color: azure;
          opacity:0.5;
        }
  }

  ul { 
    display: flex;
    flex-direction: row;
    li { 
      color: white;
      border: 1px solid white;
      font-weight: 900;
      margin: 0 15px;
      list-style: none;
      font-size: 17px;
      transition: 200ms;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 5px 5px 40px -5px blueDark;
      transition: 400ms;
      &:hover { 
        background: #20202020;
        color: white;
        background: silver;
        color: black;
      }
    }
  }

`