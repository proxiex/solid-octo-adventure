import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
// import 'mocha'
import app from '..';

chai.use(chaiHttp);

// const should = chai.should();
// const expect = chai.expect;

const baseURl = '/api/v1';



describe('Users ', () => {

    describe('Wrong Endpoints ', ()=> {
      it('should return a 404 error message', (done) => {
        chai.request(app)
          .get(`${baseURl}/userssd`)
          .end((_err, res) => {
            const message = '404 - Not Found!';
            expect(res.status).to.equal(404);
            expect(res.body).to.haveOwnProperty('message');
            done();
          });
      });
    });

    describe('Return success ', ()=> {
      it('should return a list of users', (done) => {
        chai.request(app)
          .get(`${baseURl}/users`)
          .end((_err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.haveOwnProperty('data');
            done();
          });
      });

      it('should return a Specific user info', (done) => {
        chai.request(app)
          .get(`${baseURl}/user/1`)
          .end((_err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.haveOwnProperty('data');
            expect(res.body.data).to.haveOwnProperty('id');
            done();
          });
      });

      it('should return an empty object if user not found', (done) => {
        chai.request(app)
          .get(`${baseURl}/users/search?q='I am not found'`)
          .end((_err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.not.haveOwnProperty('data');
            done();
          });
      });

      it('should return an user data', (done) => {
        chai.request(app)
          .get(`${baseURl}/users/search?q='Nirbhay Kaniyar'`)
          .end((_err, res) => {
            expect(res.status).to.equal(200);
            console.log(res.body, '<<')
            expect(res.body).to.not.haveOwnProperty('data');
            expect(res.body.data).to.haveOwnProperty('id');
            done();
          });
      });
    });
})