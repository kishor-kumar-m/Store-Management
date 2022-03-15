import chai from 'chai'
import chaiHttp from "chai-http"
let server = require("../index")
chai.should()
chai.use(chaiHttp)


describe('STORES API', ()=>{
    // describe("POST/orders/create-order", ()=>{
    //     it("It should create the order", (done)=>{
    //         const Order = {
    //             productId : "61f4d8f2e5144a13fb85303b",
    //             userId : "61f37b437d863f59bab363bc",
    //             quantity : 7
    //         }
    //         chai.request(server)
    //         .post("/orders/create-order")
    //         .send(Order)        
    //         .end ((err, response)=>{
    //             response.should.have.status(201)
    //             response.body.should.be.a('object')     
    //             .and.has.property('message').equal("Order created") 
    //             response.body.should.have.property('data')  
    //                 .which.is.an('object')
    //                 .and.has.property('productId').equal("61f4d8f2e5144a13fb85303b") 
    //             response.body.should.have.property('data')  
    //                 .which.is.an('object')
    //                 .and.has.property('userId').equal("61f37b437d863f59bab363bc")    
    //             response.body.should.have.property('data')  
    //                 .which.is.an('object')
    //                 .and.has.property('quantity').equal(7)      

    //             done()
    //         })
    //     })
    // })


    // describe("GET/orders/", ()=>{
    //     it("It should get all the prices", (done)=>{
    //         chai.request(server)
    //         .get("/orders/get-orders")
    //         .end ((err, response)=>{
    //             response.should.have.status(200)
    //             response.body.should.be.a('object')                 
    //             response.body.should.have.property('result')                
    //                 .which.is.an('object')
    //                 .and.has.property('data')            
    //                 .which.is.an('array')    
    //                 .with.lengthOf(7);
                              
    //             done()
    //         })
        
    //     })
    // })

    // describe("GET/orders/:orderId",()=>{
    //     it("It should get a order by its Id",(done)=>{
    //         const orderId = "61f39383465c5c04ba6b162f"
    //         chai.request(server)
    //         .get("/orders/get-order/"+orderId)
    //         .end ((err, response)=>{
    //         response.should.have.status(200)
    //         response.body.should.be.a('object')
    //         response.body.should.have.property('data')
    //                 .which.is.an('object')
    //                 .and.has.property('_id').equal("61f39383465c5c04ba6b162f")
    //         response.body.should.have.property('data')
    //                 .which.is.an('object')        
    //                 .and.has.property('productId').equal("61f37d13d86eb5127642709d")
    //         response.body.should.have.property('data')
    //                 .which.is.an('object')        
    //                 .and.has.property('userId').equal("61f37b437d863f59bab363bc")
    //         response.body.should.have.property('data')
    //                 .which.is.an('object')        
    //                 .and.has.property('quantity')
    //                 .which.is.an('number')             
                
    //         done()
    //         })
    //     })
    // })

    // describe("PATCH/order/orderId",()=>{
    //     it("It should UPDATE the order ", (done)=>{
    //         const orderId = "61f4f28618319003fdd2127d"
    //         const order = {
    //             "quantity": "15"
    //          }
    //         chai.request(server)
    //         .patch("/orders/update-order/"+orderId)
    //         .send(order)
    //         .end ((err, response)=>{
    //             response.should.have.status(200)
    //             response.body.should.be.a('object')
    //             response.body.should.have.property('data')
    //             done()
    //         })
    //     }) 
    // })

    // describe("DELETE/orders/orderId",()=>{
    //     it("It should DELETE the order ", (done)=>{
    //         const orderId = "61f4f23182aa80fbb069d415"
    //         chai.request(server)
    //         .delete("/orders/delete-order/"+orderId)
    //         .end ((err, response)=>{
    //             response.should.have.status(200)
    //             response.body.should.be.an('object')
    //                 .and.has.property('message').equal("Order deleted")        
    //             done()
    //         })
    //     })
    // })

})