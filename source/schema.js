import Joi from "@hapi/joi"

// const schema = Joi.object()
//   .keys({
//     username: Joi.string()
//       .alphanum()
//       .min(3)
//       .max(30)
//       .required(),
//     password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
//     access_token: [Joi.string(), Joi.number()],
//     birthyear: Joi.number()
//       .integer()
//       .min(1900)
//       .max(2013),
//     email: Joi.string().email({ minDomainSegments: 2 })
//   })
//   .with("username", "birthyear")
//   .without("password", "access_token")

const validate = (schema) => {
  return (target) => {
    return Joi.validate(target, schema)
  }
}

const createSchema = (options) => {}

// const string = (options) => {
//   const isRequired = options.required
//   const hasMax = options.max
//   const hasMin = options.min
//   const hasMatch = options.match
//   const isEmail = options.isEmail
//   const hasLength = options.length

//   const schema = Joi.string()

//   options.required && schema.required()
//   options.max && schema.max()
// }
