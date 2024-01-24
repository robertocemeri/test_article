import React, { useState } from 'react';
import Input from '../components/inputs/Input';
import Button from '../components/Button/Button';
import { storeArticle } from '../api';

const NewArticle = () => {
    const [form, setForm] = useState({
        title: '',
        description: '',
        picture: ''
    });

    const handleSubmit = async () => {
        storeArticle(form).then((res) => {
            if(res.statusCode !== 200) alert(res.message ? res.message : res.error);
            else
            window.location.replace('/my-articles');
        }).catch((err) => {
            console.log(err);
        })
       
    };

    const handleChange = (key,value) =>{
        setForm((prev) => {
          return {...prev,[key]:value}
        })
      }
    return (
        <div>
            <header className="header">
                <h2>New Article</h2>
            </header>
            <Input name={'title'} value={form.title} setValue={(value) => handleChange('title', value)} placeholder={'Title'} />
            <Input name={'description'} value={form.description} setValue={(value) => handleChange('description', value)} placeholder={'Description'} />
            <Input name={'picture'} value={form.picture} setValue={(value) => handleChange('picture', value)} placeholder={'Picture'} />
            <Button onPress={handleSubmit} text={"Submit"}/>
        </div>
    );
};

export default NewArticle;
