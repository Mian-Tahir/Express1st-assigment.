

const express = require("express");
const router = express.Router();
const {
    getAllResources,
    getResourcesById,
    updateResource,
    deleteResource,
    createResource,
} = require("../controllers/resourcesController");
router.get("/getAllResources", getAllResources);
router.get("/getResourcesById/:id", getResourcesById);
router.post("/createResource", createResource);
router.put("/updateResource/:id", updateResource);
router.delete("/deleteResource/:id",deleteResource);
module.exports = router;

console.log("routes")
// const express = require("express");
// const router = express.Router();
// const {
//     getAllResources,
//     getResourcesById,
//     updateResource,
//     deleteResource,
//     createResource,
// } = require("../controllers/resourcesController");

// router.get("/Resources", getAllResources);
// router.get("/ResourcesBYId/:id", getResourcesById); 
// router.post("/createResources", createResource);
//  router.put("/updateResources/:id", updateResource);   
// router.delete("/deleteResources/:id", deleteResource); 

// module.exports = router;


console.log("routes");