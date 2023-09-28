

const errorHandeler = async(err, res, req, next) => {
    try {
        console.log(err);
        res.status(500).json(err.message)
    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = errorHandeler