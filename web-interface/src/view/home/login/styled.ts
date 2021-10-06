import styled from 'styled-components'

export const LoginElement = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #20202020;

  .box {
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items: center;

    height: 400px;
    width: 600px;
    background:  #75432118;

    border-radius: 6px;

    h1 { 
      font-size: 50px;
      margin: -17px 0;
      transition: 400ms ;
      &:hover {
        color: azure;
      }
    }

    ul { 
      li {
        display: flex;
        flex-direction: column;
        padding: 11px 0;
        transition: 400ms ;
        label {
          margin-bottom: 7px;
          font-weight: 200;
          font-size:  18px;
          &:hover {
            color: azure;
          }
        }

        input {
          border: none;
          height: 40px;
          width: 300px;
          padding: 10px;
          border-radius: 18px;
          background-color: #f1f1f1f1;
        }
      }
    }
      
    button {
        width: 160px;
        height: 40px;
        border: none;
        box-shadow: 0px 3px 15px -10px;
        font-size:  18px;
        font-weight: 600;
        transition: 200ms;
        &:hover {
          background: #78787878;
          color: azure;
        }
        }

  }

`