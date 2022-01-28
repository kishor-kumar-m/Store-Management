import chai from 'chai'
import chaiHttp from "chai-http"
let server = require("../index")
chai.should()
chai.use(chaiHttp)


describe('STORES API', ()=>{
    describe("POST/products/create-product", ()=>{
        it("It should create the products", (done)=>{
            chai.request(server)
            .post("/products/create-product")
            .field('Content-Type', 'multipart/form-data')
            .field('name', 'orange')
            .field('description', 'it is fruit')
            .attach('productImage', '../../Pictures/emoji.png')
            .end ((err, response)=>{
                response.should.have.status(201)
                response.body.should.be.a('object')            
                done()
            })
        })
    })
    describe("GET/stores/", ()=>{
        it("It should get all the products", (done)=>{
            chai.request(server)
            .get("/products/get-products")
            .end ((err, response)=>{
                response.should.have.status(200)
                response.body.should.be.a('object')
               
                done()
            })
        
        })
    })
})