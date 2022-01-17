export class App {
    constructor(app){
        this.app = app;
    }
    start(sequelize, sync){
        sequelize.sync({force: sync})
        .then (() => {
            this.app.listen(3001, console.log("Listen to port 3001"))
        })
    }
    createRoute(method, route, controller){
        this.app[method](route, controller);
    } 
    createMiddleware(middleware){
        this.app.use(middleware);
    }

}

export class DB {
    constructor(sequelize){
        this.sequelize = sequelize;
        this.models = [];
    }
    async createModel(nameModel, attributesModel){
        const model = await this.sequelize.define(nameModel, attributesModel);
        return model;
    }
    setModel(models){
         this.models = models;
    }
    getAllModels(){
        return this.models;
    }
    getModel(name){
        return this.sequelize.models[name]
    }
    getConection(){
        return  this.sequelize;
    }
}
