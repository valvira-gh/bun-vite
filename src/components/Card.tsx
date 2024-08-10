import styles from './card.module.css'
import { useState, useEffect } from 'react'

type CardProps = {
   title: string; 
}

export const Card: React.FC<CardProps> = ({ title }) => {
    const [datetime, setDatetime] = useState("")

    const handleSubmit = () => {
        console.log('submitting...')
        console.log(datetime)
    }

    return (
        <section className={styles.card}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.formWrapper}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='birthday'>What is your birthday?</label>
                        <input type="datetime-local" onChange={(e) => setDatetime(e.target.value)} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

