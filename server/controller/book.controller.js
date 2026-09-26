const { Book } = require("../model/book.model");
const handleBookStoreController = async (req, res) => {
  try {
    const body = req.body;

    if (!body.BookName || !body.BookTitle || !body.Author || !body.SellingPrice) {
      return res.status(400).json({ status: false, message: "Please provide all required fields", Success: false });
    }

    const bookAdd = await Book.insertOne(body);

    if (bookAdd) {
      return res.status(201).json({ status: true, message: "Book added successfully", Success: true, Id: bookAdd?._id, });
    }

  } catch (error) {
    return res.status(500).json({ message: error.message, Success: false });
  }
};

const handleBookListController = async (req, res) => {
  try {
    const bookList = await Book.find({});
    return res.status(200).json({ status: true, message: "Book list retrieved successfully", Success: true, TotalCount: bookList.length, BookList: bookList });
  } catch (error) {
    return res.status(400).json({ message: error.message, Success: false });
  }
};

const handleBookDeleteController = async (req, res) => {
  const { Id } = req.body;
  try {
    const deletedBook = await Book.deleteOne({ _id: Id });
    if (deletedBook.deletedCount) {
      return res.status(200).json({ status: true, message: "Book deleted successfully", Success: true });
    }
    return res.status(404).json({ status: false, message: "Book not found", Success: false });
  } catch (error) {
    return res.status(400).json({ message: "Error deleting book", Success: false });
  }
};

const handleBookUpdateController = async (req, res) => {
  try {
      const body = req.body;
      const { Id, ...bookFields } = body;
      const updating = await Book.updateOne({ _id: Id }, { $set: bookFields });
      if (updating.matchedCount) {
        return res.status(200).json({ status: true, message: "Book updated successfully", Success: true });
    }
      return res.status(404).json({ status: false, message: "Book not found", Success: false });
  } catch (error) {
    return res.status(400).json({ message: "Error updating book", Success: false });
  }
};

module.exports = { handleBookStoreController, handleBookListController, handleBookDeleteController, handleBookUpdateController };