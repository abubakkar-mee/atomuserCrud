import {atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import axios from 'axios';

const getPost = async() =>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
}

const getData = async() =>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
}
export const countAtom = atom(1110);
export const todoAtom = atom([1,2,3,4,5,6,7,8,9,10]);
export const getDataAtom = atom(getData);
export const getPostAtom = atom(getPost);
export const usersAtom = atomWithStorage('users',[])

