import React, { useState } from 'react';
import { Input, Button, Select } from 'antd';
import './style.css'

function MoneyConverter() {

  return (
    <div className='money-converter-wrapper'>
      <div className='wapper-info'>
        <div className='convert-amount'>
          <div className='convert-item-label'>Amount</div>
          <Input type='number' placeholder="Nhập số tiền cần chuyển đổi" />
        </div>
        <div className='convert-item'>
          <div className='convert-item-label'>From</div>
          <Select
            className='selector'
            size={'middle'}
            style={{
              width: 200,
            }}
          />
        </div>
        <div className='convert-item'>
          <div className='convert-item-label'>To</div>
          <Select
            className='selector'
            size={'middle'}
            style={{
              width: 200,
            }}
            options={COUNTRY}
          />
        </div>
      </div>
      <div className='wrapper-convert-button'>
        <Button type="primary">Convert</Button>
      </div>
      <div className='wrapper-convert-value'>
        <div>Result: </div>
      </div>
    </div>
  )
}

export default MoneyConverter