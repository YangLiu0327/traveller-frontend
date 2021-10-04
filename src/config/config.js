// module.exports = {
//   api: {
//     backend_api:
//       "http://ec2-54-252-92-150.ap-southeast-2.compute.amazonaws.com:8000",
//   },
// }

module.exports = {
  api: {
    backend_api:
      process.env.NODE_ENV === "production"
        ? "https://bestravellers.com"
        : "http://localhost:8000",
  },
}
