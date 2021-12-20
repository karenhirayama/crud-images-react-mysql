import React, { useState } from 'react';
import styles from './Results.module.scss';
import axios from 'axios';

export const Results = ({ imagesList, setImagesList }) => {

    const [newThemeImage, setNewThemeImage] = useState("");

    const updateTheme = (id) => {
        axios.put("http://localhost:3001/update", { themeImage: newThemeImage, id: id }).then((response) => {
            setImagesList(imagesList.map((image) => {
                return image.id === id ?
                    {
                        id: image.id,
                        nameImage: image.nameImage,
                        urlImage: image.urlImage,
                        themeImage: newThemeImage
                    } : image
            }))
        });
    }

    const deleteImage = (id) => {
        axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
            setImagesList(imagesList.filter((image) => {
                return image.id !== id
            }))
        })
    }

    return (
        <div>
            {imagesList.map(image =>
                <div className={`${styles.imageDiv} ${image.id} m-3`}>
                    <img src={image.urlImage} alt={image.nameImage} width="auto" height="200" />
                    <div>
                        <h3>{image.nameImage}</h3>
                        <p>Theme: {image.themeImage}</p>
                    </div>
                    <div className={`${styles.changesInput}`}>
                        <input type="text" placeholder="Update Associated Theme"
                            onChange={(event) => {
                                setNewThemeImage(event.target.value);
                            }}></input>
                        <button onClick={() => { updateTheme(image.id) }}>Update Theme</button>
                    </div>
                    <button className={`${styles.deleteBtn}`} onClick={() => { deleteImage(image.id) }}>Delete Image</button>
                </div>
            )}
        </div>
    )
}
