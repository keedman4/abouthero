import { IAboutheroProps } from "./IAboutheroProps";

export class ClassHeros{
    public Image:string;
    public Title:string;
   


    constructor(item: IAboutheroProps){
        this.Image = item.Image;
        this.Title = item.Title;
       
    }
}