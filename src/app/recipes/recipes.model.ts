export class recipe{
    public name : String;
    public image : String;
    public description : String;
    

    constructor(name : string, desc : String ,imagepath : String ){
        this.name=name;
        this.image=imagepath;
        this.description=desc;
        
    }

}