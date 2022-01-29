// import chai from 'chai'
// import chaiHttp from "chai-http"
// import { response } from 'express'
// let server = require("../index")
// chai.should()
// chai.use(chaiHttp)


// describe('STORES API', ()=>{
//     describe("POST/price/create-price", ()=>{
//         it("It should create the products", (done)=>{
//             const Price = {
//                 productId : "61f4d8f2e5144a13fb85303b",
//                 lastPrice : "25"
//             }
//             chai.request(server)
//             .post("/price/create-price")
//             .send(Price)        
//             .end ((err, response)=>{
//                 response.should.have.status(201)
//                 response.body.should.be.a('object')     
//                 .and.has.property('message').equal("Price created") 
//                 response.body.should.have.property('data')  
//                     .which.is.an('object')
//                     .and.has.property('productId').equal("61f4d8f2e5144a13fb85303b") 

//                 done()
//             })
//         })
//     })


//     describe("GET/prices/", ()=>{
//         it("It should get all the prices", (done)=>{
//             chai.request(server)
//             .get("/price/get-prices")
//             .end ((err, response)=>{
//                 response.should.have.status(200)
//                 response.body.should.be.a('object')                 
//                 response.body.should.have.property('result')                
//                     .which.is.an('object')
//                     .and.has.property('data')            
//                     .which.is.an('array')    
//                     .with.lengthOf(5);
                              
//                 done()
//             })
        
//         })
//     })

//     describe("GET/price/priceId",()=>{
//         it("It should get a product by its Id",(done)=>{
//             const priceId = "61f383454d9cc0372a153ff6"
//             chai.request(server)
//             .get("/price/get-price/"+priceId)
//             .end ((err, response)=>{
//             response.should.have.status(200)
//             response.body.should.be.a('object')
//             response.body.should.have.property('data')
//                     .which.is.an('object')
//                     .and.has.property('_id').equal("61f383454d9cc0372a153ff6")
//             response.body.should.have.property('data')
//                     .which.is.an('object')        
//                     .and.has.property('productId').equal("61f37d13d86eb5127642709d")
//             response.body.should.have.property('data')
//                     .which.is.an('object')        
//                     .and.has.property('lastPrice')
//                     .which.is.an('number')             
                
//             done()
//             })
//         })
//     })

//     describe("PATCH/price",()=>{
//         it("It should UPDATE the  product ", (done)=>{
//             const priceId = "61f383454d9cc0372a153ff6"
//             const price = {
//                 "lastPrice": "15"
//              }
//             chai.request(server)
//             .patch("/price/update-price/"+priceId)
//             .send("price")
//             .end ((err, response)=>{
//                 response.should.have.status(200)
//                 response.body.should.be.a('object')
//                 response.body.should.have.property('data')
//                 done()
//             })
//         }) 
//     })

//     describe("DELETE/product/priceId",()=>{
//         it("It should DELETE the product ", (done)=>{
//             const priceId = "61f4e24c448a008ccd03bb64"
//             chai.request(server)
//             .delete("/price/delete-price/"+priceId)
//             .end ((err, response)=>{
//                 response.should.have.status(200)
//                 response.body.should.be.an('object')
//                     .and.has.property('message').equal("Price deleted")        
//                 done()
//             })
//         })
//     })

// })