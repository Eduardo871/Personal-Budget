export const routes = (app) => {
    app.createRoute('get','/', (req,res) =>{
        res.send("Hello Sebastián, how are you doing today ?")
    });
}