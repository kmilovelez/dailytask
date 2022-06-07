import { getConnection, sql, query } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(query.getAllProducts);
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewProduct = async (req, res) => {
  const { name, description } = req.body;
  let { quantity } = req.body;

  if (name == null || description == null) {
    return res.status(400).json({ msg: "Bad request. please fill all fields" });
  }
  if (quantity == null) quantity = 0;

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("quantity", sql.Int, quantity)
      .query(query.createNewProduct);

    // console.log (name,description,quantity);
    res.json({ name, description, quantity });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProductsById = async (req, res) => {
  const { id } = req.params;

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(query.getProductById);

    // console.log (name,description,quantity);
    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(query.deleteProductById);

    // res.json(result);
    res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
