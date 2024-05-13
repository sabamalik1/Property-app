import { Menu } from '@headlessui/react'
import React, { useContext, useState } from 'react'
import { HouseContext } from './HouseContext'
import { RiArrowDownSLine, RiArrowUpSLine, RiWallet3Line } from 'react-icons/ri'

function PriceRangeDropdown() {
  const {price , setPrice} = useContext(HouseContext)
  const [isOpen , setIsOpen] = useState(false)

  const prices = [
    {value: 'price range (any)'},
    {value: '10000 - 130000'},
    {value: '130000- 160000'},
    {value: '160000 - 190000'},
    {value: '190000 - 220000'},
    {value: '10000 - 30000'},
    {value: '30000 - 40000'},
  ]

  return (
    <Menu as= "div" className="dropdown relative" >
      <Menu.Button className="dropdown-btn w-full text-left" onClick={()=>setIsOpen(!isOpen)}>
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className="text-[15px] font-medium leading-tight ">
            {price} 
          </div>
          <div className="text-[13px]">Chose price range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ): (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu" >
        <div>
          {prices.map((p, index)=>{
            return <Menu.Item onClick={()=>setPrice(p.value)}
            className="cursor-pointer hover:text-voilet-700 transition" 
            as="li" key={index}
            >
              {p.value}
            </Menu.Item>

          })}
        </div>
      </Menu.Items>

    </Menu>
  )
}

export default PriceRangeDropdown