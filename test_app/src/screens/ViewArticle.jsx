import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import appStorage from "../helpers/appStorage";
import Input from '../components/inputs/Input';
import Button from '../components/Button/Button';
import { deleteArticle, getArticleById, updateArticle } from '../api';

const Storage = appStorage();

const ViewArticle = () => {
    const [article, setArticle] = useState(null);
 
    const params = useParams();
    const user = Storage.getUser();

    useEffect(() => {
        getArticle()
    }, []);


    const getArticle = async () => {
        getArticleById(params.id).then((res) => {
            setArticle(res.data);
         }).catch((err) => { console.log(err) });
    };

    const handleEdit = () => {
        updateArticle(params.id, article).then((res) => { alert("Article Updated"); }).catch((err) => { console.log(err) });
    };

    const handleDelete = () => {
        deleteArticle(params.id).then((res) => { 
            alert("Article Deleted");
            window.location.replace('/my-articles');

        }).catch((err) => { console.log(err) });

    };

    const handleChange = (key,value) =>{
        setArticle((prev) => {
          return {...prev,[key]:value}
        })
      }

    return (
        <div>
            {user && user.id === article?.user.id ? (
                <>
                    <Input name={'title'} value={article.title} setValue={(value) => handleChange('title', value)} placeholder={'Title'} />
                    <Input name={'description'} value={article.description} setValue={(value) => handleChange('description', value)} placeholder={'Description'} />
                    <Input name={'picture'} value={article.picture} setValue={(value) => handleChange('picture', value)} placeholder={'Picture'} />
                    <Button onPress={handleEdit} text={"Update"}/>
                    <Button onPress={handleDelete} text={"Delete"} type={'delete'}/>

                </>
            ) : (
                <div>
                    {article && (
                        <>
                            <p>Title: <h1>{article.title}</h1></p>
                            <img src={article.picture} alt={article.title} />
                            <p>Description: {article.description}</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default ViewArticle;
