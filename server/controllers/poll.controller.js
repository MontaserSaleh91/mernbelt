const { Poll } = require('../models/poll.model');


module.exports.list = (request, response) =>{
    Poll.find({})
        .then(polls =>{
            response.json(polls);
        })
        .catch(err =>{
            response.status(400).json(err);
        })
}

module.exports.create = (request, response) =>{
    const { question, option1, vote1, option2, vote2, option3, vote3, option4, vote4 } = request.body;
    Poll.create({
        question,
        option1,
        option2,
        option3,
        option4
    })
        .then(poll =>{
            response.json(poll)
        })
        .catch(err =>{
            response.status(400).json(err)
        })
}

module.exports.detail = (request, response) =>{
    const {id} = request.params;
    Poll.findOne({_id: id})
    .then(poll =>{
        response.json(poll)
    })
    .catch(err =>{
        response.status(400).json(err)
    })
}


module.exports.vote1 = (request, response) =>{
    const {id} = request.params;
    Poll.findOneAndUpdate({_id: id},{
        $inc: { vote1: 1 } ,
    })
        .then(poll =>{
            response.json(poll)
        })
        .catch(err =>{
            response.status(400).json(err)
        })
}

module.exports.vote2 = (request, response) =>{
    const {id} = request.params;
    Poll.findOneAndUpdate({_id: id},{
        $inc: { vote2: 1 } ,
    })
        .then(poll =>{
            response.json(poll)
        })
        .catch(err =>{
            response.status(400).json(err)
        })
}

module.exports.vote3 = (request, response) =>{
    const {id} = request.params;
    Poll.findOneAndUpdate({_id: id},{
        $inc: { vote3: 1 } ,
    })
        .then(poll =>{
            response.json(poll)
        })
        .catch(err =>{
            response.status(400).json(err)
        })
}

module.exports.vote4 = (request, response) =>{
    const {id} = request.params;
    Poll.findOneAndUpdate({_id: id},{
        $inc: { vote4: 1 } ,
    })
        .then(poll =>{
            response.json(poll)
        })
        .catch(err =>{
            response.status(400).json(err)
        })
}
// module.exports.update = (request, response) => {
//     poll.updateOne({_id: request.params.id}, request.body, {new: true, runValidators: true})
//         .then(updated => response.json(updated))
//         .catch(err => response.status(400).json(err));
// }

// module.exports.delete = (request, response) =>{
//     const {id} = request.params;
//     Poll.deleteOne({_id: id})
//         .then(deleteConfirmation =>{
//             response.json(deleteConfirmation);
//         })
//         .catch(err =>{
//             response.status(400).json(err);
//         })
// }