import React from 'react';
import {useState} from 'react';
import '../Container.css';
import styled from "styled-components";
import {Data} from './Data';
import {IconContext} from 'react-icons';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';


const AccordionSection = styled.div`

    padding: 53px 0px 40px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position: relative;
    background-color:#cfecfa;
    h2{
        font-family:Montserrat-regular;
        width:100%;
        text-align:center;
        margin:0px 0px 25px;
    }

    @media(min-width:768px){
        h2{
            font-size:26px;
        }
    }

    @media(min-width:1280px){
        padding:80px 0px 30px;
        h2{
            font-size:36px;
        }
    }

`;

const Container = styled.div`
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
    border-radius:10px;
    padding:0px 10px;
    width:100%;
    @media(min-width:768px){
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        padding:0px 30px;
    }

    @media(min-width:1280px){
        width:70%;
        margin:40px auto;
        padding:30px 30px;
    }
`;

const Box = styled.div`
    width:100%;
    @media(min-width:768px){
        width:45%;
    }
`;

const Wrap = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    width:100%;
    cursor:pointer;
    border-bottom:2px solid black;
    margin:20px 0px;
    h3{
        font-family:Montserrat-regular;
        font-size: 16px;
        padding: 1rem 0px;
    }
`;

const Dropdown = styled.div`
    font-family:Montserrat-light;
    padding:10px 0px;
    p{
        transition: all .3s ease-in-out;
    }
`;





function Accordion() {
    const [clicked, setClicked] = useState(false);

    const toggle = index =>{
        if(clicked === index){
            return setClicked(null);
        };
        setClicked(index);
    };


  return (
    <IconContext.Provider value={{color:"black", size:'25px'}}>
        <AccordionSection>
            <h2>Frequently Asked Questions</h2>
            <Container>
                {
                    Data.map((item, index) =>{
                        return(
                            <>
                            <Box>

                                <Wrap onClick={()=>toggle(index)} key={index}>
                                    <h3>{item.Question}</h3> 
                                    <span>
                                        {clicked === index ? <AiOutlineMinus/> :<AiOutlinePlus/>}
                                    </span>
                                </Wrap>
                                

                                {
                                    clicked === index ? (
                                        <Dropdown>
                                            <p>{item.Answers}</p>
                                        </Dropdown>
                                    ) : null
                                }

                            </Box>
                            </>
                        )
                    })
                }
            </Container>-
        </AccordionSection>
    </IconContext.Provider>    
  )
}

export default Accordion;