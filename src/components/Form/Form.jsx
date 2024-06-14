import { useEffect } from 'react'
import { useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import './Form.css'

const Form = () => {
   const {country, setCountry} = useState('')
   const {street, setStreet} = useState('')
   const {subject, setSubject} = useState('physical')
   const {tg} = useTelegram()

   useEffect(() => {
      tg.MainButton.setParams({
         text: 'Отправить данные'
      })
   }, [])

  useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street])

   const onChangeCountry = (e) => {
      setCountry(e.target.value)
   }
   const onChangeStreet = (e) => {
      setStreet(e.target.value)
   }
   const onChangeSubject = (e) => {
      setSubject(e.target.value)
   }

  return (
    <div className='form'>
      <h3>Введите ваши данные</h3>
      <input value={country} type="text" className="input" placeholder='Страна' onChange={onChangeCountry}/>
      <input value={street} type="text" className="input" placeholder='Улица' onChange={onChangeStreet}/>
      <select value={subject} name="" id="" className="select" onChange={onChangeSubject}>
         <option value={'physical'}>Физ. лицо</option>
         <option value={'legal'}>Юр. лицо</option>
      </select>
    </div>
  )
}

export default Form