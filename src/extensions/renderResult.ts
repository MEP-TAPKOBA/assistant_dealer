import { Response } from "express";

export function renderResult(res : Response, status, message){
    if (status == 200){
        res.render('success', {message:message})
        return
    }
    res.render('errors',{errors:message})
    return

}