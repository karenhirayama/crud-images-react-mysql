import React from 'react';
import styles from './ImagesInput.module.scss';

export const ImagesInput = ({ setNameImage, setUrlImage, setThemeImage }) => {

    return (
        <div className={`styles.form`}>
            <form className='d-flex flex-column'>
                <label className='mt-3'>Name of Image</label>
                <input type="text" className={`${styles.input}`}
                    onChange={(event => { setNameImage(event.target.value) })} />

                <label className='mt-3'>URL of Image</label>
                <input type="text" className={`${styles.input}`}
                    onChange={(event => { setUrlImage(event.target.value) })} />

                <label className='mt-3'>Associated Theme</label>
                <input type="text" className={`${styles.input}`}
                    onChange={(event => { setThemeImage(event.target.value) })} />
            </form>
        </div>
    )
}
