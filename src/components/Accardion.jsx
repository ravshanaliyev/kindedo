import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Image1 from '../assets/2.jpg'
import { Container } from '../utils/Utils';
const Accardion = () => {
    return (
        <div className='my-10'>
            <Container>
                <div className="block lg:flex lg:items-center lg:justify-between">
                    <div>
                        <h2 className='text-[#1b1b1b] text-[40px] lg:text-[64px] font-bold'>Know More
                            About Kindedo</h2>
                        <Accordion className='w-[450px] lg:w-[500px] my-4'>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the best age to start Kindergarten?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Some states and countries implement mandatory early childhood education. With such rules, many preschool and kindergarten learning centers are built.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Which is the best preschool for your child ?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Right after you book your party, you’ll receive an email confirming the date, time, and details about what’s included in the package you’ve selected result.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the toution fee on first year?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        There will also be some fantastic outdoor entertainment, desserts and drinks, plus tours of the School for those who want to continue the celebrations.                                </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the best age to start Kindergarten?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Some states and countries implement mandatory early childhood education. With such rules, many preschool and kindergarten learning centers are built.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <img src={Image1} className='w-[600px] rounded-xl' alt="" />
                </div>
            </Container>
        </div>
    )
}

export default Accardion