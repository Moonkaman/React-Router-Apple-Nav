import React from 'react'
import {NavLink} from 'react-router-dom';

const SubNavBar = props => {
  const subNavItems = props.appleNavData.find(data => data.item === props.match.params.item);
  return (
    <div className='sub-nav-cont'>
      {
       props.match.params.item !== 'Support' && subNavItems.subItems.map((subNavItem,index) => <NavLink key={subNavItem+index} to={`/${props.match.params.item}/${subNavItem.name.split(' ').join('')}`}>{subNavItem.name}</NavLink>)
      }
    </div>
  )
}

export default SubNavBar
