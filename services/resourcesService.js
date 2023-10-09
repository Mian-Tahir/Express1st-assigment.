// require("../app");

// const resources= [
//   { id: 1, resource: "books" },
//   { id: 2, resource: "task" },
//   { id: 3, resource: "notes" },
// ];

//   module.exports = {
//     getAllResources: (data) => {
//       return resources;
//     },
//     getAllResourcesById: (data) => {
//       return resources;
//     },

//     updateResource: (data) => {
//       const resource = resources.find((c) => c.id === parseInt(data.id));
//       if (!resource) {
//         return "The resource with the given ID was not found."; //404
//       } else {
//         resource.resource = data.resource;
//         return resource;
//       }
//     },
//     deleteResource: (data) => {
//       const resource = resource.find
//       ((c) => c.id === parseInt(data.id));
//       if (!resource) {
//         return "The resource with the given ID was not found."; //404
//       } else {
//         const index = resources.indexOf(resource);
//         resources.splice(index, 1);
//         return resource;
//       }
//     },
//     createResource: (data) => {
//       const resource = {
//         id: resources.length + 1,
//         resource: resource.resource,
//       };
//       resources.push(resource);
//       return resource;
//     },
//   };
//   console.log("services")
const resources = [
  { id: 1, resource: "books" },
  { id: 2, resource: "task" },
  { id: 3, resource: "notes" },
];

module.exports = {
  getAllResources: (data) => {
    return resources;
  },
  getAllResourcesById: (id) => {
    const resource = resources.find((c) => c.id === parseInt(id));
    if (!resource) {
      return "The resource with the given ID was not found."; // 404
    } else {
      
      return resource;
    }
  },

  updateResource: (id,data) => {
    const arr = resources.find((c) => c.id === parseInt(id));
    if (!arr) {
      return "The resource with the given ID was not found."; // 404
    } else {
      console.log(arr)
      if(data){
        arr.resource = data.resource
        console.log('updatedArray',arr)
      }
     
      return arr
    }
  },
  deleteResource: (id) => {
    const resource = resources.find((c) => c.id === parseInt(id));
    if (!resource) {
      return "The resource with the given ID was not found."; // 404
    } else {
      const index = resources.indexOf(resource);
      resources.splice(index, 1);
      return resource;
    }
  },
 
  createResource: (data) => {
    const newResource = {
      id: resources.length + 1,
      resource: data.resource, 
    };
    resources.push(newResource);
    return resources
  },
};

console.log("services")
