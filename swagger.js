import swaggerAutogen from "swagger-autogen"

const doc = {
  openapi: "3.0.0", 
  info: {
    title: "ykminiurl",
    version: "1.0.0",
    description: "Documentação da ykminiurl",
  },
  servers: [
    {
      url: "backend-ykminiurl.onrender.com/docs",
      description: "Servidor Local",
    },
  ],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/LinkRoutes.js"]; 

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log("Arquivo swagger-output.json gerado!");
});
