module.exports = (model, populateList = []) => {
  return {
    create: (entityData) => {
      delete entityData._id;
      const entity = new model(entityData);
      return entity.save();
    },

    findAll: () => {
      return model.find().sort({"_id":1}).populate([...populateList]).select("-__v");
    }, 

    findOne: (id) => model.findById(id).populate([...populateList]).select("-__v"),

    update: (id, updateData) =>
      model.findByIdAndUpdate(id, updateData, { new: true }),

    delete: (id) => {
      return model.findByIdAndRemove(id);
    },
  };
};
