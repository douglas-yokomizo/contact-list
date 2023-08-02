import { styled } from "styled-components";

export const Background = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.7);
`

export const Modal = styled.div`
  position: fixed;
  background-color: #fff;
  padding: 100px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 20px;
  display:flex;
  flex-direction: column;
  gap: 16px;

  h2{
    top: 0%;
    margin-bottom: 0px;
  }

  input {
    height: 24px;
    border: none;
    border-bottom: 1px solid;
    margin: 20px 0;

    &:focus{
      outline:none;
    }
  }

  div {
    margin-top: 24px;
    display:flex;
    justify-content: space-between;

    & button {
      background-color: green;
      padding: 12px 0;
      width:80px;
      border:none;
      cursor: pointer;
      color: #fff;
      border-radius: 15px;
      font-weight: bold;

      &:hover {
        transform: scale(1.1);
        transition: ease-in .2s
      }
    }

    & button:last-child{
      background-color: red;
      cursor: pointer;
    }

  }
`

