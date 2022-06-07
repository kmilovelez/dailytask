export const query = {
  getAllProducts: "select * from products",
  createNewProduct:
    "insert into products (name, description, quantity) values (@name, @description,@quantity)",
  getProductById: "Select * from products where id =@id",
  deleteProductById: "delete from products where id = @id",
};
