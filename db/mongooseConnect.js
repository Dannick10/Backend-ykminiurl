import mongoose from "mongoose"
const ConnectDB = async () => {
        try {
            await  mongoose.connect("mongodb://localhost:27017/encurtalink", {
                useNewUrlParser: true,
              });
              console.log("Conectado ao MongoDB");
        } catch(err) {
            console.log(err)
            process.exit(1)
        }
}
export default ConnectDB