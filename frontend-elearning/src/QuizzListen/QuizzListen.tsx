import React from 'react'
import './QuizzListen.css';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';

type Props = {}

export default function QuizzListen({ }: Props) {
    return (
        <div>
            <div className="page">
                <nav className='nav'>
                    <ul>
                        <li>mana</li>
                        <li>mana</li>
                        <li>mana</li>
                        <li>mana</li>
                    </ul>
                </nav>
                <div className='div--description'> titlu curs + calea catre aici </div>
                <div className='div--description'> titlu test + opened + closed ... </div>
                <div className='div--must-description'>
                    <p> detalii (wrap content detalii pe height) + attempts allowed + timelimit - mereu va exista asta </p>
                    <div className='div--attemps-time'>
                        <ul className='list--parent'>
                            <li className='list--items'>Attempts allowed: ?</li>
                            <li className='list--items'>Time limit: ? mins</li>
                        </ul>
                    </div>
                    <div className='div--dynamic-info'>
                        <span className='text'>Summary of your previous attempts</span>
                        <div className='div--dynamic-table_up'>
                            <li className='one'>State</li>
                            <li className='two'>Grade / 10.00</li>
                            <li className='three'>Review</li>
                        </div>
                        <div className='div--dynamic-table_down'>
                            <li className='one'>
                                <span>Finished</span>
                                <span>Submitted Tuesday, 8 March 2022, 11:38 AM</span>
                            </li>
                            <li className='two'>9.00</li>
                            <li className='three'>Not permitted</li>
                        </div>
                        <span className='text--finalgrade'>Your final grade for this quiz is 9.00/10.00.</span>
                        <span className='text--attempsAllowed'>No more attempts are allowed</span>
                        <div className="elemFlexCenter">
                            <Button text='Back to the course' func={() => { handleSubmit() }} type='1' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

function handleSubmit() {
    throw new Error('Function not implemented.');
}