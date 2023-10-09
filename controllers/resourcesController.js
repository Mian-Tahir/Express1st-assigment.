const Joi = require("joi");
const resourcesService= require("../services/resourcesService");

const resourceschma = Joi.object({
  // id: Joi.number().integer().min(1).required(),
  resource: Joi.string().required(),
});
console.log("controller");
module.exports = {
  getAllResources: (req, res) => {
    try {
      const data = resourcesService.getAllResources(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  },
  getResourcesById: (req, res) => {
    try {
      const data = resourcesService.getAllResourcesById( req.params.id);
      res.send(data)
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  },

  // updateResource: (req, res) => {
  //   try {
  //     const data = resourcesService.updateResource(req.params.id);
  //     res.status(200).json(data);
  //   } catch (error) {
  //     res.status(500).json({ error: "Something went wrong" });
  //   }
  // },
  updateResource: (req, res) => {
    const data = resourcesService.updateResource(req.params.id, req.body);
    console.log(data)
    res.send(data);
  },


  

  deleteResource: (req, res) => {
    const data = resourcesService.deleteResource(req.params.id);
    res.send(data);
  },

  createResource: (req, res) => {
    try {
      const validate = resourceschma.validate(req.body);

      if (validate.error) {
        res.status(400).send(validate.body);
      }
      else{
        const data = resourcesService.createResource(req.body);
        console.log(data)
        res.send(data);
      }
    } catch {
      res.status(500).send( "Something went wrong" );
    }
  },
};

// module.exports = {
//   getAllResources,
//   getResourcesByID,
//   updateResource,
//   deleteResource,
//   createResource,
// };


console.log("controller");