class errorHandler extends Error{
    constructor(
        message = "something went wrong",
        statusCode,
        error = [],
        stack = ""
    ){
        super(message)
        this.stack = stack
        this.statusCode = statusCode
        this.message = message
        this.error = error
        this.data = null
    }
}

module.exports = errorHandler