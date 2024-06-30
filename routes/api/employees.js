const express=require('express')
const router=express.Router()
const path=require('path')
const employeeContoller=require('../../controllers/employeeController')
router.route('/')
    .get(employeeContoller.getAllEmployees)
    .post(employeeContoller.createNewEmployee)
    .put(employeeContoller.updateEmployee)
    .delete(employeeContoller.deleteEmployee)

router.route('/:id')
    .get(employeeContoller.getEmployee)
module.exports=router 
