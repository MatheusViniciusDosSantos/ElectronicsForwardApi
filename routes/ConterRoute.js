module.exports = class CounterRoute{

    constructor(app) {
        app.route("/counter").get(CounterController.getCounter);
    }

}