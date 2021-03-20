import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './image-acets/Heading.png';
import Group9 from './image-acets/Group9.png';
import Group2 from './image-acets/Group2.png';
import Group4 from './image-acets/Group4.png';
import Group8 from './image-acets/Group8.png';
import Group5 from './image-acets/Group5.png';
import Group48 from './image-acets/Group48.png';
import Group875 from './image-acets/Group875.png';


export default class MyRecords extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <img src={Header} alt='header'/>
        </div>
        <div className='item'>
        <img src={Group9} alt='item'/>
        </div>
        <div className='item'>
        <img src={Group2} alt='item'/>
        </div>
        <div className='item'>
        <img src={Group4} alt='item'/>
        </div>
        <div className='item'>
        <img src={Group9} alt='item'/>
        </div>
        <div className='item'>
        <img src={Group8} alt='item'/>
        </div>
        <div className='item'>
        <img src={Group5} alt='item'/>
        </div>
        <div className='item'>
        <img src={Group875} alt='item'/>
        </div>
        <div className='add-record'>
        <Link to='addMedicalRecord'/>
        <img src={Group48} alt='add-item'/>
        <Link/>
        </div>

        

      </div>
    )
  }
}
