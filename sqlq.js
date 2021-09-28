const create = (idCliente, transactionId, amount, status) => {

    const sql = "INSERT INTO transactions SET ?";
    const params = {
        id_cliente: idCliente,
        transaction_id: transactionId,
        amount: amount,
        status: status
    };

    return new Promise((resolve, reject) => {
        pool.query(sql, params, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};


create(params)
       .then((result) => { 
           //call more queries here if needed 
       })
       .catch((err) => { });