import { Radio } from 'antd';

function Menu(props) {

  const {selectedMenu, menu, handleMenuChange} = props

  return (
    <Radio.Group onChange={handleMenuChange} value={selectedMenu}>
      {menu.map((item) => (
        <Radio key={item.key} value={item.key}>{item.name}</Radio>
      ))}
    </Radio.Group>
  )
}

export default Menu