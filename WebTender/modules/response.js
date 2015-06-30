var response = {
    send200: function(body, res){
        return res.status(200).send(body);
    },
    json200: function(body, res){
        return res.json(body);
    },
    err400: function(params, res){
        return res.status(400).send({error: params});
    },
    err404: function(message, res){
        return res.status(404).send(message || 'Not Found.');
    },
    err500: function(res){
        return res.status(500).send('Something went wrong. We\'re working to fix it');
    }
};

module.exports = response;