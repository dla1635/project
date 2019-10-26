const respondJson = (obj, res, status) => {

  console.log(status)
  res
    .status(status)
    .json({
      data:obj,
      ContentType: "application/json"
    })
  
}

const respondOnError = (res, status) => {
  console.log(status)

  res
    .status(status)
    .json({
    })
}
  
module.exports = {  
  respondJson,
  respondOnError,
}