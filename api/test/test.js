// // import chai from "chai";
// // import chaiHttp from "chai-http";
// // import server from "../../app";
// chai.should();
// chai.use(chaiHttp);

// let productId;

// describe("POST /seller/stock", function () {
//     it("Should post a product when authorized", function (done) {
//       chai
//         .request(server)
//         .post("/seller/stock/")
//         .set("Authorization", `Bearer ${token}`)
//         .send({
//           name: "Mac novel",
//           price:600000,
//           description:"MacOs, 8GB, Intel@core dual i5"

//         })
//         .end(function (err, res) {
//           productId = res.body.id;
//           res.should.have.status(200);
//           res.should.be.a("object");
//           res.body.should.have.property("name");
//           res.body.should.have.property("price");
//           res.body.should.have.property("id");
//           done();
//         });
//     });
//     it("Should not post a product when unauthorized", function (done) {
//       chai
//         .request(server)
//         .post("/seller/stock")
//         .send({
//             name: "Mac novel",
//             price:600000,
//             description:"MacOs, 8GB, Intel@core dual i5"
//         })
//         .end(function (err, res) {
//           res.should.have.status(401);

//           done();
//         });
//     });

//     it("Should not post a product when passed invalid values", function (done) {
//       chai
//         .request(server)
//         .post("/seller/stock")
//         .send({
//             name: 5003,
//             price:"600000",
//             description:""
//         })
//         .end(function (err, res) {
//           res.should.have.status(200);
//           res.body.should.have.property("error");
//           done();
//         });
//     });
//   });