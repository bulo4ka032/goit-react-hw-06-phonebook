import styled from "@emotion/styled";

export const PhonebookForm = styled.div`
box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.2);
padding: 1px 20px 20px 20px;
position: relative;
max-width: 400px;
`


export const SubmitBtn = styled.button`
position: absolute;
top: 80px;
right: 100px;
padding: 10px 20px;
outline: none;
border: none;
border-radius: 10px;
background-color: #F7ECDE;
cursor: pointer;
font-weight: 500;

&:hover {
    box-shadow: 0px 0px 3px 0.3px rgba(0,0,0,0.2);
  }  
`

export const FormTitle = styled.h1`
margin: 20px 0 10px;
font-size: 28px;
font-weight: 500;

`