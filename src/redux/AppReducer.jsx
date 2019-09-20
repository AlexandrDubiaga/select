import React from 'react';
import data from '../redux/data.json';
const SET_NAME = "SET_NAME";
const SET_VISIBLE = "SET_VISIBLE";




let initialState = {
    visible: false,
    lang: "RU",
    name: {
        language: [
            { id: 1, lang: "RU" }, { id: 2, lang: "ENG" }
        ]
    },
    title: [{id:1,mainRu:"Главная страница"},{id:2,mainEng:"Main Page"}]   
}

let AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                lang: action.name,
                visible: false
            }
        case SET_VISIBLE:
            return {
                ...state,
                visible: action.isIsset
            }

        default: return state
    }
}


const setVisibleActioCreater = (isIsset) => {
    return {
        type: SET_VISIBLE, isIsset
    }
}


export const setVisibleThunk = (isIsset) => (dispath) => {
    return dispath(setVisibleActioCreater(isIsset));
}

export const setNameThunk = (name) => (dispath) => {
    return dispath(setNameActionCreator(name));
}

export default AppReducer;

































/*import React from 'react';
import data from '../redux/data.json';
const SHOW_LIST = "SHOW_LIST";

let initialState={
    list:[]
}

let AppReducer = (state = initialState, action)=>{
    switch(action.type){
        case SHOW_LIST:
            return{
                ...state,
                list:data
            }
        default:return state
    }
}

const showListActionCreater = ()=>{
    return{
        type:SHOW_LIST
    }
}

export const showListActionCreaterThunk = () => (dispath) =>{
  return  dispath(showListActionCreater());

}

export default AppReducer;*/