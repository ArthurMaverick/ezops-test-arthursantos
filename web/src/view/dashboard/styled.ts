import styled from 'styled-components'

export const DashboardElement = styled.main`
  /* height: 100vh;
  width: 100vw; */
  overflow-y: visible;

  display: flex;
  color: white;

  aside { 
    position: fixed;
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    height: 100vh;

    min-width:300px;
    background: #212121dd;

    ul {
      height: 100%;
      width: 16%;
      min-width: 90px;
      background: #212121dd;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 40px;
        width: 86%;
        min-height: 40px;
        height: 80px;
        margin: 50px auto ;
        border-radius: 50%;
        list-style: none;
        border: 3px solid white;
        transition: 200ms ease-in-out;
        &:hover {
          background-color: white;
          opacity: 0.8;
          color: #282828dd;
          border: 3px solid azure;
          box-shadow: inset 1px 1px 10px black;
        }
      }
    }

    .talks {
      list-style: none;
      margin: 0 17px;
      li {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        min-width: 40px;
        min-height: 40px;
        width: 78px;
        height: 78px;
        margin: 50px auto ;
        border-radius: 50%;
        list-style: none;
        border: 3px solid white;
        transition: 200ms ease-in-out;
        &:hover {
          background-color: #197D36;
          opacity: 0.8;
          color: white;
          font-weight: bold;
          border: 3px solid azure;
          box-shadow: inset 1px 1px 10px black;
        }
      }
    }
  }

  main { 
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    width: 60%;
    min-width: 500px;      
    right: 0;

    .screen {
      display: flex;
      flex-direction: column-reverse;
      justify-content: stretch;
      align-items: flex-end;
      min-height: 90vh;
      padding: 30px;
      
      

      .container {
        margin: 14px 0;
        

      .talk {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        min-width: 50%;
        max-width: 90%;
        margin-top: 10px;
        
        background: #28282869;
        border-radius: 19px;
        padding: 0 20px;
        
        p {
          display: inline-block;
          padding: 10px;
          text-align: center;
          font-size: 18px;
          
        }
      }
    }
  }

    div.textbox{
      display: flex;
      flex-direction: row;
      width: 100%;
      input {
        width: 90%;
        height: 50px;
        border: none;
        box-shadow: 2px 2px 7px 1px #282828dd;
        padding: 0 10px;
        font-size: 18px;
        font-weight: 500;
        
      }
      button {
        width: 10%;
        border: none;
        box-shadow: -2px -2px 7px -1px #282828dd;
        background: #fff;
        transition: 200ms;
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
`