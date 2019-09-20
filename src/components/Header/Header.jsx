import React, { useState, useEffect } from 'react';
import s from './Header.module.css';


const Header = props => {
    const [hocLang, setLang] = useState(props.lang);
    useEffect(() => {
 
      });
    let dataTitle = {
        title: []
    }
    let changeName = (e) => {
        props.setNameThunk(e.target.value)
        setLang(e.target.value)
    }
    let changeVisible = () => {
        props.setVisibleThunk(true);
    }

    if(props.lang==="ENG"){
        props.title.map(l=>{
            if(l.id === 2){
                dataTitle.title = l.mainEng
            }
        })
    }else if(props.lang==="RU"){
        props.title.map(l=>{
            if(l.id === 1){
                dataTitle.title = l.mainRu
            }
        })
    }
    return (
        <div className={s.langConteiner}>
            <span className={s.mainTitle}>{dataTitle.title}</span>
            {!props.visible ?
                <div onClick={changeVisible}>{props.lang}</div>
                :
                <div>
                    <select className={s.select} onBlur={changeName} autoFocus={true} >
                    <option>{hocLang}</option>
                        {props.name.language.map(l =>
                            <option>{l.lang}
                            </option>

                        )}
                    </select>
                </div>
            }
        </div>
    )
}
export default Header;


