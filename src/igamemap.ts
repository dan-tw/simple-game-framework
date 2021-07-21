interface iGameMap {

    // Returns the class name of the map being currently being played
    // so that we can create a new instance of said map
    getClassName() : string;
}

export interface IGameMap {
    //new() : iGameMap;
    ClassName : string;
}