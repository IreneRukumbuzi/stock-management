import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../app";
chai.should();
chai.use(chaiHttp);

let productId;

describe("POST /seller/stock", function () {
    it("Should post a product on valid inputs", function (done) {
      chai
        .request(server)
        .post("/seller/stock/")
        // .set("Authorization", `Bearer ${token}`)
        .send({
          name: "Mac novel",
          price:600000,
          description:"MacOs, 8GB, Intel@core dual i5"

        })
        .end(function (err, res) {
          productId = res.body.id;
          res.should.have.status(201);
          res.should.be.a("object");
          res.body.should.have.property("name");
          res.body.should.have.property("price");
          res.body.should.have.property("id");
          done();
        });
    });
    // it("Should not post a product when unauthorized", function (done) {
    //   chai
    //     .request(server)
    //     .post("/seller/stock")
    //     .send({
    //         name: "Mac novel",
    //         price:600000,
    //         description:"MacOs, 8GB, Intel@core dual i5"
    //     })
    //     .end(function (err, res) {
    //       res.should.have.status(401);

    //       done();
    //     });
    // });

    it("Should not post a product when passed invalid inputs", function (done) {
      chai
        .request(server)
        .post("/seller/stock")
        .send({
            name: 5003,
            price:"600000",
            description:""
        })
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.have.property("error");
          done();
        });
    });
  });

   // PATCH product

  describe("PATCH /seller/stock/:id", function () {
    it("Should update a product on valid inputs", function (done) {
      chai
        .request(server)
        .patch("/seller/stock/" + productId)
        // .set("Authorization", `Bearer ${token}`)
        .send({
            name: "Mac probook",
            price:500000,
            description:"MacOs, 4GB, Intel@core dual i7"
        })
        .end(function (err, res) {
          res.should.have.status(200);
          res.should.be.a("object");
          res.body.should.have.property("name");
          res.body.should.have.property("price");
          res.body.should.have.property("id");
          done();
        });
    });

    it("Should not update a product on invalid id", function (done) {
      chai
        .request(server)
        .patch("/seller/stock/0")
        // .set("Authorization", `Bearer ${token}`)
        .send({
            name: "Mac probook",
            price:500000,
            description:"MacOs, 4GB, Intel@core dual i7" 
        })
        .end(function (err, res) {
          res.should.have.status(404);

          done();
        });
    });

    // it("Should not update a blog on unauthorized", function (done) {
    //   chai
    //     .request(server)
    //     .patch("/seller/stock/" + productId)
    //     .send({
    //         name: "Mac probook",
    //         price:500000,
    //         description:"MacOs, 4GB, Intel@core dual i7"
    //     })
    //     .end(function (err, res) {
    //       res.should.have.status(401);
    //       res.body.should.have.property("message").eq("Unauthorized");
    //       done();
    //     });
    // });
  });

  //  test DELETE product

  describe("DELETE /seller/stock/:id", function () {
    it("Should delete a product on valid inputs", function (done) {
      chai
        .request(server)
        .delete("/seller/stock/" + productId)
        // .set("Authorization", `${token}`)
        .end(function (err, res) {
          res.should.have.status(204);
          done();
        });
    });

    it("Should not delete a product on invalid id", function (done) {
      chai
        .request(server)
        .delete("/seller/stock/0")
        // .set("Authorization", `${token}`)
        .end(function (err, res) {
          res.should.have.status(404);
          res.body.should.have.property("message");
          done();
        });
    });

    // it("Shoould not delete a product on unthorized", function (done) {
    //   chai
    //     .request(server)
    //     .delete("/seller/stock/" + productId)
    //     .end(function (err, res) {
    //       res.should.have.status(401);
    //       res.body.should.have.property("message").eq("Unauthorized");
    //       done();
    //     });
    // });
  });

