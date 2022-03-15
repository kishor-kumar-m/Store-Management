import chai from 'chai'
import chaiHttp from "chai-http"
let server = require("../index")
chai.should()
chai.use(chaiHttp)


describe("POST/users/login", ()=>{
    it("It should login the  existing User ", (done)=>{

        const user = {
            "email": "kishor@gmail.com",
            "password": "kishor123"
        }

        chai.request(server)
        .post("/user/login")
        .send(user)
        .end ((err, response)=>{
            response.should.have.status(200)
            response.body.should.be.a('object')
            response.body.should.have.property('message').equal("Auth Successful")
            
            done()
        })
    })

    describe("POST/users/", ()=>{
        
        it("It should POST the  new User ", (done)=>{

            const user = {            
                "email": "jeff1@gmail.com",
                "password": "arun@123"                
              }

            chai.request(server)
            .post("/user/signup")
            .send(user)
            .end ((err, response)=>{
                response.should.have.status(201)
                response.body.should.be.a('object')
                response.body.should.have.property('message').equal("User Created")
                
                done()
            })
        }) 

        
    }) 
})