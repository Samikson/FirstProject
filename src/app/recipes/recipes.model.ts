export class recipe{
    public name : String;
    public description : String;
    public image : String;

    constructor(name : string, desc : String ,imagepath : String ){
        this.name=name;
        this.image=imagepath;
        this.description=desc;
    }

}