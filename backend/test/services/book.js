import sinon from "sinon";
import chai from "chai";
import * as BookService from "src/services/book";
import _ from "lodash";

const expect = chai.expect;
const { calledOnce, calledTwice, calledWith, notCalled } = sinon.assert;

describe("BookService", () => {

  const model = {
    destroy: sinon.spy(),
    create: sinon.spy(book => _.merge(book, { save: sinon.spy() })),
    find: sinon.spy(),
    findOne: sinon.spy(),
    update: sinon.spy()
  };

  beforeEach(() => {
    model.destroy.reset();
    model.create.reset();
  });

  context("delete book", () => {
    it("should invoke model.destroy with the book id", () => {
      BookService.deleteBook(model, "1");
      calledOnce(model.destroy);
      calledWith(model.destroy, { id: "1" });
    });
  });

  context("delete all books", () => {
    it("should call destroy with an empty criteria", () => {
      BookService.deleteAllBooks(model);
      calledOnce(model.destroy);
      calledWith(model.destroy, {});
    });
  });

  context("createBooks", () => {
    it("should call create for each book from the list", () => {
      const books = [{ title: "1"}, { title: "2"}];
      BookService.createBooks(model, books);
      calledTwice(model.create);
    });
  });

  context("getBooks", () => {
    it("should call find with no criteria", () => {
      BookService.getBooks(model);
      calledOnce(model.find);
      calledWith(model.find, {});
    });
  });

  context("createEmptyBook", () => {
    it("should call create with some default values", () => {
      BookService.createEmptyBook(model);
      calledOnce(model.create);
    });
  });

  context("updateBook", () => {
    it("should call update with the correct criteria and the new values", () => {
      BookService.updateBook(model, "1", { title: "new title" });
      calledOnce(model.update);
      calledWith(model.update, { id: "1" }, { title: "new title" });
    });
  });
});
