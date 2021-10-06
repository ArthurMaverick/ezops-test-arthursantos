import styled from 'styled-components'

export const MainElement = styled.main`
  color: white;
  margin: 0 auto;
  /* @media only screen and (max-width: 1080px) {
        color: #555555;
      } */

  .bg_video{
    position: fixed; 
			right: 0; 
			bottom: 0;
			min-width: 100%; 
			min-height: 100%;
			width: auto; 
			height: auto; 
			z-index: -1000;
			background: url(images/torre.jpg) no-repeat;
			background-size: cover; 
		}

    div {
      height: 600px;

      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      h2 {
        text-align: center;
        font-size: 70px;
        padding: 50px 0;
        
      }

      p {
        text-align: center;
        margin: 0 10px;
        font-size: 25px;
        margin-top: -50px;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-left: 50px;

        li {
          font-size: 20px;
          font-weight: bold;
          padding: 10px;
          list-style-type: none;
          margin: 0 7px;
        }
      }
    }

`