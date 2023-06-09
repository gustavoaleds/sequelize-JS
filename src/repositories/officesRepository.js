const officesModel = require('../models/officesModel');

const getAllOffices = async () => {
  const offices = await officesModel.findAll();
  return offices;
};
const getOfficebyOfficeCode = async (officeCode) => {
  const office = await officesModel.findByPk(officeCode);
  return office;
};

const createOffice = async (office) => {
  const newOffice = await officesModel.create(office);
  return newOffice;
};

const updateOffice = async (officeCode, office) => {
  const updatedOffice = await officesModel.update(office, {
    where: {officeCode: officeCode},
    
  });
  return ('Office successfully updated');
};

const deleteOffice = async (officeCode) => {
  const deletedOffice = await officesModel.destroy({
    where: {officeCode: officeCode}
  });
  return ('Office successfully deleted');
};

module.exports = {
  getAllOffices,
  getOfficebyOfficeCode,
  createOffice,
  updateOffice,
  deleteOffice
};