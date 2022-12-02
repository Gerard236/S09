array = [];

module.exports.createUser = ({body}, res) => {
    
    array.push(body);
            res.send({
                msg: 'Se ha añadido correctamente',
                registeredUser: body,
            });
}