// import chai from 'chai'
// import chaiHttp from "chai-http"
// import { response } from 'express'
// let server = require("../index")
// chai.should()
// chai.use(chaiHttp)


// describe('STORES API', ()=>{
//     describe("POST/products/create-product", ()=>{
//         it("It should create the products", (done)=>{
//             chai.request(server)
//             .post("/products/create-product")
//             .field('Content-Type', 'multipart/form-data')
//             .field('name', 'green-apple')
//             .field('description', 'it is a fruit')
//             .attach('productImage', '../../Pictures/emoji.png')
//             .end ((err, response)=>{
//                 response.should.have.status(201)
//                 response.body.should.be.a('object')            
//                 done()
//             })
//         })
//     })


//     describe("GET/products/", ()=>{
//         it("It should get all the products", (done)=>{
//             chai.request(server)
//             .get("/products/get-products")
//             .end ((err, response)=>{
//                 response.should.have.status(200)
//                 response.body.should.be.a('object')                 
//                 response.body.should.have.property('result')                
//                     .which.is.an('object')
//                     .and.has.property('data')            
//                     .which.is.an('array')    
//                     .with.lengthOf(3);
                              
//                 done()
//             })
        
//         })
//     })

//     describe("GET/product/productId",()=>{
//         it("It should get a product by its Id",(done)=>{
//             const productId = "61f4d5b195a28e2842b75c13"
//             chai.request(server)
//             .get("/products/get-product/"+productId)
//             .end ((err, response)=>{
//             response.should.have.status(200)
//             response.body.should.be.a('object')
//             response.body.should.have.property('data')
//                     .which.is.an('object')
//                     .and.has.property('_id').equal("61f4d5b195a28e2842b75c13")
//             response.body.should.have.property('data')
//                     .which.is.an('object')        
//                     .and.has.property('name').equal("apple")
//             response.body.should.have.property('data')
//                     .which.is.an('object')        
//                     .and.has.property('description').equal("fruit")             
//             response.body.should.have.property('data')
//                     .which.is.an('object')        
//                     .and.has.property('productImage').equal("uploads\\2022-01-29T05-50-41.328Zimg.png")      
//             done()
//             })
//         })
//     })

//     describe("PATCH/product",()=>{
//         it("It should UPDATE the  product ", (done)=>{
//             const productId = "61f4bd4487322e01cc17933c"
//             const product = {
//                 "name": "Grape"
//              }
//             chai.request(server)
//             .patch("/products/update-product/"+productId)
//             .send(product)
//             .end ((err, response)=>{
//                 response.should.have.status(200)
//                 response.body.should.be.a('object')
//                 response.body.should.have.property('data')
//                 done()
//             })
//         }) 
//     })

//     describe("DELETE/product",()=>{
//         it("It should DELETE the product ", (done)=>{
//             const productId = "61f4d8f6e5144a13fb85303d"
//             chai.request(server)
//             .delete("/products/delete-product/"+productId)
//             .end ((err, response)=>{
//                 response.should.have.status(200)
//                 response.body.should.be.an('object')
//                     .and.has.property('message').equal("Product deleted")        
//                 done()
//             })
//         })
//     })

// })