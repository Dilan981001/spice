import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './value.css'
import data from '../../utils/accordion'

function value() {
  return (
    <div>
      <secion className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* leftside */}
            <div className="v-left">
                <div className="image-container">
                    <img src='../../../public/heap-cloves.jpg' alt=''/>
                </div>
            </div>

            {/* right side */}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Why Choose Us</span>
                <span className='secondaryText'>Contrary to popular belief,<br/> Lorem Ipsum is not simply random text</span>

                <Accordion className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]}>
                    {
                        data.map((item, i)=>{
                            const [className, setClassName]=useState(null)
                            return(
                                <AccordionItem className={'accordionItem ${className}'} key={i} uuid={i}>
                                    <AccordionItemHeading className='flexColStart'>
                                       <AccordionItemButton className='flexCenter accordionButton'>
                                        
                                        <AccordionItemState>
                                            {({expanded})=> expanded ?setClassName("expanded"):setClassName("collapsed")}
                                        </AccordionItemState>
                                        
                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className='primaryText'>
                                            {item.heading}
                                        </span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20}/>
                                        </div>
                                        </AccordionItemButton> 
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className='secondaryText'>{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }

                </Accordion>
            </div>
        </div>
      </secion>
    </div>
  )
}

export default value
