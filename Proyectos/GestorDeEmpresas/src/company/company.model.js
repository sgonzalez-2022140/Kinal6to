import mongoose from "mongoose";

const companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    years:{ 
        type: Number,
        required: true
    },
    impactOfCompany:{ 
        type: String,
        required: true
    }
},
{
    versionKey: false
})

export default mongoose.model('company', companySchema)