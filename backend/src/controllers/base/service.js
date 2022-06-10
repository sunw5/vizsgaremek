// module.exports = (model) => {
//     return {
//         findAll: () => model.find({}),
//     };
// };

module.exports = (model, populateList = []) => {
    return {
        create: entityData => {
            const entity = new model(entityData);
            return entity.save();
        },
        
        findAll: () => model.find().populate(...populateList),
        
        findOne: id => model.findById(id).populate(...populateList),
        
        update: (id, updateData) => {
            console.log('serviceupdate', updateData);
             return model.findByIdAndUpdate(id, updateData, {new: true}
                )},
        
        delete: id => model.findByIdAndRemove(id),
    };
};

