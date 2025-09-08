const model = require("../model/vehicleModel");
const vehicle = model.vehicle;
const mongoose = require("mongoose");

//Add Vehicle By Vender
exports.addVehicle = async (req, res) => {
  try {
    const data = {
      vehicleBrand: req.body.vehicleBrand,
      vehicleModel: req.body.vehicleModel,
      vehicleNumber: req.body.vehicleNumber,
      vendorID: req.body.vendorID,
      vehicleImg: `http://localhost:4040/vehicleImg/${req.files.vehicleImg[0]?.filename}`,
      puc: `http://localhost:4040/puc/${req.files.puc[0]?.filename}`,
      vehicleInsurance: `http://localhost:4040/vehicleInsurance/${req.files.vehicleInsurance[0]?.filename}`,
      vehicleRC: `http://localhost:4040/vehicleRC/${req.files.vehicleRC[0]?.filename}`,
    };

    const result = await new vehicle(data).save();

    return res.json({
      success: 1,
      message: "Vehicle Added Successfully.",
    });
  } catch (error) {
    console.error("Vehicle upload error:", error);
    return res.json({
      success: 0,
      message: "Error in code",
      error: error.message,
    });
  }
};



//Get All Vehicles
exports.getAllvehicles = async (req, res) => {
  try {
    const result = await vehicle.find();
    if (result) {
      return res.json({
        success: 1,
        message: "Details of All Vehicles.",
        result,
      });
    } else {
      return res.json({
        success: 0,
        message: "Not found data.",
      });
    }
  } catch (error) {
    return res.json({
      success: 0,
      message: "Error in code.",
    });
  }
};

//Get Vehicles Details By VenderID
exports.getVehicleByVenderId = async (req, res) => {
  try {
    const result = await vehicle.find({ vendorID: req.body.vendorID });
    if (result) {
      return res.json({
        success: 1,
        message: "Vehicles Details By Vender Id.",
        result,
      });
    } else {
      return res.json({
        success: 0,
        message: "Data Not Found.",
      });
    }
  } catch (error) {
    return res.json({
      success: 0,
      messagea: "Error in code.",
    });
  }
};

//Delete Vehicles
exports.deleteVehicel = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await vehicle.deleteOne({ _id: id });
    if (result) {
      return res.json({
        success: 1,
        message: "Vehicle Delete.",
      });
    } else {
      return res.json({
        success: 0,
        message: "Vehicle not delete.",
      });
    }
  } catch (error) {
    return res.json({
      success: 0,
      message: "Error in code",
    });
  }
};
