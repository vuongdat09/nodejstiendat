import Product from "../models/product";
import Joi from "joi";
export const create = async (req,res)=>{
    try {
        const product = await Product.create(req.body)
        return res.status(200).json({message:"đăng ký thành công",product})        
    } catch (error) {
        return res.status(400).json({message:error})
    }
}
export const getAll = async (req,res)=>{
    try {
        const product = await Product.find()
        return res.status(200).json({message:product})        
    } catch (error) {
        return res.status(400).json({message:error})
    }
}
export const getOne = async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        return res.status(200).json({message:product})        
    } catch (error) {
        return res.status(400).json({message:error})
    }
}
export const update = async (req,res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).json({message:"cập nhật thành công",product})        
    } catch (error) {
        return res.status(400).json({message:error})
    }
}
export const remove = async (req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        return res.status(200).json({message:"xóa thành công",product})        
    } catch (error) {
        return res.status(400).json({message:error})
    }
}