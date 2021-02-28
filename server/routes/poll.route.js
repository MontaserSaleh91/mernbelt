const PollController = require('../controllers/poll.controller');

module.exports = function(app){
    app.get("/api/polls", PollController.list);
    app.post("/api/polls", PollController.create);
    app.put("/api/polls/vote1/:id", PollController.vote1);
    app.put("/api/polls/vote2/:id", PollController.vote2);
    app.put("/api/polls/vote3/:id", PollController.vote3);
    app.put("/api/polls/vote4/:id", PollController.vote4);
    app.get("/api/polls/:id", PollController.detail);

}