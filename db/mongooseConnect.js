import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
const ConnectDB = async () => {
        try {
            await  mongoose.connect(process.env.DB, {
                useNewUrlParser: true,
                useUnifiedTopology: true
              });
              console.log("Conectado ao MongoDB");
        } catch(err) {
            console.log(err)
            process.exit(1)
        }
}
export default ConnectDB