import{c}from"./index.BzUbq9mA.js";const a=c(e=>({imgs:null,err:!1,setErr:r=>e(()=>({err:r})),setImgs:r=>e(()=>({imgs:r})),addImg:r=>e(m=>({imgs:m.imgs?[...m.imgs,{file:r,src:URL.createObjectURL(r)}]:[{file:r,src:URL.createObjectURL(r)}]})),deleteImg:r=>e(m=>({imgs:m.imgs?m.imgs.filter((g,s)=>s!==r):null})),clean:()=>e(()=>({imgs:null,err:!1}))}));export{a as u};