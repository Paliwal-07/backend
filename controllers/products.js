const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  // console.log("~ file:product.js ~ line 10 ~ getAllProductsTest ~ req", req.query); aise likh kar test krte ain ki data jaa ya aa raha hai ya nhi
  const { company, name, featured, sort, select } = req.query;
  const queryObj = {};

  if (company) {
    queryObj.company = company;
  }

  if (featured) {
    queryObj.featured = featured;
  }

  if (name) {
    queryObj.name = {$regex:name,$options:"i"};
  }

  let apiData = Product.find(queryObj);

  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  if (select) {
    let selectFix = select.replace(",", " ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 12;
  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  const Products = await apiData;
  res.status(200).json({ Products,nbHits:Products.length });
};

const getAllProductsTest = async (req, res) => {
  console.log("~ file:product.js ~ line 10 ~ getAllProductsTest ~ req", req.query); //aise likh kar test krte ain ki data jaa ya aa raha hai ya nhi
  const alldata = await Product.find(req.query);
  res.status(200).json({ alldata,nbHits:alldata.length });
};

module.exports = { getAllProducts, getAllProductsTest };