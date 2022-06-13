module.exports = (model, populateList = []) => {
  return {
    create: (entityData) => {
      delete entityData._id;
      const entity = new model(entityData);
      return entity.save();
    },

    findAll: () => model.find().sort({"_id":1}).populate(...populateList),

    findOne: (id) => model.findById(id).populate(...populateList),

    update: (id, updateData) =>
      model.findByIdAndUpdate(id, updateData, { new: true }),

    delete: (id) => {
      return model.findByIdAndRemove(id);
    },
  };
};
