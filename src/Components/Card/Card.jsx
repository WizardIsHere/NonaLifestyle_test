import React from 'react'
import styles from './Card.module.css'


const Card = () => {

    let balance = 120;
    let food = 53;
    let shopping =26
    let movie = 21
    
 
    return (
        <div className={styles.Card}>

            <div className={styles.header}>
                <h5 style={{ marginTop: '29px', marginLeft: '21px', fontSize: '16px' }}>Your total spend</h5>

                <select name="duration" id={styles.duration}>
                    <option value="week">this week</option>
                    <option value="month">this month</option>
                    <option value="year">this year</option>
                </select>
            </div>

            <div className={styles.balance}>
                <span className={styles.bal}>SAR</span>
                <span style={{ fontSize: '30px', marginLeft: '16px' }} className={styles.bal}>{balance}</span>
            </div>

            <div className={styles.bar}>
                <div className={styles.progressItemBar} style={{backgroundColor:'#FFB800', width: `${food}%`}}></div>
                <div className={styles.progressItemBar} style={{backgroundColor: '#1BA493', width: `${shopping}%` }}></div>
                <div className={styles.progressItemBar} style={{backgroundColor: '#E44816', width: `${movie}%` }}></div>
            </div>


            <div className={styles.legendsContainer}>
                <div className={styles.legends} >
                    <div className={styles.dots} style={{ backgroundColor: '#FFB800' }}></div>
                    <span styles={{fontSize: '10px'}}>Food</span>
                </div>

                <div className={styles.legends} >
                    <div className={styles.dots} style={{ backgroundColor: '#1BA493' }}></div>
                    <span styles={{fontSize: '10px'}}>Shopping</span>
                </div>

                <div className={styles.legends} >
                    <div className={styles.dots} style={{ backgroundColor: '#E44816' }}></div>
                    <span styles={{fontSize: '10px'}}>Movies</span>
                </div>


    
            </div>



        </div>
    )
}

export default Card
